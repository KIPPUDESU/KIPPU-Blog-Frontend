<template>
  <div class="w-full h-32 mt-0 rounded-lg bg-gray-200 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full 
                bg-gradient-to-r from-transparent via-white/50 to-transparent 
                animate-[shimmer_1.5s_infinite]">
    </div>
  </div>
</template>

<script setup lang="ts">
// 这是一个纯展示性组件，不需要脚本逻辑。
</script>

<style>
/* 使渐变光效从左到右移动。 */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
