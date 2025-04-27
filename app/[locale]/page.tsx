// app/page.tsx
"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        {t("welcome")}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
        {t("tagline")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/about"
          className="relative inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          {/* glow effect */}
          <span className="absolute inset-0 bg-purple-600 rounded-xl filter blur-xl opacity-50 animate-ping"></span>
          <span className="relative z-10">{t("cta")}</span>
        </Link>
        <Link
          href="/portfolio"
          className="inline-block px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-600 font-medium rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300"
        >
          {t("portfolio")}
        </Link>
      </div>
    </section>
  );
}
