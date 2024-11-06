import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  site: "https://xn--80ak4amr.xn--p1ai",
  base: "/",
});
