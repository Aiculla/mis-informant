import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import config from "./src/config/config.json";

export default defineConfig({
  // Run Astro in server mode so API routes are active
  output: "server",
  // Use the Node adapter to handle /api routes
  adapter: node({ mode: "middleware" }),

  // Disable trailing slashes so routes like /api/contact work without a slash
  trailingSlash: "never",

  site: config.site.base_url || "http://examplesite.com",
  base: config.site.base_path || "/",

  integrations: [
    react(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],

  markdown: {
    remarkPlugins: [
      remarkModifiedTime,
      rehypeHeadingIds,
      [remarkToc, { heading: "contents" }],
      [remarkCollapse, { test: "Table of contents" }],
    ],
    shikiConfig: { theme: "one-dark-pro", wrap: true },
    extendDefaultPlugins: true,
  },
});
