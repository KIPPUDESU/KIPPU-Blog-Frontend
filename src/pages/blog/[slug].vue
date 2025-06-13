<script setup>
// import { $content } from '@nuxt/content'
import { useRoute } from 'vue-router'
import { useAsyncData } from '#app'
import { queryContent } from '#content'

const route = useRoute()

// 根据 URL 中的 slug 查询 content/blog 目录下对应的 Markdown 文件
const { data: post } = await useAsyncData(`content-${route.params.slug}`, () =>
  queryContent('blog', route.params.slug).findOne()
)
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <!-- 使用 Nuxt Content 内置组件渲染 Markdown 转换后的 HTML -->
    <nuxt-content :document="post" />
  </div>
  <div v-else>
    <p>正在加载...</p>
  </div>
</template>
