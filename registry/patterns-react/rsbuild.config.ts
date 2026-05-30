import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
	performance: {
		// preload: true,
		// prefetch: true,
	},
	plugins: [pluginReact()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	html: {
		template: "./index.html",
	},
	source: {
		entry: {
			index: "./src/main.tsx",
		},
	},
	tools: {
		rspack(config) {
			config.module ??= {};
			config.module.rules ??= [];
			config.module.rules.push({
				resourceQuery: /raw/,
				type: "asset/source",
			});
		},
	},
});
