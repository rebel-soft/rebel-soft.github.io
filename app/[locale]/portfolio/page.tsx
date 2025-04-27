"use client";
import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("PortfolioPage");

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          {t("title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-10">{t("intro")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Project 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {t("project1.title")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t("project1.description")}
            </p>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {t("project2.title")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t("project2.description")}
            </p>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {t("project3.title")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t("project3.description")}
            </p>
          </div>
          {/* Project 4 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {t("project4.title")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t("project4.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
