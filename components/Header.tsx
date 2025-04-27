// components/Header.tsx
"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <nav className="flex space-x-4">
          <Link
            href="/"
            className="text-white font-medium px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="text-white font-medium px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            {t("about")}
          </Link>
          <Link
            href="/team"
            className="text-white font-medium px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            {t("team")}
          </Link>
          <Link
            href="/contact"
            className="text-white font-medium px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            {t("contact")}
          </Link>
          <Link
            href="/portfolio"
            className="text-white font-medium px-4 py-2 rounded hover:bg-purple-700 transition-colors"
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
