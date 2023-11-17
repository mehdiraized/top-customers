"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/Button/Button.component";

export default function HandleErrorUserFetch({
	title,
	buttonLabel,
}: {
	title: string;
	buttonLabel: string;
}) {
	const router = useRouter();

	return (
		<>
			{title}
			<Button
				onClick={() => {
					router.refresh();
				}}
			>
				{buttonLabel}
			</Button>
		</>
	);
}
