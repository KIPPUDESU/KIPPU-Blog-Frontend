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
        class="absolute z-10 sm:-left-4 -left-2 sm:scale-100 scale-104 transition-all duration-600 linear sm:w-262 w-full origin-top-left"
        :class="
          ChengeStore.PlaneOrSolid
            ? 'sm:-top-280'
            : 'sm:-top-54 -top-10'
        "
        src="/img/eguegugang.png"
        alt=""
      />
      <div class="absolute flex flex-row w-full inset-y-0 z-20 top-22 overflow-hidden">
        <!-- 左侧文字容器 -->
        <div class="hidden md:flex-1 md:block h-full">          
          <BannerLeftInfo />
        </div>
        <!-- 右侧文字容器 -->
        <div class="hidden md:block md:relative md:w-152 h-full md:bg-blue-500/0">
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