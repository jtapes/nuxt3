// https://eslint.vuejs.org/user-guide/#usage
module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   // ecmaVersion: 13,
  //   // project: "tsconfig.json",
  //   parser: '@typescript-eslint/parser',
  //   sourceType: 'module',
  // },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    // 'plugin:vue/vue3-recommended',
  ],
  rules: {
    // 'vue/no-unused-vars': 'error',
    // 'no-undef': 'off',
    'import/named': 'off',
    'vue/no-v-html': 'off',
    'no-async-promise-executor': 'off',
    'no-useless-constructor': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        // printWidth: 80,
      },
    ],
  },
}
