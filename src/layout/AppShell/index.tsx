import { Box } from "@mantine/core";
import type { CSSProperties, ReactNode } from "react";
import { SHELL_DIMENSIONS } from "../../types/variants";
import classes from "./AppShell.module.scss";

export interface AppShellProps {
	children: ReactNode;
	sidebar?: ReactNode;
	sidebarFooter?: ReactNode;
	inspector?: ReactNode;
	titleBar?: ReactNode;
	inspectorWidth?: number;
	fillParent?: boolean;
}

export function AppShell({
	children,
	sidebar,
	sidebarFooter,
	inspector,
	titleBar,
	inspectorWidth,
	fillParent = false,
}: AppShellProps) {
	const resolvedInspectorWidth = inspectorWidth ?? SHELL_DIMENSIONS.inspectorWidth;
	const showSidebar = sidebar != null || sidebarFooter != null;

	return (
		<Box
			className={fillParent ? `${classes.root} ${classes.rootFill}` : classes.root}
			style={
				{
					"--minitine-sidebar-width": `${SHELL_DIMENSIONS.sidebarWidth}px`,
					"--minitine-inspector-width": `${resolvedInspectorWidth}px`,
					"--minitine-titlebar-height": `${SHELL_DIMENSIONS.titleBarHeight}px`,
					"--minitine-page-header-height": `${SHELL_DIMENSIONS.pageHeaderHeight}px`,
				} as CSSProperties
			}
		>
			{titleBar ? <header className={classes.titleBar}>{titleBar}</header> : null}
			<div className={classes.body}>
				{showSidebar ? (
					<aside className={classes.sidebar}>
						<div className={classes.sidebarMain}>{sidebar}</div>
						{sidebarFooter ? (
							<div className={classes.sidebarFooter}>{sidebarFooter}</div>
						) : null}
					</aside>
				) : null}
				<main className={classes.main}>{children}</main>
				{inspector ? <aside className={classes.inspector}>{inspector}</aside> : null}
			</div>
		</Box>
	);
}
