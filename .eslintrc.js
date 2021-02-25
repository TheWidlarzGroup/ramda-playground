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
  ignorePatterns: ['assetsTransformer.js', 'metro.config.js', '.eslintrc.js', 'babel.config.js'],
}
