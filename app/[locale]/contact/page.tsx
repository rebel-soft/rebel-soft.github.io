"use client";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* decorative blobs */}
      <div className="hidden md:block absolute -top-20 -left-20 w-64 h-64 bg-pink-300 rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
      <div className="hidden md:block absolute -bottom-20 -right-10 w-72 h-72 bg-indigo-300 rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
      <div className="container mx-auto max-w-3xl relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">{t("title")}</h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          {t("subtitle")}
        </h2>
        <div className="mx-auto max-w-lg bg-white dark:bg-gray-900 bg-gradient-to-r from-white to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <p className="text-lg mb-4">
            <span className="font-semibold">{t("emailLabel")}:</span>{" "}
            <a
              href={`mailto:${t("email")}`}
              className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t("email")}
            </a>
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">{t("phoneLabel")}:</span>{" "}
            {t("phone")}
          </p>
          <p className="text-lg">
            <span className="font-semibold">{t("addressLabel")}:</span>{" "}
            {t("address")}
          </p>
        </div>
      </div>
    </section>
  );
}
