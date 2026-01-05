import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import checkFile from "eslint-plugin-check-file";
import playwright from "eslint-plugin-playwright";

export default [
  {
    // --- SECTION 1: CORE LOGIC & NAMING ---
    name: "project-x/typescript-core",
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "check-file": checkFile,
      playwright: playwright,
    },
    rules: {
      // --- 1. VISUAL STYLE & WHITESPACE ---
      quotes: [
        "error",
        "single",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      semi: ["error", "always"],
      "no-extra-semi": "error",
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "padded-blocks": ["error", { classes: "always" }],
      "lines-between-class-members": [
        "error",
        "always",
        { exceptAfterSingleLine: true },
      ],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],

      // --- 2. TYPESCRIPT STRICTNESS ---
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "error",

      // --- 3. NAMING CONVENTIONS ---
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "method", format: ["camelCase"] },
        { selector: "function", format: ["camelCase"] },
        {
          selector: ["class", "interface", "typeAlias"],
          format: ["PascalCase"],
        },
        {
          selector: "variable",
          modifiers: ["const"],
          format: ["UPPER_CASE", "camelCase"],
        },
        { selector: ["variable", "parameter"], format: ["camelCase"] },
        {
          selector: "variable",
          modifiers: ["unused"],
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
      ],

      // --- 4. PLAYWRIGHT SPECIFIC RULES ---
      "playwright/no-skipped-test": "warn",
      "playwright/no-focused-test": "error",
      "playwright/valid-expect": "error",
      "playwright/no-wait-for-timeout": "error",

      // --- 5. FILE SYSTEM ARCHITECTURE ---
      "check-file/filename-naming-convention": [
        "error",
        { "**/*.{ts,tsx}": "KEBAB_CASE" },
        { ignoreMiddleExtensions: true },
      ],
      "check-file/folder-naming-convention": [
        "error",
        { "**/*/": "KEBAB_CASE" },
      ],
    },
  },
  {
    // --- SECTION 2: GLOBAL IGNORES ---
    name: "project-x/global-ignores",
    ignores: [
      "test-results/",
      "playwright-report/",
      "dist/",
      "node_modules/",
      ".husky/",
    ],
  },
];
