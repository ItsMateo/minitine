import {
	AppShell,
	Box,
	Button,
	Card,
	Collapse,
	Container,
	Divider,
	Group,
	Menu,
	Menubar,
	Paper,
	ScrollArea,
	Scroller,
	SimpleGrid,
	Splitter,
	Stack,
	TableOfContents,
	Text,
	Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Structure",
	parameters: { layout: "padded", controls: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const LOG_LINES = Array.from({ length: 12 }, (_, index) => `Log line ${index + 1}`);
const CARDS = Array.from({ length: 10 }, (_, index) => `Card ${index + 1}`);

export const Surfaces: Story = {
	render: () => (
		<Container size="sm">
			<Stack gap="md">
				<Paper p="md">
					<Text size="sm">Paper inside a Container</Text>
				</Paper>
				<Paper
					p="md"
					shadow="md"
				>
					<Text size="sm">Raised paper</Text>
				</Paper>
			</Stack>
		</Container>
	),
};

export const Scrolling: Story = {
	render: () => (
		<SimpleGrid
			cols={{ base: 1, md: 2 }}
			spacing="lg"
		>
			<ScrollArea
				h={160}
				type="auto"
			>
				<Stack gap="xs">
					{LOG_LINES.map((line) => (
						<Text
							key={line}
							size="sm"
						>
							{line}
						</Text>
					))}
				</Stack>
			</ScrollArea>
			<Scroller>
				<Group
					gap="sm"
					wrap="nowrap"
				>
					{CARDS.map((card) => (
						<Card
							key={card}
							padding="sm"
							w={140}
						>
							<Text size="sm">{card}</Text>
						</Card>
					))}
				</Group>
			</Scroller>
		</SimpleGrid>
	),
};

export const Panes: Story = {
	render: () => (
		<Splitter h={220}>
			<Splitter.Pane defaultSize="40%">
				<Stack
					gap="xs"
					p="sm"
				>
					<Text
						size="sm"
						fw={600}
					>
						Files
					</Text>
					<Text
						size="sm"
						c="dimmed"
					>
						Drag the handle to resize.
					</Text>
				</Stack>
			</Splitter.Pane>
			<Splitter.Pane defaultSize="60%">
				<Box p="sm">
					<Text size="sm">Diff</Text>
				</Box>
			</Splitter.Pane>
		</Splitter>
	),
};

export const Collapsible: Story = {
	render: function Render() {
		const [opened, { toggle }] = useDisclosure(false);

		return (
			<Stack
				gap="sm"
				maw={420}
			>
				<Button
					variant="default"
					onClick={toggle}
				>
					{opened ? "Hide" : "Show"} details
				</Button>
				<Collapse expanded={opened}>
					<Paper p="md">
						<Text size="sm">Collapse animates height changes.</Text>
					</Paper>
				</Collapse>
			</Stack>
		);
	},
};

export const Navigation: Story = {
	render: () => (
		<SimpleGrid
			cols={{ base: 1, md: 2 }}
			spacing="xl"
		>
			<Menubar>
				<Menubar.Menu>
					<Menubar.Target>File</Menubar.Target>
					<Menubar.Dropdown>
						<Menu.Item>New run</Menu.Item>
						<Menu.Item>Open workspace</Menu.Item>
						<Menu.Divider />
						<Menu.Item>Settings</Menu.Item>
					</Menubar.Dropdown>
				</Menubar.Menu>
				<Menubar.Menu>
					<Menubar.Target>View</Menubar.Target>
					<Menubar.Dropdown>
						<Menu.Item>Board</Menu.Item>
						<Menu.Item>Timeline</Menu.Item>
					</Menubar.Dropdown>
				</Menubar.Menu>
			</Menubar>
			<Stack gap="md">
				<TableOfContents
					scrollSpyOptions={{ selector: "#toc-demo :is(h3, h4)" }}
					getControlProps={({ data }) => ({
						onClick: () => data.getNode().scrollIntoView(),
						children: data.value,
					})}
				/>
				<ScrollArea
					id="toc-demo"
					h={140}
				>
					<Stack gap="sm">
						<Title order={3}>Overview</Title>
						<Title order={4}>Tokens</Title>
						<Title order={4}>Variants</Title>
						<Title order={3}>Accessibility</Title>
					</Stack>
				</ScrollArea>
			</Stack>
		</SimpleGrid>
	),
};

export const Shell: Story = {
	name: "AppShell (Mantine)",
	parameters: { layout: "fullscreen" },
	render: () => (
		<AppShell
			header={{ height: 48 }}
			navbar={{ width: 200, breakpoint: "sm" }}
			padding="md"
		>
			<AppShell.Header>
				<Group
					h="100%"
					px="md"
				>
					<Text
						size="sm"
						fw={600}
					>
						Mantine AppShell
					</Text>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p="sm">
				<Stack gap="xs">
					<Text size="sm">Board</Text>
					<Divider />
					<Text size="sm">Settings</Text>
				</Stack>
			</AppShell.Navbar>
			<AppShell.Main>
				<Title order={3}>Main</Title>
				<Text
					size="sm"
					c="dimmed"
				>
					Mantine's own shell, next to Minitine's opinionated one under Layout.
				</Text>
			</AppShell.Main>
		</AppShell>
	),
};
