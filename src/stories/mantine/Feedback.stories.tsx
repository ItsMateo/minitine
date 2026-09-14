import {
	ActionBar,
	Affix,
	Button,
	Dialog,
	EmptyState,
	Group,
	Notification,
	SemiCircleProgress,
	Stack,
	Text,
	TextInput,
	Transition,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowUp, Inbox, Trash2 } from "lucide-react";

const meta = {
	title: "Mantine/Feedback",
	parameters: { layout: "padded", controls: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notifications: Story = {
	render: () => (
		<Stack
			gap="md"
			maw={440}
		>
			<Notification title="Backup finished">All 1,204 files copied in 3m 12s.</Notification>
			<Notification
				color="red"
				title="Backup failed"
			>
				2 of 1,204 files could not be read.
			</Notification>
			<Notification
				loading
				withCloseButton={false}
				title="Indexing library"
			>
				42,391 files processed so far.
			</Notification>
		</Stack>
	),
};

export const Progress: Story = {
	render: () => (
		<Group gap="xl">
			<SemiCircleProgress
				value={68}
				label="68% indexed"
			/>
			<SemiCircleProgress
				value={92}
				orientation="down"
				filledSegmentColor="green"
				label="92% healthy"
			/>
		</Group>
	),
};

export const Empty: Story = {
	render: () => (
		<EmptyState
			variant="light"
			icon={<Inbox size={24} />}
			title="Inbox zero"
			description="New items from your connected sources will appear here."
		>
			<EmptyState.Actions>
				<Button size="compact-sm">Connect a source</Button>
			</EmptyState.Actions>
		</EmptyState>
	),
};

export const Dialogs: Story = {
	render: function Render() {
		const [opened, { toggle, close }] = useDisclosure(false);

		return (
			<>
				<Button onClick={toggle}>Toggle dialog</Button>
				<Dialog
					opened={opened}
					onClose={close}
					withCloseButton
					size="lg"
					position={{ bottom: 20, right: 20 }}
				>
					<Text
						size="sm"
						fw={500}
						mb="xs"
					>
						Subscribe to run updates
					</Text>
					<Group
						align="flex-end"
						gap="sm"
					>
						<TextInput
							placeholder="you@example.com"
							style={{ flex: 1 }}
						/>
						<Button onClick={close}>Subscribe</Button>
					</Group>
				</Dialog>
			</>
		);
	},
};

export const Bars: Story = {
	tags: ["!autodocs"],
	render: function Render() {
		const [opened, { toggle, close }] = useDisclosure(true);
		const [scroll, scrollTo] = useWindowScroll();

		return (
			<>
				<Button
					variant="default"
					onClick={toggle}
				>
					Toggle action bar
				</Button>
				<ActionBar
					opened={opened}
					onClose={close}
					position={{ bottom: 20, left: "50%" }}
					style={{ transform: "translateX(-50%)" }}
				>
					<Text
						size="sm"
						fw={500}
					>
						3 selected
					</Text>
					<ActionBar.Divider />
					<Button
						variant="default"
						size="compact-sm"
						leftSection={<Trash2 size={14} />}
					>
						Delete
					</Button>
					<ActionBar.CloseButton />
				</ActionBar>
				<Affix position={{ bottom: 20, right: 20 }}>
					<Transition
						transition="slide-up"
						mounted={scroll.y > 0}
					>
						{(styles) => (
							<Button
								style={styles}
								variant="default"
								leftSection={<ArrowUp size={14} />}
								onClick={() => scrollTo({ y: 0 })}
							>
								Scroll to top
							</Button>
						)}
					</Transition>
				</Affix>
			</>
		);
	},
};
