# Figma Code Connect セットアップガイド

このプロジェクトでは、FigmaのデザインコンポーネントとReactコードを連携させるために Figma Code Connect を使用しています。

## 🚀 セットアップ手順

### 1. Figma Access Token の取得

1. [Figma Settings](https://www.figma.com/settings) にアクセス
2. 「Personal access tokens」セクションで新しいトークンを生成
3. 適切なスコープを選択（`File content:Read` が最低限必要）

### 2. 環境変数の設定

`.env.example` をコピーして `.env.local` を作成し、取得したトークンを設定：

```bash
cp .env.example .env.local
```

`.env.local` を編集：

```env
FIGMA_ACCESS_TOKEN=figd_your_actual_token_here
```

**注意**: `NEXT_PUBLIC_FIGMA_FILE_KEY` は不要です。FigmaファイルのURLは各 `.figma.tsx` ファイルに直接記述します。

### 3. Figma ファイルの準備

1. Figmaでデザインシステム/コンポーネントライブラリを作成
2. 各コンポーネントに適切な名前を付ける（React コンポーネント名と一致させる）
3. バリアント（variant）プロパティを設定（必要に応じて）

### 4. Code Connect ファイルの更新

各 `.figma.tsx` ファイルで、実際のFigmaファイルのURLとnode-idを設定：

**FigmaからURLを取得する方法:**

1. Figmaでコンポーネントを選択
2. 右クリック → 「Copy link to selection」または「リンクをコピー」
3. 取得したURLをそのまま使用

```typescript
figma.connect(ComponentName, 'https://www.figma.com/file/abc123def456/MyDesignSystem?node-id=123-456', {
  // ...
})
```

**ヒント**: URLの `abc123def456` がファイルキー、`123-456` がノードIDです。

## 📝 使用方法

### Code Connect ファイルの作成

```bash
npm run figma:connect
```

### Figmaに公開

```bash
npm run figma:publish
```

### Code Connect ファイルの解析

```bash
npm run figma:parse
```

## 🔧 コンポーネントの連携方法

### 基本的なコンポーネント

```typescript
figma.connect(MyComponent, 'figma-url', {
  props: {
    // Figmaプロパティとの対応
    variant: figma.enum('Variant', {
      primary: 'primary',
      secondary: 'secondary',
    }),
    disabled: figma.boolean('Disabled'),
    text: figma.textContent('Text'),
  },
  example: ({ variant, disabled, text }) => (
    <MyComponent variant={variant} disabled={disabled}>
      {text}
    </MyComponent>
  ),
})
```

### 複雑なコンポーネント（子要素を含む）

```typescript
figma.connect(ComplexComponent, 'figma-url', {
  props: {
    children: figma.children('*'),
    title: figma.textContent('Title'),
  },
  example: ({ children, title }) => (
    <ComplexComponent title={title}>
      {children}
    </ComplexComponent>
  ),
})
```

## 🎯 現在対応済みのコンポーネント

- ✅ `FacilityCodeInput` - 施設コード入力フォーム
- ✅ `Button` - ボタンコンポーネント
- ✅ `Input` - 入力フィールド
- ✅ `Card` - カードコンポーネント（Header、Content含む）

## 📚 参考資料

- [Figma Code Connect 公式ドキュメント](https://github.com/figma/code-connect)
- [Figma API ドキュメント](https://www.figma.com/developers/api)
- [Code Connect React ガイド](https://github.com/figma/code-connect/tree/main/react)

## 🐛 トラブルシューティング

### よくある問題

1. **Authentication エラー**:
   - `.env.local` でアクセストークンが正しく設定されているか確認
   - トークンが `figd_` で始まっているか確認
   - トークンのスコープに `File content:Read` が含まれているか確認

2. **Node ID が見つからない**:
   - Figmaで「Copy link to selection」でURLを取得したか確認
   - URLが `?node-id=123-456` の形式を含んでいるか確認

3. **コンポーネントが認識されない**:
   - コンポーネント名とFigmaのコンポーネント名が一致しているか確認
   - `.figma.tsx` ファイルが `include` パターンに含まれているか確認

### デバッグ方法

```bash
# Code Connect ファイルの構文チェック
npm run figma:parse

# 詳細なログを表示
FIGMA_ACCESS_TOKEN=your_token figma connect publish --verbose
```
