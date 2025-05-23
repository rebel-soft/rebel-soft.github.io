# 專案說明 (Project Description)

這是一個使用 [Next.js](https://nextjs.org/) 框架，並透過 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 初始化的專案。此專案旨在提供一個現代化的網頁應用程式基礎模板，整合了最新的前端技術，並著重於開發者體驗和應用程式效能。

## 技術組合 (Technology Stack)

* **框架 (Framework):** Next.js
* **前端函式庫 (Frontend Library):** React
* **程式語言 (Programming Language):** TypeScript
* **樣式 (Styling):** Tailwind CSS
* **國際化 (Internationalization):** next-intl

## 開發環境建置 (Development Environment Setup)

### 前提條件 (Prerequisites)

請確保您的開發環境已安裝以下軟體：

* Node.js (建議版本：^18.17.0 或 ^20.5.0 或 >=20.11.0)
* npm / yarn / pnpm / bun (任選其一作為套件管理器)

### 安裝與啟動 (Installation and Startup)

1. **下載專案依賴 (Download project dependencies):**

    根據您選擇的套件管理器，執行以下指令之一：

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

2. **啟動開發伺服器 (Start the development server):**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

    開啟瀏覽器並前往 [http://localhost:3000](http://localhost:3000) 查看結果。

    您可以開始編輯 `app/page.tsx` 檔案。當您編輯檔案時，頁面會自動更新。

    此專案使用 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) 自動優化並載入 [Geist](https://vercel.com/font)，這是 Vercel 的新字型系列。

## 資料夾用途分類 (Folder Structure Explanation)

* **`app/`**: 包含應用程式的核心路由、頁面和佈局。Next.js 的 App Router 主要在此運作。
* **`components/`**: 存放可重用的 UI 元件。
* **`public/`**: 用於存放靜態資源，例如圖片、字型等，這些資源可以透過根 URL 直接訪問。
* **`i18n/`**: (如果使用 next-intl 或類似方案) 存放國際化相關的設定檔。
* **`messages/`**: (如果使用 next-intl 或類似方案) 存放不同語言的翻譯檔案 (例如 `en.json`, `zh-TW.json`)。

## 測試方式 (Testing Instructions)

(目前專案尚未配置完整的測試環境，待未來擴充)

若要執行測試 (假設已設定 Jest 或其他測試框架)，通常可以使用以下指令：

```bash
npm test
# or
yarn test
```

## 其餘重點項目 (Other Key Items)

* **國際化 (i18n):** 本專案已初步設定 `next-intl` 以支援多語言。語言設定檔位於 `i18n/`，而翻譯文字檔則存放於 `messages/` 資料夾中。您可以透過修改這些檔案來新增或調整不同語言的內容。
* **字型優化:** 專案已整合 `next/font` 以優化字型載入效能。

## 未來準備擴增功能 (Future Planned Features)

* **完整的單元測試與整合測試 (Comprehensive Unit and Integration Tests):** 引入 Jest 和 React Testing Library 以確保程式碼品質。
* **使用者身份驗證 (User Authentication):** 整合 NextAuth.js 或其他驗證方案。
* **資料庫整合 (Database Integration):** 串接後端資料庫，例如 PostgreSQL 或 MongoDB。
* **狀態管理 (State Management):** 根據需求引入 Zustand 或 Redux Toolkit 等狀態管理工具。
* **更全面的 UI 元件庫 (More Comprehensive UI Component Library):** 開發更多可重用的 UI 元件。
* **CI/CD 流程建置 (CI/CD Pipeline Setup):** 透過 GitHub Actions 或 GitLab CI/CD 自動化測試與部署流程。
