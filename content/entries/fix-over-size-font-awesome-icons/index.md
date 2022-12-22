---
title: FontAwesomeのアイコンが一瞬巨大に表示される問題の解決
date: "2022-04-18T22:48:52+0900"
---

ページを開いたときに以下のように FontAwesome のアイコンが一瞬デカく表示されてしまう問題に出くわしました :dizzy_face:

![スクリーンショット](screenshot.gif)

このエントリーでは、この問題を回避する方法を紹介します。

このブログは Gatsby を使って実装されているので、Gatsby の GitHub のページを見に行きます。

すると既に issue が上がっていたので、これを参考にします。

[FortAwesome/react-fontawesome - Over sized icons on each page refresh #134](https://github.com/FortAwesome/react-fontawesome/issues/134)

どうやら FontAwesome の CSS の読み込みのタイミングの問題のようで、

ページにスタイルシートを直接埋め込むことで解決するとのこと。:thinking:（詳しくは[こちらの公式ドキュメント](https://fontawesome.com/v5/docs/web/other-topics/server-side-rendering#css)）

以下が私が行なった対応です

[akhrszk/blog - :bug: Fix over size FontAwesomeIcon](https://github.com/akhrszk/blog/commit/b9fba5833dbb562af9fb10246acd8c9bdbcd216c)

```js
import * as fontawesome from "@fortawesome/fontawesome-svg-core"

fontawesome.config.autoAddCss = false

return (
  ...
  <style>{fontawesome.dom.css()}</style>
  ...
)
```

解決しました :tada:
