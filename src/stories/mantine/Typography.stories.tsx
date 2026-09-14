import {
	Blockquote,
	Code,
	Highlight,
	List,
	Mark,
	Stack,
	Text,
	Title,
	Typography,
} from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Mantine/Typography",
	parameters: { controls: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {
	render: () => (
		<Stack gap="md">
			<Title order={1}>Page title</Title>
			<Title order={2}>Section title</Title>
			<Title order={3}>Panel title</Title>
			<Title order={4}>Inspector title</Title>
			<Text size="lg">Lead text for onboarding and empty states.</Text>
			<Text size="sm">Body text for descriptions, details, and supporting copy.</Text>
			<Text
				size="xs"
				c="dimmed"
			>
				Muted metadata for timestamps, counts, and secondary labels.
			</Text>
			<Text
				ff="monospace"
				size="sm"
			>
				fix/oauth-refresh-retry-loop
			</Text>
		</Stack>
	),
};

export const Inline: Story = {
	render: () => (
		<Stack gap="md">
			<Highlight highlight={["refresh token", "retry"]}>
				The refresh token rotation added one retry before the request succeeds.
			</Highlight>
			<Text size="sm">
				Rotation is handled by <Code>auth.rotateRefreshToken()</Code> and logged as{" "}
				<Mark>auth.rotate</Mark>.
			</Text>
			<Code block>{`bun run build
bun run typecheck`}</Code>
		</Stack>
	),
};

export const Blocks: Story = {
	render: () => (
		<Stack gap="lg">
			<Blockquote cite="— ADR 001">
				Keep the design system generic; product vocabulary lives in the application.
			</Blockquote>
			<List
				size="sm"
				spacing="xs"
			>
				<List.Item>Tokens drive color, radius, and motion</List.Item>
				<List.Item>Patterns compose Mantine primitives</List.Item>
				<List.Item>Product screens live outside this package</List.Item>
			</List>
		</Stack>
	),
};

export const RawHtml: Story = {
	name: "Typography",
	render: () => (
		<Typography>
			<h3>Release notes</h3>
			<p>
				Unstyled HTML rendered inside <code>Typography</code> picks up Mantine defaults.
			</p>
			<ul>
				<li>Rotate refresh tokens on every sign-in</li>
				<li>Retry once on a stale signing key</li>
			</ul>
		</Typography>
	),
};
