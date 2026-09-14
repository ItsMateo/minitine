# Minitine

Minitine is a small layer on [Mantine](https://mantine.dev) 9. It has a
theme with two color schemes and a set of design tokens. It also has the components that each
desktop application writes again:

- an application frame
- a sidebar
- an inspector panel
- empty states, error states and loading states
- a status timeline

Minitine is not a replacement for Mantine. Mantine gives the components. Minitine sets their
appearance and adds the components above them.

- React 19, Mantine 9 and TypeScript
- One library build, one stylesheet and full type definitions
- A light scheme and a dark scheme, with CSS variables for all values
- All Mantine core components have a story in Storybook with this theme

---

## Installation

```bash
bun add minitine @mantine/core @mantine/hooks
```

`react`, `react-dom`, `@mantine/core` and `@mantine/hooks` are peer dependencies. Minitine does not
include them in its build. `lucide-react` is a dependency of Minitine. The components use it for
their icons.

## Start

You must do two imports and add one provider:

```tsx
// main.tsx
import "@mantine/core/styles.layer.css";
import "minitine/styles.css";

import { MinitineProvider } from "minitine";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
	<MinitineProvider>
		<App />
	</MinitineProvider>,
);
```

Import the Mantine stylesheet first. The Mantine rules are in a CSS layer, but the Minitine rules
are not. Because of this, the Minitine rules must come after the Mantine rules.

`MinitineProvider` accepts all props of `MantineProvider`, but not `theme`. The provider starts in
the dark scheme. To change the scheme, set `defaultColorScheme="light"` or `forceColorScheme`.

## The first screen

`AppShell` is the frame. It has a title bar, a sidebar and a main column. The sidebar can have a
footer. The right side can have an inspector. Each slot accepts a `ReactNode`. Thus you can put your
own components in each slot.

```tsx
import { Button, Text } from "@mantine/core";
import { Inbox, KanbanSquare, Settings } from "lucide-react";
import {
	AppPageHeader,
	AppShell,
	AppSidebar,
	EmptyState,
	SidebarStatusFooter,
	TitleBar,
} from "minitine";

export function App() {
	return (
		<AppShell
			titleBar={<TitleBar brand={<Text size="sm" fw={600}>Acme</Text>} />}
			sidebar={
				<AppSidebar
					items={[
						{ id: "board", label: "Board", icon: KanbanSquare, active: true },
						{ id: "inbox", label: "Inbox", icon: Inbox, badge: 7 },
						{ id: "settings", label: "Settings", icon: Settings },
					]}
				/>
			}
			sidebarFooter={
				<SidebarStatusFooter
					status={{ tone: "success", label: "Sync running", detail: "42,391 items" }}
					footer="v1.4.0"
				/>
			}
		>
			<AppPageHeader
				title="Engineering team"
				description="All work for your team"
				actions={<Button>New task</Button>}
			/>
			<EmptyState
				title="Nothing here yet"
				description="New items show in this list."
				icon={<Inbox size={24} />}
				action={<Button size="compact-sm">Create item</Button>}
			/>
		</AppShell>
	);
}
```

The sidebar items are data, not markup. Each item has this shape:
`{ id, label, icon, badge?, active?, disabled?, onClick? }`. The `icon` is a Lucide component.

### An inspector panel

```tsx
import { Button } from "@mantine/core";
import {
	DetailRow,
	InspectorActions,
	InspectorPanel,
	InspectorSection,
	InspectorText,
} from "minitine";

<AppShell
	inspector={
		<InspectorPanel
			title="Refresh token rotation"
			subtitle="Opened 2 hours ago"
			onClose={() => setSelected(null)}
			footer={
				<InspectorActions>
					<Button variant="default">Dismiss</Button>
					<Button>Approve</Button>
				</InspectorActions>
			}
		>
			<InspectorSection title="Details">
				<DetailRow label="Owner">Ada Lovelace</DetailRow>
				<DetailRow label="Branch">fix/oauth-refresh</DetailRow>
			</InspectorSection>
			<InspectorSection title="Summary">
				<InspectorText>
					The server rotates the session at each sign-in. A client with the old key makes
					one more request. Then it operates correctly.
				</InspectorText>
			</InspectorSection>
		</InspectorPanel>
	}
>
	{/* … */}
</AppShell>;
```

### A modal with a form

```tsx
import { Button, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FormModal } from "minitine";

function CreateProject() {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Button onClick={open}>New project</Button>
			<FormModal
				opened={opened}
				onClose={close}
				title="New project"
				description="A project groups related work and has one list of members."
				footer={
					<>
						<Button variant="default" onClick={close}>Cancel</Button>
						<Button onClick={close}>Create</Button>
					</>
				}
			>
				<Stack gap="sm">
					<TextInput label="Name" placeholder="Acme platform" />
				</Stack>
			</FormModal>
		</>
	);
}
```

### A sequence of steps

```tsx
import { StatusTimeline, StatusTimelineItem } from "minitine";

<StatusTimeline>
	<StatusTimelineItem state="completed" title="Repository copied" time="00:02" />
	<StatusTimelineItem state="running" title="Dependencies install" time="00:18" />
	<StatusTimelineItem state="pending" title="Tests" time="—" />
</StatusTimeline>;
```

## The components

**Provider and theme:** `MinitineProvider`, `MANTINE_THEME`, `tokens`, `SHELL_DIMENSIONS`

| Layout | Patterns | Primitives |
|---|---|---|
| `AppShell` | `EmptyState` · `ErrorState` · `LoadingState` | `Icon` |
| `AppSidebar` | `FormModal` · `PageHeader` · `ViewTabs` | `ThemeImage` |
| `AppPageHeader` | `FilterNavItem` · `BoardColumn` · `BoardZone` | `Spacer` |
| `TitleBar` | `StatusIndicator` · `StatusTimeline` · `PriorityPill` | |
| `FilterBar` | `SidebarStatusFooter` · `WorkspaceSwitcher` | |
| `InspectorPanel` (with `InspectorSection`, `InspectorSectionTitle`, `InspectorText`, `InspectorLink`, `InspectorActions`) | `DetailRow` · `SectionLabel` · `ChecklistItem` · `InspectorStatusBadge` | |

Each component also exports its props type. Examples: `AppShellProps`, `EmptyStateProps`.

## How to change the theme

The colors, the radii, the motion and the sizes of the frame are CSS variables with the prefix
`--minitine-`. Each color scheme has its own values. To change a value, write a new rule after the
import of the stylesheet:

```css
:root {
	--minitine-radius-sm: 4px;
}

[data-mantine-color-scheme="dark"] {
	--minitine-color-accent: #3b82f6;
	--minitine-color-accent-foreground: #ffffff;
	--minitine-color-surface: #0f1115;
}
```

TypeScript can read the same values from `tokens`:

```tsx
import { tokens } from "minitine";

<Box bg={tokens.color.surfaceRaised} style={{ borderRadius: tokens.radius.sm }} />;
```

Use these two scales for all sizes:

- **Space:** `xs` 6, `sm` 8, `md` 12, `lg` 16, `xl` 24
- **Titles:** h1 24, h2 20, h3 18 (page titles), h4 16 (panel titles and modal titles)

### Default props from the theme

`MinitineProvider` sets default props. Thus simple Mantine markup is correct without more work.
`Button`, `Badge`, `Card`, `Paper`, `NavLink`, `Tabs`, `Checkbox` and `Switch` use the `minitine`
variant. `Alert` uses the `light` variant. `ActionIcon` uses the `subtle` variant. `Stepper` uses
`size="sm"`. All components use `defaultRadius: "sm"`.

The theme adds these variants to the Mantine variants:

| Variant | Components | Function |
|---|---|---|
| `minitine` | Button, Badge, Card, Paper, NavLink, Tabs, Checkbox, Switch | The default appearance |
| `interactive` | Card, Paper | A surface that the user can click, with a hover color |
| `status` | Badge | A dot and a label, with no background and no border |
| `status-pill` | Badge | A pill with a status color |
| `minitine-pills` | Tabs | Small tabs in the shape of pills |

The theme does not change the Mantine status colors (`red`, `yellow`, `green` and `blue`). Thus
these colors show a status, and they do not show a brand.

## Storybook

```bash
bun run storybook:dev      # http://localhost:6006
```

- **Mantine/** — all Mantine core components with this theme
- **Layout/** — the application frame
- **Patterns/** — the components in the table above

The toolbar has a control for the light scheme and the dark scheme. The a11y addon examines each
story.

## Local development

```bash
bun install
bun run storybook:dev   # develop with the stories
bun run typecheck
bun run lint            # bun run format corrects the problems
bun run build           # dist/minitine.js, dist/assets/minitine.css and the types
```

```
src/
├── assets/styles/   global.scss (tokens) · variants.scss (variants and component styles)
├── theme/           mantine.ts (theme) · tokens.ts (tokens for TypeScript)
├── layout/          components for the application frame
├── patterns/        components for repeated parts of the UI
├── primitives/      Icon, ThemeImage, Spacer
└── stories/         Storybook
```

[AGENTS.md](AGENTS.md) gives the rules to extend this library. Agents must read that document first.

## Accessibility

- The two color schemes have a contrast ratio for WCAG 2.2 AA.
- Each interactive control shows a focus ring.
- All transitions obey `prefers-reduced-motion`.
- Each control that has an icon and no text must have an `aria-label`.
- The Storybook a11y addon examines each story while you work.

---

This document uses ASD-STE100 Simplified Technical English.
