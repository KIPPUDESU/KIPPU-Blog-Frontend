// defineContentConfig 用于定义整个内容模块的配置
// defineCollection 用于定义一个“集合”（collection）
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
  // content集合
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
  // 新增blog
  blog:defineCollection({
    type: 'page',
    source: '**/*.md',
    schema: z.object({
        id:     z.string(),      // 这里声明一个 _id 字段
        title:   z.string(),
        date:    z.string(),
        image:   z.string().optional(),
        classify:z.string().optional(),
        draft:   z.boolean().optional()
      })
  })
  }
})
