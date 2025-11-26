/**
 * Figma Code Connect for FacilityCodeInput component
 * このファイルはFigmaのコンポーネントとReactコードを連携させます
 */

import figma from '@figma/code-connect'
import { FacilityCodeInput } from './facility-code-input'

// Figmaのコンポーネントとの接続
figma.connect(FacilityCodeInput, 'https://www.figma.com/file/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_NODE_ID', {
  props: {
    // Figmaのプロパティとコンポーネントのpropsをマッピング
    // 例：
    // variant: figma.enum('Variant', {
    //   default: 'default',
    //   error: 'error',
    // }),
    // disabled: figma.boolean('Disabled'),
  },
  example: () => (
    // 基本的な使用例
    <FacilityCodeInput />
  ),
})

// バリエーション例（エラー状態など）
figma.connect(FacilityCodeInput, 'https://www.figma.com/file/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_ERROR_NODE_ID', {
  variant: { state: 'error' },
  example: () => (
    <FacilityCodeInput />
  ),
})