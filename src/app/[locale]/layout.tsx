import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { useLocale } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

type Props = {
	children: React.ReactNode;
	params: { locale: string };
};

export default function LocaleLayout({ children }: Props) {
	const locale = useLocale();

	return (
		<html lang={locale}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
