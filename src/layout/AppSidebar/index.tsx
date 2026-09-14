import { Badge, Box, NavLink, Stack } from "@mantine/core";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Icon } from "../../primitives/Icon";
import classes from "./AppSidebar.module.scss";

export interface AppSidebarItem {
	id: string;
	label: string;
	icon: LucideIcon;
	badge?: number;
	active?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}

export interface AppSidebarProps {
	items: AppSidebarItem[];
	brand?: ReactNode;
}

export function AppSidebar({ items, brand }: AppSidebarProps) {
	return (
		<Stack
			gap={0}
			h="100%"
		>
			{brand ? <Box className={classes.brand}>{brand}</Box> : null}
			<Stack
				gap={2}
				component="nav"
				aria-label="Primary"
			>
				{items.map((item) => (
					<NavLink
						key={item.id}
						variant="minitine"
						label={item.label}
						leftSection={
							<Icon
								icon={item.icon}
								size="sm"
							/>
						}
						rightSection={
							item.badge !== undefined ? (
								<Badge
									size="xs"
									variant="minitine"
								>
									{item.badge}
								</Badge>
							) : undefined
						}
						active={item.active}
						disabled={item.disabled}
						onClick={item.onClick}
						aria-current={item.active ? "page" : undefined}
					/>
				))}
			</Stack>
		</Stack>
	);
}
