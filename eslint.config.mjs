import globals from 'globals'
import babelParser from '@babel/eslint-parser'
import prettierConfig from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import imprt from 'eslint-plugin-import'
import jsxa11y from 'eslint-plugin-jsx-a11y'

export default [
	prettierConfig,
	{
		files: ['**/*.js', '**/*.jsx', '**/*.jsm', '**/*.ts', '**/*.tsx'],
		plugins: {
			react,
			import: imprt,
			'jsx-a11y': jsxa11y,
		},
		languageOptions: {
			parser: babelParser,
			parserOptions: {
				sourceType: 'module',
				ecmaFeatures: {
					blockBindings: true,
					jsx: true,
				},
				requireConfigFile: false,
				babelOptions: {
					babelrc: false,
					configFile: false,
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: [
						['@babel/plugin-proposal-decorators', { 'legacy': true }],
						['@babel/plugin-proposal-class-properties', { 'loose': true }],
						['@babel/plugin-proposal-private-methods', { 'loose': true }],
						['@babel/plugin-proposal-private-property-in-object', { 'loose': true }]
					],
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest,
				...globals.es2021,
			},
		},
		settings: {
			react: {
				version: 'detect',
			}
		},
		rules: {
			...react.configs.recommended.rules,
			...imprt.configs.recommended.rules,
			...jsxa11y.configs.recommended.rules,
			'no-undef': 0,
			'no-console': 0,
			'react/prop-types': 0,
			'react/button-has-type': 0,
			// 'jsx-quotes': 1,
			'import/no-unresolved': 0,
			'import/namespace': 0,
			'import/default': 0,
			'import/no-named-as-default': 0,
			'import/no-named-as-default-member': 0,
			'jsx-a11y/alt-text': 0,
			'jsx-a11y/html-has-lang': 0,
			'jsx-a11y/anchor-has-content': 0,
			'jsx-a11y/no-static-element-interactions': 0,
			'jsx-a11y/click-events-have-key-events': 0,
			// 'react/destructuring-assignment': 1,
			// 'react/display-name': 0,
			// 'react/forbid-prop-types': 0,
			// 'react/jsx-boolean-value': 1,
			// 'react/jsx-closing-bracket-location': 1,
			// 'react/jsx-curly-spacing': 1,
			// 'react/jsx-handler-names': 1,
			// 'react/jsx-indent-props': 1,
			// 'react/jsx-indent': 1,
			// 'react/jsx-key': 1,
			// 'react/jsx-max-props-per-line': 0,
			// 'react/jsx-no-bind': 0,
			// 'react/jsx-no-duplicate-props': 1,
			// 'react/jsx-no-literals': 0,
			// 'react/jsx-no-undef': 1,
			// 'react/jsx-pascal-case': 1,
			// 'react/jsx-sort-prop-types': 0,
			// 'react/jsx-sort-props': 0,
			// 'react/jsx-uses-react': 1,
			// 'react/jsx-uses-vars': 1,
			// 'react/no-danger': 1,
			// 'react/no-deprecated': 1,
			// 'react/no-did-mount-set-state': 1,
			// 'react/no-did-update-set-state': 1,
			// 'react/no-direct-mutation-state': 1,
			// 'react/no-is-mounted': 1,
			// 'react/no-multi-comp': 0,
			// 'react/no-set-state': 1,
			// 'react/no-string-refs': 0,
			// 'react/no-unknown-property': 1,
			// 'react/prefer-es6-class': 1,
			// 'react/prop-types': 1,
			// 'react/react-in-jsx-scope': 1,
			// 'react/require-extension': 1,
			// 'react/self-closing-comp': 1,
			// 'react/sort-comp': 1,
			// 'react/wrap-multilines': 1

		}
	}
]