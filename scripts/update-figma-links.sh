#!/bin/bash

# Figma Code Connect ファイル更新スクリプト
# 実際のFigmaファイルキーとnode-idを設定するためのテンプレート

# 環境変数から FIGMA_FILE_KEY を読み込み
if [ -f .env.local ]; then
    export $(grep NEXT_PUBLIC_FIGMA_FILE_KEY .env.local | xargs)
fi

FILE_KEY="${NEXT_PUBLIC_FIGMA_FILE_KEY:-YOUR_FILE_KEY}"
BASE_URL="https://www.figma.com/file/${FILE_KEY}/近視管理手帳-Design-System"

echo "🔧 Figma Code Connect ファイルの更新"
echo "File Key: $FILE_KEY"
echo ""

echo "📝 更新が必要なファイルと設定すべきNode ID:"
echo ""
echo "1. components/ui/button.figma.tsx"
echo "   Node ID例: 1:2 (ButtonコンポーネントのNode ID)"
echo "   URL: ${BASE_URL}?node-id=1-2"
echo ""
echo "2. components/ui/input.figma.tsx"
echo "   Node ID例: 1:3 (InputコンポーネントのNode ID)"
echo "   URL: ${BASE_URL}?node-id=1-3"
echo ""
echo "3. components/ui/card.figma.tsx"
echo "   Node ID例: 1:4 (CardコンポーネントのNode ID)"
echo "   URL: ${BASE_URL}?node-id=1-4"
echo ""
echo "4. components/facility-code-input.figma.tsx"
echo "   Node ID例: 2:1 (FacilityCodeInputコンポーネントのNode ID)"
echo "   URL: ${BASE_URL}?node-id=2-1"
echo ""
echo "💡 Node IDの取得方法:"
echo "1. Figmaでコンポーネントを選択"
echo "2. 右クリック → 'Copy link'"
echo "3. URLから 'node-id=X-Y' の部分を確認"
echo "4. ハイフンをコロンに変更 (X-Y → X:Y)"
echo ""
echo "🚀 設定後は以下のコマンドでテスト:"
echo "npm run figma:parse  # 構文チェック"
echo "npm run figma:publish  # Figmaに公開"