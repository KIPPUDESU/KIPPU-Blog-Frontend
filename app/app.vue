<script setup lang="ts">
useSeoMeta({
  title: 'KIPPU-Blog:（＞ ＜）こちらは切符です'
})

import { ref } from 'vue'

const nuxtApp = useNuxtApp()
const isLoading = ref(true)

nuxtApp.hook('page:start', () => {
  isLoading.value = true;
})

nuxtApp.hook('page:finish', () => {
  // 在加载动画遮罩存在时，启动滚动，补全 app/router.options.ts 中被禁用的默认滚动行为
  // 延迟一点时间关闭，确保动画至少播放一小段时间   
      setTimeout(() => {
        window.scrollTo(0, 0);
        isLoading.value = false;
      }, 2000);
    })
</script>


<template>
  <div class="">
    <!-- 使用 Vue 的 Transition 组件来包裹遮罩层，以实现平滑的淡入淡出 -->
    <Transition name="fade">
      <TransitionCover v-show="isLoading" />
    </Transition>
    <NuxtLayout>
     <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import "tailwindcss";
@import 'tailwind-scrollbar-hide/v4';
/* 忽略的警告 */
@plugin "@tailwindcss/typography";

/* 为 TransitionCover 的淡入淡出效果定义 CSS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>