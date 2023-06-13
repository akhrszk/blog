---
title: 【Tips】CSSでお手軽にLoadingアニメーションを作る
date: "2023-06-13T22:41:44+0900"
---

![loading animation](screen.gif)

重い処理など、レスポンスが返ってくるまで時間がかかる場合

アニメーションを見せると体感速度を短く感じるさせることができます。

<iframe src="https://codesandbox.io/embed/pedantic-thunder-j428fy?fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden; margin-bottom: 30px"
     title="pedantic-thunder-j428fy"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

利用者に処理してますよーと伝えたいけど、インジケーターの gif などを用意する時間がない時、

CSS でささっと書くことが出来れば便利かも。
