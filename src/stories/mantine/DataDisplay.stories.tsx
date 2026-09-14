import {
	Accordion,
	AspectRatio,
	Avatar,
	BackgroundImage,
	Badge,
	Box,
	Button,
	Card,
	DataList,
	Group,
	Image,
	Indicator,
	Kbd,
	Marquee,
	NumberFormatter,
	OverflowList,
	RollingNumber,
	SimpleGrid,
	Spoiler,
	Stack,
	Text,
	ThemeIcon,
	Timeline,
} from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bell, GitBranch, GitCommit, GitPullRequest } from "lucide-react";
import { useState } from "react";

const meta = {
	title: "Mantine/Data Display",
	parameters: { layout: "padded", controls: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const PLACEHOLDER_IMAGE =
	"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='270'><rect width='480' height='270' fill='%2327272a'/><circle cx='240' cy='135' r='64' fill='%233f3f46'/></svg>";

export const Identity: Story = {
	render: () => (
		<Group gap="xl">
			<Avatar
				name="Ada Lovelace"
				color="initials"
			/>
			<Avatar.Group>
				<Avatar name="Ada Lovelace" />
				<Avatar name="Grace Hopper" />
				<Avatar>+3</Avatar>
			</Avatar.Group>
			<Indicator
				inline
				processing
				color="green"
				size={10}
			>
				<ThemeIcon
					variant="light"
					size="lg"
				>
					<Bell size={18} />
				</ThemeIcon>
			</Indicator>
			<Text size="sm">
				Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
			</Text>
		</Group>
	),
};

export const Media: Story = {
	render: () => (
		<SimpleGrid
			cols={{ base: 1, md: 3 }}
			spacing="lg"
		>
			<Image
				src={PLACEHOLDER_IMAGE}
				alt="Run artifact preview"
				radius="sm"
			/>
			<AspectRatio ratio={16 / 9}>
				<BackgroundImage
					src={PLACEHOLDER_IMAGE}
					radius="sm"
				>
					<Group
						justify="center"
						align="center"
						h="100%"
					>
						<Badge>BackgroundImage</Badge>
					</Group>
				</BackgroundImage>
			</AspectRatio>
			<AspectRatio ratio={1}>
				<Card padding="md">
					<Text
						size="sm"
						c="dimmed"
					>
						AspectRatio keeps this card square.
					</Text>
				</Card>
			</AspectRatio>
		</SimpleGrid>
	),
};

export const Numbers: Story = {
	render: function Render() {
		const [runs, setRuns] = useState(1280);

		return (
			<Group
				gap="xl"
				align="center"
			>
				<Stack gap={2}>
					<Text
						size="xs"
						c="dimmed"
					>
						NumberFormatter
					</Text>
					<NumberFormatter
						value={1284502.24}
						thousandSeparator
						prefix="$"
						decimalScale={2}
					/>
				</Stack>
				<Stack gap={2}>
					<Text
						size="xs"
						c="dimmed"
					>
						RollingNumber
					</Text>
					<RollingNumber
						value={runs}
						thousandSeparator
					/>
				</Stack>
				<Button
					variant="default"
					size="compact-sm"
					onClick={() => setRuns((value) => value + 137)}
				>
					Add runs
				</Button>
			</Group>
		);
	},
};

export const Details: Story = {
	render: () => (
		<SimpleGrid
			cols={{ base: 1, md: 2 }}
			spacing="xl"
		>
			<DataList withDivider>
				<DataList.Item>
					<DataList.ItemLabel>Branch</DataList.ItemLabel>
					<DataList.ItemValue>feat/auth-refresh</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Author</DataList.ItemLabel>
					<DataList.ItemValue>Ada Lovelace</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Duration</DataList.ItemLabel>
					<DataList.ItemValue>3m 12s</DataList.ItemValue>
				</DataList.Item>
			</DataList>
			<Timeline
				active={1}
				bulletSize={22}
			>
				<Timeline.Item
					bullet={<GitBranch size={12} />}
					title="Branch created"
				>
					<Text
						size="xs"
						c="dimmed"
					>
						2 hours ago
					</Text>
				</Timeline.Item>
				<Timeline.Item
					bullet={<GitCommit size={12} />}
					title="14 commits pushed"
				>
					<Text
						size="xs"
						c="dimmed"
					>
						18 minutes ago
					</Text>
				</Timeline.Item>
				<Timeline.Item
					bullet={<GitPullRequest size={12} />}
					title="Pull request opened"
				>
					<Text
						size="xs"
						c="dimmed"
					>
						Waiting for review
					</Text>
				</Timeline.Item>
			</Timeline>
		</SimpleGrid>
	),
};

export const Disclosure: Story = {
	render: () => (
		<Stack gap="xl">
			<Accordion
				defaultValue="logs"
				variant="separated"
			>
				<Accordion.Item value="logs">
					<Accordion.Control>Run logs</Accordion.Control>
					<Accordion.Panel>
						<Text size="sm">Install, build, and test output for the latest run.</Text>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="artifacts">
					<Accordion.Control>Artifacts</Accordion.Control>
					<Accordion.Panel>
						<Text size="sm">Two artifacts retained for 30 days.</Text>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<Spoiler
				maxHeight={44}
				showLabel="Show full message"
				hideLabel="Collapse"
			>
				<Text size="sm">
					Refresh tokens were rotated for every active session after the auth service
					rollout. Clients that cached the previous signing key will fail once, retry, and
					recover automatically on the next request.
				</Text>
			</Spoiler>
		</Stack>
	),
};

export const Overflow: Story = {
	render: () => (
		<Stack gap="xl">
			<Box maw={360}>
				<OverflowList
					data={["api", "web", "infra", "docs", "scripts", "mobile"]}
					renderItem={(item) => <Badge>{item}</Badge>}
					renderOverflow={(items) => <Badge variant="outline">+{items.length}</Badge>}
				/>
			</Box>
			<Marquee
				pauseOnHover
				gap="xl"
			>
				<Badge>build passed</Badge>
				<Badge>tests 428/428</Badge>
				<Badge>coverage 91%</Badge>
				<Badge>bundle 128kb</Badge>
			</Marquee>
		</Stack>
	),
};
