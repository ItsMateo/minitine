import { Group, Text } from "@mantine/core";

export interface FilterNavItemProps {
	label: string;
	count: number;
	active?: boolean;
	onClick?: () => void;
}

export function FilterNavItem({ label, count, active, onClick }: FilterNavItemProps) {
	return (
		<Group
			justify="space-between"
			px={8}
			py={6}
			bdrs="sm"
			bg={active ? "var(--minitine-color-card-hover)" : undefined}
			onClick={onClick}
			style={onClick ? { cursor: "pointer" } : undefined}
		>
			<Text
				size="sm"
				fw={active ? 500 : 400}
			>
				{label}
			</Text>
			<Text
				size="sm"
				c="dimmed"
			>
				{count}
			</Text>
		</Group>
	);
}
