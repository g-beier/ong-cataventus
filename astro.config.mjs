// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://cataventus.org.br",
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      fallbacks: ["Poppins", "sans"],
    },
    {
      provider: fontProviders.google(),
      name: "Caprasimo",
      cssVariable: "--font-caprasimo",
      fallbacks: ["Poppins", "sans"],
    },
  ],
});
