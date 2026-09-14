# Rules for agents

Minitine is a Mantine theme and a small set of layout components and pattern components.

Use these components to build a screen. Do not change their style.

## The first rule

Use the first item in this list that gives the result that you want. Then stop.

1. A Minitine component. Examples: `AppShell`, `InspectorPanel`, `EmptyState`, `StatusTimeline`.
2. A Mantine component with props. Examples: `p`, `gap`, `c`, `fw`, `size`, `variant`, `radius`.
3. A Minitine token. Examples: `var(--minitine-color-border)`, `tokens.color.border`.
4. A CSS module. Use a CSS module only if props cannot give you the layout.

If you write a hex color, a `px` value, or a `styles={{ ... }}` block, stop. In almost all
conditions, one of the first three items gives the correct result.

## Do these things

- **Put `MinitineProvider` at the root of the application.** Use it one time only.

- **Import the two stylesheets in this sequence:**

  ```tsx
  import "@mantine/core/styles.layer.css";
  import "minitine/styles.css";
  ```

  Import the Mantine stylesheet first. The Mantine rules are in a CSS layer, but the Minitine rules
  are not. Because of this, the Minitine rules must come after the Mantine rules.

- **Import from the root of the package.** Example: `import { AppShell, EmptyState } from "minitine";`
  Import Mantine components from `@mantine/core`. The two imports can be in the same file.

- **Use the default props from the theme.** The theme sets the correct `variant` for these
  components:

  `Button`, `Badge`, `Card`, `Paper`, `NavLink`, `Tabs`, `Checkbox`, `Switch`, `Alert`.

  The theme also sets `radius` for all components. Do not set these props again.

- **Use the space scale for `p`, `m` and `gap`:** `xs` 6, `sm` 8, `md` 12, `lg` 16, `xl` 24.

- **Use the title scale.** `Title order={3}` is a page title (18 px). `Title order={4}` is a panel
  title or a modal title (16 px). Use `size="sm"` for body text.

- **Use the Mantine status colors:** `red`, `yellow`, `green` and `blue`.

- **Give an accessible name to each control that has an icon and no text.** Example:
  `<ActionIcon aria-label="Close inspector">`.

- **Look at each change in the light scheme and in the dark scheme.** All tokens change with the
  scheme, but a color value in the code does not change. `MinitineProvider` starts in the dark
  scheme. Storybook has a control for the two schemes.

- **Put components for one product in the application for that product.** Do not put them in
  Minitine. A component that has a product name, a brand or a business rule is not applicable to
  Minitine.

## Do not do these things

- **Do not write a color value in the code.** Do not use `#fafafa`, `c="white"` or `bg="neutral.8"`.
  Use `var(--minitine-color-*)` in CSS, or `tokens.*` in TypeScript. Then the two schemes are
  correct.

- **Do not set a prop that the theme sets.** `<Card withBorder radius="sm" variant="minitine">` has
  three unnecessary props. Write `<Card>`.

- **Do not add `styles={{}}` or `classNames={{}}` to correct the appearance.** If a Mantine component
  is not correct in all screens, change `src/theme/mantine.ts` or `src/assets/styles/variants.scss`.
  If the component is not correct in one screen only, the design is usually correct.

- **Do not make a new Mantine variant.** These are the variants of the theme: `minitine` (Button,
  Badge, Card, Paper, NavLink, Tabs, Checkbox, Switch), `minitine-pills` (Tabs), `interactive`
  (Card, Paper), `status` and `status-pill` (Badge). To add one more variant, you must change the
  theme file and also `src/types/variants.ts`.

- **Do not import from `minitine/dist` or `minitine/src`.** These paths are not part of the API.

- **Do not put a Mantine component in a wrapper only to change its appearance.** Write a wrapper
  only if it adds a function. You can also write a wrapper for a layout that you use many times.

- **Do not use a CSS module to set space.** `<Stack gap="md">` is better than a class with
  `gap: 12px`.

- **Do not write a `px` value in a stylesheet.** Use `var(--mantine-spacing-*)`,
  `var(--mantine-font-size-*)` or a `--minitine-*` token.

## Two conditions in Mantine

Note: The theme has a solution for the two conditions that follow. Do not remove these solutions.

**Condition 1.** The Mantine functions that calculate CSS variables in JavaScript do not know the
color scheme. They calculate the contrast color from the shade of the light scheme. Thus a primary
color that changes between the two schemes can give white text on a white background. This is the
reason for `primaryShade: { light: 9, dark: 8 }`. This is also the reason why
`variantColorResolver` has special code for the `filled` variant with the primary color.

**Condition 2.** Some components set their CSS variables in the `style` attribute. A rule in a
stylesheet cannot change such a value. `Blockquote` (`--bq-*`) and `Progress`
(`--progress-section-color`) are two examples. For these components, the theme sets properties or
default props. Other components use the variable as a default value only. Examples: `Loader`,
`Slider`, `Timeline`, `Indicator`, `Radio`, `Notification` and `Table`. For these components, the
theme sets the variable. Then a `color` prop continues to operate.

## Where to make a change

| Change | File |
|---|---|
| Default props, variant colors, scales | `src/theme/mantine.ts` |
| Color tokens, focus ring, values for each scheme | `src/assets/styles/global.scss` |
| Custom variants, style of Mantine components | `src/assets/styles/variants.scss` |
| New layout component | `src/layout/<Name>/index.tsx` |
| New pattern component | `src/patterns/<Name>/index.tsx` |
| Public API | `src/index.ts` |
| Storybook | `src/stories/` |

## How to add a component

1. Write the component in `src/layout/` or in `src/patterns/`.
2. Export the component and its props interface.
3. Add the component and the props type to `src/index.ts`.
4. Write a story for the component.

Use `ReactNode` props for content. Do not write the content in the component.

## Before you complete a task

Run these commands:

```bash
bun run typecheck
bun run lint
bun run build
```

`bun run format` corrects the problems that `bun run lint` finds.

If you changed the appearance, do these steps also:

1. Run `bun run storybook:dev`.
2. Look at the story in the light scheme.
3. Look at the story in the dark scheme.

The type checker cannot find a white badge on a white background. Only your eyes can find it.