import { Alert, Stack } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Alert",
	component: Alert,
	argTypes: {
		variant: {
			control: "select",
			options: ["filled", "light", "outline", "transparent", "white", "default"],
		},
		color: {
			control: "select",
			options: ["neutral", "gray", "blue", "red", "green", "yellow"],
		},
		radius: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		withCloseButton: { control: "boolean" },
	},
	args: {
		title: "Alert Title",
		children: "This is an important alert message that requires your attention.",
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
	render: () => (
		<Stack>
			<Alert
				variant="filled"
				title="Filled"
			>
				A filled alert with important information.
			</Alert>
			<Alert
				variant="light"
				title="Light"
			>
				A light alert with subtle emphasis.
			</Alert>
			<Alert
				variant="outline"
				title="Outline"
			>
				An outlined alert for secondary messages.
			</Alert>
		</Stack>
	),
};

export const Statuses: Story = {
	args: {
		variant: "light",
		withCloseButton: false,
	},

	render: () => (
		<Stack>
			<Alert
				color="blue"
				title="Information"
			>
				Something useful to know about.
			</Alert>
			<Alert
				color="green"
				title="Success"
			>
				Operation completed successfully.
			</Alert>
			<Alert
				color="yellow"
				title="Warning"
			>
				Proceed with caution.
			</Alert>
			<Alert
				color="red"
				title="Error"
			>
				Something went wrong.
			</Alert>
		</Stack>
	),
};

export const Closable: Story = {
	args: {
		withCloseButton: true,
		title: "Dismissible",
		children: "This alert can be closed by the user.",
	},
};
