import { Box, type BoxProps } from "@mantine/core";
import classes from "./StatusIndicator.module.scss";

export type StatusTone = "neutral" | "success" | "warning" | "danger" | "info";

export interface StatusIndicatorProps extends BoxProps {
	tone?: StatusTone;
	label: string;
	pulse?: boolean;
}

export function StatusIndicator({
	tone = "neutral",
	label,
	pulse = false,
	...props
}: StatusIndicatorProps) {
	return (
		<Box
			component="span"
			className={classes.root}
			data-tone={tone}
			data-pulse={pulse || undefined}
			{...props}
		>
			<span
				className={classes.dot}
				aria-hidden="true"
			/>
			<span className={classes.label}>{label}</span>
		</Box>
	);
}
