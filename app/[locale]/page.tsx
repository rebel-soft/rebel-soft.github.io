// app/page.tsx
"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        {t("welcome")}
      </h1>
      <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
        {t("tagline")}
      </p>
      <Link
        href="/about"
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        {t("cta")}
      </Link>
    </section>
  );
}
