<template>
  <div class="mx-4 mt-6 w-58 h-72 rounded-lg ring-2 ring-gray-200 p-1 relative overflow-hidden">
    
    <!-- 骨架 -->
    <div class="w-50 h-36 mx-auto mt-4 rounded-md bg-gray-200"></div> <!-- Image -->
    <div class="px-2 mt-2">
        <div class="h-5 w-full mt-2 rounded-md bg-gray-200"></div> <!-- Title -->
        <div class="h-4 w-1/2 mt-3 rounded-md bg-gray-200"></div> <!-- Classify -->
        <div class="h-3 w-1/3 mt-2 rounded-md bg-gray-200"></div> <!-- Date -->
    </div>


    <!-- 微光 -->
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
