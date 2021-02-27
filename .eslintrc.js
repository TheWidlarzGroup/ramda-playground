module.exports = {
  root: true,
  globals: {
    device: false,
    expect: false,
    waitFor: false,
    element: false,
    by: false,
    jasmine: false,
  },
  extends: [
    '@react-native-community',
    'react-native-wcandillon',
    'eslint-config-twg/typescript.js',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['assetsTransformer.js', 'metro.config.js', '.eslintrc.js', 'babel.config.js'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/no-var-requires': 0,
  },
}
