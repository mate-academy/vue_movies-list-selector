require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
    es2024: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['import', 'prettier'],
  rules: {
    'function-paren-newline': ['error', 'consistent'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    'implicit-arrow-linebreak': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'max-len': [
      'error',
      {
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-console': 'error',
    'no-param-reassign': [2, { props: true }],
    'no-shadow': ['error', { builtinGlobals: false }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
  },
};
