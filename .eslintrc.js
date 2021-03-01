module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'react-native-wcandillon',
    'eslint-config-twg/typescript.js',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['/coverage'],
}
