import { USERS_GET_API } from "@/application/constants/api.constant";

export const usersGet = async () => {
	const url = USERS_GET_API();
	const headers = { "Content-Type": "application/json" };
	try {
		const res = await fetch(url, {
			headers,
			method: "GET",
			cache: "no-store",
		});
		const json = await res.json();
		if (json.errors) {
			throw new Error("Failed to fetch API");
		}

		return json.data;
	} catch (error) {
		throw new Error("Failed to fetch API");
	}
};
