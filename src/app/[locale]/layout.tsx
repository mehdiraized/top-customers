import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/application/constants/languages.constant";

const inter = Inter({ subsets: ["latin"] });

type Props = {
	children: React.ReactNode;
	params: { locale: string };
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
	if (!locales.includes(locale as any)) notFound();

	unstable_setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}
