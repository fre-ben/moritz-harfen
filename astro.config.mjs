import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  site: "https://www.moritz-harfen.de",
  build: { format: "directory" },
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [tailwind({ configFile: "./tailwind.config.mjs" })],
});
