import { Box } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { WorkspaceSwitcher, type WorkspaceSwitcherItem } from "../../patterns/WorkspaceSwitcher";

const INITIAL: WorkspaceSwitcherItem[] = [
	{ id: "ws-a", name: "Personal", kind: "local", active: true },
	{ id: "ws-b", name: "Auth service", kind: "local" },
	{ id: "ws-c", name: "Acme Engineering", kind: "cloud", disabled: true },
];

function InteractiveSwitcher() {
	const [items, setItems] = useState(INITIAL);
	const active = items.find((item) => item.active) ?? items[0];

	return (
		<Box
			w={220}
			p="sm"
			bg="var(--minitine-color-surface)"
		>
			<WorkspaceSwitcher
				activeName={active.name}
				activeKind={active.kind}
				items={items}
				onSelect={(id) =>
					setItems((prev) =>
						prev.map((item) => ({
							...item,
							active: item.id === id,
						})),
					)
				}
				onCreate={() => undefined}
			/>
		</Box>
	);
}

const meta = {
	title: "Patterns/WorkspaceSwitcher",
	component: WorkspaceSwitcher,
} satisfies Meta<typeof WorkspaceSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		activeName: "Personal",
		activeKind: "local",
		items: INITIAL,
	},
	render: () => <InteractiveSwitcher />,
};
