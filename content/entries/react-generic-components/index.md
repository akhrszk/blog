---
title: 【React + TypeScript】ジェネリクスで汎用的なコンポーネントを作る
date: "2022-08-20T21:24:07+0900"
---

コードで見た方が早いと思うので、さっそくですが以下です。

```tsx
export interface Props<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
}

export const FantasticList = <T,>({ items, renderItem }: Props<T>) => {
  return <ul>{items.map(renderItem)}</ul>
}
```

アロー関数を使う場合、 `<T>` は使えず `<T,>` と書きます。 JSX のパーサーが上手く読んでくれないらしいです。 [https://github.com/microsoft/TypeScript/issues/15713#issuecomment-499474386](https://github.com/microsoft/TypeScript/issues/15713#issuecomment-499474386)
