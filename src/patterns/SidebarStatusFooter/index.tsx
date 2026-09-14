import { Group, Progress, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";
import { StatusIndicator, type StatusTone } from "../StatusIndicator";

export interface SidebarStatusFooterProps {
	status?: { tone?: StatusTone; label: string; detail?: ReactNode };
	progress?: {
		label?: ReactNode;
		detail?: ReactNode;
		value: number;
		color?: string;
		showValue?: boolean;
	};
	footer?: ReactNode;
}

export function SidebarStatusFooter({ status, progress, footer }: SidebarStatusFooterProps) {
	return (
		<Stack gap="sm">
			{status ? (
				<Stack gap={4}>
					<StatusIndicator
						tone={status.tone ?? "neutral"}
						label={status.label}
					/>
					{status.detail ? (
						<Text
							size="xs"
							c="dimmed"
						>
							{status.detail}
						</Text>
					) : null}
				</Stack>
			) : null}
			{progress ? (
				<Stack gap={6}>
					{progress.label || progress.detail ? (
						<Group
							justify="space-between"
							gap="xs"
						>
							<Text
								size="xs"
								c="dimmed"
							>
								{progress.label}
							</Text>
							<Text
								size="xs"
								c="dimmed"
							>
								{progress.detail}
							</Text>
						</Group>
					) : null}
					<Progress
						value={progress.value}
						size="xs"
						color={progress.color ?? "green"}
						styles={
							progress.color
								? undefined
								: {
										section: {
											backgroundColor: "var(--mantine-color-green-text)",
										},
									}
						}
					/>
					{progress.showValue ? (
						<Text
							size="xs"
							c="dimmed"
							ta="right"
						>
							{progress.value}%
						</Text>
					) : null}
				</Stack>
			) : null}
			{footer ? (
				<Text
					component="div"
					size="xs"
					c="dimmed"
				>
					{footer}
				</Text>
			) : null}
		</Stack>
	);
}
