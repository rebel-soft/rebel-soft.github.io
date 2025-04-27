"use client";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
        <h2 className="text-2xl font-semibold mb-6">{t("subtitle")}</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            <span className="font-semibold">{t("emailLabel")}:</span>{" "}
            <a
              href={`mailto:${t("email")}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
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
