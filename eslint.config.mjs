import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import i18next from 'eslint-plugin-i18next';

export default tseslint.config(
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: eslintReact,
            'react-hooks': eslintReactHooks,
            'react-refresh': eslintReactRefresh,
            prettier: prettierPlugin,
        },
    },
    {
        ignores: [
            'dist',
            'node_modules',
            'coverage',
            'eslint.config.mjs',
            'stylelint.config.mjs',
            'webpack.config.ts',
            'build',
            'storybook-static',
            'scripts/generate-visual-json-report.js'
        ],
    },
    js.configs.recommended,
    i18next.configs['flat/recommended'],
    ...tseslint.configs.recommended,

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2020,
            },
            parserOptions: {
                project: ['tsconfig.json'],
            },
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            ...prettierPlugin.configs.recommended.rules,
            ...eslintConfigPrettier.rules,

            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'prefer-const': 'error',
            'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
            'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
            'react/self-closing-comp': ['error', { component: true, html: true }],
            'max-lines': ['warn', { max: 124 }],
            'max-params': ['error', 3],
        },
    },
);
