"use client";
import "tailwindcss/tailwind.css";
import { ReduxProvider } from "../../redux/provider";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { NextIntlClientProvider, createTranslator, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { Source_Serif_4, Poppins } from "@next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-sourceSerif",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["en", "fr"].map((locale) => ({ locale }));
}
export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    title: t("LocaleLayout.title"),
  };
}

export const metadata: Metadata = {
  title: "Islamic Hub",
};

export default async function LocalLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/IslamicHub.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        suppressHydrationWarning={true}
        className={` bg-primary-orange-light ${poppins.variable} ${sourceSerif.variable}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <ToastContainer limit={1} />
            {/* <Navbar /> */}
            {children}
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
