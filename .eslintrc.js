// eslint-disable-next-line no-loops/no-loops
module.exports = {
	env: {
		node: true,
	},
	extends: ['airbnb-base', 'prettier', 'plugin:import/typescript'],
	plugins: ['prettier', 'no-loops'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2023,
		sourceType: 'module',
	},
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	rules: {
		'prettier/prettier': 'error',
		'class-methods-use-this': 'off',
		'no-param-reassign': 'off',
		camelcase: 'off',
		'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
		'import/no-unresolved': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'no-loops/no-loops': 1,
		'@typescript-eslint/naming-convention': [
			'warn',
			{
				selector: 'variable',
				format: ['camelCase', 'snake_case'],
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				typescript: {},
			},
		},
	},
};
