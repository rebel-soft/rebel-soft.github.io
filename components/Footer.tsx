import React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-rebel-black text-rebel-text border-t border-rebel-border py-8 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-pixel text-rebel-neon-green mb-2">{t("rebelsoftTitle")}</h3>
          <p className="text-sm">{t("copyright")}</p>
        </div>
        <div>
          <h4 className="font-pixel text-rebel-electric-blue mb-2">{t("linksTitle")}</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:text-rebel-neon-green hover:underline">
                {t("homeLink")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-rebel-neon-green hover:underline">
                {t("aboutLink")}
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-rebel-neon-green hover:underline">
                {t("teamLink")}
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-rebel-neon-green hover:underline">
                {t("portfolioLink")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-rebel-neon-green hover:underline">
                {t("contactLink")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-pixel text-rebel-electric-blue mb-2">{t("contactTitle")}</h4>
          <p className="text-sm">{t("emailLabel")}</p>
          <p className="text-sm">{t("phoneLabel")}</p>
        </div>
      </div>
    </footer>
  );
}
