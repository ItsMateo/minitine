import { Box, Group } from "@mantine/core";
import type { ReactNode } from "react";
import classes from "./FilterBar.module.scss";

export interface FilterBarProps {
	leading?: ReactNode;
	children?: ReactNode;
	trailing?: ReactNode;
}

export function FilterBar({ leading, children, trailing }: FilterBarProps) {
	return (
		<Box className={classes.root}>
			{leading ? <div className={classes.leading}>{leading}</div> : null}
			{children ? (
				<Group
					gap="xs"
					className={classes.filters}
					wrap="wrap"
				>
					{children}
				</Group>
			) : null}
			{trailing ? <div className={classes.trailing}>{trailing}</div> : null}
		</Box>
	);
}
