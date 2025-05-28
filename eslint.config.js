import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  // Next.js recommended configurations
  ...compat.extends('next/core-web-vitals'),

  // Base configurations
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node, // Next.js runs server-side too
        ...globals.es2021
      }
    },
    plugins: {
      'react-hooks': reactHooks
    },
    settings: {
      react: {
        version: 'detect'
      },
      next: {
        rootDir: '.'
      }
    },
    rules: {
      // Code formatting and style
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'object-curly-spacing': ['error', 'always'],
      'max-len': ['error', {
        ignoreComments: true,
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }],
      'comma-dangle': ['error', 'only-multiline'],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',

      // React specific rules
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js 13+
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
      ],
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/prop-types': 'off', // Using TypeScript instead
      'react/jsx-uses-react': 'off', // Not needed with new JSX transform
      'react/jsx-uses-vars': 'error',
      'react/jsx-key': 'error',
      'react/no-unescaped-entities': 'warn',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // TypeScript specific
      'no-unused-vars': 'off', // Turn off base rule
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }],
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // Next.js specific rules (handled by next/core-web-vitals but listed for clarity)
      '@next/next/no-img-element': 'error',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-head-element': 'error',
      '@next/next/no-script-component-in-head': 'error',
      '@next/next/no-css-tags': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-document-import-in-page': 'error',

      // Import/Export rules
      'import/extensions': 'off',
      'import/no-unresolved': 'off', // TypeScript handles this
      'import/prefer-default-export': 'off',
      'import/order': ['error', {
        groups: [
          'builtin',    // Node.js built-in modules
          'external',   // npm packages
          'internal',   // Internal modules
          'parent',     // Parent directories
          'sibling',    // Same directory
          'index'       // Index files
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }],

      // General JavaScript/TypeScript rules
      'no-undef': 'off', // TypeScript handles this
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',

      // Accessibility rules (adjust based on your requirements)
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/anchor-is-valid': ['error', {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }]
    }
  },

  // App Router specific rules
  {
    files: ['app/**/*.{js,jsx,ts,tsx}'],
    rules: {
      // App Router pages are async by default
      '@typescript-eslint/require-await': 'off'
    }
  },

  // Pages Router specific rules
  {
    files: ['pages/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'import/no-default-export': 'off' // Pages need default exports
    }
  },

  // API routes
  {
    files: ['pages/api/**/*.{js,ts}', 'app/api/**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'import/no-default-export': 'off' // API routes need default exports
    }
  },

  // Test files
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'max-len': 'off',
      'react/jsx-props-no-spreading': 'off'
    }
  },

  // Configuration files
  {
    files: ['*.config.{js,ts,mjs}', '.eslintrc.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-default-export': 'off'
    }
  },

  // Middleware
  {
    files: ['middleware.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  // Ignore patterns
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'node_modules/**',
      '.env*',
      'public/**',
      '*.min.js',
      'coverage/**'
    ]
  }
];
