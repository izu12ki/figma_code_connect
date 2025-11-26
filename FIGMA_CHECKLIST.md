# Figma × Code Connect セットアップ チェックリスト

## ✅ 完了済み
- [x] 1. Figma Personal Access Token取得・設定
- [x] Code Connectパッケージのインストール
- [x] 基本的なCode Connectファイルの作成
- [x] package.jsonにスクリプト追加

## 🚧 進行中 - Figmaファイルでのコンポーネント作成

### 2.1 Figmaファイル構成
- [ ] 新しいFigmaファイル作成「近視管理手帳 - Design System」
- [ ] ページ構成作成:
  - [ ] Cover (カバーページ)
  - [ ] Design Tokens (デザイントークン)
  - [ ] Components (コンポーネント)
  - [ ] Screens (画面)

### 2.2 Design Tokensページ
- [ ] カラーバリアブル作成:
  - [ ] Light Mode colors (Primary, Secondary, Background, etc.)
  - [ ] Dark Mode colors
- [ ] タイポグラフィスタイル作成:
  - [ ] Geist Font設定
  - [ ] 見出し・本文・キャプションスタイル
- [ ] Spacing & Sizing設定:
  - [ ] Border radius (12px base)
  - [ ] Padding/Margin スケール

### 2.3 基本UIコンポーネント作成

#### Button Component
- [ ] Base Buttonコンポーネント作成
- [ ] Component Setに変換
- [ ] Variant Properties設定:
  - [ ] Variant: Default, Destructive, Outline, Secondary, Ghost, Link
  - [ ] Size: Default (40px), Small (32px), Large (48px), Icon
  - [ ] State: Default, Hover, Pressed, Disabled
- [ ] Auto Layout設定完了
- [ ] **Node ID取得**: `1:__` (実際の値に更新)

#### Input Component
- [ ] Base Inputコンポーネント作成 (高さ48px)
- [ ] Variant Properties設定:
  - [ ] Type: Text, Password, Email, Number
  - [ ] State: Default, Focus, Error, Disabled
  - [ ] Has Icon: True, False
- [ ] Focus/Error状態のスタイル設定
- [ ] **Node ID取得**: `1:__` (実際の値に更新)

#### Card Component
- [ ] Base Cardコンポーネント作成
- [ ] Card Header/Title/Description作成
- [ ] Card Contentエリア作成
- [ ] ドロップシャドウ設定
- [ ] **Node ID取得**: `1:__` (実際の値に更新)

#### Label Component
- [ ] Base Labelコンポーネント作成
- [ ] フォント・色設定
- [ ] **Node ID取得**: `1:__` (実際の値に更新)

### 2.4 複合コンポーネント作成

#### FacilityCodeInput (施設コード入力画面)
- [ ] 全体構造作成:
  - [ ] Card Container
  - [ ] Icon Container (Eye icon + 背景)
  - [ ] タイトル・説明文
  - [ ] フォームエリア (Label + Input + Button)
- [ ] Variant Properties設定:
  - [ ] State: Default, Error, Loading
- [ ] レスポンシブ対応
- [ ] **Node ID取得**:
  - [ ] Default state: `2:__`
  - [ ] Error state: `2:__`
  - [ ] Loading state: `2:__`

### 2.5 Figma情報の記録
- [ ] **ファイルキー取得**:
  ```
  URL: https://www.figma.com/file/[FILE_KEY]/...
  FILE_KEY: ________________
  ```
- [ ] **.env.local更新**:
  ```bash
  NEXT_PUBLIC_FIGMA_FILE_KEY=実際のファイルキー
  ```

## 📝 次のステップ - Code Connect更新

### 3.1 Node ID設定
- [ ] `components/ui/button.figma.tsx` 更新
- [ ] `components/ui/input.figma.tsx` 更新
- [ ] `components/ui/card.figma.tsx` 更新
- [ ] `components/facility-code-input.figma.tsx` 更新

### 3.2 テスト・デバッグ
- [ ] `npm run figma:parse` でエラーチェック
- [ ] `npm run figma:publish` でFigmaに公開
- [ ] Figma Dev Modeで連携確認

## 🎯 成功の確認方法

1. **Figma Dev Mode**でコンポーネントを選択
2. **Code Connect**タブにReactコードが表示される
3. **実際のProps**がFigmaのVariantと連動する
4. **リアルタイム同期**が機能する

## 📞 サポートが必要な場合

- Figmaコンポーネント作成でお困りの場合
- Node IDの取得方法が不明な場合
- Code Connect設定でエラーが発生した場合

お気軽にお声かけください！詳細なサポートを提供いたします。