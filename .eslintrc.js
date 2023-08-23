module.exports = {
  extends: [
    'universe',
    'universe/shared/typescript-analysis',
    'universe/native',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': 'warn',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts', '*.js'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
