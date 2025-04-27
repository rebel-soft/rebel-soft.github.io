// components/LocaleSwitcher.tsx

"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative inline-block">
      <select
        className="appearance-none w-full bg-purple-100 dark:bg-gray-700 text-purple-700 dark:text-gray-200 border-2 border-purple-500 dark:border-purple-400 rounded px-4 py-2 pr-8 shadow hover:bg-purple-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
        title="Select language"
        defaultValue={locale}
        onChange={onLocaleChange}
      >
        {["en", "tw"].map((lang) => (
          <option
            key={lang}
            value={lang}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {t("locale", { locale: lang })}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          className="w-5 h-5 text-purple-600 dark:text-gray-200"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
