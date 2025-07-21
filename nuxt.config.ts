// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  srcDir: 'app/',
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@tailwindcss/typography',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@nuxt/content',
  ],
  components: [
    '~/components',
    {
      path: '~/components/views',
      pathPrefix: false,
    }
  ],
  // better-sqlite3编译出现问题，node22.5.0以上可以如此解决（实验性功能）
  // https://content.nuxt.com/docs/getting-started/configuration#experimentalnativesqlite
  content: {
    experimental: { nativeSqlite: true },
  },
  hooks: {
    // Markdown 解析后调用
    'content:file:afterParse'(ctx) {
      const { file, content } = ctx
      // 只对 .md 文件生效
      if (file.extension === '.md') {
        const wordsPerMinute = 180
        const text = typeof file.body === 'string' ? file.body : ''
        const wordCount = text.split(/\s+/).length
        // 向内容对象挂载一个字段
        content.readingTime = Math.ceil(wordCount / wordsPerMinute)
      }
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/jpg', href: '/egucool.jpg' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
