import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	performance: {
		// preload: true,
		// prefetch: true,
	},
	plugins: [pluginReact()],
	html: {
		template: "./index.html",
	},
	source: {
		entry: {
			index: "./src/main.tsx",
		},
	},
});
