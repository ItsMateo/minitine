import { PasswordInput, Stack, Textarea, TextInput } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/TextInput",
	component: TextInput,
	argTypes: {
		variant: {
			control: "select",
			options: ["filled", "default", "unstyled"],
		},
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		disabled: { control: "boolean" },
		error: { control: "text" },
	},
	args: {
		label: "Label",
		placeholder: "Enter text...",
	},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
	args: {
		description: "This is a helpful description",
	},
};

export const WithError: Story = {
	args: {
		error: "This field is required",
	},
};

export const AllInputTypes: Story = {
	render: () => (
		<Stack maw={400}>
			<TextInput
				label="Text Input"
				placeholder="Enter text..."
			/>
			<PasswordInput
				label="Password"
				placeholder="Enter password..."
			/>
			<Textarea
				label="Textarea"
				placeholder="Enter long text..."
				rows={3}
			/>
		</Stack>
	),
};

export const Sizes: Story = {
	render: () => (
		<Stack maw={400}>
			<TextInput
				size="xs"
				label="Extra Small"
				placeholder="xs"
			/>
			<TextInput
				size="sm"
				label="Small"
				placeholder="sm"
			/>
			<TextInput
				size="md"
				label="Medium"
				placeholder="md"
			/>
			<TextInput
				size="lg"
				label="Large"
				placeholder="lg"
			/>
			<TextInput
				size="xl"
				label="Extra Large"
				placeholder="xl"
			/>
		</Stack>
	),
};
