import { Group, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface BoardColumnProps {
	title: string;
	count: number;
	children: ReactNode;
}

export function BoardColumn({ title, count, children }: BoardColumnProps) {
	return (
		<Stack
			gap="sm"
			w={248}
			style={{ flexShrink: 0 }}
		>
			<Group
				justify="space-between"
				gap="xs"
			>
				<Text
					size="sm"
					fw={600}
				>
					{title}
				</Text>
				<Text
					size="xs"
					c="dimmed"
				>
					{count}
				</Text>
			</Group>
			{children}
		</Stack>
	);
}

export interface BoardZoneProps {
	label: string;
	children: ReactNode;
}

export function BoardZone({ label, children }: BoardZoneProps) {
	return (
		<Stack
			gap="sm"
			style={{ flexShrink: 0 }}
		>
			<Text
				size="xs"
				fw={700}
				tt="uppercase"
				lts={0.6}
				c="dimmed"
			>
				{label}
			</Text>
			<Group
				align="flex-start"
				gap="md"
				wrap="nowrap"
			>
				{children}
			</Group>
		</Stack>
	);
}
