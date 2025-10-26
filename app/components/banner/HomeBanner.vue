<template>
  <div class="relative lg:h-94 w-full">
    <!-- 延伸 Header -->
    <HeaderAdd />
    <!-- 首页图容器 -->
    <div class="relative lg:h-94 overflow-hidden bg-gray-200/30">
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
        class="absolute z-10 lg:-left-4 lg:w-94 2xl:w-460 transition-all duration-600 linear sm:w-262"
        :class="
          ChengeStore.PlaneOrSolid
            ? 'bottom-100'
            : 'lg:-bottom-192'
        "
        src="/img/eguegugang.png"
        alt=""
      />
    </div>
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
