import { Box, Card, Group, Stack, Text, useMantineColorScheme } from "@mantine/core";
import { Check, Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import classes from "./StatusTimeline.module.scss";

export type StatusTimelineItemState = "completed" | "running" | "pending";

const TIMELINE_BULLET_BG_LIGHT = "#18181B";
const TIMELINE_BULLET_FG_LIGHT = "#FFFFFF";
const TIMELINE_BULLET_BG_DARK = "#FFFFFF";
const TIMELINE_BULLET_FG_DARK = "#000000";

const TIMELINE_RING_STROKE = "#a1a1aa";
const TIMELINE_RING_FILL = "var(--minitine-color-background)";

function useTimelineBulletColors() {
	const { colorScheme } = useMantineColorScheme();
	const isDark = colorScheme === "dark";

	return {
		bg: isDark ? TIMELINE_BULLET_BG_DARK : TIMELINE_BULLET_BG_LIGHT,
		fg: isDark ? TIMELINE_BULLET_FG_DARK : TIMELINE_BULLET_FG_LIGHT,
	};
}

function TimelineBulletShell({ children }: { children: ReactNode }) {
	const { bg } = useTimelineBulletColors();

	return (
		<Box
			w={20}
			h={20}
			bdrs="xl"
			bg={bg}
			display="grid"
			style={{ placeItems: "center", flexShrink: 0 }}
		>
			{children}
		</Box>
	);
}

function TimelineOutlineBullet({ children }: { children?: ReactNode }) {
	const { fg } = useTimelineBulletColors();

	return (
		<Box
			w={20}
			h={20}
			bdrs="xl"
			bd="1px solid var(--minitine-color-border-strong)"
			bg="var(--mantine-color-body)"
			display="grid"
			style={{
				placeItems: "center",
				flexShrink: 0,
				color: fg,
			}}
		>
			{children}
		</Box>
	);
}

/** Removes the Mantine styles from the active bullet. Use it with custom bullets. */
export const timelineCustomBulletStyles = {
	itemBullet: {
		backgroundColor: "transparent",
		border: "none",
		color: "inherit",
	},
} as const;

export function TimelineCheckBullet() {
	const { fg } = useTimelineBulletColors();

	return (
		<TimelineBulletShell>
			<Check
				size={12}
				color={fg}
				strokeWidth={2.5}
			/>
		</TimelineBulletShell>
	);
}

export function TimelineLoaderBullet() {
	const { fg } = useTimelineBulletColors();

	return (
		<TimelineBulletShell>
			<Loader2
				size={12}
				color={fg}
				strokeWidth={2.5}
				style={{ stroke: fg }}
			/>
		</TimelineBulletShell>
	);
}

export function TimelinePendingBullet() {
	return <TimelineOutlineBullet />;
}

function StatusTimelineBullet({ state }: { state: StatusTimelineItemState }) {
	if (state === "completed") {
		return (
			<svg
				width={18}
				height={18}
				viewBox="0 0 18 18"
				aria-hidden
				className={classes.bulletSvg}
			>
				<circle
					cx={9}
					cy={9}
					r={8}
					fill="#47d185"
				/>
				<polyline
					points="5.5,9 8,11.5 12.5,6.5"
					fill="none"
					stroke="#ffffff"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}

	if (state === "running") {
		return (
			<svg
				width={18}
				height={18}
				viewBox="0 0 18 18"
				aria-hidden
				className={classes.bulletSvg}
			>
				<circle
					cx={9}
					cy={9}
					r={7}
					fill={TIMELINE_RING_FILL}
					stroke={TIMELINE_RING_STROKE}
					strokeWidth={1.5}
					strokeDasharray="3.5 2.5"
				/>
			</svg>
		);
	}

	return (
		<svg
			width={18}
			height={18}
			viewBox="0 0 18 18"
			aria-hidden
			className={classes.bulletSvg}
		>
			<circle
				cx={9}
				cy={9}
				r={7}
				fill={TIMELINE_RING_FILL}
				stroke={TIMELINE_RING_STROKE}
				strokeWidth={1.5}
			/>
		</svg>
	);
}

export interface StatusTimelineItemProps {
	state: StatusTimelineItemState;
	title: string;
	time: string;
	children?: ReactNode;
}

export function StatusTimelineItem({ state, title, time, children }: StatusTimelineItemProps) {
	return (
		<Box className={classes.timelineItem}>
			<Box className={classes.timelineBullet}>
				<StatusTimelineBullet state={state} />
			</Box>
			<Card
				variant="minitine"
				p="11px 13px"
			>
				<Group
					justify="space-between"
					align="flex-start"
					gap="md"
					wrap="nowrap"
					mb={children ? 4 : 0}
				>
					<Text
						size="sm"
						fw={600}
					>
						{title}
					</Text>
					<Text
						size="xs"
						c="dimmed"
						ff="monospace"
						style={{ flexShrink: 0 }}
					>
						{time}
					</Text>
				</Group>
				{children}
			</Card>
		</Box>
	);
}

export interface StatusTimelineProps {
	children: ReactNode;
}

export function StatusTimeline({ children }: StatusTimelineProps) {
	return (
		<Box className={classes.timeline}>
			<Stack gap={8}>{children}</Stack>
		</Box>
	);
}
