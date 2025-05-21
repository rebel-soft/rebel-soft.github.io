"use client";
import { useTranslations } from "next-intl";

export default function TeamPage() {
  const t = useTranslations("TeamPage");

  return (
    <section className="bg-rebel-black text-rebel-text py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-pixel text-4xl sm:text-5xl text-rebel-neon-green text-center font-bold mb-6">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-rebel-text text-center mb-12">
          {t("intro")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="bg-rebel-card border border-rebel-border rounded-lg p-6 hover:border-rebel-neon-green transition-all duration-300">
            <h2 className="font-pixel text-2xl sm:text-3xl text-rebel-neon-green font-semibold mb-2">
              {t("member1.name")}
            </h2>
            <p className="text-rebel-electric-blue font-semibold text-lg mb-4">
              {t("member1.title")}
            </p>
            <p className="text-rebel-text text-base">
              {t("member1.bio")}
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-rebel-card border border-rebel-border rounded-lg p-6 hover:border-rebel-neon-green transition-all duration-300">
            <h2 className="font-pixel text-2xl sm:text-3xl text-rebel-neon-green font-semibold mb-2">
              {t("member2.name")}
            </h2>
            <p className="text-rebel-electric-blue font-semibold text-lg mb-4">
              {t("member2.title")}
            </p>
            <p className="text-rebel-text text-base">
              {t("member2.bio")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
