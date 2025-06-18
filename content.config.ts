// defineContentConfig 用于定义整个内容模块的配置
// defineCollection 用于定义一个“集合”（collection）
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
