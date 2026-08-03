// vitest.config.ts
import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    include: ["**/*.test.{ts,tsx}"], // optional, but good to be explicit
    exclude: [
      ...configDefaults.exclude,
      "**/.next/**",
      "**/dist/**",
      "**/build/**"
    ]
  }
});





