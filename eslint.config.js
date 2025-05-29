// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});


export default [// Next.js recommended configurations
	...compat.extends('next/core-web-vitals'), // Base configurations
	...tseslint.configs.recommended, pluginJs.configs.recommended, pluginReact.configs.flat.recommended, pluginReact.configs.flat['jsx-runtime'], {
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
			indent: ['error', 'tab', { SwitchCase: 1 }],
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
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
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
			'react/display-name': 'off',

			// React Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'error',

			'import/no-anonymous-default-export': 'off',

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
			'@next/next/no-html-link-for-pages': 'error',
			'@next/next/no-head-element': 'error',
			'@next/next/no-script-component-in-head': 'error',
			'@next/next/no-css-tags': 'error',
			'@next/next/no-sync-scripts': 'error',
			'@next/next/no-document-import-in-page': 'error',
			' @next/next/no-img-element': 'off',

			// General JavaScript/TypeScript rules
			'no-undef': 'off', // TypeScript handles this
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'error',
			'prefer-const': 'error',
			'no-var': 'error',
		}
	}, // Ignore patterns
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
	}, ...storybook.configs['flat/recommended']];
