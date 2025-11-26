/**
 * 詳細なFacilityCodeInput Code Connect定義
 * 実際のFigmaコンポーネントのVariantに対応
 */

import figma from '@figma/code-connect'
import { FacilityCodeInput } from './facility-code-input'

// 環境変数からファイルキーを取得
const FILE_KEY = process.env.NEXT_PUBLIC_FIGMA_FILE_KEY || 'YOUR_FILE_KEY'
const BASE_URL = `https://www.figma.com/file/${FILE_KEY}/近視管理手帳-Design-System`

// デフォルト状態のFacilityCodeInput
figma.connect(FacilityCodeInput, `${BASE_URL}?node-id=2:1`, {
  variant: { State: 'Default' },
  props: {
    // Figmaのテキストレイヤーから値を取得
    title: figma.textContent('Title'),
    description: figma.textContent('Description'),
    placeholder: figma.textContent('Input Placeholder'),
    buttonText: figma.textContent('Button Text'),
  },
  example: ({ title, description, placeholder, buttonText }) => (
    // propsを使わずに、実際のコンポーネントの実装に合わせる
    <FacilityCodeInput />
  ),
})

// エラー状態のFacilityCodeInput
figma.connect(FacilityCodeInput, `${BASE_URL}?node-id=2:2`, {
  variant: { State: 'Error' },
  props: {
    errorMessage: figma.textContent('Error Message'),
  },
  example: ({ errorMessage }) => (
    // エラー状態の場合、初期値でエラーを設定したコンポーネントを表示
    <div>
      <FacilityCodeInput />
      {/* 注意: 実際の実装では内部stateでエラーを管理 */}
    </div>
  ),
})

// ローディング状態のFacilityCodeInput（将来の拡張用）
figma.connect(FacilityCodeInput, `${BASE_URL}?node-id=2:3`, {
  variant: { State: 'Loading' },
  example: () => (
    <FacilityCodeInput />
  ),
})