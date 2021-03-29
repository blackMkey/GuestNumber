module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 1}],
    'consistent-return': 2,
    'indent': [1, 2],
    'no-else-return': 1,
    'semi': [1, 'always'],
    'space-unary-ops': 2,
    'no-multi-spaces': ['error'],
    'key-spacing': ['error'],
    'no-trailing-spaces': ['error'],
    'quotes': ['error', 'single'],
  },
};
