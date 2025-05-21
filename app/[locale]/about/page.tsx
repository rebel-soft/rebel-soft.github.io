//app/[locale]/about/page.tsx

"use client";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <section className="bg-rebel-black text-rebel-text py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-pixel text-4xl sm:text-5xl text-rebel-neon-green text-center font-bold mb-12">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-center mb-12">
          {t("companyIntro")}
        </p>
        <hr className="border-rebel-border my-12" />
        <h2 className="font-pixel text-3xl sm:text-4xl text-rebel-electric-blue font-semibold mb-6">
          {t("missionTitle")}
        </h2>
        <p className="text-lg mb-12">{t("missionText")}</p>
        <hr className="border-rebel-border my-12" />
        <h2 className="font-pixel text-3xl sm:text-4xl text-rebel-electric-blue font-semibold mb-6">
          {t("valuesTitle")}
        </h2>
        <ul className="list-none space-y-4 text-lg mb-8">
          <li>{t("value1")}</li>
          <li>{t("value2")}</li>
          <li>{t("value3")}</li>
          <li>{t("value4")}</li>
        </ul>
      </div>
    </section>
  );
}
