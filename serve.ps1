$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Host "Server running at http://localhost:8080/"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $req = $context.Request
        $res = $context.Response
        $urlPath = $req.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($urlPath)) { $urlPath = "index.html" }
        $fullPath = [System.IO.Path]::Combine("c:\Users\Grandfather\Documents\byeonbb_assignment\test", $urlPath)
        
        if ((Test-Path $fullPath) -and -not (Test-Path $fullPath -PathType Container)) {
            $bytes = [System.IO.File]::ReadAllBytes($fullPath)
            $res.ContentLength64 = $bytes.Length
            if ($fullPath.EndsWith(".html")) { $res.ContentType = "text/html; charset=utf-8" }
            elseif ($fullPath.EndsWith(".css")) { $res.ContentType = "text/css; charset=utf-8" }
            elseif ($fullPath.EndsWith(".js")) { $res.ContentType = "application/javascript; charset=utf-8" }
            elseif ($fullPath.EndsWith(".png")) { $res.ContentType = "image/png" }
            
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $res.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $res.OutputStream.Write($msg, 0, $msg.Length)
        }
        $res.OutputStream.Close()
    } catch {
        # ignore client disconnects
    }
}
