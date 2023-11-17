import { useTranslations } from "next-intl";

const Card = ({ name, age }: { name: string; age: number }) => {
	const t = useTranslations("Card");

	return (
		<a
			href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
			className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
			target="_blank"
			rel="noopener noreferrer"
		>
			<h2 className={`mb-3 text-2xl font-semibold capitalize`}>{name}</h2>
			<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
				{t("age")}{" "}
				<span className="inline-block transition-all group-hover:translate-x-1 motion-reduce:transform-none group-hover:mr-2">
					-&gt;
				</span>
				<span className="inline-block transition-all group-hover:text-white text-white motion-reduce:transform-none">
					{age}
				</span>
			</p>
		</a>
	);
};

export default Card;
