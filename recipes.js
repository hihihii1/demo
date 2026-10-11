/**
 * 유행 음식 레시피 데이터베이스 (Accuracy & High Quality)
 */
const RECIPES_DATA = [
  {
    id: "dubai_chocolate",
    name: "두바이 초콜릿 (Dubai Chocolate)",
    category: "디저트",
    summary: "SNS를 달군 레전드 디저트! 바삭한 카다이프 면과 고소하고 리치한 피스타치오 스프레드가 듬뿍 들어간 프리미엄 초콜릿",
    prepTime: "25분",
    difficulty: "중급",
    calories: "450 kcal",
    rating: "4.9",
    likesCount: 1420,
    tags: ["#두바이초콜릿", "#카다이프", "#피스타치오", "#SNS대유행", "#초코덕후"],
    image: "./assets/dubai_chocolate.png",
    coupangAllUrl: "https://www.coupang.com/np/search?q=" + encodeURIComponent("두바이 초콜릿 재료 카다이프 피스타치오 스프레드"),
    ingredients: [
      { name: "카다이프 면", amount: "100g", searchKeyword: "카다이프 면" },
      { name: "피스타치오 스프레드 (또는 페이스트)", amount: "150g", searchKeyword: "피스타치오 스프레드" },
      { name: "다크 코팅 초콜릿 (또는 커버춰)", amount: "200g", searchKeyword: "다크 코팅 초콜릿" },
      { name: "버터", amount: "20g", searchKeyword: "무염 버터" },
      { name: "화이트 초콜릿 (데코용)", amount: "30g", searchKeyword: "화이트 초콜릿" }
    ],
    steps: [
      {
        step: 1,
        title: "카다이프 잘게 자르기",
        desc: "카다이프 면을 도마 위에 놓고 1~2cm 길이로 아주 잘게 썰어 준비합니다.",
        tip: "가위나 칼을 이용해 잘게 다지듯 자르면 버터에 볶을 때 균일하게 익습니다.",
        timerSeconds: 0,
        image: "./assets/dubai_chocolate.png"
      },
      {
        step: 2,
        title: "버터에 카다이프 볶기",
        desc: "프라이팬에 버터 20g을 녹인 뒤 자른 카다이프 면을 넣고 약불에서 황금빛 갈색이 될 때까지 바삭하게 볶아줍니다.",
        tip: "타지 않도록 계속 저어가며 5분 정도 달달 볶아주어야 특유의 극강 바삭함이 살아납니다.",
        timerSeconds: 300,
        image: "./assets/dubai_chocolate.png"
      },
      {
        step: 3,
        title: "피스타치오 크림 완성하기",
        desc: "볶아낸 카다이프 면의 열기를 한 김 식힌 뒤, 피스타치오 스프레드 150g을 넣고 잘 섞어 눅눅하지 않고 쫀득하게 치댑니다.",
        tip: "스프레드가 너무 단단하면 전자레인지에 10초 정도 살짝 돌려 부드럽게 만든 뒤 섞으세요.",
        timerSeconds: 0,
        image: "./assets/dubai_chocolate.png"
      },
      {
        step: 4,
        title: "초콜릿 템퍼링 및 몰드 코팅",
        desc: "초콜릿 몰드 바닥에 데코용 화이트 초콜릿으로 마블링을 그린 뒤, 녹인 다크 초콜릿을 전체적으로 얇게 펴 발라 냉동실에서 5분간 굳힙니다.",
        tip: "몰드가 없으면 정밀 용기나 우유갑 바닥을 활용하셔도 좋습니다.",
        timerSeconds: 300,
        image: "./assets/dubai_chocolate.png"
      },
      {
        step: 5,
        title: "필링 채우기 및 초콜릿 덮기",
        desc: "굳은 초콜릿 틀 안에 만들어둔 피스타치오 카다이프 필링을 가득 채운 후, 그 위에 녹인 다크 초콜릿을 평평하게 덮어줍니다.",
        tip: "기포가 빠지도록 바닥에 탕탕 두 번 쳐준 후 냉장실에서 30분 이상 단단하게 굳히면 완성!",
        timerSeconds: 1800,
        image: "./assets/dubai_chocolate.png"
      }
    ]
  },
  {
    id: "yogurt_parfait",
    name: "요아정 벌집굴 파르페 (Yoa-jeong Parfait)",
    category: "디저트",
    summary: "상큼함과 달콤함의 미친 조합! 요거트 아이스크림에 생벌집굴과 초코쉘, 그래놀라가 조화로운 인기 디저트",
    prepTime: "10분",
    difficulty: "초급",
    calories: "320 kcal",
    rating: "4.8",
    likesCount: 980,
    tags: ["#요아정", "#요거트아이스크림", "#벌집굴", "#초코쉘", "#홈카페"],
    image: "./assets/yogurt_parfait.png",
    coupangAllUrl: "https://www.coupang.com/np/search?q=" + encodeURIComponent("요거트 아이스크림 벌집꿀 그래놀라 초코쉘"),
    ingredients: [
      { name: "플레인 요거트 아이스크림", amount: "200g", searchKeyword: "요거트 아이스크림" },
      { name: "천연 생벌집굴 (허니콤)", amount: "1조각 (50g)", searchKeyword: "생 벌집꿀 허니콤" },
      { name: "매직 굳는 초코 시럽 (초코쉘)", amount: "30g", searchKeyword: "굳는 초코 시럽" },
      { name: "바삭 그래놀라 / 퐁쉘", amount: "3대술", searchKeyword: "수제 그래놀라" },
      { name: "생딸기 또는 블루베리", amount: "적당량", searchKeyword: "생딸기" }
    ],
    steps: [
      {
        step: 1,
        title: "베이스 담기",
        desc: "투명한 디저트 볼 바닥에 바삭한 그래놀라 2스푼을 깔아줍니다.",
        tip: "바닥에 그래놀라를 깔아주면 아이스크림이 녹아도 끝까지 바삭하게 즐길 수 있습니다.",
        timerSeconds: 0,
        image: "./assets/yogurt_parfait.png"
      },
      {
        step: 2,
        title: "요거트 아이스크림 스쿱",
        desc: "아이스크림 스쿱으로 요거트 아이스크림 2~3스쿱을 예쁘게 올려 담습니다.",
        tip: "단단하게 굳은 아이스크림을 약간 실온에 두었다가 담으면 동글동글 예쁘게 떠집니다.",
        timerSeconds: 0,
        image: "./assets/yogurt_parfait.png"
      },
      {
        step: 3,
        title: "초코쉘 시럽 코팅",
        desc: "차가운 요거트 아이스크림 위에 차가우면 바로 굳는 초코 시럽을 둘러 뿌려 파삭한 초코 껍질을 만듭니다.",
        tip: "10초만 기다리면 겉은 파삭하고 속은 부드러운 완벽한 초코쉘이 완성됩니다.",
        timerSeconds: 10,
        image: "./assets/yogurt_parfait.png"
      },
      {
        step: 4,
        title: "벌집꿀 & 과일 토핑",
        desc: "정가운데에 생벌집굴 한 조각을 얹고, 주변에 생딸기와 블루베리를 올려 장식합니다.",
        tip: "벌집꿀을 숟가락으로 살짝 쪼개어 아이스크림과 곁들여 드시면 꿀풍미가 입안 가득 터집니다.",
        timerSeconds: 0,
        image: "./assets/yogurt_parfait.png"
      }
    ]
  },
  {
    id: "mala_tteokbokki",
    name: "마라 로제 떡볶이 (Mala Rose Tteokbokki)",
    category: "퓨전/분식",
    summary: "알싸한 마라향에 부드러운 생크림 로제 소스가 찰떡! 중국당면과 분모자가 쫀득 씹히는 최강 분식",
    prepTime: "20분",
    difficulty: "중급",
    calories: "680 kcal",
    rating: "4.9",
    likesCount: 2310,
    tags: ["#마라떡볶이", "#마라로제", "#분모자", "#중국당면", "#매운맛"],
    image: "./assets/mala_tteokbokki.png",
    coupangAllUrl: "https://www.coupang.com/np/search?q=" + encodeURIComponent("마라소스 휘핑크림 분모자 떡볶이떡"),
    ingredients: [
      { name: "떡볶이 떡 (밀떡/쌀떡)", amount: "200g", searchKeyword: "떡볶이 떡" },
      { name: "불린 분모자 & 중국당면", amount: "각 100g", searchKeyword: "분모자 중국당면" },
      { name: "마라탕 훠궈 소스", amount: "2큰술", searchKeyword: "하이디라오 마라소스" },
      { name: "생크림 (또는 우유)", amount: "200ml", searchKeyword: "휘핑크림 생크림" },
      { name: "비엔나 소세지 & 베이컨", amount: "6개 / 3장", searchKeyword: "비엔나 소세지" },
      { name: "체다 치즈", amount: "1장", searchKeyword: "체다 슬라이스 치즈" }
    ],
    steps: [
      {
        step: 1,
        title: "당면 & 분모자 불리기",
        desc: "중국당면과 분모자는 찬물에 미지근하게 최소 2시간 이상 불려 미리 준비합니다.",
        tip: "시간이 없을 땐 끓는 물에 10분간 삶아 바로 사용하셔도 됩니다.",
        timerSeconds: 0,
        image: "./assets/mala_tteokbokki.png"
      },
      {
        step: 2,
        title: "베이컨 & 소세지 볶기",
        desc: "팬에 칼집 낸 비엔나 소세지와 썰어둔 베이컨을 넣고 노릇하게 볶아 기름을 냅니다.",
        tip: "고기 기름이 베어나오면 국물 베이스가 한층 더 깊어집니다.",
        timerSeconds: 180,
        image: "./assets/mala_tteokbokki.png"
      },
      {
        step: 3,
        title: "마라 로제 소스 만들기",
        desc: "볶아둔 재료에 생크림 200ml, 물 100ml, 마라소스 2큰술, 고추장 0.5큰술을 넣고 잘 풀어주며 끓입니다.",
        tip: "마라 맛 강도는 마라 소스 양으로 조절하세요. 2큰술이 딱 맛있게 알싸합니다.",
        timerSeconds: 120,
        image: "./assets/mala_tteokbokki.png"
      },
      {
        step: 4,
        title: "떡과 당면 졸이기",
        desc: "소스가 끓어오르면 떡볶이 떡, 분모자, 중국당면을 넣고 양념이 졸아들 때까지 5분간 보글보글 끓입니다.",
        tip: "당면이 바닥에 붙지 않도록 주걱으로 저어주세요.",
        timerSeconds: 300,
        image: "./assets/mala_tteokbokki.png"
      },
      {
        step: 5,
        title: "치즈 토핑으로 마무리",
        desc: "불을 끄기 전 체다 치즈 1장을 얹고 치즈가 고소하게 녹아들면 완성입니다.",
        tip: "모짜렐라 치즈를 추가하여 토치로 살짝 그을려주면 비주얼 폭발!",
        timerSeconds: 0,
        image: "./assets/mala_tteokbokki.png"
      }
    ]
  },
  {
    id: "tanghulu",
    name: "초간단 샤인머스캣 탕후루 (Tanghulu)",
    category: "디저트",
    summary: "ASMR 보장! 실패 없는 1:0.5 설탕 물 비율로 완성하는 극강의 파삭파삭과 과즙 팡팡 과일 탕후루",
    prepTime: "15분",
    difficulty: "초급",
    calories: "180 kcal",
    rating: "4.7",
    likesCount: 1890,
    tags: ["#탕후루", "#샤인머스캣", "#딸기탕후루", "#ASMR", "#초간단디저트"],
    image: "./assets/tanghulu.png",
    coupangAllUrl: "https://www.coupang.com/np/search?q=" + encodeURIComponent("샤인머스캣 꼬치 롱 꼬치 백설탕"),
    ingredients: [
      { name: "샤인머스캣 (또는 생딸기)", amount: "10-15알", searchKeyword: "샤인머스캣 과일" },
      { name: "백설탕", amount: "1컵 (200g)", searchKeyword: "백설탕" },
      { name: "물", amount: "1/2컵 (100ml)", searchKeyword: "생수" },
      { name: "물엿 (선택)", amount: "1큰술", searchKeyword: "요리물엿" },
      { name: "대나무 꼬치", amount: "3~4개", searchKeyword: "나무 꼬치" }
    ],
    steps: [
      {
        step: 1,
        title: "과일 세척 및 물기 완벽 제거",
        desc: "샤인머스캣을 깨끗이 씻은 후 키친타월로 과일 표면의 수분을 100% 완벽하게 닦아냅니다.",
        tip: "물기가 조금이라도 남아있으면 설탕 시럽이 굳지 않고 떨어집니다. 가장 중요!",
        timerSeconds: 0,
        image: "./assets/tanghulu.png"
      },
      {
        step: 2,
        title: "과일 꼬치 끼우기",
        desc: "물기를 뺀 과일을 나무 꼬치에 3~4알씩 예쁘게 끼워줍니다.",
        tip: "과일 상단에 꼭지 부분을 떼어내고 세로로 일직선이 되게 꽂아주세요.",
        timerSeconds: 0,
        image: "./assets/tanghulu.png"
      },
      {
        step: 3,
        title: "황금 비율 설탕 시럽 끓이기",
        desc: "냄비에 설탕 200g, 물 100ml, 물엿 1큰술을 넣고 절대로 저어주지 않은 상태로 중약불에서 끓입니다.",
        tip: "숟가락으로 저으면 결정화가 일어나 실패합니다. 그냥 자연스럽게 녹게 두세요!",
        timerSeconds: 420,
        image: "./assets/tanghulu.png"
      },
      {
        step: 4,
        title: "시럽 완성도 찬물 테스트",
        desc: "시럽이 보글보글 끓어 옅은 노란빛을 띨 때, 얼음물에 한 방울 떨어뜨려 즉시 굳어 톡 부러지면 완성입니다.",
        tip: "쫀득거리지 않고 유리처럼 쨍그랑 부러지는 상태여야 합니다.",
        timerSeconds: 0,
        image: "./assets/tanghulu.png"
      },
      {
        step: 5,
        title: "시럽 코팅 및 굳히기",
        desc: "준비한 과일 꼬치를 시럽에 얇게 한 바퀴 휙 굴려 묻힌 뒤, 종이호일 위에 올려 실온에서 5분간 굳힙니다.",
        tip: "두껍게 코팅하기보다 얇게 한 번만 지나가야 이에 붙지 않는 완벽한 탕후루가 됩니다.",
        timerSeconds: 300,
        image: "./assets/tanghulu.png"
      }
    ]
  },
  {
    id: "crookie",
    name: "파리 유행 크루키 (Crookie - Croissant Cookie)",
    category: "디저트",
    summary: "프랑스 파리를 덮친 디저트 붐! 바삭하고 고소한 크루아상과 쫀득한 겉바속촉 쵸코칩 쿠키 도우의 만남",
    prepTime: "20분",
    difficulty: "초급",
    calories: "410 kcal",
    rating: "4.85",
    likesCount: 1120,
    tags: ["#크루키", "#Crookie", "#크루아상", "#쿠키도우", "#에어프라이어요리"],
    image: "./assets/crookie.png",
    coupangAllUrl: "https://www.coupang.com/np/search?q=" + encodeURIComponent("냉동 크루아상 초코칩 쿠키 도우"),
    ingredients: [
      { name: "플레인 크루아상 (또는 크로플 생지)", amount: "2개", searchKeyword: "플레인 크루아상" },
      { name: "초코칩 쿠키 도우 (수제 또는 시판)", amount: "100g", searchKeyword: "초코칩 쿠키 도우" },
      { name: "슈가 파우더", amount: "약간", searchKeyword: "슈가 파우더" },
      { name: "초코칩 (추가 토핑용)", amount: "15g", searchKeyword: "초코칩" }
    ],
    steps: [
      {
        step: 1,
        title: "크루아상 반으로 가르기",
        desc: "준비한 크루아상의 반을 칼로 슬라이스하듯 끝부분을 남겨두고 가로로 샌드위치처럼 갈라줍니다.",
        tip: "완전히 2조각으로 분리하지 않고 책처럼 펴지게 가르면 쿠키 도우 넣기가 편합니다.",
        timerSeconds: 0,
        image: "./assets/crookie.png"
      },
      {
        step: 2,
        title: "쿠키 도우 넣기",
        desc: "쿠키 도우 30g 정도를 납작하게 펼쳐 크루아상 안쪽에 가득 채워 덮어줍니다.",
        tip: "도우가 열을 받으면 녹으므로 안쪽에 골고루 펴 넣는 것이 핵심!",
        timerSeconds: 0,
        image: "./assets/crookie.png"
      },
      {
        step: 3,
        title: "크루아상 겉면 도우 얹기",
        desc: "크루아상 위쪽 겉면에도 얇게 편 쿠키 도우를 올리고 초코칩을 콕콕 몇 개 더 박아줍니다.",
        tip: "겉에 얹은 쿠키 도우가 바삭하게 구워지며 완벽한 식감을 만듭니다.",
        timerSeconds: 0,
        image: "./assets/crookie.png"
      },
      {
        step: 4,
        title: "에어프라이어 / 오븐 구우기",
        desc: "175도로 예열한 에어프라이어에 넣고 10~12분간 쿠키 도우가 노릇노릇해질 때까지 굽습니다.",
        tip: "쿠키 도우 냄새가 고소하게 퍼지며 위 표면이 노릇해지면 완성입니다.",
        timerSeconds: 600,
        image: "./assets/crookie.png"
      },
      {
        step: 5,
        title: "한 김 식히고 슈가파우더 톡톡",
        desc: "구워진 크루키를 3분간 한 김 식혀 식감을 바삭하게 한 후 슈가파우더를 뿌려 맛있게 즐깁니다.",
        tip: "따뜻할 때 따뜻한 우유나 아메리카노와 함께 드시면 극락의 맛입니다.",
        timerSeconds: 180,
        image: "./assets/crookie.png"
      }
    ]
  },
  {
    id: "perilla_makguksu",
    name: "성수동 스타일 들기름 막국수 (Perilla Oil Makguksu)",
    category: "면/요리",
    summary: "유튜브와 틱톡 폭풍 조회수! 10분 만에 만드는 꼬소함의 극치 고소한 들기름과 들깨가루 김가루 풍미의 메밀국수",
    prepTime: "10분",
    difficulty: "초급",
    calories: "390 kcal",
    rating: "4.95",
    likesCount: 3100,
    tags: ["#들기름막국수", "#초간단면요리", "#메밀국수", "#고소함폭발", "#자취요리"],
    image: "./assets/perilla_makguksu.png",
    coupangAllUrl: "https://www.coupang.com/np/search?q=" + encodeURIComponent("저온착착 국산 들기름 메밀국수 통들깨 볶음김가루"),
    ingredients: [
      { name: "메밀 국수 면", amount: "1인분 (100g)", searchKeyword: "메밀 국수" },
      { name: "100% 저온착유 들기름", amount: "3큰술", searchKeyword: "저온착유 들기름" },
      { name: "양조간장 (또는 쯔유)", amount: "1.5큰술", searchKeyword: "양조간장" },
      { name: "매실청 (또는 올리고당)", amount: "0.5큰술", searchKeyword: "매실청" },
      { name: "조미 조각 김가루", amount: "한 움큼 (듬뿍)", searchKeyword: "조미 김가루" },
      { name: "거피 통들깨가루 / 볶은 참깨", amount: "1큰술", searchKeyword: "들깨가루" }
    ],
    steps: [
      {
        step: 1,
        title: "메밀면 삶기",
        desc: "팔팔 끓는 물에 메밀면 100g을 넣고 4~5분간 쫄깃하게 삶아냅니다.",
        tip: "면이 끓어오를 때 찬물 한 컵을 부어주면 면발이 더욱 찰지게 익습니다.",
        timerSeconds: 270,
        image: "./assets/perilla_makguksu.png"
      },
      {
        step: 2,
        title: "면 찬물 헹구기",
        desc: "삶아진 메밀면을 즉시 얼음물이나 찬물에 박박 헹궈 전분기를 없애고 수분을 손으로 꽉 짭니다.",
        tip: "물기를 완벽히 제거해야 소스가 면에 쫙 배어듭니다.",
        timerSeconds: 0,
        image: "./assets/perilla_makguksu.png"
      },
      {
        step: 3,
        title: "특제 들기름 간장 양념 버무리기",
        desc: "볼에 면을 담고 간장 1.5큰술, 매실청 0.5큰술, 그리고 들기름 3큰술을 넣어 골고루 버무려줍니다.",
        tip: "좋은 들기름을 쓰는 것이 이 레시피의 맛의 90%를 결정합니다.",
        timerSeconds: 0,
        image: "./assets/perilla_makguksu.png"
      },
      {
        step: 4,
        title: "김가루 & 들깨가루 고명 얹기",
        desc: "그릇에 고소하게 버무린 면을 예쁘게 똬리 틀어 담고 그 위에 김가루를 덮이듯 수북이 올린 뒤 들깨가루를 솔솔 흩뿌립니다.",
        tip: "비비지 않고 젓가락으로 김가루와 면을 함께 떠서 드시면 고소한 향이 입안에 퍼집니다!",
        timerSeconds: 0,
        image: "./assets/perilla_makguksu.png"
      }
    ]
  },
  {
    id: "salt_bread",
    name: "겉바속촉 버터 소금빵 (Salt Bread / Shio Pan)",
    category: "디저트",
    summary: "베이커리 줄 서서 먹는 그 소금빵! 버터 동굴에서 흘러나오는 짭조름하고 고소한 풍미의 수제 베이킹",
    prepTime: "40분",
    difficulty: "고급",
    calories: "290 kcal",
    rating: "4.75",
    likesCount: 1640,
    tags: ["#소금빵", "#시오빵", "#버터동굴", "#홈베이킹", "#갓구운빵"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    coupangAllUrl: "https://www.coupang.com/np/search?q=" + encodeURIComponent("소금빵 강력분 프랑스 버터 말돈소금"),
    ingredients: [
      { name: "강력분 (밀가루)", amount: "200g", searchKeyword: "베이킹 강력분" },
      { name: "무염 버터 (반죽용)", amount: "15g", searchKeyword: "앵커 무염버터" },
      { name: "가공/가염 버터 (속재료용)", amount: "개당 10g x 6개", searchKeyword: "이즈니 버터" },
      { name: "말돈 펄 소금 (토핑용)", amount: "적당량", searchKeyword: "말돈 소금" },
      { name: "드라이 이스트", amount: "4g", searchKeyword: "드라이 이스트" },
      { name: "따뜻한 우유/물", amount: "130ml", searchKeyword: "우유" }
    ],
    steps: [
      {
        step: 1,
        title: "반죽 및 발효",
        desc: "강력분, 이스트, 설탕, 소금을 믹싱볼에 넣고 따뜻한 우유로 반죽 후 1차 발효 40분 진행합니다.",
        tip: "따뜻한 장소에서 반죽 크기가 2배가 될 때까지 랩을 씌워 두세요.",
        timerSeconds: 2400,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 2,
        title: "성형 및 버터 감싸기",
        desc: "발효된 반죽을 긴 삼각 모양으로 밀대로 늘린 뒤, 윗부분에 차가운 버터 조각(10g)을 넣고 또르륵 말아줍니다.",
        tip: "버터가 새어나오지 않게 양 끝을 단단히 오므려 마는 것이 포인트입니다.",
        timerSeconds: 0,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 3,
        title: "소금 토핑 후 오븐 구이",
        desc: "표면에 물을 살짝 칠하고 말돈 소금을 얹은 뒤 200도로 예열된 오븐/에어프라이어에 13분 굽습니다.",
        tip: "바닥에 흘러나온 버터가 빵 바닥을 바삭하게 튀기듯 구워냅니다.",
        timerSeconds: 780,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "muktae_dip",
    name: "먹태 청양마요 감자팁 & 먹태구이 (Muktae Mayo Dip)",
    category: "안주/간식",
    summary: "편의점 대란템 먹태쌀칩 그 맛! 고소바삭한 먹태구이에 알싸한 청양고추 마요네즈 디핑소스",
    prepTime: "10분",
    difficulty: "초급",
    calories: "260 kcal",
    rating: "4.9",
    likesCount: 2050,
    tags: ["#먹태구이", "#청양마요", "#혼술안주", "#맥주안주", "#먹태칩"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    coupangAllUrl: "https://www.coupang.com/np/search?q=" + encodeURIComponent("손질 먹태 청양고추 마요네즈 진간장"),
    ingredients: [
      { name: "손질 먹태 (또는 황태채)", amount: "60g", searchKeyword: "손질 먹태채" },
      { name: "마요네즈", amount: "3큰술", searchKeyword: "오뚜기 마요네즈" },
      { name: "청양고추", amount: "1~2개", searchKeyword: "청양고추" },
      { name: "양조간장", amount: "1큰술", searchKeyword: "양조간장" },
      { name: "진굴소스 또는 올리고당", amount: "0.5큰술", searchKeyword: "올리고당" }
    ],
    steps: [
      {
        step: 1,
        title: "먹태 프라이팬/에프에 바삭 굽기",
        desc: "손질 먹태를 먹기 좋은 크기로 찢어 프라이팬이나 에어프라이어 180도에 3분간 노릇하게 바삭 구워줍니다.",
        tip: "너무 오래 구우면 탈 수 있으니 고소한 냄새가 풍기면 즉시 빼세요.",
        timerSeconds: 180,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 2,
        title: "황금 청양마요 소스 만들기",
        desc: "종지 그릇에 마요네즈 3스푼을 짜고 간장 1스푼, 쫑쫑 잘게 다진 청양고추를 듬뿍 올립니다.",
        tip: "취향에 따라 꿀 0.5티스푼이나 와사비 약간을 넣으면 이자카야 맛이 납니다.",
        timerSeconds: 0,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 3,
        title: "디핑 & 즐기기",
        desc: "바삭한 먹태를 알싸하고 고소한 청양마요 소스에 푹 찍어 드시면 맥주 안주로 최고입니다.",
        tip: "먹태칩 과자나 감자칩에 곁들여도 환상의 어울림을 자랑합니다.",
        timerSeconds: 0,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "acai_bowl",
    name: "헬시 유행 슈퍼푸드 아사이 보울 (Acai Smoothie Bowl)",
    category: "다이어트/헬시",
    summary: "해외셀럽 및 트렌드세터들의 아침 식사! 찐득한 아사이베리 스무디 베이스에 생과일과 견과류 보울",
    prepTime: "10분",
    difficulty: "초급",
    calories: "280 kcal",
    rating: "4.8",
    likesCount: 890,
    tags: ["#아사이보울", "#슈퍼푸드", "#다이어트레시피", "#비건디저트", "#스무디볼"],
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    coupangAllUrl: "https://www.coupang.com/np/search?q=" + encodeURIComponent("냉동 아사이베리 퓨레 바나나 치아씨드 코코넛퓌레"),
    ingredients: [
      { name: "냉동 아사이베리 스무디 팩", amount: "100g", searchKeyword: "아사이베리 퓨레" },
      { name: "냉동 바나나 & 블루베리", amount: "각 1/2컵", searchKeyword: "냉동 블루베리" },
      { name: "아몬드 밀크 (또는 코코넛워터)", amount: "50ml", searchKeyword: "아몬드 브리즈" },
      { name: "토핑용 생바나나 & 키위 & 키아씨드", amount: "적당량", searchKeyword: "치아씨드" },
      { name: "피넛버터 / 카카오닙스", amount: "1스푼", searchKeyword: "피넛버터" }
    ],
    steps: [
      {
        step: 1,
        title: "스무디 믹서기 갈기",
        desc: "믹서기에 아사이 퓨레, 냉동 바나나, 냉동 블루베리, 아몬드밀크를 넣고 걸쭉하게 갈아줍니다.",
        tip: "액체를 너무 많이 넣으면 스무디가 물처럼 흘러 토핑이 꺼지므로 최소한의 음료만 넣어 진득하게 가세요.",
        timerSeconds: 60,
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 2,
        title: "보울에 스무디 담고 토핑 정렬",
        desc: "예쁜 볼 그릇에 스무디를 평평하게 담고 위에 얇게 썬 바나나, 키위, 블루베리를 정갈하게 올립니다.",
        tip: "색감이 대조되도록 줄지어 예쁘게 올려주면 인스타 감성 사진 완성!",
        timerSeconds: 0,
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 3,
        title: "견과류 & 피넛버터 완성",
        desc: "치아씨드와 코코넛 플레이크를 뿌리고, 피넛버터 한 스푼을 고소하게 올려 완성합니다.",
        tip: "든든하고 건강한 피트니스 한 끼로 완성됩니다.",
        timerSeconds: 0,
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];
