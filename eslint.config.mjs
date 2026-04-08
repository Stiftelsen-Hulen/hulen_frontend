import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import unusedImports from 'eslint-plugin-unused-imports'

const tsFiles = ['**/*.ts', '**/*.tsx']

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  // Explicitly list ignore patterns so it's obvious in the repo.
  globalIgnores([
    // Next defaults:
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
  ]),

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
      'react-hooks/set-state-in-effect': 'off',

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

  {
    files: ['src/util/LanguageContext/LanguageContext.tsx'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
])

export default eslintConfig
