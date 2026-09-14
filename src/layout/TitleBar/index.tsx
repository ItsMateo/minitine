import { Box, Group } from "@mantine/core";
import type { ReactNode } from "react";
import classes from "./TitleBar.module.scss";

export interface TitleBarProps {
	brand?: ReactNode;
	status?: ReactNode;
	actions?: ReactNode;
}

export function TitleBar({ brand, status, actions }: TitleBarProps) {
	return (
		<Box className={classes.root}>
			<Group
				gap="sm"
				className={classes.brand}
			>
				{brand}
			</Group>
			<div className={classes.status}>{status}</div>
			<Group
				gap="xs"
				className={classes.actions}
			>
				{actions}
			</Group>
		</Box>
	);
}
