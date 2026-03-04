import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/naming-convention": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
      "prefer-rest-params": "off",
      "sort-imports": "error",
    },
  },
  {
    files: ["eslint.config.mjs"],
    rules: {
      "@typescript-eslint/naming-convention": "off",
    },
  },
]);
