---
title: 【React + TypeScript】HTMLElementのPropsを継承したい
date: "2022-08-20T20:46:57+0900"
---

例えば `<button>` などの HTMLElement をラップしたカスタムコンポーネントを作る時、デフォルトのプロパティを継承してプロパティを定義したい。ということはよくあります。

そんな時、使えるのが `React.ComponentPropsWithoutRef` です。

```tsx
interface FancyButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  colorful?: boolean
}

const FancyButton = ({ colorful, ...props }: Props) => {
  if (colorful) {
    // colorfulプロパティを見て何かしらの処理
  }
  return <button {...props} />
}
```

プロパティをひとつひとつ `Props` に追加しなくていいのでラクですね！ :clap:
