//app/[locale]/about/page.tsx

"use client";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          {t("title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          {t("companyIntro")}
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          {t("missionTitle")}
        </h2>
        <p className="text-base sm:text-lg md:text-xl">{t("missionText")}</p>
      </div>
    </section>
  );
}
