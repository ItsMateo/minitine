export const tokens = {
	color: {
		background: "var(--minitine-color-background)",
		surface: "var(--minitine-color-surface)",
		surfaceRaised: "var(--minitine-color-surface-raised)",
		border: "var(--minitine-color-border)",
		borderStrong: "var(--minitine-color-border-strong)",
		text: "var(--minitine-color-text)",
		textMuted: "var(--minitine-color-text-muted)",
		textSubtle: "var(--minitine-color-text-subtle)",
		accent: "var(--minitine-color-accent)",
		accentForeground: "var(--minitine-color-accent-foreground)",
		focus: "var(--minitine-color-focus)",
	},
	space: {
		sidebar: "var(--minitine-sidebar-width)",
		inspector: "var(--minitine-inspector-width)",
		titleBar: "var(--minitine-titlebar-height)",
		pageHeader: "var(--minitine-page-header-height)",
	},
	radius: {
		sm: "var(--minitine-radius-sm)",
		md: "var(--minitine-radius-md)",
	},
	motion: {
		fast: "var(--minitine-motion-fast)",
		normal: "var(--minitine-motion-normal)",
	},
} as const;

export type MinitineTokens = typeof tokens;
