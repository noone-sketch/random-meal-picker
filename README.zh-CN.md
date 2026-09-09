[English](README.md) · [中文](README.zh-CN.md)

# 🍚 随机干饭选择器

<p align="center">
  <strong>今天吃什么？让运气帮你决定！告别选择困难。🎲</strong>
</p>

<p align="center">
  <a href="https://noone-sketch.github.io/random-meal-picker/"><img src="https://img.shields.io/badge/demo-live-brightgreen?style=flat-square" alt="在线演示"></a>
  <a href="#license"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License: MIT"></a>
  <a href="#pwa"><img src="https://img.shields.io/badge/PWA-ready-FF6B4A?style=flat-square" alt="PWA Ready"></a>
  <img src="https://img.shields.io/badge/vanilla-js-F7DF1E?style=flat-square&logo=javascript" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/zero-dependencies-success?style=flat-square" alt="零依赖">
</p>

---

一款好玩、可安装的 PWA，随机决定你下一顿吃什么——可以从多个食堂或外卖菜单中随机抽取。内置老虎机动画、彩纸庆祝效果，并支持完整离线。零框架、零依赖，整个应用就是一个 HTML 文件。

> 🏫 最初为有校内食堂的中国大学生设计。完全可定制——添加你自己的食堂和菜品即可！

**[▶️ 在线体验](https://noone-sketch.github.io/random-meal-picker/)**

---

## 📑 目录

- [✨ 功能](#-功能)
- [📸 截图](#-截图)
- [🚀 快速开始](#-快速开始)
- [📦 部署](#-部署)
- [📱 PWA 与手机 App](#-pwa-与手机-app)
- [📁 项目结构](#-项目结构)
- [🛠 技术栈](#-技术栈)
- [🎨 设计系统](#-设计系统)
- [💾 数据](#-数据)
- [🤝 贡献](#-贡献)
- [📄 License](#-license)

---

## ✨ 功能

| 功能 | 说明 |
|---|---|
| 🍽️ **食堂模式** | 先选食堂，再从该食堂菜单中随机抽一道菜 |
| 🥡 **外卖模式** | 一键从外卖菜单中随机挑选 |
| 🎰 **老虎机动画** | 带减速曲线的滚轮抽选效果，结束时还有回弹 |
| 🎉 **彩纸庆祝** | 揭晓结果时爆出一片彩色粒子 |
| 📋 **完整菜单管理** | 每个食堂可增删/清空菜品；也可增删整个食堂 |
| 💾 **LocalStorage 持久化** | 数据都存在浏览器里——无需服务器、无需注册、完全离线 |
| 📱 **可安装 PWA** | 添加到手机主屏幕；通过 Service Worker 离线可用 |
| ♿ **无障碍** | 支持 `prefers-reduced-motion`、语义化 HTML、键盘导航 |
| 🌐 **响应式** | 移动优先，宽屏下呈现手机框架外观 |

---

## 📸 截图

<!-- TODO: 添加首页、老虎机动画、菜单管理弹窗的截图 -->
<!-- 示例： -->
<!-- <p align="center"> -->
<!--   <img src="screenshots/home.png" width="250" alt="首页"> -->
<!--   <img src="screenshots/slot.png" width="250" alt="老虎机"> -->
<!--   <img src="screenshots/manage.png" width="250" alt="菜单管理"> -->
<!-- </p> -->

> 💡 **提示：** 截图能让你的项目在 GitHub 上更出彩！拍几张放上来吧。

---

## 🚀 快速开始

### 直接打开

用任意现代浏览器打开 `index.html` 即可运行。

### 本地开发服务器（PWA 功能推荐）

```bash
# 任意 HTTP 服务器都行：
npx serve .

# 或 Python：
python -m http.server 8080

# 或 Node.js：
npx http-server . -p 8080
```

> ⚠️ Service Worker（以及 PWA 安装）只在 `https://` 或 `localhost` 下生效，`file://` 不行。

要在手机上调试，让手机和电脑连同一 WiFi，然后用手机浏览器访问 `http://<电脑IP>:8080`。

---

## 📦 部署

### GitHub Pages（免费，推荐）

```bash
git init
git add .
git commit -m "Init: Random Meal Picker"
git branch -M main
git remote add origin https://github.com/<你的用户名>/random-meal-picker.git
git push -u origin main
```

然后进入 **Settings → Pages** → 选择 `main` 分支 → Save。你的应用就会上线在 `https://<用户名>.github.io/random-meal-picker/`。

### 其他平台

| 平台 | 方式 |
|---|---|
| **Vercel** | 导入仓库——零配置 |
| **Netlify** | 直接拖拽项目文件夹 |
| **Cloudflare Pages** | 连接仓库并部署 |

---

## 📱 PWA 与手机 App

### 方式一：安装为 PWA（推荐，免费）

| 平台 | 步骤 |
|---|---|
| **安卓（Chrome）** | 打开网址 → 点「添加到主屏幕」提示，或菜单 → 添加到主屏幕 |
| **iPhone（Safari）** | 点分享按钮 → 添加到主屏幕 |

安装后像原生 App 一样使用——全屏、可离线、有自己的图标。

### 方式二：打包为 APK

1. 部署到公网
2. 打开 [PWABuilder.com](https://www.pwabuilder.com/)
3. 输入网址 → 选择「Package for Stores」→ 下载 `.apk`

### 方式三：Bubblewrap（命令行）

```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://你的域名/manifest.json
bubblewrap build
```

### 方式四：iOS 通过 Capacitor

```bash
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init "Meal Picker" com.yourname.mealpicker
npx cap add ios
# 把 index.html / manifest.json / sw.js 复制进 www/
npx cap open ios   # 需要 macOS + Xcode
```

---

## 📁 项目结构

```
random-meal-picker/
├── index.html              # 🎯 整个应用 —— HTML + CSS + JS（单文件）
├── manifest.json           # PWA 清单
├── sw.js                   # Service Worker —— 离线缓存 & 缓存优先策略
├── icon-192x192.png        # PWA 图标（小）
├── icon-512x512.png        # PWA 图标（大）
├── icon-maskable-512x512.png # PWA 可遮罩图标（自适应形状）
├── LICENSE
├── README.md               # 英文版
├── README.zh-CN.md         # 本文件（中文版）
└── .gitignore
```

没错，整个应用就在 `index.html` 里。没有构建步骤、没有打包器、没有 package.json——直接打开就能用。

---

## 🛠 技术栈

| 层 | 选择 |
|---|---|
| **UI** | HTML5 + CSS3，自定义 design-token 系统（CSS 自定义属性） |
| **逻辑** | 原生 JavaScript（ES6+），严格模式 |
| **存储** | `localStorage` —— 数据按浏览器持久化 |
| **离线** | Service Worker，缓存优先策略 |
| **字体** | [Google Fonts —— Nunito](https://fonts.google.com/specimen/Nunito) |
| **框架** | 无。零依赖。 |

### 为什么零依赖？

这个应用追求**简单、快速、永久可维护**。没有 `node_modules`、没有构建流程、没有上游包的破坏性更新。全部逻辑约 900 行可读的原生 JS。加载即用，处处可用。

---

## 🎨 设计系统

视觉语言灵感来自**夜市街头小吃摊**——温暖的纸白底色、充满活力的珊瑚橙主色，每个食堂都有独立的标识色。

| Token | 值 |
|---|---|
| 背景 | `#FFFBF5`（暖纸白） |
| 主色 | `#FF6B4A`（珊瑚橙） |
| 字体 | Nunito（圆润友好） |
| 圆角 | 8–32px（大圆角，柔和感） |
| 阴影 | 分层的暖色调阴影 |

### 老虎机

招牌交互是**老虎机滚轮动画**——文字在菜单项间快速闪烁并减速，最后落在结果上并回弹。揭晓时爆出一片彩纸粒子，让每一次选择都像中奖一样有仪式感。

尊重 `prefers-reduced-motion`：当操作系统请求减少动效时，所有动画都会被禁用。

---

## 💾 数据

所有菜单数据都存在浏览器 `localStorage` 中，键名为 `random_meal_picker_menus`（食堂列表在 `random_meal_picker_canteens`）。

### 默认数据

首次启动时，应用会自动填入约 50 道中式菜品，分布在 5 个食堂 + 一个外卖菜单中。你可以清空、修改或添加任何内容。

### 导出 / 导入

打开浏览器开发者工具控制台：

```js
// 导出菜单数据（JSON 复制到剪贴板）
copy(JSON.stringify(JSON.parse(localStorage.getItem('random_meal_picker_menus')), null, 2))

// 导入菜单数据
localStorage.setItem('random_meal_picker_menus', JSON.stringify(/* 粘贴你的 JSON */))
// 刷新页面
```

### 重置

要全部重置为默认，清掉这两个 localStorage 键（`random_meal_picker_menus` 和 `random_meal_picker_canteens`）后刷新即可。

---

## 🤝 贡献

欢迎贡献！方法如下：

1. **Fork** 仓库
2. **编辑** `index.html` —— 它就是整个应用
3. **测试**：用浏览器打开（可能的话在手机上测一下）
4. **提交 PR**：清楚说明改了什么、为什么改

### 贡献方向

- 🌍 **i18n** —— 把 UI 翻译成其他语言
- 🎨 **更多主题** —— 增加可选的配色方案
- 📊 **历史 / 统计** —— 记录抽到过什么
- 🗳️ **群组投票** —— 让多人一起投票决定吃什么
- 🖼️ **菜品照片** —— 给菜单项配图

遇到 bug 或想提需求，请[开 issue](https://github.com/noone-sketch/random-meal-picker/issues)。

---

## 📄 License

[MIT](./LICENSE) —— 随意使用、修改、分享。署名欢迎但不强制。

---

<p align="center">
  <sub>Made with ❤️ and 🍚 | <a href="https://noone-sketch.github.io/random-meal-picker/">在线体验</a></sub>
</p>
