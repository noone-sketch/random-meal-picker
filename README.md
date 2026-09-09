[English](README.md) · [中文](README.zh-CN.md)

# 🍚 Random Meal Picker

<p align="center">
  <strong>Can't decide what to eat? Let luck choose for you! 🎲</strong>
</p>

<p align="center">
  <a href="https://noone-sketch.github.io/random-meal-picker/"><img src="https://img.shields.io/badge/demo-live-brightgreen?style=flat-square" alt="Live Demo"></a>
  <a href="#license"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License: MIT"></a>
  <a href="#pwa"><img src="https://img.shields.io/badge/PWA-ready-FF6B4A?style=flat-square" alt="PWA Ready"></a>
  <img src="https://img.shields.io/badge/vanilla-js-F7DF1E?style=flat-square&logo=javascript" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/zero-dependencies-success?style=flat-square" alt="Zero Dependencies">
</p>

---

A playful, installable PWA that randomly picks your next meal — choose from multiple cafeterias or food delivery menus. Built with a slot-machine animation, confetti celebration, and full offline support. Zero frameworks, zero dependencies, one HTML file.

> 🏫 Originally designed for university students in China with on-campus cafeterias. Fully customizable — add your own cafeterias and dishes!

**[▶️ Try it live](https://noone-sketch.github.io/random-meal-picker/)**

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [📸 Screenshots](#-screenshots)
- [🚀 Getting Started](#-getting-started)
- [📦 Deploy](#-deploy)
- [📱 PWA & Mobile Apps](#-pwa--mobile-apps)
- [📁 Project Structure](#-project-structure)
- [🛠 Tech Stack](#-tech-stack)
- [🎨 Design System](#-design-system)
- [💾 Data](#-data)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🍽️ **Cafeteria Mode** | Pick a cafeteria, then randomly draw a dish from its menu |
| 🥡 **Delivery Mode** | Randomly select from your delivery menu in one tap |
| 🎰 **Slot Machine Animation** | Decelerating reel-spin effect with a satisfying bounce finish |
| 🎉 **Confetti Celebration** | Burst of colorful particles when a result is revealed |
| 📋 **Full Menu Management** | Add / remove / clear individual dishes per cafeteria; add / remove entire cafeterias |
| 💾 **LocalStorage Persistence** | All data lives in your browser — no server, no sign-up, fully offline |
| 📱 **Installable PWA** | Add to your phone's home screen; works offline via Service Worker |
| ♿ **Accessibility** | `prefers-reduced-motion` support, semantic HTML, keyboard navigation |
| 🌐 **Responsive** | Mobile-first layout with a phone-frame appearance on wider screens |

---

## 📸 Screenshots

<!-- TODO: Add screenshots of the home screen, slot machine animation, and menu management modal -->
<!-- Example: -->
<!-- <p align="center"> -->
<!--   <img src="screenshots/home.png" width="250" alt="Home Screen"> -->
<!--   <img src="screenshots/slot.png" width="250" alt="Slot Machine"> -->
<!--   <img src="screenshots/manage.png" width="250" alt="Menu Management"> -->
<!-- </p> -->

> 💡 **Tip:** Screenshots make your project stand out on GitHub! Take a few and add them above.

---

## 🚀 Getting Started

### Open directly

Just open `index.html` in any modern browser — that's it.

### Local dev server (recommended for PWA features)

```bash
# Any HTTP server works:
npx serve .

# Or Python:
python -m http.server 8080

# Or Node.js:
npx http-server . -p 8080
```

> ⚠️ Service Workers (and thus PWA install) only work over `https://` or `localhost`, not `file://`.

To test on mobile, connect your phone and computer to the same WiFi, then visit `http://<your-computer-ip>:8080` from your phone's browser.

---

## 📦 Deploy

### GitHub Pages (free — recommended)

```bash
git init
git add .
git commit -m "Init: Random Meal Picker"
git branch -M main
git remote add origin https://github.com/<your-username>/random-meal-picker.git
git push -u origin main
```

Then go to **Settings → Pages** → select `main` branch → Save. Your app will be live at `https://<username>.github.io/random-meal-picker/`.

### Other platforms

| Platform | Setup |
|---|---|
| **Vercel** | Import the repo — zero config needed |
| **Netlify** | Drag & drop the project folder |
| **Cloudflare Pages** | Connect your repo and deploy |

---

## 📱 PWA & Mobile Apps

### Option 1: Install as PWA (recommended, free)

| Platform | Steps |
|---|---|
| **Android (Chrome)** | Open the site → tap the "Add to Home Screen" prompt, or Menu → Add to Home Screen |
| **iPhone (Safari)** | Tap the Share button → "Add to Home Screen" |

Once installed, it works like a native app — full-screen, offline-capable, with its own app icon.

### Option 2: Package as APK

1. Deploy to a public URL
2. Go to [PWABuilder.com](https://www.pwabuilder.com/)
3. Enter your URL → "Package for Stores" → Download `.apk`

### Option 3: Bubblewrap (CLI)

```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://your-domain/manifest.json
bubblewrap build
```

### Option 4: iOS via Capacitor

```bash
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init "Meal Picker" com.yourname.mealpicker
npx cap add ios
# Copy index.html / manifest.json / sw.js into www/
npx cap open ios   # Requires macOS + Xcode
```

---

## 📁 Project Structure

```
random-meal-picker/
├── index.html              # 🎯 The entire app — HTML + CSS + JS (single file)
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker — offline caching & cache-first strategy
├── icon-192x192.png        # PWA app icon (small)
├── icon-512x512.png        # PWA app icon (large)
├── icon-maskable-512x512.png # PWA maskable icon (adaptive shapes)
├── LICENSE
├── README.md               # This file (English)
├── README.zh-CN.md         # 中文版
└── .gitignore
```

Yes, the entire app lives in `index.html`. No build step, no bundler, no package.json — just open and it works.

---

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| **UI** | HTML5 + CSS3 with a custom design-token system (CSS custom properties) |
| **Logic** | Vanilla JavaScript (ES6+), strict mode |
| **Storage** | `localStorage` — data persists per-browser |
| **Offline** | Service Worker with cache-first strategy |
| **Typography** | [Google Fonts — Nunito](https://fonts.google.com/specimen/Nunito) |
| **Frameworks** | None. Zero dependencies. |

### Why zero-dependency?

This app was built to be **simple, fast, and forever-maintainable**. No `node_modules`, no build pipeline, no breaking changes from upstream packages. The entire logic is ~900 lines of readable vanilla JS. It loads instantly and works everywhere.

---

## 🎨 Design System

The visual language is inspired by **night-market street food stalls** — warm paper-white backgrounds, a vibrant coral-orange primary, and each cafeteria gets its own distinct accent color.

| Token | Value |
|---|---|
| Background | `#FFFBF5` (warm paper) |
| Primary | `#FF6B4A` (coral orange) |
| Font | Nunito (rounded, friendly) |
| Corners | 8–32px (generous radius for a soft feel) |
| Shadows | Layered warm-tinted shadows |

### The Slot Machine

The signature interaction is a **slot-machine reel animation** — text rapidly flashes through menu items with a deceleration curve, then lands on the result with a bounce. A burst of confetti particles celebrates the reveal, turning every choice into a small moment of delight.

`prefers-reduced-motion` is respected: all animations are disabled when the user's OS requests it.

---

## 💾 Data

All menu data is stored in your browser's `localStorage` under the key `random_meal_picker_menus` (canteens under `random_meal_picker_canteens`).

### Default Data

On first launch, the app seeds itself with ~50 Chinese dishes across 5 cafeterias + a delivery menu. You can clear, modify, or add to everything.

### Export / Import

Open your browser's DevTools console:

```js
// Export menu data (copies JSON to clipboard)
copy(JSON.stringify(JSON.parse(localStorage.getItem('random_meal_picker_menus')), null, 2))

// Import menu data
localStorage.setItem('random_meal_picker_menus', JSON.stringify(/* paste your JSON */))
// Refresh the page
```

### Reset

To reset everything to defaults, clear the two localStorage keys (`random_meal_picker_menus` and `random_meal_picker_canteens`) and refresh.

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repo
2. **Edit** `index.html` — it's the whole app
3. **Test** by opening it in a browser (and on mobile if possible)
4. **Submit a PR** with a clear description of what you changed and why

### Ideas for contributions

- 🌍 **i18n** — translate the UI to other languages
- 🎨 **More themes** — add alternative color palettes
- 📊 **History / stats** — track what was picked
- 🗳️ **Group voting** — let multiple people vote on what to eat
- 🖼️ **Dish photos** — attach images to menu items

For bugs or feature requests, please [open an issue](https://github.com/noone-sketch/random-meal-picker/issues).

---

## 📄 License

[MIT](./LICENSE) — use it, modify it, share it. Attribution appreciated but not required.

---

<p align="center">
  <sub>Made with ❤️ and 🍚 | <a href="https://noone-sketch.github.io/random-meal-picker/">Live Demo</a></sub>
</p>
