import { Button, Text } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { KanbanSquare, Settings } from "lucide-react";
import { AppPageHeader, AppShell, AppSidebar, SidebarStatusFooter, TitleBar } from "../../index";

const meta = {
	title: "Layout/App Shell",
	parameters: {
		layout: "fullscreen",
		controls: { disable: true },
	},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function Brand() {
	return (
		<Text
			size="sm"
			fw={600}
		>
			Acme
		</Text>
	);
}

export const Default: Story = {
	render: () => (
		<AppShell
			titleBar={
				<TitleBar
					brand={<Brand />}
					status={
						<Text
							size="xs"
							c="dimmed"
						>
							Ready
						</Text>
					}
				/>
			}
			sidebar={
				<AppSidebar
					brand={<Brand />}
					items={[
						{ id: "board", label: "Board", icon: KanbanSquare, active: true },
						{ id: "settings", label: "Settings", icon: Settings },
					]}
				/>
			}
			sidebarFooter={
				<SidebarStatusFooter
					status={{ tone: "success", label: "Sync running", detail: "42,391 items" }}
					progress={{ label: "Import", detail: "3m 12s", value: 68, showValue: true }}
					footer="v0.1.0"
				/>
			}
		>
			<AppPageHeader
				title="Engineering team"
				description="Canonical shell scaffold"
				actions={<Button>New task</Button>}
			/>
		</AppShell>
	),
};
