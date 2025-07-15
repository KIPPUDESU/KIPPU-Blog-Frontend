<template>
  <main 
  class="
  bg-gray-50 py-12 sm:py-16">
    <div 
    class="
    container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <div class="bg-pink-100 rounded-2xl shadow-lg overflow-hidden">
        <div class="h-72">
          <img src="/img/egudown.png" alt="Article Cover Image" class="w-full h-full object-cover">
        </div>

        <div class="p-8 sm:p-12">
          <article v-if="page" 
          class="">
            <ContentRenderer :value="page" />
          </article>
          <p v-else>页面不存在或正在加载…</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>
