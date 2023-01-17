---
title: 【React】子要素のクリックイベントを親要素に伝播させたくない時の実装を考える
date: "2023-01-18T01:16:27+0900"
---

例えば、以下のようなモーダルを実装したとします。
半透明の背景をクリックした時、モーダルが閉じる単純な実装です。

```jsx
<Background onClick={e => handleCloseModal(e)}>
  <Content>
    <h2>何かのモーダル</h2>
    <p>ほげほげほげほげほげほげ...</p>
    <Button onClick={e => handleCommit(e)}>決定</Button>
  </Content>
</Background>
```

しかし、これでは問題があります。モーダルの中身である`<Conetnt>...</Conetnt>`の部分をクリックした時も`<Background />`のクリックイベントが呼ばれてモーダルが閉じてしまいます。

子要素のクリックイベントが親要素に伝播されるような動きになりますね。

### よくある対処法

適当にググると、以下の対処法が出てきます。

```js
event.stopPropagation()
```

これを使って、上のモーダルを以下のように改良します。

```jsx
<Background onClick={e => handleCloseModal(e)}>
  <Content onClick={e => e.stopPropagation()}>
    <h2>何かのモーダル</h2>
    <p>ほげほげほげほげほげほげ...</p>
    <Button onClick={e => handleCommit(e)}>決定</Button>
  </Content>
</Background>
```

目的通り、モーダルの中身をクリックしてもモーダルは閉じられないようになりました。

勿論これで十分なのですが、、、

クリックイベントを親要素に伝播させないためだけにわざわざ`<Content />` のクリックイベントを取るような実装になるのが個人的にはモヤるわけです。（個人の感想です）

### クリックイベントが発生した要素をチェックする

`e.target` と `e.currentTarget` を使うことでチェックできます。

| 参照                                                                                     | 説明                             |
| ---------------------------------------------------------------------------------------- | -------------------------------- |
| [Event.target](https://developer.mozilla.org/ja/docs/Web/API/Event/target)               | イベントが発生した要素           |
| [Event.currentTarget](https://developer.mozilla.org/ja/docs/Web/API/Event/currentTarget) | イベントハンドラが装着された要素 |

具体的には、 `e.target` と `e.currentTarget` が一致しているかをチェックします。

```ts
const handleCloseModal = useCallback((e: React.MouseEvent) => {
  if (e.target === e.currentTarget) {
    // TODO: クリックイベント処理
  }
}, [])
```

こうすれば、 `<Content>...</Content>` のクリックイベントを取らずとも、_handleCloseModal_ 関数だけで完結できます。

```jsx
<Background onClick={e => handleCloseModal(e)}>
  <Content>
    <h2>何かのモーダル</h2>
    <p>ほげほげほげほげほげほげ...</p>
    <Button onClick={e => handleCommit(e)}>決定</Button>
  </Content>
</Background>
```
