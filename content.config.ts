// defineContentConfig 用于定义整个内容模块的配置
// defineCollection 用于定义一个“集合”（collection）
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
  // 新增blog
  blog:defineCollection({
    type: 'page',
    source: 'blog/*.md',
    schema: z.object({
        title:     z.string(),
        date:    z.string(),
        image:   z.string().optional(),
        classify: z.string().optional(),
        // 把 readingTime 声明为可选数字
        readingTime: z.number().optional(),
      })
  }),
  songs:defineCollection({
    type: 'page',
    source: 'songs/*.md',
    schema: z.object({
        title:     z.string(),
        vocalist:    z.string(),
        image:   z.string().optional(),
        classify: z.string().optional(),
        id:   z.string(),
      })
  })
  }
})
