// components/Header.tsx
"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header className="bg-rebel-card border-b border-rebel-border sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <nav className="flex space-x-4">
          <Link
            href="/"
            className="text-rebel-text font-medium px-4 py-2 rounded hover:text-rebel-neon-green transition-colors"
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="text-rebel-text font-medium px-4 py-2 rounded hover:text-rebel-neon-green transition-colors"
          >
            {t("about")}
          </Link>
          <Link
            href="/services"
            className="text-rebel-text font-medium px-4 py-2 rounded hover:text-rebel-neon-green transition-colors"
          >
            {t("services")}
          </Link>
          <Link
            href="/blog"
            className="text-rebel-text font-medium px-4 py-2 rounded hover:text-rebel-neon-green transition-colors"
          >
            {t("blog")}
          </Link>
          <Link
            href="/team"
            className="text-rebel-text font-medium px-4 py-2 rounded hover:text-rebel-neon-green transition-colors"
          >
            {t("team")}
          </Link>
          <Link
            href="/contact"
            className="text-rebel-text font-medium px-4 py-2 rounded hover:text-rebel-neon-green transition-colors"
          >
            {t("contact")}
          </Link>
          <Link
            href="/portfolio"
            className="text-rebel-text font-medium px-4 py-2 rounded hover:text-rebel-neon-green transition-colors"
          >
            {t("portfolio")}
          </Link>
        </nav>
        <div className="">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
