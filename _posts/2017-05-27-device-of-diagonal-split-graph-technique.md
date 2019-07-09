---
layout: post
permalink: :title/
title: 透視図法の基本原理「対角線分割法」誕生の軌跡　〜3次元を2次元に変換する仕組み〜
description: パース作図を必要とせず、幾何学的な比率の計算のみで寸法を求める「対角線分割法」を考案するまでの記録。これを覚えておけば透視図法の様々な原理の証明も簡単になる。
thumb: /assets/img/2017-05-27/00.png
image: "https://www.oekaki-hoho-ron.com/assets/img/2017-05-27/00.png"

categories:
- 透視図法

tags:
- M点法
- 対角線分割法

---

- ### 目次
- [画面内で奥行きの作図ができる「1/n M点法」](#画面内で奥行きの作図ができる1nm点法)
- [任意の比率で奥行きを分割する「R点法」](#任意の比率で奥行きを分割するr点法)
- [R点法と1/n M点法が実は似ている件](#r点法と1nm点法が実は似ている件)
- [ながれでM点法の原理も解明してしまった](#ながれでm点法の原理も解明してしまった)
- [透視図法の基本原理は「対角線分割法」](#透視図法の基本原理は対角線分割法)

次に書こうと思っている記事は独自に名付けた「R点法（比率点：Ratio Point）」についてかなぁと思ったままいいアイデアがなくて放置していたけど、そうしているとTwitterでいい話を発見した。タイムラインで見た考察ツイートの一部。<a target="blank" href="https://www.amazon.co.jp/gp/product/4782483015/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4782483015&linkCode=as2&tag=koma5109-22&linkId=ce4415d33688d531da9e8a99806e9589">最新透視図技法 図法編</a>という古い本からの抜粋とのこと。ここから着想を得て「対角線分割法」なるものを考案するまでのレポート。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">2分の1M点… </p><a href="https://t.co/7OVXsr8MhH">pic.twitter.com/7OVXsr8MhH</a>&mdash; 深川 (@hukagaha) <a href="https://twitter.com/hukagaha/status/836933539710971904">2017年3月1日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<a target="blank"  href="https://www.amazon.co.jp/gp/product/4782483015/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4782483015&linkCode=as2&tag=koma5109-22&linkId=f48e25618c61d7b5f4e83ad0a43aed45"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4782483015&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=koma5109-22" ></a><img src="//ir-jp.amazon-adsystem.com/e/ir?t=koma5109-22&l=am2&o=9&a=4782483015" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## 画面内で奥行きの作図ができる「1/n M点法」

これはM点法の作図工程をできるだけ画面内に収めるための応用で「1/n M点法」と呼ぶらしい。1/n M点法だと、上手いこと幾何学的な理屈で比率合わせが出来てさえいれば、作図に使う点をある程度自由に画面内に近い点を選んで奥行きの作図ができる。下図のように比率さえ合っていれば同じ点で交差する。

<blockquote class="twitter-tweet" data-conversation="none" data-lang="ja"><p lang="ja" dir="ltr">結局はこういう事だよな。この前名付けたR点法と同じような理屈でいけそう。</p> <a href="https://t.co/aGB1SbhIqK">pic.twitter.com/aGB1SbhIqK</a>&mdash; お絵描きホーホー論@村上豪一 (@oekaki_hoho_ron) <a href="https://twitter.com/oekaki_hoho_ron/status/837030109886328833">2017年3月1日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

一般的なM点法は、立体を作図する基点GPから水平方向にある立体の奥行きの原寸だけ移動した位置にある点（仮に左右それぞれGPLとGPRと名付ける）と測点MPを繋いだ線分GPL-MP1もしくは線分GPR-MP2と、線分GP-VP1または線分GP-VP2との交点が奥行きの長さとなる、というものだが、これだとMPの作図過程においてGPのずっと下方にある画面外のSPや、画面外にあるVPの位置が把握できていることが前提となる。下図に見やすくまとめた。

![M点法簡略図](/assets/img/2017-05-27/01.png)

## 任意の比率で奥行きを分割する「R点法」

ここでピンと来たことがあって、[以前考察していたR点法の数式](https://twitter.com/i/moments/928194252525379584){:target="blank"}と対応する部分がありそうだと感じた。以下のTwitterモーメントにまとめてるので参考に。こちらもTwitterタイムラインで発見した「長方形を奇数で等分割する作図方法」だが、まだ技法名は与えられて無いようだったのでD点法やM点法の上位互換となるであろうことを願って勝手に「R点法」と呼ぶことにした。

このときは図中に原点を設定してそこからの距離を使っていくつかの座標を割り出し、連立方程式を解いて分割点を求めるという手順で一時的な結論としている。これはこれで使える技法ではあると思うが、この計算量はエクセルで自動計算しないと絵を描くことに関しては実用的とは言えない。だからあくまで「三角関数パース理論」への布石として考察したものだったが、このときのR点法の考え方と、1/n M点法の考え方を掛け合わせることで自由度の高い技法に進化できるのではないかと閃いた。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">奥行きが作図された壁を等分割する三角関数パース理論考えてみた。この手法は使えると思ったのでモノにしたいね。M点法やD点法の上位互換になるかも。ちなみにまだ実証実験してないので数式間違ってるかもだけど、とりあえずは可能そう。しかしここまでやるとなんかネタっぽい。</p> <a href="https://t.co/9wmNLKl7ga">pic.twitter.com/9wmNLKl7ga</a>&mdash; お絵描きホーホー論@村上豪一 (@oekaki_hoho_ron) <a href="https://twitter.com/oekaki_hoho_ron/status/803745254511775744">2016年11月29日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## R点法と1/n M点法が実は似ている件

ここでR点法と1/n M点法のメリット、デメリットを挙げておく。まずR点法では、任意の分割数で作図できる自由度の反面、作図に使うVPは画面外にある。そして1/n M点法では作図に使う点を画面内にあるものを使える反面、一般的なM点法と同様に同じ方向も向いた立体の奥行きの長さしか作図できない。

<blockquote class="twitter-tweet" data-conversation="none" data-lang="ja"><p lang="ja" dir="ltr">メモ</p> <a href="https://t.co/KSjK0kHz0W">pic.twitter.com/KSjK0kHz0W</a>&mdash; お絵描きホーホー論@村上豪一 (@oekaki_hoho_ron) <a href="https://twitter.com/oekaki_hoho_ron/status/837035116459261952">2017年3月1日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

要は、R点法のように任意の比率で奥行きを分割する方法と、1/n M点法のように画面内に収まるMPに置き換えて作図する方法の良いとこ取りをすればいい。と思って1/n M点法の簡略図を眺めてたらある発見が。これはいつも使ってる「対角線の交点は奥行きの1/2になるやつ法」だと気づいた。そしてその図はR点法の手順によく似ている。これは後で数学的に検証している。

<blockquote class="twitter-tweet" data-conversation="none" data-lang="ja"><p lang="ja" dir="ltr">これはまさに原点回帰。</p> <a href="https://t.co/dRiiDumlQq">pic.twitter.com/dRiiDumlQq</a>&mdash; お絵描きホーホー論@村上豪一 (@oekaki_hoho_ron) <a href="https://twitter.com/oekaki_hoho_ron/status/837904469798998016">2017年3月4日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## ながれでM点法の原理も解明してしまった

芋ヅル式にM点法の原理も同じ理屈だという仮説も浮かぶ。とりあえずM点法の作図手順の基礎は[「M点法」実用化計画　〜縮図で奥行きの長さを作図〜](/measuring-point-utilization-plan/index.html){:target="blank"}の記事や[パース理論の完全形態「透視図法解剖図」](/anatomical-chart-of-perspective/2.html){:target="blank"}の記事で説明つくとして、なぜその手順で正解なのかは謎なままだった。だがしかし、一般的なM点法を見るとまんま対角線2分割法を使っているように見える。

<blockquote class="twitter-tweet" data-conversation="none" data-lang="ja"><p lang="ja" dir="ltr">だいぶ前にM点法の原理について触れたことがあるけど、対角線2分割法を踏まえるとすごい分かりやすい。M点法のMPが測点と言われるのは以下の比率で奥行きの長さを測るという意味か。（ほぼ無限のVP-MP間：立方体の原寸）=（地平線までの距離：奥行きの長さ）</p> <a href="https://t.co/c0onHj0AFv">pic.twitter.com/c0onHj0AFv</a>&mdash; お絵描きホーホー論@村上豪一 (@oekaki_hoho_ron) <a href="https://twitter.com/oekaki_hoho_ron/status/837938230678831105">2017年3月4日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

見やすく描き直すと下図。

![M点法で使われる対角線分割法](/assets/img/2017-05-27/02.png)

ただ注意することがあって、M点法で対角線2分割法と同じことをやる場合は「奥行きの長さ」を「2分割」しているなどという単純な話ではなくて、ニュアンスを拾うように言い換えると「奥行き原寸」と「何か」の比率で分割（2「等」分割ではないことに注意）したら「奥行きの長さ」になる、という流れになる。ではその「何か」とはなんなのかというと、上のツイートに書いているように「ほぼ無限のVP-MP間距離：立方体の側面の原寸=地平線までの距離と奥行きの長さの差：奥行きの長さ」という数式からわかるように「何か＝ほぼ無限のVP-MP間距離」ということになる。ちなみに「奥行きの原寸」と「立体の側面の原寸」は同じ意味。そしてこれらを一言にまとめると「平面図上の全ての平行線は、透視図上において無限遠（ELもしくはHL）で同じ1点に収束する。そしてその無限遠にある水平線（ELもしくはHL）と、立体の側面の原寸という2つの平行線の長さの比率で、奥行きの長さを算出もしくは作図する」。

## 透視図法の基本原理は「対角線分割法」

1/n M点法、R点法、M点法は一つの同じ原理で成り立っているらしいことが分かったので、ここまでで判明したことを数学的に検証しておく。平行な2つの線分の対角線の交点は、2つの線分の長さの比と同じ比率の距離に作図されるということ。下図のM点法の場合、「立体の原寸」と「地平線」が形作る台形の「対角線の交点」は、奥行きの縮小の比率を踏まえた「奥行きの長さ」であること。このときの奥行きの縮小の比率は画角によって変化する。下図のR点法の場合、台形の「上辺の長さ」と「底辺の長さ」の「比率」と「同じ比率で奥行きの長さ」が分割されること。いずれも「対角線の交点」という要素で比率を割り出して分割線を作図しているため、「対角線分割法」という別名を与えても差し支えないと思う。ちなみに、これらは幾何学の分野でも既に証明されている台形の性質に当てはまる。　

<blockquote class="twitter-tweet" data-conversation="none" data-lang="ja"><p lang="ja" dir="ltr">やはり「R点法」に別名を与えるとしたら「対角線分割法」になる。この対角線分割法は透視図法で扱う3次元的な「奥行きの縮小」を2次元に変換する唯一の方法だと感じる。</p> <a href="https://t.co/vqgV7CGWZD">pic.twitter.com/vqgV7CGWZD</a>&mdash; お絵描きホーホー論@村上豪一 (@oekaki_hoho_ron) <a href="https://twitter.com/oekaki_hoho_ron/status/837962802358726656">2017年3月4日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

下図は、2つの線分の長さが等しいとき、対角線の交点はちょうど2つの線分間の距離の中間点となるという性質。

<blockquote class="twitter-tweet" data-conversation="none" data-lang="ja"><p lang="ja" dir="ltr">これらが対角線2分割法の原理。面積で比率を考えるのは数学の基本だな。1枚目の画像なんかはR点法と完全に一致する。</p><a href="https://t.co/Bx4TdHtqtv">https://t.co/Bx4TdHtqtv</a> <a href="https://t.co/bqJULHhaO8">pic.twitter.com/bqJULHhaO8</a>&mdash; お絵描きホーホー論@村上豪一 (@oekaki_hoho_ron) <a href="https://twitter.com/oekaki_hoho_ron/status/838007555494293504">2017年3月4日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

下図は、対角線の交点の位置は、2つの線分のうち短い方に近くなるという性質（意訳）。

<blockquote class="twitter-tweet" data-conversation="none" data-lang="ja"><p lang="ja" dir="ltr">そしてこれが奥行きの縮小の比率を取り込んだR点法（対角線分割法）の原理。</p> <a href="https://t.co/SO5YIwpH5P">https://t.co/SO5YIwpH5P</a> <a href="https://t.co/DyHJNKfOgu">pic.twitter.com/DyHJNKfOgu</a>&mdash; お絵描きホーホー論@村上豪一 (@oekaki_hoho_ron) <a href="https://twitter.com/oekaki_hoho_ron/status/838008246510067712">2017年3月4日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

これらを簡略図で見ると下図のようになる。

![対角線分割法の図説](/assets/img/2017-05-27/03.png)

さらにこれを縦にして見るとR点法の状態になる。

![R点法で使われる対角線分割法](/assets/img/2017-05-27/04.png)

なんかおしい。対角線分割法は好きな比率で分割できるというのは便利だとは思う。でもM点法のように任意の奥行きの長さが描けるわけではない。何より対角線分割法の単体では風景の作画ができない。これから完成させる予定のR点法ではその辺の実用性を獲得することが必須ということがわかった。ひとつの比率点RPを設定すれば思い通りの奥行きが描けるとしたら便利だろうな。一応位置づけとしては、対角線分割法＝幾何学の手法の呼称、R点法＝作図のための手順を含んだ手法の呼称。
