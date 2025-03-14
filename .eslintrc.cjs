module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", "node_modules", "out", "*.config.js", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-refresh", "@typescript-eslint", "prettier"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/jsx-uses-react": "off", // Not needed for React 17+
    "react/react-in-jsx-scope": "off", // Not needed for React 17+
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
