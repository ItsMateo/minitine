import {
	Box,
	Center,
	Divider,
	Flex,
	Grid,
	Group,
	SimpleGrid,
	Space,
	Stack,
	Text,
} from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

function DemoBox({ children }: { children: React.ReactNode }) {
	return (
		<Box
			p="md"
			bg="var(--minitine-color-surface-raised)"
			bdrs="sm"
		>
			{children}
		</Box>
	);
}

const meta = {
	title: "Mantine/Layout",
	component: Stack,
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StackLayout: Story = {
	render: () => (
		<Stack maw={400}>
			<DemoBox>Item 1</DemoBox>
			<DemoBox>Item 2</DemoBox>
			<DemoBox>Item 3</DemoBox>
		</Stack>
	),
};

export const GroupLayout: Story = {
	render: () => (
		<Stack>
			<Text fw={600}>Default</Text>
			<Group>
				<DemoBox>Item 1</DemoBox>
				<DemoBox>Item 2</DemoBox>
				<DemoBox>Item 3</DemoBox>
			</Group>

			<Text fw={600}>Apart</Text>
			<Group justify="space-between">
				<DemoBox>Left</DemoBox>
				<DemoBox>Right</DemoBox>
			</Group>

			<Text fw={600}>Center</Text>
			<Group justify="center">
				<DemoBox>Centered</DemoBox>
			</Group>
		</Stack>
	),
};

export const GridLayout: Story = {
	render: () => (
		<Grid>
			<Grid.Col span={4}>
				<DemoBox>span=4</DemoBox>
			</Grid.Col>
			<Grid.Col span={4}>
				<DemoBox>span=4</DemoBox>
			</Grid.Col>
			<Grid.Col span={4}>
				<DemoBox>span=4</DemoBox>
			</Grid.Col>
			<Grid.Col span={6}>
				<DemoBox>span=6</DemoBox>
			</Grid.Col>
			<Grid.Col span={6}>
				<DemoBox>span=6</DemoBox>
			</Grid.Col>
			<Grid.Col span={12}>
				<DemoBox>span=12</DemoBox>
			</Grid.Col>
		</Grid>
	),
};

export const SimpleGridLayout: Story = {
	render: () => (
		<SimpleGrid cols={3}>
			<DemoBox>1</DemoBox>
			<DemoBox>2</DemoBox>
			<DemoBox>3</DemoBox>
			<DemoBox>4</DemoBox>
			<DemoBox>5</DemoBox>
			<DemoBox>6</DemoBox>
		</SimpleGrid>
	),
};

export const FlexLayout: Story = {
	render: () => (
		<Flex
			gap="md"
			wrap="wrap"
			justify="center"
			align="center"
		>
			<DemoBox>Flex 1</DemoBox>
			<DemoBox>Flex 2</DemoBox>
			<DemoBox>Flex 3</DemoBox>
			<DemoBox>Flex 4</DemoBox>
		</Flex>
	),
};

export const Spacing: Story = {
	render: () => (
		<Stack>
			<Text>Content above</Text>
			<Divider />
			<Text>Content below divider</Text>
			<Space h="xl" />
			<Text>Content after spacer</Text>
			<Divider label="Section" />
			<Text>Content after labeled divider</Text>
			<Center h={100}>
				<Text>Centered content</Text>
			</Center>
		</Stack>
	),
};
