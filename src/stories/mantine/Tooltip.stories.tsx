import { Button, Group, Tooltip } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Tooltip",
	component: Tooltip,
	argTypes: {
		position: {
			control: "select",
			options: ["top", "right", "bottom", "left"],
		},
		color: {
			control: "select",
			options: ["neutral", "gray", "blue", "red", "green"],
		},
		withArrow: { control: "boolean" },
		multiline: { control: "boolean" },
	},
	args: {
		label: "Tooltip content",
		children: <Button>Hover me</Button>,
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Positions: Story = {
	render: () => (
		<Group
			justify="center"
			py={60}
		>
			<Tooltip
				label="Top"
				position="top"
			>
				<Button variant="outline">Top</Button>
			</Tooltip>
			<Tooltip
				label="Right"
				position="right"
			>
				<Button variant="outline">Right</Button>
			</Tooltip>
			<Tooltip
				label="Bottom"
				position="bottom"
			>
				<Button variant="outline">Bottom</Button>
			</Tooltip>
			<Tooltip
				label="Left"
				position="left"
			>
				<Button variant="outline">Left</Button>
			</Tooltip>
		</Group>
	),
};

export const Multiline: Story = {
	args: {
		multiline: true,
		w: 220,
		label: "This is a longer tooltip message that wraps across multiple lines for additional context.",
	},
};
