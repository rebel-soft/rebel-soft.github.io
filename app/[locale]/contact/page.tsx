"use client";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <section className="relative min-h-screen bg-rebel-black text-rebel-text py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* decorative blobs */}
      <div className="hidden md:block absolute -top-20 -left-20 w-64 h-64 bg-rebel-neon-green rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
      <div className="hidden md:block absolute -bottom-20 -right-10 w-72 h-72 bg-rebel-electric-blue rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
      <div className="container mx-auto max-w-3xl relative z-10">
        <h1 className="font-pixel text-4xl sm:text-5xl text-rebel-neon-green text-center font-bold mb-6">
          {t("title")}
        </h1>
        <h2 className="font-sans text-xl sm:text-2xl text-rebel-text text-center font-semibold mb-12">
          {t("subtitle")}
        </h2>
        <div className="mx-auto max-w-lg bg-rebel-card border border-rebel-border p-6 sm:p-8 rounded-lg transition-all duration-300 hover:border-rebel-magenta">
          <p className="text-lg mb-4">
            <span className="font-pixel text-rebel-electric-blue mr-2">{t("emailLabel")}:</span>
            <a
              href={`mailto:${t("email")}`}
              className="inline-block px-6 py-2 bg-rebel-neon-green text-rebel-black font-semibold rounded hover:bg-opacity-80 transition-all duration-300"
            >
              {t("email")}
            </a>
          </p>
          <p className="text-lg mb-4">
            <span className="font-pixel text-rebel-electric-blue mr-2">{t("phoneLabel")}:</span>
            {t("phone")}
          </p>
          <p className="text-lg">
            <span className="font-pixel text-rebel-electric-blue mr-2">{t("addressLabel")}:</span>
            {t("address")}
          </p>
        </div>
      </div>
    </section>
  );
}
