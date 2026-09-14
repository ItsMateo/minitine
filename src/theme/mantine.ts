import {
	ActionIcon,
	Alert,
	Badge,
	Button,
	Card,
	Checkbox,
	createTheme,
	Divider,
	Drawer,
	defaultVariantColorsResolver,
	type MantineThemeOverride,
	Modal,
	NavLink,
	Paper,
	Progress,
	rem,
	Stepper,
	Switch,
	Tabs,
	Tooltip,
} from "@mantine/core";

export const MANTINE_THEME: MantineThemeOverride = createTheme({
	primaryColor: "neutral",
	autoContrast: true,
	primaryShade: { light: 9, dark: 8 },
	black: "#000000",
	white: "#FFFFFF",
	fontFamily:
		'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
	fontFamilyMonospace:
		'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
	headings: {
		fontWeight: "600",
		sizes: {
			h1: { fontSize: rem(24), lineHeight: "1.2" },
			h2: { fontSize: rem(20), lineHeight: "1.25" },
			h3: { fontSize: rem(18), lineHeight: "1.3" },
			h4: { fontSize: rem(16), lineHeight: "1.35" },
		},
	},
	colors: {
		neutral: [
			"#FAFAFA",
			"#F4F4F5",
			"#E4E4E7",
			"#D4D4D8",
			"#A1A1AA",
			"#71717A",
			"#52525B",
			"#3F3F46",
			"#27272A",
			"#18181B",
		],
	},
	radius: {
		xs: rem(4),
		sm: rem(6),
		md: rem(8),
		lg: rem(12),
		xl: rem(16),
	},
	defaultRadius: "sm",
	spacing: {
		xs: rem(6),
		sm: rem(8),
		md: rem(12),
		lg: rem(16),
		xl: rem(24),
	},
	variantColorResolver: (input) => {
		const color = input.color ?? input.theme.primaryColor;
		const isPrimary = color === input.theme.primaryColor;
		const isThemeColor = color in input.theme.colors;

		// A translucent wash of one color. The background below it stays visible.
		const tint = (base: string, text: string, opacity: number) => ({
			background: `color-mix(in srgb, ${base} ${opacity}%, transparent)`,
			hover: `color-mix(in srgb, ${base} ${opacity + 6}%, transparent)`,
			color: text,
			border: `1px solid color-mix(in srgb, ${base} ${opacity * 2}%, transparent)`,
		});

		if (input.variant === "status" || input.variant === "status-pill") {
			const textColor = `var(--mantine-color-${input.color ?? "blue"}-text)`;

			if (input.variant === "status") {
				return {
					background: "transparent",
					hover: "transparent",
					color: textColor,
					border: "1px solid transparent",
				};
			}

			return tint(textColor, textColor, 12);
		}

		// The filled variant with the primary color is the accent color. It is almost
		// white in the dark scheme and almost black in the light scheme. The Mantine
		// function cannot read the color scheme. Thus it gives white text in the two
		// schemes, and the text is not legible on the light accent color.
		if (input.variant === "filled" && isPrimary) {
			return {
				background: "var(--minitine-color-accent)",
				hover: "color-mix(in srgb, var(--minitine-color-accent) 92%, var(--minitine-color-text-muted))",
				color: "var(--minitine-color-accent-foreground)",
				border: "1px solid var(--minitine-color-accent)",
			};
		}

		// Mantine mixes the light variant with its own background color. That result is
		// too dark on this background. Use a translucent wash of the same color.
		if (input.variant === "light") {
			if (isPrimary) {
				return tint("var(--minitine-color-accent)", "var(--minitine-color-text)", 12);
			}

			if (isThemeColor) {
				const textColor = `var(--mantine-color-${color}-text)`;
				return tint(textColor, textColor, 12);
			}
		}

		return defaultVariantColorsResolver(input);
	},
	components: {
		ActionIcon: ActionIcon.extend({
			defaultProps: {
				variant: "subtle",
			},
		}),
		Alert: Alert.extend({
			defaultProps: {
				variant: "light",
			},
		}),
		Button: Button.extend({
			defaultProps: {
				variant: "minitine",
			},
		}),
		Badge: Badge.extend({
			defaultProps: {
				variant: "minitine",
				radius: "sm",
			},
		}),
		Card: Card.extend({
			defaultProps: {
				variant: "minitine",
			},
		}),
		Paper: Paper.extend({
			defaultProps: {
				variant: "minitine",
			},
		}),
		Tooltip: Tooltip.extend({
			defaultProps: {
				withArrow: true,
			},
		}),
		Modal: Modal.extend({
			defaultProps: {
				centered: true,
				padding: "lg",
			},
		}),
		Drawer: Drawer.extend({
			defaultProps: {
				position: "right",
			},
		}),
		Progress: Progress.extend({
			defaultProps: {
				color: "var(--minitine-color-accent)",
			},
		}),
		Stepper: Stepper.extend({
			defaultProps: {
				size: "sm",
			},
		}),
		Divider: Divider.extend({
			defaultProps: {
				color: "var(--minitine-color-border)",
			},
		}),
		NavLink: NavLink.extend({
			defaultProps: {
				variant: "minitine",
			},
		}),
		Tabs: Tabs.extend({
			defaultProps: {
				variant: "minitine",
			},
		}),
		Checkbox: Checkbox.extend({
			defaultProps: {
				variant: "minitine",
				size: "xs",
			},
		}),
		Switch: Switch.extend({
			defaultProps: {
				variant: "minitine",
			},
		}),
	},
});
