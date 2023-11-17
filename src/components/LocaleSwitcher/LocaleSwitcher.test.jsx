import React from "react";
import { screen } from "@testing-library/react";
import { render } from "@/application/lib/testing.lib";
import LocaleSwitcher from "./LocaleSwitcher.component";

test("renders LocaleSwitcher component", () => {
	render(<LocaleSwitcher />);
	expect(screen.getByText("Switch to German")).toBeInTheDocument();
});
