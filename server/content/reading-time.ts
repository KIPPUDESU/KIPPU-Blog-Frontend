// 错误的导入路径：将 defineContentTransformer 从不存在的 @nuxt/content/transformers 导入
// 正确做法是从 @nuxt/content 里使用 defineTransformer
import { defineTransformer } from '@nuxt/content'

// 定义一个函数来递归地从AST子节点中提取文本
function getTextFromChildren(children: any[]): string {
  let text = ''
  if (!children) return ''
  for (const child of children) {
    if (child.type === 'text') {
      text += child.value || ''
    } else if (child.children) {
      text += getTextFromChildren(child.children)
    }
  }
  return text
}

export default defineTransformer({
  name: 'reading-time-transformer',
  // 处理 Markdown 文件
  extensions: ['.md'],
  transform(content: any) {
    // 仅对 /blog 目录下的文件生效
    if (content._path?.startsWith('/blog') && content.body) {
      const textContent = getTextFromChildren(content.body.children)
      const characterCount = textContent.length
      const wordsPerMinute = 240
      const estimatedMinutes = Math.ceil(characterCount / wordsPerMinute)
      // 至少 1 分钟
      content.readingTime = Math.max(1, estimatedMinutes)
    }
    return content
  }
})
