//app/[locale]/about/page.tsx

"use client";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
        <p className="text-lg mb-8">{t("companyIntro")}</p>
        <h2 className="text-2xl font-semibold mb-4">{t("missionTitle")}</h2>
        <p className="text-lg">{t("missionText")}</p>
      </div>
    </section>
  );
}
