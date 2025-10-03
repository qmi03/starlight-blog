// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://www.qmi03.netlify.app",

  integrations: [
    starlight({
      credits: true,
      title: "Qmi",
      lastUpdated: true,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/qmi03",
        },
        { icon: "twitter", label: "Twitter", href: "https://x.com/qmiVirgil" },
        {
          icon: "email",
          label: "email",
          href: "mailto:minh.pham1126@gmail.com",
        },
      ],
      plugins: [
        catppuccin(),
        starlightBlog({
          metrics: {
            readingTime: true,
            words: "total",
          },
          recentPostCount: 10,
          postCount: 15,
        }),
      ],
    }),
  ],

  output: "static",
});
