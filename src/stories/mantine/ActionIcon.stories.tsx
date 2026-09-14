import { ActionIcon, Group, Stack, Text } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlusIcon } from "lucide-react";
import { Icon } from "../../primitives/Icon";

const meta = {
	title: "Mantine/ActionIcon",
	component: ActionIcon,
	argTypes: {
		variant: {
			control: "select",
			options: ["filled", "light", "outline", "subtle", "transparent", "default"],
		},
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		color: {
			control: "select",
			options: ["neutral", "gray", "blue", "red", "green"],
		},
		disabled: { control: "boolean" },
		children: { table: { disable: true } },
		loading: { control: "boolean" },
	},
	args: {
		children: <Icon icon={PlusIcon} />,
	},
} satisfies Meta<typeof ActionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
	render: () => (
		<Group>
			{(["filled", "light", "outline", "subtle", "transparent", "default"] as const).map(
				(variant) => (
					<Stack
						key={variant}
						align="center"
						gap={4}
					>
						<ActionIcon variant={variant}>
							<Icon icon={PlusIcon} />
						</ActionIcon>
						<Text size="xs">{variant}</Text>
					</Stack>
				),
			)}
		</Group>
	),
};

export const Sizes: Story = {
	render: () => (
		<Group align="center">
			{(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
				<ActionIcon
					key={size}
					size={size}
					variant="filled"
				>
					<PlusIcon />
				</ActionIcon>
			))}
		</Group>
	),
};
