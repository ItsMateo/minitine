import {
	Anchor,
	Badge,
	Breadcrumbs,
	Button,
	Group,
	NavLink,
	Pagination,
	Stack,
	Stepper,
	Text,
} from "@mantine/core";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { Activity, Inbox, KanbanSquare, Monitor, Settings } from "lucide-react";
import { useState } from "react";
import { Icon } from "../../primitives/Icon";

const meta = {
	title: "Mantine/Navigation",
	parameters: { controls: { disable: true } },
} satisfies Meta;

export default meta;

export const BreadcrumbsStory: StoryFn = () => (
	<Breadcrumbs>
		<Anchor href="#">Home</Anchor>
		<Anchor href="#">Products</Anchor>
		<Anchor href="#">Category</Anchor>
		<Text>Current Page</Text>
	</Breadcrumbs>
);
BreadcrumbsStory.storyName = "Breadcrumbs";

export const PaginationStory: StoryFn = () => (
	<Stack align="center">
		<Pagination total={10} />
		<Pagination
			total={10}
			withEdges
		/>
	</Stack>
);
PaginationStory.storyName = "Pagination";

export const SidebarNav: StoryFn = () => (
	<Stack
		maw={190}
		gap={2}
	>
		<NavLink
			label="Board"
			leftSection={
				<Icon
					icon={KanbanSquare}
					size="sm"
				/>
			}
			active
		/>
		<NavLink
			label="Inbox"
			leftSection={
				<Icon
					icon={Inbox}
					size="sm"
				/>
			}
			rightSection={
				<Badge
					size="xs"
					variant="minitine"
				>
					7
				</Badge>
			}
		/>
		<NavLink
			label="Activity"
			leftSection={
				<Icon
					icon={Activity}
					size="sm"
				/>
			}
		/>
		<NavLink
			label="Projects"
			leftSection={
				<Icon
					icon={Monitor}
					size="sm"
				/>
			}
		/>
		<NavLink
			label="Settings"
			leftSection={
				<Icon
					icon={Settings}
					size="sm"
				/>
			}
			disabled
		/>
	</Stack>
);
SidebarNav.storyName = "Sidebar nav";

export const NavLinks: StoryFn = () => (
	<Stack
		maw={300}
		gap={0}
	>
		<NavLink
			label="Dashboard"
			active
		/>
		<NavLink label="Analytics" />
		<NavLink label="Settings" />
		<NavLink
			label="Team"
			childrenOffset={28}
		>
			<NavLink label="Members" />
			<NavLink label="Permissions" />
			<NavLink label="Invitations" />
		</NavLink>
	</Stack>
);
NavLinks.storyName = "Nav links (nested)";

export const StepperStory: StoryFn = () => {
	const [active, setActive] = useState(1);

	return (
		<Stack>
			<Stepper
				active={active}
				onStepClick={setActive}
			>
				<Stepper.Step
					label="Account"
					description="Create an account"
				/>
				<Stepper.Step
					label="Profile"
					description="Set up your profile"
				/>
				<Stepper.Step
					label="Confirm"
					description="Review and submit"
				/>
				<Stepper.Completed>All done! You can now submit.</Stepper.Completed>
			</Stepper>

			<Group justify="center">
				<Button
					variant="default"
					onClick={() => setActive((c) => Math.max(0, c - 1))}
				>
					Back
				</Button>
				<Button onClick={() => setActive((c) => Math.min(3, c + 1))}>Next</Button>
			</Group>
		</Stack>
	);
};
StepperStory.storyName = "Stepper";
