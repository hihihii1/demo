/**
 * Trending Food Recipe App (유행 음식 레시피) - Application Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    recipes: RECIPES_DATA,
    filteredRecipes: [...RECIPES_DATA],
    displayedCount: 6, // for scroll pagination
    currentCategory: "all",
    searchQuery: "",
    favoritesOnly: false,
    favorites: JSON.parse(localStorage.getItem("recipe_favorites") || "[]"),
    userMemos: JSON.parse(localStorage.getItem("recipe_memos") || "{}"),
    theme: localStorage.getItem("recipe_theme") || "light",
    activeRecipe: null,
    randomRecipeId: null
  };

  // DOM Elements
  const themeToggle = document.getElementById("themeToggle");
  const settingsBtn = document.getElementById("settingsBtn");
  const settingsDrawer = document.getElementById("settingsDrawer");
  const closeSettingsBtn = document.getElementById("closeSettingsBtn");
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const categoryChips = document.querySelectorAll(".category-chip");
  const favoritesBtn = document.getElementById("favoritesBtn");
  const favBadge = document.getElementById("favBadge");
  const randomPickBtn = document.getElementById("randomPickBtn");
  const featuredCard = document.getElementById("featuredCard");
  const recipesGrid = document.getElementById("recipesGrid");
  const noResultsView = document.getElementById("noResultsView");
  const loadingSentinel = document.getElementById("loadingSentinel");
  const recipeModal = document.getElementById("recipeModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const resetDataBtn = document.getElementById("resetDataBtn");

  /* ==========================================================================
     1. Theme Management (Dark / Light Mode) & Data Persistence
     ========================================================================== */
  function applyTheme(themeName) {
    state.theme = themeName;
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("recipe_theme", themeName);
    if (themeToggle) {
      themeToggle.checked = (themeName === "dark");
    }
  }

  // Initialize theme
  applyTheme(state.theme);

  if (themeToggle) {
    themeToggle.addEventListener("change", (e) => {
      const newTheme = e.target.checked ? "dark" : "light";
      applyTheme(newTheme);
      showToast(newTheme === "dark" ? "🌙 다크 모드가 설정되었습니다." : "☀️ 라이트 모드가 설정되었습니다.");
    });
  }

  // Settings Drawer Toggle
  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
      settingsDrawer.classList.add("active");
    });
  }

  if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener("click", () => {
      settingsDrawer.classList.remove("active");
    });
  }

  // Close settings when clicking outside
  document.addEventListener("click", (e) => {
    if (settingsDrawer && settingsDrawer.classList.contains("active")) {
      if (!settingsDrawer.contains(e.target) && !settingsBtn.contains(e.target)) {
        settingsDrawer.classList.remove("active");
      }
    }
  });

  /* ==========================================================================
     2. Favorites & User Memos (Storage > 1 year in localStorage)
     ========================================================================== */
  function updateFavoritesUI() {
    if (favBadge) {
      favBadge.textContent = state.favorites.length;
    }
    const storageStats = document.getElementById("storageStats");
    if (storageStats) {
      const memoCount = Object.keys(state.userMemos).length;
      storageStats.innerHTML = `
        <strong>즐겨찾기:</strong> ${state.favorites.length}개<br>
        <strong>작성한 요리 메모:</strong> ${memoCount}개<br>
        <strong>데이터 보존:</strong> 영구 저장 중 (1년 이상 유지 가능)
      `;
    }
  }

  function toggleFavorite(recipeId, event) {
    if (event) event.stopPropagation();
    const index = state.favorites.indexOf(recipeId);
    if (index > -1) {
      state.favorites.splice(index, 1);
      showToast("즐겨찾기에서 해제되었습니다.");
    } else {
      state.favorites.push(recipeId);
      showToast("❤️ 즐겨찾기에 추가되었습니다!");
    }
    localStorage.setItem("recipe_favorites", JSON.stringify(state.favorites));
    updateFavoritesUI();
    renderMainGrid();

    // Update modal heart icon if open
    const modalFavBtn = document.getElementById("modalFavBtn");
    if (modalFavBtn && state.activeRecipe && state.activeRecipe.id === recipeId) {
      const isFav = state.favorites.includes(recipeId);
      modalFavBtn.innerHTML = isFav ? "❤️" : "🤍";
      modalFavBtn.classList.toggle("liked", isFav);
    }
  }

  // Reset Data
  if (resetDataBtn) {
    resetDataBtn.addEventListener("click", () => {
      if (confirm("저장된 즐겨찾기 및 모든 작성 메모를 초기화하시겠습니까?")) {
        localStorage.removeItem("recipe_favorites");
        localStorage.removeItem("recipe_memos");
        state.favorites = [];
        state.userMemos = {};
        updateFavoritesUI();
        renderMainGrid();
        showToast("모든 사용자 데이터가 초기화되었습니다.");
      }
    });
  }

  /* ==========================================================================
     3. Filtering & Search Logic (Food Name & Ingredients)
     ========================================================================== */
  function filterRecipes() {
    const query = state.searchQuery.trim().toLowerCase();
    
    state.filteredRecipes = state.recipes.filter(recipe => {
      // Category check
      if (state.currentCategory !== "all" && recipe.category !== state.currentCategory) {
        return false;
      }

      // Favorites filter check
      if (state.favoritesOnly && !state.favorites.includes(recipe.id)) {
        return false;
      }

      // Search query check (Food Name OR Ingredient Name OR Tags)
      if (query) {
        const matchesName = recipe.name.toLowerCase().includes(query);
        const matchesSummary = recipe.summary.toLowerCase().includes(query);
        const matchesTag = recipe.tags.some(t => t.toLowerCase().includes(query));
        const matchesIngredient = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(query));
        
        return matchesName || matchesSummary || matchesTag || matchesIngredient;
      }

      return true;
    });

    state.displayedCount = 6; // reset scroll count on filter change
    renderMainGrid();
  }

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = state.searchQuery ? "block" : "none";
      }
      filterRecipes();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      searchClearBtn.style.display = "none";
      filterRecipes();
    });
  }

  // Category Pills listeners
  categoryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      categoryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.currentCategory = chip.dataset.category;
      filterRecipes();
    });
  });

  // Favorites Filter Button
  if (favoritesBtn) {
    favoritesBtn.addEventListener("click", () => {
      state.favoritesOnly = !state.favoritesOnly;
      favoritesBtn.classList.toggle("active", state.favoritesOnly);
      filterRecipes();
    });
  }

  /* ==========================================================================
     4. Random Recipe Picker (Random Food Main Screen Requirement)
     ========================================================================== */
  function pickRandomFeaturedRecipe() {
    const randomIndex = Math.floor(Math.random() * state.recipes.length);
    const randomRecipe = state.recipes[randomIndex];
    state.randomRecipeId = randomRecipe.id;

    if (featuredCard) {
      const isFav = state.favorites.includes(randomRecipe.id);
      featuredCard.innerHTML = `
        <div class="featured-img-wrap">
          <img src="${randomRecipe.image}" alt="${randomRecipe.name}" loading="lazy">
          <span class="badge-featured">🎲 오늘의 유행 Pick!</span>
        </div>
        <div class="featured-info">
          <div class="featured-tags">
            ${randomRecipe.tags.slice(0, 3).map(t => `<span class="tag-badge">${t}</span>`).join("")}
          </div>
          <h3 class="featured-food-title">${randomRecipe.name}</h3>
          <p class="featured-food-summary">${randomRecipe.summary}</p>
          <div class="meta-stats">
            <span class="meta-item">⏱️ <strong>${randomRecipe.prepTime}</strong></span>
            <span class="meta-item">🔥 <strong>${randomRecipe.difficulty}</strong></span>
            <span class="meta-item">⭐ <strong>${randomRecipe.rating}</strong></span>
          </div>
          <button class="btn-view-recipe">
            📖 레시피 자세히 보기 <span>→</span>
          </button>
        </div>
      `;

      featuredCard.onclick = () => openRecipeModal(randomRecipe);
    }
  }

  if (randomPickBtn) {
    randomPickBtn.addEventListener("click", () => {
      pickRandomFeaturedRecipe();
      showToast("🎲 새로운 유행 음식을 추천했습니다!");
    });
  }

  /* ==========================================================================
     5. Main Grid Rendering & Infinite Scroll
     ========================================================================== */
  function renderMainGrid() {
    const listToRender = state.filteredRecipes.slice(0, state.displayedCount);

    if (state.filteredRecipes.length === 0) {
      recipesGrid.innerHTML = "";
      noResultsView.style.display = "block";
      loadingSentinel.style.display = "none";
      return;
    }

    noResultsView.style.display = "none";

    recipesGrid.innerHTML = listToRender.map(recipe => {
      const isFav = state.favorites.includes(recipe.id);
      return `
        <div class="recipe-card" data-id="${recipe.id}">
          <div class="card-img-wrap">
            <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
            <button class="card-like-btn ${isFav ? "liked" : ""}" data-id="${recipe.id}" title="즐겨찾기">
              ${isFav ? "❤️" : "🤍"}
            </button>
          </div>
          <div class="card-body">
            <div class="card-category">${recipe.category}</div>
            <h4 class="card-title">${recipe.name}</h4>
            <p class="card-desc">${recipe.summary}</p>
            <div class="card-footer">
              <div class="card-meta">
                <span>⏱️ ${recipe.prepTime}</span>
                <span>⭐ ${recipe.rating}</span>
              </div>
              <span class="coupang-badge-sm">쿠팡 구매 가능 ↗</span>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Attach click events
    document.querySelectorAll(".recipe-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".card-like-btn")) return;
        const recipeId = card.dataset.id;
        const recipe = state.recipes.find(r => r.id === recipeId);
        if (recipe) openRecipeModal(recipe);
      });
    });

    document.querySelectorAll(".card-like-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        toggleFavorite(btn.dataset.id, e);
      });
    });

    // Show sentinel if more items remain
    if (state.displayedCount < state.filteredRecipes.length) {
      loadingSentinel.style.display = "block";
    } else {
      loadingSentinel.style.display = "none";
    }
  }

  // Infinite Scroll Trigger
  window.addEventListener("scroll", () => {
    if (state.displayedCount >= state.filteredRecipes.length) return;
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - 400;

    if (scrollPosition >= threshold) {
      state.displayedCount += 4;
      renderMainGrid();
    }
  });

  /* ==========================================================================
     6. Recipe Detail Modal & Coupang Purchase Links & Cooking Guide
     ========================================================================== */
  function openRecipeModal(recipe) {
    state.activeRecipe = recipe;
    const isFav = state.favorites.includes(recipe.id);
    const userMemo = state.userMemos[recipe.id] || "";

    const modalBody = document.getElementById("modalDetailContent");
    modalBody.innerHTML = `
      <div class="modal-hero">
        <img src="${recipe.image}" alt="${recipe.name}">
        <button class="modal-close-btn" id="innerModalClose">&times;</button>
        <div class="modal-hero-overlay">
          <div style="display:flex; justify-content:space-between; align-items:flex-end;">
            <div>
              <span class="tag-badge" style="background:var(--accent-orange); color:white; margin-bottom:6px; display:inline-block;">${recipe.category}</span>
              <h2 class="modal-title">${recipe.name}</h2>
              <div class="modal-meta-row">
                <span>⏱️ 조리시간: ${recipe.prepTime}</span>
                <span>🔥 난이도: ${recipe.difficulty}</span>
                <span>🔥 열량: ${recipe.calories}</span>
                <span>⭐ 평점: ${recipe.rating}</span>
              </div>
            </div>
            <button class="card-like-btn ${isFav ? "liked" : ""}" id="modalFavBtn" style="position:relative; top:0; right:0; width:44px; height:44px; font-size:20px;">
              ${isFav ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>

      <div class="modal-body">
        <!-- Recipe Overview -->
        <div class="modal-section">
          <div class="modal-summary-box">
            💡 <strong>레시피 요약:</strong> ${recipe.summary}
          </div>
        </div>

        <!-- Coupang Direct Purchase Banner -->
        <div class="coupang-banner">
          <div class="coupang-info">
            <div class="coupang-logo">쿠팡</div>
            <div class="coupang-text">
              <h4>🛒 레시피 식재료 쿠팡에서 한번에 준비하기</h4>
              <p>신선한 카다이프, 피스타치오, 시즈닝 등 필요한 모든 재료를 당일 배송으로 받아보세요!</p>
            </div>
          </div>
          <a href="${recipe.coupangAllUrl}" target="_blank" rel="noopener noreferrer" class="btn-coupang-main">
            🛒 쿠팡에서 전체 재료 최저가 구매 ↗
          </a>
        </div>

        <!-- Ingredients Checklist & Coupang Individual Item Purchase Links -->
        <div class="modal-section">
          <h3 class="modal-section-title">
            <span>🥗 준비 식재료 (${recipe.ingredients.length}가지)</span>
            <span style="font-size:12px; color:var(--text-muted); font-weight:normal;">개별 재료 구매 가능</span>
          </h3>
          <div class="ingredients-list">
            ${recipe.ingredients.map((ing, idx) => {
              const itemCoupangUrl = `https://www.coupang.com/np/search?q=${encodeURIComponent(ing.searchKeyword || ing.name)}`;
              return `
                <div class="ingredient-item">
                  <div class="ingredient-name">
                    <input type="checkbox" class="ingredient-checkbox" id="ing_${idx}">
                    <label for="ing_${idx}">${ing.name}</label>
                  </div>
                  <div>
                    <span class="ingredient-amount">${ing.amount}</span>
                    <a href="${itemCoupangUrl}" target="_blank" rel="noopener noreferrer" class="btn-coupang-item">
                      쿠팡 구매 ↗
                    </a>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Step-by-Step Cooking Guide with Images -->
        <div class="modal-section">
          <h3 class="modal-section-title">
            <span>👨‍🍳 단계별 상세 조리 방법</span>
          </h3>
          <div class="steps-container">
            ${recipe.steps.map(s => `
              <div class="step-card">
                <div class="step-num">${s.step}</div>
                <div class="step-content">
                  <h4 class="step-title">${s.title}</h4>
                  <p class="step-desc">${s.desc}</p>
                  ${s.tip ? `<div class="step-tip">💡 <strong>꿀팁:</strong> ${s.tip}</div>` : ""}
                  ${s.timerSeconds > 0 ? `
                    <button class="step-timer-btn" data-seconds="${s.timerSeconds}">
                      ⏱️ 조리 타이머 (${Math.floor(s.timerSeconds / 60)}분) 시작
                    </button>
                  ` : ""}
                </div>
                ${s.image ? `
                  <div style="width:110px; height:110px; flex-shrink:0; border-radius:var(--radius-sm); overflow:hidden;">
                    <img src="${s.image}" alt="Step ${s.step}" style="width:100%; height:100%; object-fit:cover;">
                  </div>
                ` : ""}
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Personal Cooking Memo (Persisted >1 Year) -->
        <div class="modal-section">
          <h3 class="modal-section-title">
            <span>📝 나만의 요리 메모 & 팁 저장</span>
          </h3>
          <textarea class="user-memo-box" id="recipeMemoInput" placeholder="나만의 조리 팁, 소스 비율 조절, 대체 재료 등을 기록해보세요. (자동으로 영구 저장됩니다)">${userMemo}</textarea>
        </div>
      </div>
    `;

    recipeModal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Inner close handler
    const innerClose = document.getElementById("innerModalClose");
    if (innerClose) {
      innerClose.onclick = closeRecipeModal;
    }

    // Modal Fav button handler
    const modalFavBtn = document.getElementById("modalFavBtn");
    if (modalFavBtn) {
      modalFavBtn.onclick = () => toggleFavorite(recipe.id);
    }

    // User Memo auto-save handler
    const recipeMemoInput = document.getElementById("recipeMemoInput");
    if (recipeMemoInput) {
      recipeMemoInput.addEventListener("input", (e) => {
        state.userMemos[recipe.id] = e.target.value;
        localStorage.setItem("recipe_memos", JSON.stringify(state.userMemos));
        updateFavoritesUI();
      });
    }

    // Interactive Step Timers
    document.querySelectorAll(".step-timer-btn").forEach(btn => {
      let timerInterval = null;
      let remaining = parseInt(btn.dataset.seconds, 10);
      const originalText = btn.innerHTML;

      btn.addEventListener("click", () => {
        if (timerInterval) {
          clearInterval(timerInterval);
          timerInterval = null;
          btn.innerHTML = originalText;
          btn.classList.remove("running");
          showToast("타이머가 일시정지 되었습니다.");
          return;
        }

        btn.classList.add("running");
        showToast("⏱️ 조리 타이머가 시작되었습니다!");

        timerInterval = setInterval(() => {
          remaining--;
          const mins = Math.floor(remaining / 60);
          const secs = remaining % 60;
          btn.innerHTML = `⏳ 남은 시간: ${mins}:${secs < 10 ? '0' : ''}${secs}`;

          if (remaining <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            btn.innerHTML = "✅ 조리 시간 완료!";
            btn.classList.remove("running");
            showToast("🔔 띵동! 조리 타이머가 완료되었습니다!");
          }
        }, 1000);
      });
    });
  }

  function closeRecipeModal() {
    recipeModal.classList.remove("active");
    document.body.style.overflow = "";
    state.activeRecipe = null;
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeRecipeModal);
  }

  recipeModal.addEventListener("click", (e) => {
    if (e.target === recipeModal) {
      closeRecipeModal();
    }
  });

  /* ==========================================================================
     7. Toast Notification Utility
     ========================================================================== */
  function showToast(message) {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  /* ==========================================================================
     8. App Initialization (< 1s display performance)
     ========================================================================== */
  updateFavoritesUI();
  pickRandomFeaturedRecipe();
  renderMainGrid();
});
