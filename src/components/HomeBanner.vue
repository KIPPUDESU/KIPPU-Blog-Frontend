<template>
<div class="relative w-full h-106">
    <!-- 首页图容器 -->
    <div 
     class="relative bg-gray-200/10 h-106 overflow-hidden">
      <!-- 填充父容器的透明absolute添加图片上层添加shadow-inner -->
      <div 
      class="
      transition-all duration-600 ease-in-out
      absolute z-10 w-full h-full" 
      :class="ChengeStore.PlaneOrSolid?
      'shadow-[inset_0_-4px_6px_rgba(0,0,0,0.0)]' :
      'shadow-[inset_0_-5px_6px_rgba(0,0,0,0.2)]'"></div>
        <img 
        class="absolute transition-all duration-600 linear -left-4
        sm:w-262 w-94 "
        :class="ChengeStore.PlaneOrSolid?
        'bottom-100' : 'xl:-bottom-192 lg:-bottom-144'"
        src="../public/img/eguegugang.png" alt="">
    </div>
    <!-- 顶部横线 -->
    <div 
    class="
    transition-all duration-600 ease-in-out xl:w-364 lg:w-278 rounded-2xl
    absolute left-1/2 -translate-x-1/2 z-10 h-0.5 bg-gray-300"
    :class="ChengeStore.PlaneOrSolid?
    'top-13' : '-top-13' "
    ></div>
    <!-- 左侧文字容器 -->
    <BannerLeftInfo />
    <!-- 右侧文字容器 -->
    <BannerRightInfo />
  </div>
</template>

<script setup lang="ts">
// 全局
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()
</script>