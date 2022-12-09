module.exports = {
  "extends": ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  "parser": '@typescript-eslint/parser',
  "plugins": ['@typescript-eslint'],
  "root": true,
  "rules": {
    "indent": ["error", 2],
    "prefer-rest-params": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/naming-convention": "warn",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "sort-imports": "error",
    "semi": ["error", "always"]
  }
};
