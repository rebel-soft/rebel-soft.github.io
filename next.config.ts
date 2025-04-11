import type { NextConfig } from "next";

// 使用 isProd 變數可以讓你在本地開發 (npm run dev) 時不受 basePath 影響。
// const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  // --- 核心設定 ---
  output: "export", // 啟用靜態匯出
  // --- GitHub Pages 特定設定 ---
  // 如果你的倉庫是像 'https://<username>.github.io/<repo-name>/' 這樣的子目錄
  // 你"必須"設定 basePath 和 assetPrefix
  // 如果你的倉庫是 'https://<username>.github.io/' (用戶或組織頁面)，則不需要設定
  // 將 '<repo-name>' 換成你的 GitHub 倉庫名稱
  // basePath: isProd ? "/rebel-soft" : "",
  // assetPrefix: isProd ? "/rebel-soft/" : "",

  // 由於 GitHub Pages 不提供 Next.js 圖片優化伺服器，需要禁用或更換 loader
  images: {
    unoptimized: true, // 最簡單的方式
  },
  // --- 其他你的設定 ---
  reactStrictMode: true, // 啟用 React 嚴格模式
};

export default nextConfig;
