declare module "@mantine/core" {
	export interface ButtonProps {
		variant?:
			| "filled"
			| "light"
			| "outline"
			| "subtle"
			| "transparent"
			| "white"
			| "default"
			| "minitine";
	}

	export interface PaperProps {
		variant?: "minitine" | "interactive";
	}

	export interface CardProps {
		variant?: "minitine" | "interactive";
	}

	export interface TabsProps {
		variant?: "default" | "outline" | "pills" | "minitine" | "minitine-pills";
	}

	export interface BadgeProps {
		variant?:
			| "minitine"
			| "status"
			| "status-pill"
			| "outline"
			| "light"
			| "filled"
			| "dot"
			| "transparent";
	}

	export interface NavLinkProps {
		variant?: "filled" | "light" | "subtle" | "minitine";
	}

	export interface CheckboxProps {
		variant?: "minitine";
	}

	export interface SwitchProps {
		variant?: "minitine";
	}
}

export interface ShellDimensions {
	sidebarWidth: number;
	inspectorWidth: number;
	titleBarHeight: number;
	pageHeaderHeight: number;
}

export const SHELL_DIMENSIONS: ShellDimensions = {
	sidebarWidth: 190,
	inspectorWidth: 420,
	titleBarHeight: 32,
	pageHeaderHeight: 64,
};
