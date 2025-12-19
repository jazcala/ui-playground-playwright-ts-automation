import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import checkFile from "eslint-plugin-check-file";

export default [
  {
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
    },

    rules: {
      // Force explicit return types
      "@typescript-eslint/explicit-function-return-type": "error",

      "padded-blocks": ["error", { classes: "always" }],

      "eol-last": ["error", "always"],

      semi: ["error", "always"], // Forces an error if a semicolon is missing
      "no-extra-semi": "error", // Prevents double semicolons (;;)

      // Prevents more than one empty line in a row
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],

      // Forces an empty line between methods in your Page Objects
      "lines-between-class-members": [
        "error",
        "always",
        { exceptAfterSingleLine: true },
      ],

      // Adds a line before 'return' statements for clarity
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],

      // Prevent the use of 'any'
      "@typescript-eslint/no-explicit-any": "error",

      // Force proper naming
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "method",
          format: ["camelCase"],
        },
        {
          selector: "function",
          format: ["camelCase"],
        },
        {
          selector: ["class", "interface", "typeAlias"],
          format: ["PascalCase"],
        },
        {
          selector: "variable",
          modifiers: ["const", "global"],
          format: ["UPPER_CASE", "camelCase"],
        },
        {
          selector: ["variable", "parameter"],
          format: ["camelCase"],
        },
      ],

      "check-file/filename-naming-convention": [
        "error",
        {
          // Ensures all TS files in these folders are kebab-case
          "**/*.{ts,tsx}": "KEBAB_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          // Ensures folder names are kebab-case
          "src/**/": "KEBAB_CASE",
        },
      ],
    },
  },
];
