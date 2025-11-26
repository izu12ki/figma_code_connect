# Figma操作ガイド - Design Tokensページの作成

## 2.2 Design Tokensページでカラーバリアブルを作成

### 準備: Design Tokensページに移動
- 左サイドバーで **"Design Tokens"** ページをクリック

---

## カラーバリアブルの作成

### ステップ1: バリアブルパネルを開く
1. 右サイドバーの **"Local variables"** アイコンをクリック
   - または、メニューバーから **View** → **Variables** (ショートカット: `Ctrl/Cmd + /`)

2. 新しいコレクションを作成
   - **"Create collection"** ボタンをクリック
   - コレクション名を **"Colors"** に変更

### ステップ2: モードを追加
1. コレクション名の横の **"..."** メニューをクリック
2. **"Add mode"** を選択
3. 2つのモードを作成:
   - **Mode 1** → 名前を **"Light"** に変更
   - **Mode 2** → 名前を **"Dark"** に変更

### ステップ3: カラー変数を作成

各カラーについて以下の手順を実行:

1. **"+"** ボタン → **"New variable"** をクリック
2. 変数名を入力（例: `background`）
3. **Light モード**の値を設定:
   - カラーピッカーをクリック
   - HEX値を入力（globals.cssから変換）
4. **Dark モード**の値を設定:
   - 同じ変数のDarkモードセルをクリック
   - HEX値を入力

### 作成する変数リスト（優先度順）

#### 基本色（必須）
- ✅ `background`
  - Light: `#FCFCFD`
  - Dark: `#1F2124`
- ✅ `foreground`
  - Light: `#3B3C3F`
  - Dark: `#F0F0F1`
- ✅ `primary`
  - Light: `#4F60E2`
  - Dark: `#6B7BF5`
- ✅ `primary-foreground`
  - Light: `#FCFCFD`
  - Dark: `#FCFCFD`

#### カード・ポップオーバー
- ✅ `card`
  - Light: `#FFFFFF`
  - Dark: `#262629`
- ✅ `card-foreground`
  - Light: `#3B3C3F`
  - Dark: `#F0F0F1`

#### セカンダリー・ミュート
- ✅ `secondary`
  - Light: `#F2F2F3`
  - Dark: `#3A3A3D`
- ✅ `secondary-foreground`
  - Light: `#3B3C3F`
  - Dark: `#F0F0F1`
- ✅ `muted`
  - Light: `#F5F5F6`
  - Dark: `#323234`
- ✅ `muted-foreground`
  - Light: `#7A7B80`
  - Dark: `#9E9EA3`

#### ボーダー・入力
- ✅ `border`
  - Light: `#E5E5E7`
  - Dark: `#3F3F42`
- ✅ `input`
  - Light: `#F2F2F3`
  - Dark: `#3A3A3D`

#### エラー
- ✅ `destructive`
  - Light: `#E74C3C`
  - Dark: `#C0392B`
- ✅ `destructive-foreground`
  - Light: `#FCFCFD`
  - Dark: `#FCFCFD`

---

## タイポグラフィスタイルの作成

### ステップ1: テキストスタイルパネルを開く
1. 右サイドバーで **"Text styles"** アイコン（"Aa"マーク）をクリック
2. または **View** → **Text Styles**

### ステップ2: フォントをインストール（初回のみ）
1. テキストツール（`T`）を選択してキャンバスをクリック
2. 右サイドバーの **Font** ドロップダウンを開く
3. "Geist"を検索
   - **見つからない場合**: Google Fontsから "Inter" を使用（代替）

### ステップ3: テキストスタイルを作成

各スタイルについて:

1. テキストツール（`T`）でサンプルテキストを作成
2. 右サイドバーでフォント設定を調整
3. **"Style"** 横の **"+"** アイコン → **"Create style"**
4. スタイル名を入力

#### 作成するスタイル

**見出し**
- ✅ `Heading/H1`
  - Font: Geist / Bold / 32px
  - Line height: 40px
  - Color: foreground

- ✅ `Heading/H2`
  - Font: Geist / Bold / 24px
  - Line height: 32px
  - Color: foreground

- ✅ `Heading/H3`
  - Font: Geist / SemiBold / 20px
  - Line height: 28px
  - Color: foreground

**本文**
- ✅ `Body/Large`
  - Font: Geist / Regular / 16px
  - Line height: 24px
  - Color: foreground

- ✅ `Body/Default`
  - Font: Geist / Regular / 14px
  - Line height: 20px
  - Color: foreground

- ✅ `Body/Small`
  - Font: Geist / Regular / 12px
  - Line height: 16px
  - Color: muted-foreground

**ラベル**
- ✅ `Label/Medium`
  - Font: Geist / Medium / 14px
  - Line height: 20px
  - Color: foreground

---

## 📌 確認ポイント

✅ カラーバリアブルが作成され、LightとDarkモードが設定されている
✅ テキストスタイルが作成され、カラー変数が適用されている
✅ 左サイドバーの「Local variables」と「Text styles」に項目が表示される

---

## 次のステップ
この設定が完了したら、**2.3 基本UIコンポーネント作成**に進みます！

疑問点があればお気軽にお声かけください。