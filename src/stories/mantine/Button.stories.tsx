import { Button, Group, Stack } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Button",
	component: Button,
	argTypes: {
		variant: {
			control: "select",
			options: ["minitine", "default", "subtle", "outline", "light"],
		},
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg"],
		},
		disabled: { control: "boolean" },
		loading: { control: "boolean" },
	},
	args: {
		children: "Button",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "minitine",
	},
};

export const Variants: Story = {
	render: () => (
		<Group>
			<Button variant="minitine">Primary</Button>
			<Button variant="default">Secondary</Button>
			<Button variant="subtle">Subtle</Button>
			<Button variant="outline">Outline</Button>
		</Group>
	),
};

export const States: Story = {
	render: () => (
		<Stack>
			<Group>
				<Button>Normal</Button>
				<Button disabled>Disabled</Button>
				<Button loading>Loading</Button>
			</Group>
		</Stack>
	),
};
