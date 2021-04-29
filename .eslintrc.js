module.exports = {
  root: true,
  // "parser": "@typescript-eslint/parser" tells ESLint to use the parser package you installed (@typescript-eslint/parser).
  // This allows ESLint to understand TypeScript syntax.
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  plugins: [
    // tells ESLint to load the plugin package you installed (@typescript-eslint/eslint-plugin).
    // This allows you to use the rules within your codebase.
    '@typescript-eslint',
  ],

  // "extends" tells ESLint that your config extends the given configurations
  extends: [
    // // is ESLint's inbuilt "recommended" config - it turns on a small, sensible set of rules which lint for well-known best-practices.
    // 'eslint:recommended',

    // // is our "recommended" config - it's just like eslint:recommended, except it only turns on rules from our TypeScript-specific plugin.
    // 'plugin:@typescript-eslint/recommended',

    // eslint-config-airbnb-typescript: This replaces the above
    'airbnb-typescript/base',

    // is another recommended configuration we provide. This one contains rules that specifically require type information.
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // eslint-config-prettier, this registers the plugin as well. this requires eslint-plugin-prettier
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es2017: true,
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'no-await-in-loop': 'off',
    '@typescript-eslint/require-await': 'off',
    'no-continue': 'off',
  },
};

/* https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md

Perfrmance
But wait - I hear you exclaim - why would you ever not want type-aware rules?

Well (for full disclosure) there is a catch; by including parserOptions.project in your config, you are essentially asking TypeScript to do a build of your project before ESLint can do its linting. For small projects this takes a negligible amount of time (a few seconds); for large projects, it can take longer (30s or more).

Most of our users are fine with this, as they think the power of type-aware static analysis is worth it. Additionally, most users primarily consume lint errors via IDE plugins which, through some caching magic, do not suffer the same penalties. This means that generally they usually only run a complete lint before a push, or via their CI, where the extra time really doesn't matter.

We strongly recommend you do use it, but the above information is included so that you can make your own, informed decision.
*/
