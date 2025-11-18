import antfu from '@antfu/eslint-config'

export default antfu(
	{
		typescript: true,
		ignores: ['*.yaml'],
		stylistic: {
			indent: 'tab',
		},
		// @keep-sorted
		rules: {
			'jsonc/indent': ['error', 2],
			'vue/block-lang': ['warn', {
				script: { lang: ['ts', 'tsx'] },
				style: { lang: ['scss'] },
			}],
			'vue/enforce-style-attribute': ['warn', {
				allow: ['scoped'],
			}],
			'vue/html-indent': ['error', 'tab', { baseIndent: 0 }],
			'yaml/indent': ['error', 2],
		},
	},
	{
		files: ['**/*.json'],
		ignores: ['content/**'],
		rules: {
			'style/eol-last': ['warn', 'never'],
		},
	},
	{
		files: ['content/**'],
		// @keep-sorted
		rules: {
			'antfu/consistent-list-newline': 'off',
			'eqeqeq': 'off',
			'jsonc/comma-dangle': ['warn', 'always'],
			'no-irregular-whitespace': 'off',
			'no-sequences': 'off',
			'prefer-arrow-callback': 'off',
			'prefer-template': 'off',
			'style/indent': 'off',
			'style/quotes': 'off',
			'style/semi': 'off',
			'unicorn/prefer-includes': 'off',
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
		languageOptions: {
			globals: {
				defineAppConfig: 'readonly',
				defineNuxtConfig: 'readonly',
				useAppConfig: 'readonly',
				useHead: 'readonly',
				useState: 'readonly',
			},
		},
	},
)
