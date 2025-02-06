import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Set base URL correctly
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Fix routing issues
  },
});
