# 個人資産追跡アプリケーション

このプロジェクトは、ユーザーが自分の個人資産を時間とともに追跡できるウェブアプリケーションです。ユーザーは資産を記録でき、アプリケーションはデータをチャートで表示し、資産の増減を視覚化します。さらに、ユーザーの資産のパフォーマンスをNASDAQ、S&P 500、ビットコイン（BTC）、イーサリアム（ETH）などの市場指標と比較することができます。  

**Demo:** <a href="https://nextjs-chartjs-postgres-assets.vercel.app">https://nextjs-chartjs-postgres-assets.vercel.app</a>

## 機能

- **個人資産の追加、更新、追跡**：ユーザーは特定の時間における資産の値を記録できます。
- **認証と認可**：JWT トークンを使用したユーザー認証が実装されています。ログインしたユーザーのみが自分のデータを確認・追加でき、訪問者はサンプルデータのみを閲覧できます。
- **資産データの可視化**：データは Chart.js を使用して表示され、資産の過去の動向を視覚的に確認できます。
- **リアルタイム更新**：資産記録の追加や更新後、チャートが自動的に反映されます。
- **データのズームとパン**：ユーザーはチャートをズームやパンして、特定の期間をより詳細に確認できます。
- **訪問者モード**：訪問者はログインせずにサンプルデータを閲覧できます。
- **モーダルによる新しい資産の追加**：モーダルフォームを使って新しい資産データを追加でき、インターフェースがシンプルで使いやすくなっています。
- **トークンの検証**：ページ読み込み時にユーザートークンが検証され、セッションの整合性が保たれます。
- **エラーハンドリング**：リクエストの失敗や無効なデータ入力時に、ユーザーにフレンドリーなエラーメッセージが表示されます。
- **モバイルおよびデスクトップのレスポンシブ対応**：モバイルデバイスとデスクトップブラウザの両方に最適化されており、シームレスな体験を提供します。
- **市場パフォーマンス比較**：Yahoo Finance APIを使用し、ユーザーの資産収益率をNASDAQ、S&P 500、BTC、ETHなどの市場データとリアルタイムで比較可能です。

## 技術スタック

このプロジェクトは以下の技術を使用しています：

- **Next.js 14**：サーバーサイドレンダリングとウェブアプリケーション開発に特化した React ベースのフレームワーク。
- **PostgreSQL**：強力でオープンソースのリレーショナルデータベースシステム。資産データを保存します。
- **Chart.js**：データ可視化のための柔軟な JavaScript チャートライブラリ。
- **React.js**：ユーザーインターフェースを構築するための JavaScript ライブラリ。
- **Material-UI**：Google のマテリアル デザインを実装したオープンソースの React コンポーネント ライブラリです。 
- **Sass**：スタイルをより管理しやすくするための CSS プリプロセッサ。
- **Node.js**：サーバーサイドロジックとデータベースとのやり取りを行います。
- **JWT (JSON Web Tokens)**：安全なユーザー認証とセッション管理に使用されます。

## スクリーンショット
<img src="./screenshot/6.png" width="400"/><br/>
<img src="./screenshot/1.png" width="400"/><br/>
<img src="./screenshot/2.png" width="400"/><br/>
<img src="./screenshot/4.png" width="400"/><br/>

## 前提条件

始める前に、以下のものがシステムにインストールされていることを確認してください：

- Node.js (>= 16.x)
- PostgreSQL (>= 12.x)
- Git

## 開始手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/enlian/nextjs-chartjs-postgres-assets.git
cd nextjs-chartjs-postgres-assets
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. 環境変数の設定

プロジェクトのルートディレクトリに `.env.local` ファイルを作成し、PostgreSQL 接続と JWT トークンの設定のために以下の環境変数を設定します：

```bash
POSTGRES_USER=your_db_user
POSTGRES_PASSWORD=your_db_password
POSTGRES_HOST=your_db_host
POSTGRES_PORT=your_db_port
POSTGRES_DATABASE=your_db_name

JWT_SECRET=your_jwt_secret    # JWT トークンの署名に使用するシークレット
ADMIN_USER=your_admin_username  # 管理者のユーザー名
ADMIN_PASSWORD=your_admin_password  # 管理者のパスワード
```

### 4. データベースのセットアップ

PostgreSQL に接続し、以下の SQL コマンドを実行して必要なテーブルを作成します：

```sql
CREATE TABLE assets (
  date BIGINT NOT NULL,   -- Unix タイムスタンプ
  amount BIGINT NOT NULL  -- 資産額
);
```

### 5. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認します。

## 使い方

### 認証と認可
- **ログイン**: モーダルを使用してログインします。ログイン成功後、JWT トークンがブラウザのローカルストレージに保存されます。
- **トークン検証**: 各ページの読み込み時にトークンが検証されます。有効な場合は自動的にログイン状態が維持され、無効な場合はトークンがクリアされてログアウトされます。

### 新しい記録の追加
1. **ログインしたユーザー**: ログイン後、「Add Asset」ボタンをクリックしてモーダルフォームを開きます。
2. **訪問者モード**: ログインせずにサンプルデータを閲覧できます。

### データの表示
- **チャート**: ホームページには、個人資産の履歴チャートが表示されます。マウスホイールを使ってズームイン・ズームアウトが可能で、パン機能を使って特定の期間を表示できます。
- **市場比較**: 資産データとともに、NASDAQ、S&P 500、ビットコイン（BTC）、イーサリアム（ETH）のデータがチャート上に表示され、ユーザーの資産パフォーマンスと市場の動向を比較できます。

## デプロイ

### Vercel デプロイ

Next.js プロジェクトを直接 [Vercel](https://vercel.com) にデプロイできます。これが最も簡単な方法です。

1. Vercel にアカウントを作成します。
2. GitHub リポジトリを Vercel にインポートします。
3. Vercel ダッシュボードで環境変数を設定します（`.env.local` ファイルと同じ設定）。
4. プロジェクトをデプロイします。

### その他のデプロイ方法

Node.js をサポートする任意のプラットフォーム（例：AWS、DigitalOcean、Heroku）にこのプロジェクトをデプロイできます。環境変数が正しく設定され、PostgreSQL に接続できていることを確認してください。

## ライセンス

このプロジェクトは MIT ライセンスの下で提供されています。詳細については [LICENSE](LICENSE) ファイルをご参照ください。
