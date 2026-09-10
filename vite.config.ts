import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { URL, fileURLToPath } from "url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      comp: fileURLToPath(new URL("./src/components/", import.meta.url)),
      forth: fileURLToPath(
        new URL("./src/first/second/third/forth/", import.meta.url),
      ),
    },
  },

  plugins: [react(), tailwindcss()],
});
