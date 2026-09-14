import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/stories/**/*.stories.tsx"],
	addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
	framework: "@storybook/react-vite",
	viteFinal: async (config) => {
		config.plugins = config.plugins?.filter((plugin) => {
			if (!plugin || typeof plugin !== "object" || !("name" in plugin)) {
				return true;
			}

			return plugin.name !== "vite:dts";
		});

		return config;
	},
};

export default config;
