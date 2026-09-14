import { ActionIcon, Anchor, Box, Group, Text, Title } from "@mantine/core";
import { ExternalLink, X } from "lucide-react";
import type { ReactNode } from "react";
import classes from "./InspectorPanel.module.scss";
import { InspectorText } from "./InspectorText";

export type { InspectorTextProps } from "./InspectorText";
export { InspectorText };

export interface InspectorPanelProps {
	title?: ReactNode;
	subtitle?: ReactNode;
	headerAddon?: ReactNode;
	onClose?: () => void;
	hideHeader?: boolean;
	footer?: ReactNode;
	children: ReactNode;
}

export function InspectorPanel({
	title,
	subtitle,
	headerAddon,
	onClose,
	hideHeader = false,
	footer,
	children,
}: InspectorPanelProps) {
	const showHeader =
		!hideHeader &&
		(title != null || subtitle != null || onClose != null || headerAddon != null);

	return (
		<Box className={classes.root}>
			{showHeader ? (
				<header className={classes.header}>
					<div className={classes.headerMain}>
						<div className={classes.headerRow}>
							<div className={classes.headerText}>
								{title != null ? <Title order={4}>{title}</Title> : null}
								{subtitle ? (
									<Text
										size="sm"
										c="dimmed"
									>
										{subtitle}
									</Text>
								) : null}
							</div>
							{onClose ? (
								<ActionIcon
									variant="subtle"
									color="gray"
									size="sm"
									aria-label="Close inspector"
									onClick={onClose}
								>
									<X size={16} />
								</ActionIcon>
							) : null}
						</div>
						{headerAddon ? (
							<div className={classes.headerAddon}>{headerAddon}</div>
						) : null}
					</div>
				</header>
			) : null}
			<div className={classes.content}>{children}</div>
			{footer ? <footer className={classes.footer}>{footer}</footer> : null}
		</Box>
	);
}

export function InspectorSection({ title, children }: { title?: ReactNode; children: ReactNode }) {
	return (
		<section className={classes.section}>
			{title ? <InspectorSectionTitle>{title}</InspectorSectionTitle> : null}
			{children}
		</section>
	);
}

export function InspectorSectionTitle({ children }: { children: ReactNode }) {
	return (
		<Text
			size="sm"
			fw={600}
			mb={8}
			className={classes.sectionTitle}
		>
			{children}
		</Text>
	);
}

export function InspectorLink({ children, href = "#" }: { children: ReactNode; href?: string }) {
	return (
		<Anchor
			href={href}
			size="sm"
			c="var(--mantine-color-blue-text)"
			underline="hover"
			display="inline-flex"
			style={{ alignItems: "center", gap: 4 }}
		>
			{children}
			<ExternalLink
				size={12}
				strokeWidth={1.75}
			/>
		</Anchor>
	);
}

export function InspectorActions({ children }: { children: ReactNode }) {
	return (
		<Group
			gap="sm"
			justify="flex-end"
			wrap="nowrap"
		>
			{children}
		</Group>
	);
}
