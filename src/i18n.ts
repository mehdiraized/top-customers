import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./application/locales/${locale}.locale.json`))
		.default,
}));
