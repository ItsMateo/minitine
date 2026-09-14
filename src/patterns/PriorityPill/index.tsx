import { Badge } from "@mantine/core";
import { ArrowDown, ArrowUp } from "lucide-react";

export type Priority = "High" | "Medium" | "Low";

const PRIORITY_COLOR: Record<Priority, string> = {
	High: "red",
	Medium: "yellow",
	Low: "gray",
};

export interface PriorityPillProps {
	priority: Priority;
}

export function PriorityPill({ priority }: PriorityPillProps) {
	return (
		<Badge
			variant="status-pill"
			size="xs"
			color={PRIORITY_COLOR[priority]}
			leftSection={
				priority === "High" ? (
					<ArrowUp size={10} />
				) : priority === "Low" ? (
					<ArrowDown size={10} />
				) : undefined
			}
		>
			{priority}
		</Badge>
	);
}
