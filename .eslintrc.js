module.exports = {

  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'eslint:recommended'
  ,
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // disable space before func paren
    'space-before-function-paren': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-multi-spaces': 1,
    'quotes': 0,
    "no-ex-assign": 0,            // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 0,   // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": 0,         // disallow unnecessary parentheses (off by default)
    "no-extra-semi": 1,           // disallow unnecessary semicolons
    "no-undef": 0,
    "no-unused-vars": 1,
    "no-console": 0
  }
};
