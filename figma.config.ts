// Figma Code Connect設定ファイル
// 詳細: https://github.com/figma/code-connect

export default {
  codeConnect: {
    // パーサーの指定（React/TypeScript用）
    parser: 'react',
    
    // Code Connectファイルのパス
    include: [
      'components/**/*.figma.{tsx,ts}',
    ],
    
    // 除外するファイル
    exclude: [
      '**/*.test.tsx',
      '**/*.stories.tsx',
      '**/node_modules/**'
    ],
    
    // インポートパスのマッピング（必要に応じて設定）
    importPaths: {
      '^components/': '@/components/',
      '^lib/': '@/lib/',
      '^app/': '@/app/'
    },
    
    // バージョンラベル（任意）
    label: 'main'
  }
};