import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { format } from "date-fns";

export default defineConfig({
  root: __dirname,
  base: "",
  plugins: [
    createHtmlPlugin({
      minify: false,
      inject: {
        data: {
          publishDate: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        },
      },
    }),
  ],
});
