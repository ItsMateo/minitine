import { Tabs, Text } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Tabs",
	component: Tabs,
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "outline", "pills", "minitine"],
		},
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
		},
		color: {
			control: "select",
			options: ["neutral", "gray", "blue", "red", "green"],
		},
	},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		defaultValue: "overview",
		children: (
			<>
				<Tabs.List>
					<Tabs.Tab value="overview">Overview</Tabs.Tab>
					<Tabs.Tab value="settings">Settings</Tabs.Tab>
					<Tabs.Tab value="activity">Activity</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel
					value="overview"
					pt="md"
				>
					<Text>Overview panel content</Text>
				</Tabs.Panel>
				<Tabs.Panel
					value="settings"
					pt="md"
				>
					<Text>Settings panel content</Text>
				</Tabs.Panel>
				<Tabs.Panel
					value="activity"
					pt="md"
				>
					<Text>Activity panel content</Text>
				</Tabs.Panel>
			</>
		),
	},
};

export const Pills: Story = {
	args: {
		variant: "pills",
		defaultValue: "first",
		children: (
			<>
				<Tabs.List>
					<Tabs.Tab value="first">First</Tabs.Tab>
					<Tabs.Tab value="second">Second</Tabs.Tab>
					<Tabs.Tab value="third">Third</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel
					value="first"
					pt="md"
				>
					<Text>First tab content</Text>
				</Tabs.Panel>
				<Tabs.Panel
					value="second"
					pt="md"
				>
					<Text>Second tab content</Text>
				</Tabs.Panel>
				<Tabs.Panel
					value="third"
					pt="md"
				>
					<Text>Third tab content</Text>
				</Tabs.Panel>
			</>
		),
	},
};

export const Minitine: Story = {
	args: {
		variant: "minitine",
		defaultValue: "run",
		children: (
			<>
				<Tabs.List>
					<Tabs.Tab value="overview">Overview</Tabs.Tab>
					<Tabs.Tab value="run">Run</Tabs.Tab>
					<Tabs.Tab value="review">Review</Tabs.Tab>
					<Tabs.Tab value="activity">Activity</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel
					value="overview"
					pt="md"
				>
					<Text>Overview panel content</Text>
				</Tabs.Panel>
				<Tabs.Panel
					value="run"
					pt="md"
				>
					<Text>Run panel content</Text>
				</Tabs.Panel>
				<Tabs.Panel
					value="review"
					pt="md"
				>
					<Text>Review panel content</Text>
				</Tabs.Panel>
				<Tabs.Panel
					value="activity"
					pt="md"
				>
					<Text>Activity panel content</Text>
				</Tabs.Panel>
			</>
		),
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		defaultValue: "first",
		children: (
			<>
				<Tabs.List>
					<Tabs.Tab value="first">First</Tabs.Tab>
					<Tabs.Tab value="second">Second</Tabs.Tab>
					<Tabs.Tab value="third">Third</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel
					value="first"
					pt="md"
				>
					<Text>First tab content</Text>
				</Tabs.Panel>
				<Tabs.Panel
					value="second"
					pt="md"
				>
					<Text>Second tab content</Text>
				</Tabs.Panel>
				<Tabs.Panel
					value="third"
					pt="md"
				>
					<Text>Third tab content</Text>
				</Tabs.Panel>
			</>
		),
	},
};
