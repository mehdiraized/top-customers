"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

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
