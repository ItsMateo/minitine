import {
	ActionIcon,
	AngleSlider,
	Burger,
	Chip,
	CloseButton,
	ColorInput,
	ColorPicker,
	ColorSwatch,
	CopyButton,
	Group,
	Rating,
	SegmentedControl,
	SimpleGrid,
	Slider,
	Stack,
	Text,
	Tooltip,
	UnstyledButton,
} from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const meta = {
	title: "Mantine/Controls",
	parameters: { layout: "padded", controls: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selection: Story = {
	render: function Render() {
		const [view, setView] = useState("board");

		return (
			<Stack gap="lg">
				<SegmentedControl
					value={view}
					onChange={setView}
					data={[
						{ label: "Board", value: "board" },
						{ label: "List", value: "list" },
						{ label: "Timeline", value: "timeline" },
					]}
				/>
				<Chip.Group multiple>
					<Group gap="xs">
						<Chip value="bug">Bug</Chip>
						<Chip value="feature">Feature</Chip>
						<Chip value="chore">Chore</Chip>
					</Group>
				</Chip.Group>
			</Stack>
		);
	},
};

export const Ranges: Story = {
	render: () => (
		<SimpleGrid
			cols={{ base: 1, md: 2 }}
			spacing="xl"
		>
			<Stack gap="xl">
				<Slider
					defaultValue={40}
					marks={[
						{ value: 0, label: "0" },
						{ value: 50, label: "50" },
						{ value: 100, label: "100" },
					]}
				/>
				<Rating defaultValue={3} />
			</Stack>
			<AngleSlider
				defaultValue={135}
				size={100}
				withLabel
			/>
		</SimpleGrid>
	),
};

export const Colors: Story = {
	render: function Render() {
		const [color, setColor] = useState("#3b82f6");

		return (
			<SimpleGrid
				cols={{ base: 1, md: 2 }}
				spacing="lg"
			>
				<Stack gap="md">
					<ColorInput
						label="ColorInput"
						value={color}
						onChange={setColor}
					/>
					<Group gap="xs">
						<ColorSwatch color={color} />
						<ColorSwatch color="var(--mantine-color-green-6)" />
						<ColorSwatch color="var(--mantine-color-red-6)" />
					</Group>
				</Stack>
				<ColorPicker
					value={color}
					onChange={setColor}
					format="hex"
				/>
			</SimpleGrid>
		);
	},
};

export const Buttons: Story = {
	render: function Render() {
		const [navOpened, setNavOpened] = useState(false);

		return (
			<Group gap="lg">
				<Burger
					opened={navOpened}
					onClick={() => setNavOpened((o) => !o)}
					aria-label="Toggle navigation"
				/>
				<CloseButton aria-label="Dismiss" />
				<CopyButton value="git clone git@example.com:acme/api.git">
					{({ copied, copy }) => (
						<Tooltip label={copied ? "Copied" : "Copy clone command"}>
							<ActionIcon
								onClick={copy}
								aria-label="Copy clone command"
							>
								{copied ? <Check size={16} /> : <Copy size={16} />}
							</ActionIcon>
						</Tooltip>
					)}
				</CopyButton>
				<UnstyledButton>
					<Text
						size="sm"
						fw={500}
					>
						UnstyledButton
					</Text>
				</UnstyledButton>
			</Group>
		);
	},
};
