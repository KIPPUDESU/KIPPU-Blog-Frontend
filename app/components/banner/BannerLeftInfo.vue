<template>
  <!-- banner的左侧文字容器 -->
  <div
    class="linear flex flex-col absolute z-20 font-bold text-black/60 transition-all duration-600 xl:mx-18 lg:mx-12"
    :class="ChengeStore.PlaneOrSolid ? 'lg:top-22' : 'lg:-top-68'"
  >
    <h1 class="lg:text-[72px]">ターゲット は</h1>
    <!-- 文字中割线 -->
    <div
      class="lg:w-120 lg:h-1 bg-black/50 rounded-md"
    ></div>
    <h1 class="lg:text-[84px]">Full Stack Developer</h1>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()
</script>
