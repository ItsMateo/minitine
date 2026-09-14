import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		react(),
		dts({
			include: ["src"],
			exclude: ["src/stories"],
			rollupTypes: false,
			tsconfigPath: "./tsconfig.json",
		}),
	],
	css: {
		modules: {
			localsConvention: "dashesOnly",
		},
	},
	build: {
		lib: {
			entry: {
				minitine: resolve("src/index.ts"),
			},
			formats: ["es"],
		},
		rollupOptions: {
			external: [
				"react",
				"react-dom",
				"react/jsx-runtime",
				"@mantine/core",
				"@mantine/hooks",
				"lucide-react",
			],
			output: {
				assetFileNames: "assets/[name][extname]",
			},
		},
		cssCodeSplit: true,
	},
});
