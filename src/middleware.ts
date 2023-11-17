import createMiddleware from "next-intl/middleware";

import {
	locales,
	defaultLocale,
} from "@/application/constants/languages.constant";

export default createMiddleware({
	locales,
	defaultLocale,
	localeDetection: false,
});

export const config = {
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
