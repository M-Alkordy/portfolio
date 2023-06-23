import { defineConfig } from "vite";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        index: "src/index.html",
      },
    },
  },
});
