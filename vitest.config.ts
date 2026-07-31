// vitest.config.ts
import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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

