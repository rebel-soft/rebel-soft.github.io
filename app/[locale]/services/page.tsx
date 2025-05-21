"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  const services = [
    { titleKey: "service1.title", descriptionKey: "service1.description" },
    { titleKey: "service2.title", descriptionKey: "service2.description" },
    { titleKey: "service3.title", descriptionKey: "service3.description" },
    { titleKey: "service4.title", descriptionKey: "service4.description" },
  ];

  return (
    <section className="bg-rebel-black text-rebel-text py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-pixel text-4xl sm:text-5xl text-rebel-neon-green text-center font-bold mb-6">
          {t("title")}
        </h1>
        <p className="text-lg sm:text-xl text-rebel-text text-center mb-12">
          {t("intro")}
        </p>

        {services.map((service, index) => (
          <div key={index}>
            <h2 className="font-pixel text-3xl text-rebel-electric-blue mb-3">
              {t(service.titleKey)}
            </h2>
            <p className="text-rebel-text text-lg mb-8">
              {t(service.descriptionKey)}
            </p>
            {index < services.length - 1 && (
              <hr className="border-rebel-border my-8" />
            )}
          </div>
        ))}

        <Link
          href="/contact"
          className="mt-12 mx-auto block w-max px-8 py-4 bg-rebel-neon-green text-rebel-black font-semibold font-pixel text-lg rounded hover:bg-opacity-80 transition-colors duration-300"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
