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
        <nav className="flex space-x-8">
          <Link
            href="/"
            className="text-rebel-text font-medium px-4 py-2 rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5"
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="text-rebel-text font-medium px-4 py-2 rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5"
          >
            {t("about")}
          </Link>
          <Link
            href="/services"
            className="text-rebel-text font-medium px-4 py-2 rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5"
          >
            {t("services")}
          </Link>
          <Link
            href="/blog"
            className="text-rebel-text font-medium px-4 py-2 rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5"
          >
            {t("blog")}
          </Link>
          <Link
            href="/team"
            className="text-rebel-text font-medium px-4 py-2 rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5"
          >
            {t("team")}
          </Link>
          <Link
            href="/contact"
            className="text-rebel-text font-medium px-4 py-2 rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5"
          >
            {t("contact")}
          </Link>
          <Link
            href="/portfolio"
            className="text-rebel-text font-medium px-4 py-2 rounded border border-rebel-border hover:bg-rebel-black hover:text-rebel-neon-green transition-all duration-200 ease-in-out hover:shadow-neon-glow-green hover:-translate-y-0.5"
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
