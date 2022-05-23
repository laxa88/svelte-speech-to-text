module.exports = {
  extends: 'eslint:recommended',

  parser: '@typescript-eslint/parser', // add the TypeScript parser
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    extraFileExtensions: ['.svelte']
  },

  env: {
    es6: true,
    browser: true
  },

  plugins: [
    'svelte3',
    '@typescript-eslint' // add the TypeScript plugin
  ],

  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],

  rules: {
    // ...
  },

  settings: {
    'svelte3/typescript': true, // load TypeScript as peer dependency
  }
};