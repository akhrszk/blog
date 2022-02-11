---
title: Next.jsのテンプレートリポジトリを作る
date: "2022-01-20T00:01:39+0900"
---

フロントエンド開発には便利なツール群がたくさんある一方で、

そのツール群をプロジェクトを始めるたびに毎回一つ一つ入れて設定して...

というのは、正直骨が折れます。

ということで、**2021/01/20** 時点でフロントエンド開発をする上で入れておきたいツール群をあらかじめ入れて設定を済ませたテンプレートレポジトリを作りました :tada:

[GitHub - akhrszk/nextjs-template-with-typescript-tailwindcss-storybook](https://github.com/akhrszk/nextjs-template-with-typescript-tailwindcss-storybook)

## 含まれているもの一覧

- TypeScript
- Tailwind CSS
- Storybook
- ESLint
- Prettier
- husky
- lint-staged
- Jest
- React Testing Libraries
- GitHub Actions

## 使い方

とりあえず Next.js 立ち上げ

```bash
yarn dev
```

:point_right: `http://localhost:3000`

### Storybook

storybook の立ち上げ

```bash
yarn storybook
```

:point_right: `http://localhost:6006`

### Lint

Lint ツールは ESLint と Prettier を入れてます。

```bash
# Lintチェック
yarn lint

# コード整形
yarn fix
```

husky と lint-staged も設定してあるので、コミット時に自動でコードを整形してくれます :sparkles:

### Test

テストツールは Jest と React Testing Library を入れてます。

React のテストについては以下を参照

- [React - Testing Overview](https://reactjs.org/docs/testing.html)
- [Next.js - Testing](https://nextjs.org/docs/testing)
- [GitHub - vercel/next.js/examples/with-jest-babel](https://github.com/vercel/next.js/tree/canary/examples/with-jest-babel)
- [Testing Library - React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### GitHub Actions

GitHub Actions の設定も入れました。

```yaml
name: Lint And Test
on:
  push:
    branches:
      - master
      - "feature/**"
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 16
        uses: actions/setup-node@v2
        with:
          node-version: "16"
      - name: Install packages
        run: yarn install
      - name: Run linters
        run: yarn lint
      - name: Run test
        run: yarn test
      - name: Build
        run: yarn build
```

GitHub に push すると Lint と Test が回ります :thumbsup:
