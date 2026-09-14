import { Checkbox, Radio, Stack, Switch, Text } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Switch & Checks",
	component: Switch,
	argTypes: {
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		color: {
			control: "select",
			options: ["neutral", "gray", "blue", "red", "green"],
		},
		disabled: { control: "boolean" },
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchDefault: Story = {
	args: {
		label: "Toggle me",
	},
};

export const SwitchSizes: Story = {
	render: () => (
		<Stack>
			{(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
				<Switch
					key={size}
					size={size}
					label={`Size ${size}`}
				/>
			))}
		</Stack>
	),
};

export const Checkboxes: Story = {
	render: () => (
		<Stack>
			<Text fw={600}>Checkboxes</Text>
			<Checkbox label="Default checkbox" />
			<Checkbox
				label="Checked"
				defaultChecked
			/>
			<Checkbox
				label="Indeterminate"
				indeterminate
			/>
			<Checkbox
				label="Disabled"
				disabled
			/>
		</Stack>
	),
};

export const RadioButtons: Story = {
	render: () => (
		<Radio.Group
			name="framework"
			label="Select a framework"
			defaultValue="react"
		>
			<Stack mt="sm">
				<Radio
					value="react"
					label="React"
				/>
				<Radio
					value="svelte"
					label="Svelte"
				/>
				<Radio
					value="vue"
					label="Vue"
				/>
				<Radio
					value="angular"
					label="Angular"
				/>
			</Stack>
		</Radio.Group>
	),
};
