import "./assets/styles/global.scss";
import "./assets/styles/variants.scss";

import "./types/colors";
import "./types/variants";

export type { AppPageHeaderProps } from "./layout/AppPageHeader";
export { AppPageHeader } from "./layout/AppPageHeader";
export type { AppShellProps } from "./layout/AppShell";
export { AppShell } from "./layout/AppShell";
export type { AppSidebarItem, AppSidebarProps } from "./layout/AppSidebar";
export { AppSidebar } from "./layout/AppSidebar";
export type { FilterBarProps } from "./layout/FilterBar";
export { FilterBar } from "./layout/FilterBar";
export type { InspectorPanelProps, InspectorTextProps } from "./layout/InspectorPanel";
export {
	InspectorActions,
	InspectorLink,
	InspectorPanel,
	InspectorSection,
	InspectorSectionTitle,
	InspectorText,
} from "./layout/InspectorPanel";
export type { TitleBarProps } from "./layout/TitleBar";
export { TitleBar } from "./layout/TitleBar";
export type { BoardColumnProps, BoardZoneProps } from "./patterns/Board";
export { BoardColumn, BoardZone } from "./patterns/Board";
export type { EmptyStateProps } from "./patterns/EmptyState";
export { EmptyState } from "./patterns/EmptyState";
export type { ErrorStateProps } from "./patterns/ErrorState";
export { ErrorState } from "./patterns/ErrorState";
export type { FilterNavItemProps } from "./patterns/FilterNavItem";
export { FilterNavItem } from "./patterns/FilterNavItem";
export type { FormModalProps } from "./patterns/FormModal";
export { FormModal } from "./patterns/FormModal";
export type {
	ChecklistItemProps,
	DetailRowProps,
	InspectorStatusBadgeProps,
	SectionLabelProps,
} from "./patterns/InspectorFields";
export {
	ChecklistItem,
	DetailRow,
	InspectorStatusBadge,
	SectionLabel,
} from "./patterns/InspectorFields";
export type { LoadingStateProps } from "./patterns/LoadingState";
export { LoadingState } from "./patterns/LoadingState";
export type { PageHeaderProps } from "./patterns/PageHeader";
export { PageHeader } from "./patterns/PageHeader";
export type { Priority, PriorityPillProps } from "./patterns/PriorityPill";
export { PriorityPill } from "./patterns/PriorityPill";
export type { SidebarStatusFooterProps } from "./patterns/SidebarStatusFooter";
export { SidebarStatusFooter } from "./patterns/SidebarStatusFooter";
export type { StatusIndicatorProps, StatusTone } from "./patterns/StatusIndicator";
export { StatusIndicator } from "./patterns/StatusIndicator";
export type {
	StatusTimelineItemProps,
	StatusTimelineItemState,
	StatusTimelineProps,
} from "./patterns/StatusTimeline";
export {
	StatusTimeline,
	StatusTimelineItem,
	TimelineCheckBullet,
	TimelineLoaderBullet,
	TimelinePendingBullet,
	timelineCustomBulletStyles,
} from "./patterns/StatusTimeline";
export type { ViewTabsProps } from "./patterns/ViewTabs";
export { ViewTabs } from "./patterns/ViewTabs";
export type {
	WorkspaceKindBadge,
	WorkspaceSwitcherItem,
	WorkspaceSwitcherProps,
} from "./patterns/WorkspaceSwitcher";
export { WorkspaceSwitcher } from "./patterns/WorkspaceSwitcher";
export type { IconProps } from "./primitives/Icon";
export { Icon } from "./primitives/Icon";
export { Spacer } from "./primitives/Spacer";
export type { ThemeImageProps } from "./primitives/ThemeImage";
export { ThemeImage } from "./primitives/ThemeImage";
export type { MinitineProviderProps } from "./provider/MinitineProvider";
export { MinitineProvider } from "./provider/MinitineProvider";

export { MANTINE_THEME } from "./theme/mantine";
export type { MinitineTokens } from "./theme/tokens";
export { tokens } from "./theme/tokens";
export type { ShellDimensions } from "./types/variants";
export { SHELL_DIMENSIONS } from "./types/variants";
