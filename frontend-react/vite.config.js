import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct routing
  build: {
    outDir: "dist", // Ensure the output remains 'dist'
    emptyOutDir: true,
  },
});
