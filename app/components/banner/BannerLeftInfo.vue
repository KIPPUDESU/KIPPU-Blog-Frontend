<template>
  <!-- banner的左侧文字容器 -->
  <div
    class="linear flex flex-col absolute z-20 font-bold text-black/60 transition-all duration-600 xl:mx-18 lg:mx-12"
    :class="ChengeStore.PlaneOrSolid ? 'xl:top-22 2xl:top-40 lg:top-26' : 'xl:-top-68 2xl:-top-120'"
  >
    <h1 class="xl:text-[72px] 2xl:text-[120px] lg:text-[64px]">ターゲット は</h1>
    <!-- 文字中割线 -->
    <div
      class="xl:w-120 2xl:w-200 lg:w-98 xl:h-1 2xl:h-1.5 lg:h-1 bg-black/50 rounded-md"
    ></div>
    <h1 class="xl:text-[84px] 2xl:text-[140px] lg:text-[64px]">Full Stack Developer</h1>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()
</script>
