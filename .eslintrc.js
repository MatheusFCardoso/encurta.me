module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: "standard-with-typescript",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "extra-semicolon": "on",
    quotes: [2, "double", { avoidEscape: true }],
    "unexpected-trailing-comma": "off",
  },
};
