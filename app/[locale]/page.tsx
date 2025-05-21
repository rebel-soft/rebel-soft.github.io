// app/page.tsx
"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-rebel-black py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="font-pixel text-5xl sm:text-6xl md:text-7xl text-rebel-neon-green font-bold mb-4">
        {t("welcome")}
      </h1>
      <p className="text-rebel-text text-xl sm:text-2xl md:text-3xl mb-6">
        {t("tagline")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/services"
          className="inline-block bg-rebel-neon-green text-rebel-black font-semibold font-pixel px-8 py-4 rounded-lg hover:bg-opacity-80 transform hover:-translate-y-1 transition-all duration-300"
        >
          {t("cta")}
        </Link>
        <Link
          href="/portfolio"
          className="inline-block border-2 border-rebel-electric-blue text-rebel-electric-blue font-semibold font-pixel px-8 py-4 rounded-lg hover:bg-rebel-electric-blue hover:text-rebel-black transition-all duration-300"
        >
          {t("portfolio")}
        </Link>
      </div>
    </section>
  );
}
