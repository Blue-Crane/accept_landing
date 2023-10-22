import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import purgecss from "astro-purgecss";

import rome from "astro-rome";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), purgecss(), rome()],
});
