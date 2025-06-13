// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@nuxt/content',
  ],
  // better-sqlite3编译出现问题，node22.5.0以上可以如此解决（实验性功能）
  // https://content.nuxt.com/docs/getting-started/configuration#experimentalnativesqlite
  content: {
    experimental: { nativeSqlite: true }
  },
})