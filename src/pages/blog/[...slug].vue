<template>
  <main 
  class="
  bg-gray-50 py-12 sm:py-18">
    <div 
    class="
    mx-auto max-w-14/20">
      <div 
      class="
      bg-pink-50 rounded-2xl shadow-lg shadow-black/20
      overflow-hidden">
        <div 
        class="
        flex relative h-92 w-full overflow-hidden">
          <img 
          :src="page?.image" 
          alt="Article Cover Image" 
          class="w-full h-full object-cover">
          <!-- 一层黑色遮罩 -->
          <div 
          class="
          absolute w-full h-full 
          backdrop-blur-xs bg-black/40
          shadow-[inset_0_-5px_6px_rgba(0,0,0,0.1)]
          ">
            <div 
            class="
            relative flex flex-col w-full h-40 
            mt-36 px-14 gap-2
            ">
              <h1 class="text-[40px] text-white font-bold">{{ page?.title }}</h1>
              <span class=" text-[20px] text-gray-200">发布日期：{{ page?.date }}</span>
            </div>
          <!-- <h1>{{ page?.title }}</h1> -->
          </div>
        </div>
        <!-- markdown -->
        <div class="px-16 py-10">
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

<style scoped>
.prose :deep(h1:first-of-type) {
    display: none;
}

/* 移除紧跟在被隐藏的 H1 后面的元素的上边距，消除多余的空白 */
.prose :deep(h1:first-of-type + *) {
    margin-top: 0;
}
</style>