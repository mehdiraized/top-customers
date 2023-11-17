import React from "react";
import { useRouter } from "next/navigation";

import { render } from "@/application/lib/testing.lib";
import ListUsers from "@/components/ListUsers/ListUsers.component";
import HandleErrorUserFetch from "@/infrastructure/api/User/users.api.error";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

test("renders user cards when users has data", () => {
	const users = {
		items: [
			{ names: "Mehdi Rezaei", age: 28 },
			{ names: "Brand", age: 30 },
		],
	};

	const { getByText } = render(
		<ListUsers
			users={users}
			errors={{ title: "Error fetching users", buttonLabel: "Fetch Again" }}
		/>
	);

	expect(getByText("Mehdi Rezaei")).toBeInTheDocument();
	expect(getByText("28")).toBeInTheDocument();
	expect(getByText("Brand")).toBeInTheDocument();
	expect(getByText("30")).toBeInTheDocument();
});

test("renders error message when users are not present", () => {
	const users = undefined;

	const { getByText } = render(
		<ListUsers
			users={users}
			errors={{ title: "Error fetching users", buttonLabel: "Fetch Again" }}
		/>
	);

	expect(getByText("Error fetching users")).toBeInTheDocument();
	expect(getByText("Fetch Again")).toBeInTheDocument();
});

test("renders HandleErrorUserFetch component with correct title and button label", async () => {
	const { getByText } = render(
		<HandleErrorUserFetch title="Error Title" buttonLabel="Text Button" />
	);

	expect(getByText("Error Title")).toBeInTheDocument();
	expect(getByText("Text Button")).toBeInTheDocument();
});
