import { DocsContainer, type DocsContainerProps } from "@storybook/addon-docs/blocks";
import { type ReactNode, useEffect, useState } from "react";
import { GLOBALS_UPDATED, SET_GLOBALS } from "storybook/internal/core-events";
import { addons } from "storybook/preview-api";
import { themes } from "storybook/theming";

type Globals = { globals?: Record<string, unknown> };

function readScheme(globals: Record<string, unknown> | undefined): "light" | "dark" {
	return globals?.theme === "light" ? "light" : "dark";
}

/** The first render occurs before the channel sends the globals. Read the URL. */
function readSchemeFromUrl(): "light" | "dark" {
	const globals = new URLSearchParams(window.location.search).get("globals") ?? "";
	return /(^|;)theme:light(;|$)/.test(globals) ? "light" : "dark";
}

/** A docs page in the scheme that the toolbar control selects. */
export function ThemedDocsContainer({
	children,
	context,
}: DocsContainerProps & { children: ReactNode }) {
	const [scheme, setScheme] = useState<"light" | "dark">(readSchemeFromUrl);

	useEffect(() => {
		const channel = addons.getChannel();
		const update = ({ globals }: Globals) => setScheme(readScheme(globals));

		channel.on(SET_GLOBALS, update);
		channel.on(GLOBALS_UPDATED, update);

		return () => {
			channel.off(SET_GLOBALS, update);
			channel.off(GLOBALS_UPDATED, update);
		};
	}, []);

	return (
		<DocsContainer
			context={context}
			theme={scheme === "light" ? themes.light : themes.dark}
		>
			{children}
		</DocsContainer>
	);
}
