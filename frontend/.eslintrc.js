module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
  },
};
