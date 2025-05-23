import markdoc from "@astrojs/markdoc";
import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		markdoc(),
		starlight({
			title: "Towndex",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/towndex",
				},
			],
			sidebar: [
				{
					label: "Introduction",
					autogenerate: { directory: "introduction" },
				},
			],
		}),
	],
	site: "https://towndex.github.io",
});
