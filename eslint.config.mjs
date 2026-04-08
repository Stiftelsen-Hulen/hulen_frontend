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
      '.prettierrc.*',
      'package.json',
    ],
  },

  {
    files: tsFiles,
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'newline-before-return': 'warn',

      // Allow/require dangling commas for multiline.
      'comma-dangle': ['error', 'always-multiline'],

      // Keep modern React hooks safety net on (Next defaults this to warn).
      'react-hooks/exhaustive-deps': 'warn',

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],

      'no-unused-vars': 'off',

      // Prefer unused-imports' fixer-friendly unused detection.
      '@typescript-eslint/no-unused-vars': 'off',

      // Enforce removing unused imports/vars (imports are auto-fixable).
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]

export default eslintConfig
