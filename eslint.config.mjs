import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends:["next/core-web-vitals", "next/typescript"],

    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-sync-scripts": "off",
      "@next/next/no-title": "off",
      "@next/next/no-page-custom-font": "off",
      "@next/next/no-document-import-in-page": "off",
      "@next/next/no-document-import-in-layout": "off",
      "@next/next/no-document-import-in-api-route": "off",
      "@next/next/no-document-import-in-middleware": "off",
      "@next/next/no-document-export": "off",
      "@next/next/no-document-export-in-api-route": "off",
      "@next/next/no-document-export-in-middleware": "off",
      "@next/next/no-document-export-in-page": "off",
      "@next/next/no-document-export-in-layout": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-unsafe-function-types": "off",
      "@typescript-eslint/no-wrapper-object-type": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      
    },
  }),
];

export default eslintConfig;
