# アプリケーション名
TimeApp

# アプリケーション概要
時間が測れて、学習実績の記録ができる。

# URL
https://time-app.onrender.com

# テスト用のアカウント
- Basic認証パスワード: 2222
- Basic認証ID: admin
- メールアドレス: test1@com
- パスワード: 111111

# 利用方法
## カウントダウンタイマー
1.トップページのフォームに測りたい時間(分、秒)を入力する。

2.スタートボタンを押す。

3.一時停止したい場合は、ストップボタンを押す。

## 学習実績を記録する
1.トップページの「記録する」ボタンから学習記録ページに遷移する。

2.学習日、目標、学習項目、学習時間、振り返りを入力し記録をする。

# アプリケーションを作成した背景
- 自分がプログラムミング学習をする中で一番大変だったことは、モチベーションの維持であったことから、自分の頑張りを記録し、見える化することで学習意欲の維持、向上を目指せるアプリケーションを作ろうと思った。
- 自主学習する際、既存のタイマーアプリを使用していたが、見た目に好みのものがなかったため、せっかくならJavaScriptの学習も兼ねて作ってみようと思った。

# 洗い出した要件
[要件を定義したシート](https://docs.google.com/spreadsheets/d/17B7Ncuv63VEnVHz17jqlALVRv7dZYvqy3C-FYY07OIs/edit#gid=982722306)

# 実装した機能についての画像やGIFおよびその説明
中央のフォームに測りたい時間を入力しスタートボタンを押すとカウントダウンが始まる。終了時は、アラームが鳴り時間がリセットされる。

[![Image from Gyazo](https://i.gyazo.com/cc681d88943d18366f44c7e6dc14bc0c.gif)](https://gyazo.com/cc681d88943d18366f44c7e6dc14bc0c)

# 実装予定の機能
学習記録についてグラフなどを使ってより見える化を行いたい

# データベース設計
[![Image from Gyazo](https://i.gyazo.com/5f2078d382b9778b4aa1fde99612de30.png)](https://gyazo.com/5f2078d382b9778b4aa1fde99612de30)

# 画面遷移図
[![Image from Gyazo](https://i.gyazo.com/6378dae8849655f5edad21c8f00753dc.png)](https://gyazo.com/6378dae8849655f5edad21c8f00753dc)

# 開発環境
- OS:macOS Monterey
- 言語:HTML,CSS,JavaScript,Ruby,SQL
- フレームワーク:Ruby on Rails
- テキストエディタ:Visual Studio Code
- タスク管理:github

# ローカルでの動作方法
以下のコマンドを順に実行。

% git clone https://github.com/24moto/time-app.git

% cd time-app

% bundle install

% yarn install

% rails db:create

% rails db:migrate

% rails s


# 工夫したポイント
カウントダウン機能自体は、ユーザー登録しなくても使用できるものとなっている。
とにかく見た目を可愛くしようとロゴや配色、配置にこだわった。
カウントダウン終了時のアラームも学習記録用のアプリを意識し、やわらかい学校のチャイムを採用した。
