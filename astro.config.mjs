import markdoc from "@astrojs/markdoc";
import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		markdoc(),
		starlight({
			title: "My Docs",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/towndex",
				},
			],
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", slug: "guides/example" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
	site: "https://towndex.github.io",
});
