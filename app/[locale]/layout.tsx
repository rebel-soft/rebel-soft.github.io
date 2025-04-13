// app/[locale]/layout.tsx

import "../globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ["en", "tw"].map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params; // Await the params to extract locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className="bg-gray-100">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="p-5">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
