import { getTranslations } from "next-intl/server";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import Card from "@/components/Card";

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: string };
}) {
	const t = await getTranslations({ locale, namespace: "metadata.Home" });

	return {
		title: t("title"),
		description: t("description"),
	};
}

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-around p-24">
			<div className="absolute flex place-items-center before:relative before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left items-center gap-6">
				<LocaleSwitcher />
				<Card name="mehdi" age={18} />
			</div>
		</main>
	);
}
