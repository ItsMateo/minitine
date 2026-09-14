declare module "@mantine/core" {
	type ExtendedCustomColors = "neutral" | import("@mantine/core").DefaultMantineColor;

	export interface MantineThemeColorsOverride {
		colors: Record<ExtendedCustomColors, import("@mantine/core").MantineColorsTuple>;
	}
}
