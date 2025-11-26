/**
 * Figma Node ID 取得ヘルパーツール
 * FigmaのURLからNode IDを抽出し、Code Connect形式に変換
 */

function extractNodeIdFromUrl(figmaUrl: string): string {
  try {
    const url = new URL(figmaUrl)
    const nodeId = url.searchParams.get('node-id')

    if (!nodeId) {
      throw new Error('node-id parameter not found in URL')
    }

    // Figma URL format: node-id=123-456
    // Code Connect format: 123:456
    return nodeId.replace('-', ':')
  } catch (error) {
    console.error('Invalid Figma URL:', error)
    return ''
  }
}

function extractFileKeyFromUrl(figmaUrl: string): string {
  try {
    const url = new URL(figmaUrl)
    const pathParts = url.pathname.split('/')
    const fileIndex = pathParts.indexOf('file')

    if (fileIndex === -1 || pathParts.length <= fileIndex + 1) {
      throw new Error('File key not found in URL')
    }

    return pathParts[fileIndex + 1]
  } catch (error) {
    console.error('Invalid Figma URL:', error)
    return ''
  }
}

// 使用例
console.log('=== Figma URL Helper ===')
console.log('')

const exampleUrl = 'https://www.figma.com/file/abc123def456ghi789/近視管理手帳-Design-System?node-id=1-2'

console.log('Input URL:', exampleUrl)
console.log('File Key:', extractFileKeyFromUrl(exampleUrl))
console.log('Node ID:', extractNodeIdFromUrl(exampleUrl))
console.log('')

console.log('Code Connect format:')
console.log(`figma.connect(Component, '${exampleUrl}', {`)
console.log('  // props and example...')
console.log('})')

export { extractNodeIdFromUrl, extractFileKeyFromUrl }