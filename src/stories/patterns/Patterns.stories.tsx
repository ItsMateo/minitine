import { Button, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Inbox } from "lucide-react";
import { useState } from "react";
import {
	BoardColumn,
	BoardZone,
	ChecklistItem,
	DetailRow,
	EmptyState,
	ErrorState,
	FilterNavItem,
	InspectorStatusBadge,
	LoadingState,
	PriorityPill,
	SectionLabel,
	StatusIndicator,
	StatusTimeline,
	StatusTimelineItem,
	ViewTabs,
} from "../../index";

const meta = {
	title: "Patterns/Overview",
	parameters: {
		layout: "padded",
		controls: { disable: true },
	},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
	render: () => (
		<SimpleGrid cols={{ base: 1, md: 3 }}>
			<EmptyState
				title="Nothing here yet"
				description="Items you create will show up in this list."
				icon={<Inbox size={24} />}
				action={<Button size="compact-sm">Create item</Button>}
			/>
			<LoadingState label="Loading items" />
			<ErrorState title="Request failed">Could not reach the server.</ErrorState>
		</SimpleGrid>
	),
};

export const Indicators: Story = {
	render: () => (
		<Stack gap="lg">
			<Group gap="lg">
				<StatusIndicator
					tone="success"
					label="Running"
					pulse
				/>
				<StatusIndicator
					tone="warning"
					label="Degraded"
				/>
				<StatusIndicator
					tone="danger"
					label="Failed"
				/>
				<StatusIndicator
					tone="info"
					label="Queued"
				/>
			</Group>
			<Group gap="sm">
				<PriorityPill priority="High" />
				<PriorityPill priority="Medium" />
				<PriorityPill priority="Low" />
				<InspectorStatusBadge color="yellow">Needs review</InspectorStatusBadge>
			</Group>
		</Stack>
	),
};

export const Timeline: Story = {
	render: () => (
		<StatusTimeline>
			<StatusTimelineItem
				state="completed"
				title="Cloned repository"
				time="00:02"
			/>
			<StatusTimelineItem
				state="running"
				title="Installing dependencies"
				time="00:18"
			>
				<Text
					size="sm"
					c="dimmed"
				>
					432 packages resolved
				</Text>
			</StatusTimelineItem>
			<StatusTimelineItem
				state="pending"
				title="Run tests"
				time="—"
			/>
		</StatusTimeline>
	),
};

export const Fields: Story = {
	render: () => (
		<Stack
			gap="sm"
			maw={420}
		>
			<SectionLabel>Details</SectionLabel>
			<DetailRow label="Owner">Ada Lovelace</DetailRow>
			<DetailRow label="Created">2 hours ago</DetailRow>
			<ChecklistItem>Linting passed</ChecklistItem>
			<ChecklistItem>Tests passed</ChecklistItem>
		</Stack>
	),
};

export const Board: Story = {
	render: () => (
		<BoardZone label="This week">
			<BoardColumn
				title="Todo"
				count={2}
			>
				<FilterNavItem
					label="Design review"
					count={1}
				/>
				<FilterNavItem
					label="Bug triage"
					count={4}
					active
				/>
			</BoardColumn>
			<BoardColumn
				title="Done"
				count={0}
			>
				<Text
					size="sm"
					c="dimmed"
				>
					Nothing yet
				</Text>
			</BoardColumn>
		</BoardZone>
	),
};

export const Tabs: Story = {
	render: function Render() {
		const [view, setView] = useState("All");

		return (
			<ViewTabs
				tabs={["All", "Active", "Archived"]}
				value={view}
				onChange={setView}
			/>
		);
	},
};
