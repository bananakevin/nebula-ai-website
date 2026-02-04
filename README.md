# Nebula AI 介紹網站

下一代 AI 代理人協作系統的官方介紹網站

## 🌟 特色

- 📱 響應式設計 - 支援手機、平板、桌面
- ⚡ 快速載入 - 使用 Vite 建置
- 🎨 現代化 UI - Tailwind CSS + React
- 🔄 互動式簡報 - 滑動瀏覽平台介紹
- 📖 完整使用說明 - 五步驟快速上手

## 🛠️ 技術棧

- **框架**: React 18
- **建置工具**: Vite
- **樣式**: Tailwind CSS
- **圖示**: Lucide React
- **部署**: GitHub Pages

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

訪問 http://localhost:5173

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 📦 部署到 GitHub Pages

### 方法一：自動部署（推薦）

```bash
npm run deploy
```

### 方法二：手動部署

1. 建置專案：
```bash
npm run build
```

2. 將 `dist` 目錄推送到 `gh-pages` 分支

## 📂 專案結構

```
nebula-ai-website/
├── public/              # 靜態資源
├── src/
│   ├── components/      # React 組件
│   │   ├── Hero.jsx     # 首頁英雄區
│   │   ├── Features.jsx # 核心功能展示
│   │   ├── Presentation.jsx  # 簡報內容
│   │   ├── HowToUse.jsx # 使用說明
│   │   └── Footer.jsx   # 頁尾
│   ├── App.jsx          # 主應用組件
│   ├── main.jsx         # 應用入口
│   └── index.css        # 全域樣式
├── index.html           # HTML 模板
├── package.json         # 依賴配置
├── vite.config.js       # Vite 配置
├── tailwind.config.js   # Tailwind 配置
└── README.md            # 專案說明
```

## 🎨 自訂配置

### 修改主題色彩

編輯 `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'nebula-blue': '#0066FF',
      'nebula-purple': '#6366F1',
      'nebula-dark': '#0F172A',
    },
  },
}
```

### 修改基礎路徑

如果要部署到非根目錄，編輯 `vite.config.js`:

```javascript
export default defineConfig({
  base: '/your-repo-name/',
})
```

## 📝 內容來源

網站內容基於以下文件：
- Nebula AI 完整簡報內容
- 平台使用說明
- 技術架構文件

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

MIT License

## 🔗 相關連結

- [Nebula AI 官網](https://nebula.gg)
- [文件](https://nebula.gg/docs)
- [社群](https://nebula.gg/community)

---

Made with ❤️ by Nebula AI Team
