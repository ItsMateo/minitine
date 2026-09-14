import {
	Box,
	Group,
	Loader,
	LoadingOverlay,
	Progress,
	RingProgress,
	Skeleton,
	Stack,
	Text,
} from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Loading",
	component: Loader,
	argTypes: {
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		color: {
			control: "select",
			options: ["neutral", "gray", "blue", "red", "green"],
		},
		type: {
			control: "select",
			options: ["oval", "dots", "bars"],
		},
	},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Types: Story = {
	render: () => (
		<Group>
			<Stack align="center">
				<Loader type="oval" />
				<Text size="xs">Oval</Text>
			</Stack>
			<Stack align="center">
				<Loader type="dots" />
				<Text size="xs">Dots</Text>
			</Stack>
			<Stack align="center">
				<Loader type="bars" />
				<Text size="xs">Bars</Text>
			</Stack>
		</Group>
	),
};

export const Sizes: Story = {
	render: () => (
		<Group align="center">
			<Loader size="xs" />
			<Loader size="sm" />
			<Loader size="md" />
			<Loader size="lg" />
			<Loader size="xl" />
		</Group>
	),
};

export const ProgressBar: Story = {
	render: () => (
		<Stack maw={400}>
			<Progress value={45} />
			<Progress
				value={65}
				striped
			/>
			<Progress
				value={80}
				color="green"
				striped
				animated
			/>
		</Stack>
	),
};

export const Ring: Story = {
	render: () => (
		<Group>
			<RingProgress
				sections={[{ value: 72, color: "var(--minitine-color-accent)" }]}
				label={
					<Text
						ta="center"
						fw={700}
					>
						72%
					</Text>
				}
			/>
			<RingProgress
				sections={[
					{ value: 40, color: "var(--minitine-color-accent)" },
					{ value: 25, color: "gray" },
					{ value: 15, color: "blue" },
				]}
			/>
		</Group>
	),
};

export const Skeletons: Story = {
	render: () => (
		<Stack maw={400}>
			<Skeleton
				height={8}
				radius="xl"
			/>
			<Skeleton
				height={8}
				radius="xl"
				width="70%"
			/>
			<Skeleton
				height={8}
				radius="xl"
				width="40%"
			/>
			<Skeleton
				height={120}
				mt="md"
			/>
		</Stack>
	),
};

export const Overlay: Story = {
	render: () => (
		<Box
			pos="relative"
			h={200}
			p="md"
			style={{
				border: "1px solid var(--minitine-color-border)",
				borderRadius: "var(--mantine-radius-md)",
			}}
		>
			<LoadingOverlay
				visible
				overlayProps={{ blur: 2 }}
			/>
			<Text>This content is behind the loading overlay.</Text>
		</Box>
	),
};
