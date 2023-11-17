import { useLocale, useTranslations } from "next-intl";

import Button from "@/components/Button";

export default function LocaleSwitcher() {
	const t = useTranslations("LocaleSwitcher");
	const locale = useLocale();
	const otherLocale = locale === "en" ? "de" : "en";

	return (
		<Button href={`/${otherLocale}`}>
			{t("switchLocale", { locale: otherLocale })}
		</Button>
	);
}
