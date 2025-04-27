"use client";
import { useTranslations } from "next-intl";

export default function TeamPage() {
  const t = useTranslations("TeamPage");

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{t("member1.name")}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {t("member1.title")}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {t("member1.bio")}
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{t("member2.name")}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {t("member2.title")}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {t("member2.bio")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
