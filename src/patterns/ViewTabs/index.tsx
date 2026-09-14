import { Divider, Tabs } from "@mantine/core";

export interface ViewTabsProps {
	tabs: string[];
	value: string;
	onChange: (value: string) => void;
}

export function ViewTabs({ tabs, value, onChange }: ViewTabsProps) {
	return (
		<>
			<Tabs
				variant="minitine-pills"
				value={value}
				onChange={(next) => next && onChange(next)}
				styles={{
					list: {
						display: "flex",
						flexWrap: "wrap",
						alignItems: "center",
						gap: 4,
						borderBottom: "none",
						padding: "0 var(--mantine-spacing-md) var(--mantine-spacing-sm)",
					},
					tab: {
						border: "none",
						borderRadius: "var(--minitine-radius-sm)",
						fontSize: "var(--mantine-font-size-xs)",
						fontWeight: 500,
						padding: "6px var(--mantine-spacing-sm)",
						lineHeight: 1.2,
						height: "auto",
						color: "var(--minitine-color-text-muted)",
						background: "transparent",
						"&[data-active]": {
							color: "var(--minitine-color-text)",
							background: "var(--minitine-color-card-hover)",
						},
					},
				}}
			>
				<Tabs.List>
					{tabs.map((tab) => (
						<Tabs.Tab
							key={tab}
							value={tab}
						>
							{tab}
						</Tabs.Tab>
					))}
				</Tabs.List>
			</Tabs>
			<Divider />
		</>
	);
}
