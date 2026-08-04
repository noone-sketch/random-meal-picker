# 🍚 随机干饭选择器

[![PWA Ready](https://img.shields.io/badge/PWA-ready-brightgreen)](https://noone-sketch.github.io/random-meal-picker/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

> 今天吃什么？让运气帮你决定！随机抽取食堂或外卖，告别选择困难。

**在线体验** → [noone-sketch.github.io/random-meal-picker](https://noone-sketch.github.io/random-meal-picker/)

## ✨ 功能

| 功能 | 说明 |
|------|------|
| 🍽️ 去食堂吃饭 | 从多个食堂中任选一个，随机抽取该食堂菜品 |
| 🥡 点外卖 | 从外卖菜单中直接随机抽取 |
| 🎲 随机动画 | 老虎机式抽选动画 + 彩纸庆祝效果 |
| 📋 菜单管理 | 独立菜单管理，支持新增 / 删除 / 清空 |
| 💾 本地存储 | LocalStorage 持久化，离线可用，无需后端 |
| 📱 PWA | 可安装到手机主屏幕，支持离线访问 |

## 📁 项目结构

```
.
├── index.html          # 主应用（HTML + CSS + JS 单文件）
├── manifest.json       # PWA 应用清单
├── sw.js               # Service Worker（离线缓存）
├── icon-192x192.png    # PWA 图标
├── icon-512x512.png
├── icon-maskable-512x512.png
└── README.md
```

## 🚀 快速开始

### 直接打开

用浏览器打开 `index.html` 即可运行。

### 本地开发服务器（推荐）

```bash
# 在项目目录下启动任意 HTTP 服务器
npx serve .

# 或 Python
python -m http.server 8080

# 或 Node.js
npx http-server . -p 8080
```

手机和电脑连同一 WiFi，用手机浏览器访问 `http://<电脑IP>:8080` 即可调试。

> **提示**：直接双击打开的 `file://` 协议下 Service Worker 不生效，PWA 安装功能需要 HTTP(S)。

### 部署到公网

**GitHub Pages**（免费，推荐）：

```bash
git init
git add .
git commit -m "Init: 随机干饭选择器"
git branch -M main
git remote add origin https://github.com/<你的用户名>/random-meal-picker.git
git push -u origin main
```

在仓库 Settings → Pages → 选择 main 分支 → Save，几分钟后通过 `https://<用户名>.github.io/random-meal-picker/` 访问。

其他免费选项：Vercel、Netlify、Cloudflare Pages（拖拽文件夹即可部署）。

## 📦 打包为手机 App

### 方式一：PWA 直接安装（推荐，零成本）

1. 用手机浏览器（Chrome / Safari）打开部署后的网址
2. **Android Chrome**：会自动弹出「添加到主屏幕」提示；或点菜单 → 添加到主屏幕
3. **iPhone Safari**：点底部分享按钮 → 添加到主屏幕
4. 安装后像原生 App 一样使用，离线也能打开

### 方式二：PWABuilder 打包 APK

1. 将项目部署到公网
2. 打开 [PWABuilder.com](https://www.pwabuilder.com/)
3. 输入网址 → 验证通过后点击「Package for Stores」
4. 选择 Android → 下载 `.apk` 或 `.aab`
5. 传到手机直接安装（APK），或提交到 Google Play（AAB）

### 方式三：Bubblewrap 命令行打包

```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://你的域名/manifest.json
bubblewrap build
```

### 方式四：iOS 打包

iOS 不支持直接侧载 PWA。替代方案：
- **添加到主屏幕**（方式一）— 体验已足够好
- **PWABuilder** 的 iOS 包选项（生成 Xcode 项目）
- **Capacitor 封装**（需 Mac + Xcode）：

```bash
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init "干饭选择器" com.yourname.mealpicker
npx cap add ios
# 将 index.html / manifest.json / sw.js 放入 www/ 目录
npx cap open ios
```

## 💾 数据管理

- 所有菜单数据存储在浏览器 `localStorage` 中
- 首次打开自动加载默认菜品
- 清除浏览器缓存会丢失数据，建议定期导出
- 存储 key：`random_meal_picker_menus`

### 数据导出 / 导入

在浏览器控制台执行：

```javascript
// 导出（JSON 自动复制到剪贴板）
copy(JSON.stringify(JSON.parse(localStorage.getItem('random_meal_picker_menus')), null, 2))

// 导入
localStorage.setItem('random_meal_picker_menus', JSON.stringify(/* 粘贴你的 JSON */))
// 刷新页面生效
```

## 🛠 技术栈

- **HTML5 + CSS3** — 自定义设计系统，无框架依赖
- **Vanilla JavaScript** (ES6+) — 零依赖
- **LocalStorage** — 客户端持久化
- **Service Worker** — PWA 离线缓存
- **Google Fonts (Nunito)** — 圆润友好字体

## 🎨 设计

配色灵感来源于「街头美食夜市」——温暖的纸白底色搭配活力珊瑚橙主色调，每个食堂各有独立标识色。核心交互是老虎机式抽选动画，通过快速文字切换 + 减速度曲线模拟真实手感，结果揭晓时配合彩纸粒子效果，让每次选择都像中奖一样有仪式感。

## 📄 License

[MIT](./LICENSE) — 随意使用和修改。
