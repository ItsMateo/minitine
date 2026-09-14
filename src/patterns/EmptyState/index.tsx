import { Box, Group, Stack, Text, Title } from "@mantine/core";
import type { ReactNode } from "react";
import classes from "./EmptyState.module.scss";

export interface EmptyStateProps {
	title: string;
	description?: string;
	icon?: ReactNode;
	action?: ReactNode;
}

export function EmptyState({ title, description, icon, action }: EmptyStateProps) {
	return (
		<Box className={classes.root}>
			<Stack
				align="center"
				gap="sm"
				maw={360}
			>
				{icon ? <Box className={classes.icon}>{icon}</Box> : null}
				<Title
					order={4}
					ta="center"
				>
					{title}
				</Title>
				{description ? (
					<Text
						size="sm"
						c="dimmed"
						ta="center"
					>
						{description}
					</Text>
				) : null}
				{action ? <Group mt="xs">{action}</Group> : null}
			</Stack>
		</Box>
	);
}
