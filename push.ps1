# ============================================================
# 一键提交并推送到 GitHub
# 用法：
#   .\push.ps1                → 使用默认提交信息 "update"
#   .\push.ps1 "修复了bug"     → 使用自定义提交信息
# ============================================================
param(
    [string]$Message = "update"
)

Write-Host "[+] 准备提交并推送到 GitHub..." -ForegroundColor Cyan

# 1. 暂存所有改动
git add .

# 2. 判断是否有改动需要提交
$changes = git status --porcelain
if ($changes) {
    git commit -m "$Message"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[x] 提交失败，请检查上面的错误信息" -ForegroundColor Red
        exit 1
    }
    Write-Host "[OK] 已提交：$Message" -ForegroundColor Green
} else {
    Write-Host "[!] 没有可提交的改动（工作区干净）" -ForegroundColor Yellow
}

# 3. 推送到远程 main 分支
git push origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] 完成！已同步到 GitHub" -ForegroundColor Green
} else {
    Write-Host "[x] 推送失败，请检查网络或登录状态" -ForegroundColor Red
    exit 1
}