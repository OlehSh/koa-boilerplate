module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'unicorn',
    'security',
    'simple-import-sort',
    'import',
    'vtex',
    'prettier',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'never',
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
      },
    ],
    semi: [2, 'always'],
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['function'],
        format: ['camelCase'],
      },
      {
        selector: ['class'],
        format: ['PascalCase'],
        custom: {
          regex: '[A-Za-z]',
          match: true,
        },
      },
      {
        selector: ['enum'],
        format: ['PascalCase'],
        custom: {
          regex: '[A-Za-z]Enum$',
          match: true,
        },
      },
      {
        selector: ['interface'],
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Za-z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'off',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['^[0-9]{13}-[A-Za-z]+.ts$'],
      },
    ],
    'unicorn/import-index': 'off',
    'unicorn/import-style': [
      'error',
      {
        styles: {
          path: {
            named: false,
            default: false,
          },
        },
      },
    ],
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-lonely-if': 'error',
    'no-nested-ternary': 'off',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-thenable': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'off',
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-export-from': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-json-parse-buffer': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-switch': 'error',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': 'warn',
    'unicorn/relative-url-style': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/require-post-message-target-origin': 'off',
    'unicorn/string-content': 'off',
    'unicorn/template-indent': 'warn',
    'unicorn/throw-new-error': 'error',
    'simple-import-sort/imports': 'warn',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        classes: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-field',
          'protected-field',
          'constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-method',
          'protected-method',
          'private-method',
        ],
      },
    ],
    'no-else-return': 'error',
    'vtex/prefer-early-return': 'error',
    'import/no-absolute-path': 'error',
    'import/no-useless-path-segments': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'error',
  },
};
