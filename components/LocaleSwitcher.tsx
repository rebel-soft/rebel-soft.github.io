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
    <select
      title="Select language"
      defaultValue={locale}
      onChange={onLocaleChange}
    >
      {["en", "tw"].map((lang) => (
        <option className="bg-purple-400 shadow" key={lang} value={lang}>
          {t("locale", { locale: lang })}
        </option>
      ))}
    </select>
  );
}
