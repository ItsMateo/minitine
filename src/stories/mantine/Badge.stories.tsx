import { Badge, Group, Stack, Text } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowUp, Circle } from "lucide-react";

const meta = {
	title: "Mantine/Badge",
	component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "auth-service",
		variant: "minitine",
	},
};

export const Semantic: Story = {
	render: () => (
		<Stack>
			<Group>
				<Badge variant="minitine">Neutral</Badge>
				<Badge
					color="green"
					variant="status"
					leftSection={
						<Circle
							size={8}
							fill="currentColor"
							color="currentColor"
						/>
					}
				>
					Running
				</Badge>
				<Badge
					color="yellow"
					variant="status-pill"
				>
					Needs approval
				</Badge>
				<Badge
					color="red"
					variant="status-pill"
					leftSection={<ArrowUp size={10} />}
				>
					High
				</Badge>
			</Group>
			<Text
				size="sm"
				c="dimmed"
			>
				Status dot labels use <code>status</code>; inspector pills use{" "}
				<code>status-pill</code>. Both resolve to semantic text colors.
			</Text>
		</Stack>
	),
};
