module.exports = {
  plugins: ['prettier-plugin-svelte'],

  arrowParens: 'avoid',
  singleQuote: true,
  semi: false,

  // https://github.com/sveltejs/prettier-plugin-svelte
  svelteSortOrder: 'options-styles-scripts-markup',
  svelteStrictMode: false,
  svelteBracketNewLine: true,
  svelteIndentScriptAndStyle: true,
}