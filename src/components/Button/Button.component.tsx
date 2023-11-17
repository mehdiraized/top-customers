import { ReactNode } from "react";
import Link from "next/link";

const buttonStyle =
	"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 cursor-pointer";

const Button = ({
	href,
	onClick,
	children,
}: {
	href?: string;
	onClick?: () => void;
	children: ReactNode;
}) => {
	return href ? (
		<Link href={href} className={buttonStyle}>
			{children}
		</Link>
	) : (
		<button type="button" onClick={onClick} className={buttonStyle}>
			{children}
		</button>
	);
};

export default Button;
