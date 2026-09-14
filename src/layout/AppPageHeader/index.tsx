import { Box, Group, Text, Title } from "@mantine/core";
import type { ReactNode } from "react";
import classes from "./AppPageHeader.module.scss";

export interface AppPageHeaderProps {
	title: ReactNode;
	description?: ReactNode;
	meta?: ReactNode;
	actions?: ReactNode;
	tabs?: ReactNode;
}

export function AppPageHeader({ title, description, meta, actions, tabs }: AppPageHeaderProps) {
	return (
		<Box className={classes.root}>
			<div className={classes.top}>
				<div className={classes.leading}>
					<Title order={3}>{title}</Title>
					{description ? (
						<Text
							size="sm"
							c="dimmed"
							className={classes.description}
						>
							{description}
						</Text>
					) : null}
					{meta ? <div className={classes.meta}>{meta}</div> : null}
				</div>
				{actions ? (
					<Group
						gap="sm"
						className={classes.actions}
					>
						{actions}
					</Group>
				) : null}
			</div>
			{tabs ? <div className={classes.tabs}>{tabs}</div> : null}
		</Box>
	);
}
