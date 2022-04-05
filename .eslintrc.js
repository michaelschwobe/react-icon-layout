/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,

  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
    sourceType: 'module',
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['node_modules', '\\.(css|json|md|svg)$'],
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },

  plugins: [
    'security',
    'sonarjs',
    'import',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],

  extends: [
    'eslint:recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],

  rules: {
    'arrow-body-style': 'off', // prettier conflict
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
        ],
      },
    ],
    'import/prefer-default-export': 'error',
    'prefer-arrow-callback': 'off', // prettier conflict
    'react/react-in-jsx-scope': 'off',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        project: ['./tsconfig.eslint.json'],
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
    {
      files: ['**/*.stories.[jt]s?(x)'],
      plugins: ['storybook'],
      extends: ['plugin:storybook/recommended'],
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      settings: {
        jest: {
          version: 'detect',
        },
      },
      plugins: ['jest', 'testing-library'],
      extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
