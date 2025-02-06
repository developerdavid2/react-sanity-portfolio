import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure build output goes into "dist"
  },
  base: "/", // Set this to "/" if your app is deployed at the root
});
