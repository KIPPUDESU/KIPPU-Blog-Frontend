<template>
  <main 
  class="
  bg-gray-100 py-12 sm:py-18">
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
          backdrop-blur-none bg-black/40
          shadow-[inset_0_-5px_6px_rgba(0,0,0,0.1)]
          ">
            <div 
            class="
            relative flex flex-col w-full h-40 
            mt-36 px-14 gap-2
            ">
              <!-- 文章标题 -->
              <h1 class="text-[40px] text-white font-bold">{{ page?.title }}</h1>
              <div class="relative flex flex-row w-full h-1/5 gap-6">
                <!-- 发布日期 -->
                <div class="flex gap-2 justify-center items-center h-full w-max">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 24 24"
                  class="text-gray-300 w-6">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" fill="currentColor">
                    </path>
                  </svg>
                  <span class=" text-[20px] text-gray-300">
                    发布日期：{{ page?.date }}</span>
                </div>
                <!-- 阅读时长 -->
                <div class="flex gap-2 justify-center items-center h-full w-max">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 24 24"
                  class="text-gray-300 w-6">
                  <path d="M22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53l4.59-3.85zM12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z" fill="currentColor">
                  </path></svg>
                  <span class=" text-[20px] text-gray-300">
                    阅读时长：{{  page?.readingTime }} 分钟</span>
                </div>
              </div>
            </div>
          <!-- <h1>{{ page?.title }}</h1> -->
          </div>
        </div>
        <!-- markdown -->
        <div class="px-16 py-10">
          <article v-if="page" 
          class="
          prose prose-a:no-underline max-w-none
          prose-pre:px-6 prose-pre:py-6 prose-pre:bg-gray-200">
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