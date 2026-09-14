import { type ElementProps, Image, type ImageProps, useMantineColorScheme } from "@mantine/core";

export interface ThemeImageProps
	extends Omit<ImageProps, "src">,
		ElementProps<"img", keyof ImageProps> {
	light: string;
	dark: string;
	scheme?: "dark" | "light";
}

export function ThemeImage({ light, dark, scheme, ...props }: ThemeImageProps) {
	const { colorScheme } = useMantineColorScheme();
	const resolved = scheme ?? (colorScheme === "dark" ? "dark" : "light");

	return (
		<Image
			src={resolved === "dark" ? dark : light}
			{...props}
		/>
	);
}
