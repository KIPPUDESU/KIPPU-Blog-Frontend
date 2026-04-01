<template>
  <div class="relative h-94 w-full">
    <!-- 延伸 Header -->
    <HeaderAdd />
    <!-- 首页图容器 -->
    <div class="relative h-94 overflow-hidden bg-gray-200/30">
      <!-- 填充父容器的透明absolute添加图片上层添加shadow-inner -->
      <div
        class="absolute z-20 h-full w-full transition-all duration-600 ease-in-out"
        :class="
          ChengeStore.PlaneOrSolid
            ? 'shadow-[inset_0_-4px_6px_rgba(0,0,0,0.0)]'
            : 'shadow-[inset_0_-5px_6px_rgba(0,0,0,0.2)]'
        "
      ></div>
      <img
        class="absolute z-10 -left-4 transition-all duration-600 linear w-262"
        :class="
          ChengeStore.PlaneOrSolid
            ? 'bottom-100'
            : '-bottom-192'
        "
        src="/img/eguegugang.png"
        alt=""
      />
      <div class=" bg-yellow-500/50 absolute flex flex-row w-full inset-y-0 z-20 top-22 overflow-hidden">
        <!-- 左侧文字容器 -->
        <div class=" relative w-7/12 h-full bg-pink-400">
          <BannerLeftInfo />
        </div>

        <!-- 右侧文字容器 -->
        <div class=" relative w-5/12 h-full bg-red-500">
          <BannerRightInfo />
        </div>
      </div>
    </div>
    


  </div>
</template>

<script setup lang="ts">
// 全局
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()
</script>