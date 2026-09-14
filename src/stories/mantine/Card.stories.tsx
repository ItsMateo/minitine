import { Badge, Button, Card, Group, SimpleGrid, Text } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Card",
	component: Card,
	argTypes: {
		shadow: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		radius: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		padding: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		withBorder: { control: "boolean" },
		children: { table: { disable: true } },
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		padding: "lg",
		maw: 340,
		children: (
			<>
				<Group justify="space-between">
					<Text fw={500}>Card Title</Text>
					<Badge variant="minitine">Active</Badge>
				</Group>
				<Text
					size="sm"
					c="dimmed"
					mt="sm"
				>
					This is a simple card component with a title, badge, and description text. It
					can hold any content.
				</Text>
				<Button
					mt="md"
					fullWidth
				>
					Action
				</Button>
			</>
		),
	},
};

export const Grid: Story = {
	render: () => (
		<SimpleGrid cols={3}>
			{["Analytics", "Security", "Integrations"].map((title) => (
				<Card
					key={title}
					padding="lg"
				>
					<Text fw={500}>{title}</Text>
					<Text
						size="sm"
						c="dimmed"
						mt="sm"
					>
						Manage your {title.toLowerCase()} settings and preferences here.
					</Text>
					<Button
						mt="md"
						fullWidth
					>
						Configure
					</Button>
				</Card>
			))}
		</SimpleGrid>
	),
};

export const Sections: Story = {
	render: () => (
		<Card
			padding="lg"
			maw={340}
		>
			<Card.Section
				inheritPadding
				py="md"
				withBorder
			>
				<Group justify="space-between">
					<Text fw={600}>Team plan</Text>
					<Badge>Current</Badge>
				</Group>
			</Card.Section>

			<Text
				size="sm"
				c="dimmed"
				mt="md"
			>
				Everything in the starter plan, plus shared workspaces, unlimited history, and
				priority support.
			</Text>

			<Button
				mt="md"
				fullWidth
			>
				Change plan
			</Button>
		</Card>
	),
};
