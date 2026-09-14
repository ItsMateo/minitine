import { MultiSelect, Select, Stack } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Select",
	component: Select,
	argTypes: {
		variant: {
			control: "select",
			options: ["filled", "default", "unstyled"],
		},
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		searchable: { control: "boolean" },
		clearable: { control: "boolean" },
		disabled: { control: "boolean" },
	},
	args: {
		label: "Select an option",
		placeholder: "Pick one",
		data: ["React", "Vue", "Angular", "Svelte", "Solid"],
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Searchable: Story = {
	args: {
		searchable: true,
		placeholder: "Search and select...",
	},
};

export const Clearable: Story = {
	args: {
		clearable: true,
	},
};

export const WithGroups: Story = {
	args: {
		data: [
			{
				group: "Frontend",
				items: ["React", "Vue", "Angular", "Svelte"],
			},
			{
				group: "Backend",
				items: ["Node.js", "Deno", "Bun"],
			},
		],
	},
};

export const Multi: Story = {
	render: () => (
		<Stack maw={400}>
			<MultiSelect
				label="Technologies"
				placeholder="Pick multiple"
				data={["TypeScript", "JavaScript", "Rust", "Go", "Python", "Java"]}
			/>
		</Stack>
	),
};
