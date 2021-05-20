const config = require('@agilecode/eslint')

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/ban-ts-ignore': 0,
    semi: 0,
  },
}
