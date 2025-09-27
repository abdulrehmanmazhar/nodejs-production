// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    languageOptions:{
        parserOptions:{
            project: true,
            tsconfigRootDir: import.meta.dirname
        }
    },
    files: ["**/*.ts"],
    ignores: ["node_modules/**", "dist/**"],
    extends: [
        eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked
    ],
    rules: {
        "no-console": "error",
        quotes: ["error", "single", {allowTemplateLiterals: true}],
    }
  }
);