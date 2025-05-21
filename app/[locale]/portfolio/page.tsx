"use client";
import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("PortfolioPage");

  return (
    <section className="bg-rebel-black text-rebel-text py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="font-pixel text-4xl sm:text-5xl text-rebel-neon-green text-center font-bold mb-6">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-rebel-text text-center mb-12">{t("intro")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-rebel-card border border-rebel-border rounded-lg p-6 flex flex-col justify-between hover:border-rebel-neon-green transition-all duration-300">
            <div>
              <h2 className="font-pixel text-2xl text-rebel-neon-green font-semibold mb-3">
                {t("project1.title")}
              </h2>
              <p className="text-rebel-text text-base mb-4">
                {t("project1.description")}
              </p>
            </div>
            <a
              href="#" // Placeholder link
              className="inline-block mt-auto px-4 py-2 bg-rebel-electric-blue text-rebel-black font-semibold font-pixel text-sm rounded hover:bg-opacity-80 transition-colors duration-300 self-start"
            >
              {t("linkText")}
            </a>
          </div>
          {/* Project 2 */}
          <div className="bg-rebel-card border border-rebel-border rounded-lg p-6 flex flex-col justify-between hover:border-rebel-neon-green transition-all duration-300">
            <div>
              <h2 className="font-pixel text-2xl text-rebel-neon-green font-semibold mb-3">
                {t("project2.title")}
              </h2>
              <p className="text-rebel-text text-base mb-4">
                {t("project2.description")}
              </p>
            </div>
            <a
              href="#" // Placeholder link
              className="inline-block mt-auto px-4 py-2 bg-rebel-electric-blue text-rebel-black font-semibold font-pixel text-sm rounded hover:bg-opacity-80 transition-colors duration-300 self-start"
            >
              {t("linkText")}
            </a>
          </div>
          {/* Project 3 */}
          <div className="bg-rebel-card border border-rebel-border rounded-lg p-6 flex flex-col justify-between hover:border-rebel-neon-green transition-all duration-300">
            <div>
              <h2 className="font-pixel text-2xl text-rebel-neon-green font-semibold mb-3">
                {t("project3.title")}
              </h2>
              <p className="text-rebel-text text-base mb-4">
                {t("project3.description")}
              </p>
            </div>
            <a
              href="#" // Placeholder link
              className="inline-block mt-auto px-4 py-2 bg-rebel-electric-blue text-rebel-black font-semibold font-pixel text-sm rounded hover:bg-opacity-80 transition-colors duration-300 self-start"
            >
              {t("linkText")}
            </a>
          </div>
          {/* Project 4 */}
          <div className="bg-rebel-card border border-rebel-border rounded-lg p-6 flex flex-col justify-between hover:border-rebel-neon-green transition-all duration-300">
            <div>
              <h2 className="font-pixel text-2xl text-rebel-neon-green font-semibold mb-3">
                {t("project4.title")}
              </h2>
              <p className="text-rebel-text text-base mb-4">
                {t("project4.description")}
              </p>
            </div>
            <a
              href="#" // Placeholder link
              className="inline-block mt-auto px-4 py-2 bg-rebel-electric-blue text-rebel-black font-semibold font-pixel text-sm rounded hover:bg-opacity-80 transition-colors duration-300 self-start"
            >
              {t("linkText")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
