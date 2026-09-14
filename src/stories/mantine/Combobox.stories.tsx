import {
	Button,
	Cascader,
	Combobox,
	ComboboxPopover,
	Input,
	InputBase,
	SimpleGrid,
	Stack,
	Tree,
	TreeSelect,
	useCombobox,
} from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta = {
	title: "Mantine/Combobox",
	parameters: { layout: "padded", controls: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const PEOPLE = ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Katherine Johnson"];

const TREE_DATA = [
	{
		value: "src",
		label: "src",
		children: [
			{ value: "src/app", label: "app" },
			{ value: "src/features", label: "features" },
		],
	},
	{
		value: "docs",
		label: "docs",
		children: [{ value: "docs/adr", label: "adr" }],
	},
];

const CASCADER_DATA = [
	{
		value: "engineering",
		label: "Engineering",
		children: [
			{ value: "platform", label: "Platform" },
			{ value: "product", label: "Product" },
		],
	},
	{
		value: "design",
		label: "Design",
		children: [{ value: "brand", label: "Brand" }],
	},
];

export const Custom: Story = {
	name: "Combobox",
	render: function Render() {
		const combobox = useCombobox();
		const [value, setValue] = useState<string | null>(null);

		return (
			<Combobox
				store={combobox}
				width={240}
				onOptionSubmit={(option) => {
					setValue(option);
					combobox.closeDropdown();
				}}
			>
				<Combobox.Target>
					<InputBase
						component="button"
						type="button"
						pointer
						w={240}
						rightSection={<Combobox.Chevron />}
						rightSectionPointerEvents="none"
						onClick={() => combobox.toggleDropdown()}
					>
						{value ?? <Input.Placeholder>Pick a reviewer</Input.Placeholder>}
					</InputBase>
				</Combobox.Target>
				<Combobox.Dropdown>
					<Combobox.Options>
						{PEOPLE.map((person) => (
							<Combobox.Option
								key={person}
								value={person}
							>
								{person}
							</Combobox.Option>
						))}
					</Combobox.Options>
				</Combobox.Dropdown>
			</Combobox>
		);
	},
};

export const Popover: Story = {
	name: "ComboboxPopover",
	render: function Render() {
		const [value, setValue] = useState<string | null>("Ada Lovelace");

		return (
			<ComboboxPopover
				data={PEOPLE}
				value={value}
				onChange={setValue}
				searchable
			>
				<ComboboxPopover.Target>
					<Button variant="default">{value ?? "Pick a reviewer"}</Button>
				</ComboboxPopover.Target>
			</ComboboxPopover>
		);
	},
};

export const Hierarchies: Story = {
	render: () => (
		<SimpleGrid
			cols={{ base: 1, md: 3 }}
			spacing="lg"
		>
			<TreeSelect
				label="TreeSelect"
				placeholder="Pick a folder"
				data={TREE_DATA}
			/>
			<Cascader
				label="Cascader"
				placeholder="Pick a team"
				data={CASCADER_DATA}
			/>
			<Stack gap="xs">
				<Input.Label>Tree</Input.Label>
				<Tree
					data={TREE_DATA}
					levelOffset={20}
					withLines
				/>
			</Stack>
		</SimpleGrid>
	),
};
