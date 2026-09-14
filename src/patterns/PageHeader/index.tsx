import { Group, Stack, Text, Title } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import classes from "./PageHeader.module.scss";

export interface PageHeaderProps {
	title: string;
	subtitle?: string;
	selector?: boolean;
	actions?: ReactNode;
	align?: "center" | "flex-start";
}

export function PageHeader({
	title,
	subtitle,
	selector = false,
	actions,
	align = "center",
}: PageHeaderProps) {
	return (
		<Group
			justify="space-between"
			align={align}
			className={classes.root}
		>
			<Stack gap={subtitle ? 2 : 0}>
				<Group
					gap={6}
					align="center"
				>
					<Title order={3}>{title}</Title>
					{selector ? (
						<ChevronDown
							size={18}
							strokeWidth={1.75}
							color="var(--minitine-color-text-muted)"
						/>
					) : null}
				</Group>
				{subtitle ? (
					<Text
						size="sm"
						c="dimmed"
					>
						{subtitle}
					</Text>
				) : null}
			</Stack>
			{actions}
		</Group>
	);
}
