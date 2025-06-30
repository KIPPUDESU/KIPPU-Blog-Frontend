<template>
<!-- banner的左侧文字容器 -->
<div 
  class="transition-all duration-600 linear
  flex flex-col absolute 
  xl:mx-18 lg:mx-12 z-20 font-bold text-black/60
  "
  :class="ChengeStore.PlaneOrSolid? 
  'xl:top-34 lg:top-38' : '-top-64' ">
  <h1 class="xl:text-[72px] lg:text-[64px]">ターゲット は</h1>
  <!-- 文字中割线 -->
  <div class="xl:w-120 lg:w-98 xl:h-1 lg:h-1 bg-black/50 rounded-md"></div>
  <h1 class="xl:text-[84px] lg:text-[64px]">Full Stack Developer</h1>
</div>
</template>

<script setup lang="ts">
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()
</script>