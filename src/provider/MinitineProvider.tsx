import { MantineProvider, type MantineProviderProps } from "@mantine/core";
import type { ReactNode } from "react";
import { MANTINE_THEME } from "../theme/mantine";

export interface MinitineProviderProps extends Omit<MantineProviderProps, "theme" | "children"> {
	children: ReactNode;
}

export function MinitineProvider({
	children,
	defaultColorScheme = "dark",
	...props
}: MinitineProviderProps) {
	return (
		<MantineProvider
			theme={MANTINE_THEME}
			defaultColorScheme={defaultColorScheme}
			{...props}
		>
			{children}
		</MantineProvider>
	);
}
