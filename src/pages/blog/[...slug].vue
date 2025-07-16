<template>
  <main 
  class="
  bg-gray-50 py-12 sm:py-16">
    <div 
    class="
    mx-auto max-w-14/20">
      <div 
      class="
      bg-pink-50 rounded-2xl shadow-lg shadow-black/20
      overflow-hidden">
        <div 
        class="
        flex relative h-80 w-full overflow-hidden">
          <img 
          :src="page?.image" 
          alt="Article Cover Image" 
          class="w-full h-full object-cover">
          <div 
          class="
          absolute w-full h-full
          shadow-[inset_0_-5px_6px_rgba(0,0,0,0.1)]
          ">
          </div>
        </div>
        <!-- markdown -->
        <div class="p-16">
          <article v-if="page" 
          class="
          prose prose-a:no-underline max-w-none
          prose-pre:p-6 prose-pre:bg-blue-100
          prose-code:px-1 prose-code:rounded">
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
