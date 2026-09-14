import {
	Autocomplete,
	Button,
	Fieldset,
	FileButton,
	FileInput,
	Group,
	Input,
	InputBase,
	JsonInput,
	MaskInput,
	NativeSelect,
	NumberInput,
	Pill,
	PillsInput,
	PinInput,
	SimpleGrid,
	Stack,
	TagsInput,
	Text,
	TextInput,
} from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta = {
	title: "Mantine/Inputs",
	parameters: { layout: "padded", controls: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextEntry: Story = {
	render: () => (
		<SimpleGrid
			cols={{ base: 1, md: 2 }}
			spacing="lg"
		>
			<Input placeholder="Unstyled Input, no wrapper" />
			<Input.Wrapper
				label="Input.Wrapper"
				description="Label, description, and error come from the wrapper"
			>
				<Input placeholder="Search tasks" />
			</Input.Wrapper>
			<InputBase
				label="InputBase"
				component="button"
				type="button"
				pointer
			>
				Pick a workspace
			</InputBase>
			<Autocomplete
				label="Autocomplete"
				placeholder="Start typing a repo"
				data={["acme/api", "acme/web", "acme/infra"]}
			/>
			<NativeSelect
				label="NativeSelect"
				data={["main", "develop", "release/9.x"]}
			/>
			<NumberInput
				label="NumberInput"
				defaultValue={3}
				min={0}
				max={10}
			/>
			<MaskInput
				label="MaskInput"
				mask="(999) 999-9999"
				placeholder="(000) 000-0000"
			/>
			<TagsInput
				label="TagsInput"
				defaultValue={["bug", "regression"]}
				placeholder="Add label"
			/>
		</SimpleGrid>
	),
};

export const Multiline: Story = {
	render: () => (
		<JsonInput
			label="JsonInput"
			description="Formats and validates on blur"
			formatOnBlur
			autosize
			minRows={5}
			defaultValue='{"retries":2,"timeout":"30s"}'
		/>
	),
};

export const Pills: Story = {
	render: () => (
		<Stack
			gap="md"
			maw={420}
		>
			<PillsInput label="PillsInput">
				<Pill.Group>
					<Pill withRemoveButton>ada@example.com</Pill>
					<Pill withRemoveButton>grace@example.com</Pill>
					<PillsInput.Field placeholder="Add recipient" />
				</Pill.Group>
			</PillsInput>
			<Group gap="xs">
				<Pill>Standalone Pill</Pill>
				<Pill size="lg">Larger</Pill>
			</Group>
		</Stack>
	),
};

export const Code: Story = {
	name: "PIN entry",
	render: () => (
		<Stack
			gap="xs"
			maw={320}
		>
			<Text
				size="sm"
				fw={500}
			>
				PinInput
			</Text>
			<PinInput length={6} />
		</Stack>
	),
};

export const Files: Story = {
	render: function Render() {
		const [file, setFile] = useState<File | null>(null);

		return (
			<Stack
				gap="md"
				maw={420}
			>
				<FileInput
					label="FileInput"
					placeholder="Pick a log file"
					clearable
				/>
				<Group gap="sm">
					<FileButton onChange={setFile}>
						{(props) => <Button {...props}>FileButton</Button>}
					</FileButton>
					<Text
						size="sm"
						c="dimmed"
					>
						{file ? file.name : "No file selected"}
					</Text>
				</Group>
			</Stack>
		);
	},
};

export const Grouped: Story = {
	render: () => (
		<Fieldset
			legend="Fieldset"
			maw={420}
		>
			<Stack gap="sm">
				<TextInput
					label="Name"
					placeholder="Deploy pipeline"
				/>
				<NumberInput
					label="Concurrency"
					defaultValue={1}
				/>
			</Stack>
		</Fieldset>
	),
};
