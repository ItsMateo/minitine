import { Box, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { Check, ChevronDown, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { Icon } from "../../primitives/Icon";
import classes from "./WorkspaceSwitcher.module.scss";

export type WorkspaceKindBadge = "local" | "cloud";

export interface WorkspaceSwitcherItem {
	id: string;
	name: string;
	kind: WorkspaceKindBadge;
	active?: boolean;
	disabled?: boolean;
}

export interface WorkspaceSwitcherProps {
	activeName: string;
	activeKind: WorkspaceKindBadge;
	items: WorkspaceSwitcherItem[];
	onSelect?: (id: string) => void;
	onCreate?: () => void;
	createLabel?: string;
	menuFooter?: ReactNode;
}

export function WorkspaceSwitcher({
	activeName,
	activeKind,
	items,
	onSelect,
	onCreate,
	createLabel = "Add workspace",
	menuFooter,
}: WorkspaceSwitcherProps) {
	const kindLabel = activeKind === "cloud" ? "Cloud" : "Local";

	return (
		<Menu
			shadow="md"
			width={260}
			position="bottom-start"
			withinPortal
		>
			<Menu.Target>
				<UnstyledButton
					className={classes.trigger}
					aria-label={`Workspace: ${activeName}, ${kindLabel}`}
				>
					<Group
						gap={8}
						wrap="nowrap"
						justify="space-between"
						w="100%"
					>
						<Box style={{ minWidth: 0 }}>
							<Text
								size="sm"
								fw={600}
								truncate
							>
								{activeName}
							</Text>
							<Text
								size="xs"
								c="dimmed"
							>
								{kindLabel}
							</Text>
						</Box>
						<Icon
							icon={ChevronDown}
							size="sm"
						/>
					</Group>
				</UnstyledButton>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Label>Workspaces</Menu.Label>
				{items.map((item) => (
					<Menu.Item
						key={item.id}
						disabled={item.disabled}
						leftSection={
							item.active ? (
								<Icon
									icon={Check}
									size="sm"
								/>
							) : (
								<Box w={16} />
							)
						}
						onClick={() => onSelect?.(item.id)}
					>
						<Group
							justify="space-between"
							wrap="nowrap"
							gap="xs"
						>
							<Text
								size="sm"
								truncate
							>
								{item.name}
							</Text>
							<Text
								size="xs"
								c="dimmed"
							>
								{item.kind === "cloud" ? "Cloud" : "Local"}
							</Text>
						</Group>
					</Menu.Item>
				))}
				{onCreate ? (
					<>
						<Menu.Divider />
						<Menu.Item
							leftSection={
								<Icon
									icon={Plus}
									size="sm"
								/>
							}
							onClick={onCreate}
						>
							{createLabel}
						</Menu.Item>
					</>
				) : null}
				{menuFooter}
			</Menu.Dropdown>
		</Menu>
	);
}
