"use client";
import { useTranslations } from "next-intl";

export default function TeamPage() {
  const t = useTranslations("TeamPage");

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          {t("title")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {t("member1.name")}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
              {t("member1.title")}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t("member1.bio")}
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {t("member2.name")}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
              {t("member2.title")}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t("member2.bio")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
