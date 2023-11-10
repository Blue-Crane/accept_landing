import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  site: "https://blue-crane.github.io",
  base: "/accept_landing",
  output: "server",
});
