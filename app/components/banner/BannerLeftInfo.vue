<template>
  <!-- banner的左侧文字容器 -->
  <div
    class="linear flex flex-col w-full h-full min-w-0 mt-4 ml-18 z-20 font-bold text-black/60 transition-all duration-600"
    :class="ChengeStore.PlaneOrSolid ? ' transform-y-0' : ' -translate-y-full'"
  >
    <h1 class="transition-all duration-600 ease-in-out text-[clamp(2px,6vw,72px)] leading-tight whitespace-nowrap">ターゲット は</h1>    
    <!-- 文字中割线 -->
    <div class="transition-all duration-600 ease-in-out w-[clamp(120px,40vw,720px)] h-1 bg-black/50 rounded-md"></div>
    <h1 class="transition-all duration-600 ease-in-out text-[clamp(2px,5vw,84px)] leading-tight whitespace-nowrap">Full Stack Developer</h1>  </div>
</template>

<script setup lang="ts">
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()
</script>
