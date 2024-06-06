module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'prefer-const': 'warn', // Chỉ cảnh báo khi có thể sử dụng const thay vì let
    '@typescript-eslint/explicit-function-return-type': 'warn', // Cảnh báo khi hàm không có kiểu trả về
    '@typescript-eslint/explicit-module-boundary-types': 'warn', // Cảnh báo khi không có kiểu cho biên giới module
    "@typescript-eslint/no-explicit-any": "warn", // Cảnh báo khi sử dụng kiểu "any"
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
  },
}