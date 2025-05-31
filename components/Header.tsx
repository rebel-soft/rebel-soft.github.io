// components/Header.tsx
"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import styles from "./Header.module.scss";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header className="bg-rebel-card border-b border-rebel-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className={styles.headerContainer}>
          <nav className={styles.navigation}>
            <Link
              href="/"
              className={`text-rebel-text font-medium rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5 mr-3 md:mr-4 lg:mr-5 mb-2 ${styles.navLink}`}
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className={`text-rebel-text font-medium rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5 mr-3 md:mr-4 lg:mr-5 mb-2 ${styles.navLink}`}
            >
              {t("about")}
            </Link>
            <Link
              href="/services"
              className={`text-rebel-text font-medium rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5 mr-3 md:mr-4 lg:mr-5 mb-2 ${styles.navLink}`}
            >
              {t("services")}
            </Link>
            <Link
              href="/blog"
              className={`text-rebel-text font-medium rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5 mr-3 md:mr-4 lg:mr-5 mb-2 ${styles.navLink}`}
            >
              {t("blog")}
            </Link>
            <Link
              href="/team"
              className={`text-rebel-text font-medium rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5 mr-3 md:mr-4 lg:mr-5 mb-2 ${styles.navLink}`}
            >
              {t("team")}
            </Link>
            <Link
              href="/contact"
              className={`text-rebel-text font-medium rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5 mr-3 md:mr-4 lg:mr-5 mb-2 ${styles.navLink}`}
            >
              {t("contact")}
            </Link>
            <Link
              href="/portfolio"
              className={`text-rebel-text font-medium rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5 mb-2 ${styles.navLink}`}
            >
              {t("portfolio")}
            </Link>
          </nav>
          <div className={styles.localeSwitcherWrapper}>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
