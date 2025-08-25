// .eslintrc.config.js (ESLint v9 flat config)
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config([
  // Ignore common build/artifact folders
  globalIgnores(['dist', 'node_modules', 'coverage']),

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      // Turn off stylistic rules that conflict with Prettier
      prettierConfig
    ],

    plugins: {
      react,
      // Run Prettier as an ESLint rule
      prettier: prettierPlugin
    },

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },

    settings: {
      react: { version: 'detect' }
    },

    rules: {
      // Format issues show up as ESLint errors
      'prettier/prettier': 'error',

      // TS/React niceties
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }
])
