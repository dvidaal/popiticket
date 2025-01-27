import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["node_modules/**", "dist/**", ".next/**", "*.config.js"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"), // Applies to frontend
  ...compat.extends("plugin:node/recommended"), // Can add other configurations, e.g., for backend
];

export default eslintConfig;
