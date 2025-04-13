import { hasLocale } from "next-intl";
import { routing } from "./routing";

const getStaticConfig = async (locale: string) => {
  const resolvedLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`@/messages/${resolvedLocale}.json`)).default,
  };
};

export default getStaticConfig;
