import { Badge, Box, Group, type MantineColor, Text } from "@mantine/core";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

export interface DetailRowProps {
	label: string;
	children: ReactNode;
}

export function DetailRow({ label, children }: DetailRowProps) {
	return (
		<Group
			align="flex-start"
			gap="md"
			wrap="nowrap"
		>
			<Text
				size="sm"
				c="dimmed"
				w={76}
				lh={1.45}
				style={{ flexShrink: 0 }}
			>
				{label}
			</Text>
			<Box
				flex={1}
				style={{ fontSize: "var(--mantine-font-size-sm)", lineHeight: 1.45 }}
			>
				{children}
			</Box>
		</Group>
	);
}

export interface InspectorStatusBadgeProps {
	children: ReactNode;
	color: MantineColor;
	icon?: ReactNode;
}

export function InspectorStatusBadge({ children, color, icon }: InspectorStatusBadgeProps) {
	return (
		<Badge
			variant="status-pill"
			color={color}
			size="sm"
			leftSection={icon}
		>
			{children}
		</Badge>
	);
}

export interface ChecklistItemProps {
	children: ReactNode;
}

export function ChecklistItem({ children }: ChecklistItemProps) {
	return (
		<Group
			gap={8}
			align="flex-start"
			wrap="nowrap"
		>
			<Check
				size={13}
				color="var(--mantine-color-green-text)"
				style={{ marginTop: 3, flexShrink: 0 }}
			/>
			<Text
				size="sm"
				lh={1.45}
			>
				{children}
			</Text>
		</Group>
	);
}

export interface SectionLabelProps {
	children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
	return (
		<Text
			size="xs"
			fw={700}
			tt="uppercase"
			lts={0.5}
			c="dimmed"
			mb="xs"
		>
			{children}
		</Text>
	);
}
