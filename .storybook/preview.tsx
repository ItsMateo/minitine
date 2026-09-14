import "@mantine/core/styles.layer.css";
import "../src/assets/styles/global.scss";
import "../src/assets/styles/variants.scss";
import "./preview.css";

import type { Preview } from "@storybook/react-vite";
import { ThemedDocsContainer } from "./ThemedDocsContainer";
import { MinitineProvider } from "../src/provider/MinitineProvider";

const preview: Preview = {
	decorators: [
		(Story, ctx) => (
			<MinitineProvider forceColorScheme={ctx.globals.theme as "light" | "dark"}>
				<Story />
			</MinitineProvider>
		),
	],
	globalTypes: {
		theme: {
			description: "Color scheme",
			toolbar: {
				title: "Theme",
				icon: "circlehollow",
				items: ["light", "dark"],
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
		theme: "dark",
	},
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			container: ThemedDocsContainer,
		},
		controls: {
			sort: "requiredFirst",
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
