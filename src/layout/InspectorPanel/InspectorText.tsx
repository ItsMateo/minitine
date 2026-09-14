import { Text, type TextProps } from "@mantine/core";
import type { ReactNode } from "react";

export type InspectorTextProps = {
	children: ReactNode;
	muted?: boolean;
} & Omit<TextProps, "size" | "c" | "lh" | "children">;

export function InspectorText({ children, muted = false, ...props }: InspectorTextProps) {
	return (
		<Text
			size="sm"
			c={muted ? "dimmed" : undefined}
			lh={1.45}
			{...props}
		>
			{children}
		</Text>
	);
}
