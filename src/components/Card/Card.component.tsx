import { useTranslations } from "next-intl";
import Link from "next/link";

const Card = ({ name, age }: { name: string; age: number }) => {
	const t = useTranslations("Card");

	return (
		<Link
			href=""
			className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
		</Link>
	);
};

export default Card;
