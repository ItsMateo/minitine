import { Button, Drawer, Group, HoverCard, Menu, Popover, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Overlays",
	component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuStory: Story = {
	name: "Menu",
	render: () => (
		<Menu
			shadow="md"
			width={200}
		>
			<Menu.Target>
				<Button>Open Menu</Button>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Application</Menu.Label>
				<Menu.Item>Settings</Menu.Item>
				<Menu.Item>Messages</Menu.Item>
				<Menu.Item>Gallery</Menu.Item>
				<Menu.Divider />
				<Menu.Label>Danger zone</Menu.Label>
				<Menu.Item color="red">Delete account</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	),
};

export const PopoverStory: Story = {
	name: "Popover",
	render: () => (
		<Popover
			width={300}
			position="bottom"
			withArrow
			shadow="md"
		>
			<Popover.Target>
				<Button>Open Popover</Button>
			</Popover.Target>
			<Popover.Dropdown>
				<Text size="sm">
					This is a popover with customizable content. It supports any Mantine components
					inside.
				</Text>
			</Popover.Dropdown>
		</Popover>
	),
};

export const HoverCardStory: Story = {
	name: "HoverCard",
	render: () => (
		<Group justify="center">
			<HoverCard
				width={280}
				shadow="md"
			>
				<HoverCard.Target>
					<Button>Hover me</Button>
				</HoverCard.Target>
				<HoverCard.Dropdown>
					<Text size="sm">
						This card appears on hover and is great for showing additional details
						without requiring a click.
					</Text>
				</HoverCard.Dropdown>
			</HoverCard>
		</Group>
	),
};

export const DrawerStory: Story = {
	name: "Drawer",
	render: () => {
		const [opened, { open, close }] = useDisclosure(false);

		return (
			<>
				<Drawer
					opened={opened}
					onClose={close}
					title="Settings"
				>
					<Stack>
						<Text>
							Drawer content goes here. Use it for side panels, settings, or
							navigation.
						</Text>
						<Button onClick={close}>Close</Button>
					</Stack>
				</Drawer>
				<Button onClick={open}>Open Drawer</Button>
			</>
		);
	},
};
