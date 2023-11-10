import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  site: "https://blue-crane.github.io",
  base: "/accept_landing",
});
