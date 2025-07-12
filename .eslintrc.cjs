module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "indent": ["error", 2],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "prefer-rest-params": "off",
    "semi": ["error", "always"],
    "sort-imports": "error",
  },
};
