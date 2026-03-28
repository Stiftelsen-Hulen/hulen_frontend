import path from 'node:path'
import { fileURLToPath } from 'node:url'

import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import unusedImports from 'eslint-plugin-unused-imports'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const tsFiles = ['**/*.ts', '**/*.tsx']

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

  {
    ignores: [
      // Next defaults (explicitly listed so it's obvious in the repo):
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',

      // Repo-specific:
      'dist/**',
      'coverage/**',
      'tsconfig.json',
      'prettierrc,json',
      'package.json',
    ],
  },

  {
    rules: {
      '@next/next/no-document-import-in-page': 'off',
    },
  },

  {
    files: tsFiles,
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'newline-before-return': 'warn',

      'import/prefer-default-export': 'off',
      'react-hooks/exhaustive-deps': 'off',

      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],

      'no-unused-vars': 'off',

      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      semi: 'off',
      'no-extra-boolean-cast': 'off',
      'comma-dangle': 'off',
    },
  },
]

export default eslintConfig
