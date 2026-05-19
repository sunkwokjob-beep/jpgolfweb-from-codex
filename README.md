# jpgolfclub 首頁 Prototype

以 Next.js App Router、React components 和 Tailwind CSS 建立的日系高爾夫球桿電商首頁第一版。

## 啟動

```bash
npm install
npm run dev
```

然後開啟 `http://localhost:3000`。

## 主要結構

- `app/page.tsx`：首頁組合
- `app/globals.css`：全站樣式與促銷條紋效果
- `components/`：Header、Hero、Coupon、Campaign、Product、Ranking、Service、Footer 元件
- `data/products.ts`：mock 商品資料

## GitHub Pages

推送到 `main` 後，`.github/workflows/deploy.yml` 會自動 build 靜態網站並部署到 GitHub Pages。若 repo 是一般 project page，設定會自動加上 repo name 作為 base path；若 repo 是 `username.github.io`，則使用根目錄路徑。
