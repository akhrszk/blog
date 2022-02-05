---
title: 仕事で何度も書くことになる便利関数
date: "2021-12-11T00:38:52"
---

自分は新しいプロジェクトに配属する度に何度も似たような関数を書きます。

そういった使い勝手の良い関数たちを[gist](https://gist.github.com/akhrszk)にちょこちょこ追加してます。

この記事ではその紹介。

## Arrayを指定した要素数ごとに分割する

`gist:akhrszk/c9f94a3a7ed71167ae2af968901aa99e#group.ts`

### 使い方

```typescript
const list = ["あ", "い", "う", "え", "お"]
group(list, 2) //→[["あ", "い"],["う", "え"],["お"]]
```

これは処理を分割して並列実行する時なんかに使うと便利です。

Arrayを操作する時にはJavaScript組込の [Array.prototype.reduce()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) はとても便利です。

## Arrayを指定したkeyでハッシュマップに変換

`gist:akhrszk/73454f91db50f12e568bbee3e318d218#toMap.ts`

### 使い方

```typescript
const arr = [
  { name: "Taro", age: 18 },
  { name: "Hanako", age: 21 },
  { name: "Misaki", age: 19 }
]
toMap(arr, (item) => item.name)
// Map(3) {
//   'Taro' => { name: 'Taro', age: 18 },
//   'Hanako' => { name: 'Hanako', age: 21 },
//   'Misaki' => { name: 'Misaki', age: 19 }
// }
```

Arrayから特定の要素を取り出す時、Arrayのままだと全件走査することになりますが、あらかじめ [Map](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map) に変換しておくことで、それをキーにして高速に要素を取り出すことが可能になります。


また思い出した時に追加していく。
