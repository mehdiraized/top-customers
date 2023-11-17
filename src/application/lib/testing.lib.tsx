import React from "react";
import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import messages from "@/application/locales/en.locale.json";

const IntlWrapper: React.FC = ({
	children,
}: React.PropsWithChildren<Record<string, any>>) => {
	return (
		<NextIntlClientProvider locale="en" messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
};

const customRender = (
	ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	options = {}
) =>
	render(ui, {
		wrapper: IntlWrapper,
		...options,
	});

export * from "@testing-library/react";
export { customRender as render };
