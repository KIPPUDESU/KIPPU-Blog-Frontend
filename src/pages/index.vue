<template>
  <!-- 全页面容器 -->
  <div class="relative bg-gray-300/10">
      <!-- 首页容器 -->
    <div class="relative mt-0 w-full h-100">
      <!-- 首页图容器 -->
      <div 
      class="relative w-full h-100 overflow-hidden">
      <!-- 填充父容器的透明absolute添加图片上层添加shadow-inner -->
      <div class="absolute z-10 inset-0 transition-all duration-600 ease-in-out" :class="ChengeStore.PlaneOrSolid?
      'shadow-[inset_0_-4px_6px_rgba(0,0,0,0.0)]' : 'shadow-[inset_0_-5px_6px_rgba(0,0,0,0.2)]'"></div>
      <img 
      class="absolute transition-all duration-600 ease-in-out
      w-260"
      :class="ChengeStore.PlaneOrSolid?
      'bottom-100' : '-bottom-195'
      "
      src="../public/img/egugang.png" alt="">
      </div>
      <!-- 顶部横线 -->
      <div 
      class="
      transition-all duration-600 ease-in-out w-364 rounded-2xl
      absolute left-1/2 -translate-x-1/2 z-10 h-0.5 bg-gray-300"
      :class="ChengeStore.PlaneOrSolid?
      'top-13' : '-top-13' "
      ></div>
      <!-- 左侧文字容器 -->
      <div 
      class="transition-all duration-600 ease-in-out
      flex flex-col bg-gray-300/0 Noto-Sans 
      absolute xl:mx-20 md:mx-6 z-10 font-bold text-black/60
      "
      :class="ChengeStore.PlaneOrSolid? 'xl:top-32 md:top-62' : '-top-80' ">
      <h1 class="xl:text-[70px] md:text-[40px]">ターゲット は</h1>
      <!-- 文字中割线 -->
      <div class="xl:w-120 md:w-70 xl:h-1 md:h-0.5 bg-black/50 rounded-md"></div>
      <h1 class="xl:text-[80px] md:text-[40px]">Full Stack Developer</h1>
      </div>
      <!-- 右侧文字容器 -->
      <div 
      class="transition-all duration-800 ease-in-out bg-red-200/0
      absolute z-10 flex flex-col right-0 rounded-l-lg
      "
      :class="ChengeStore.PlaneOrSolid?
      'bottom-0 xl:h-66 md:h-50 xl:w-140 md:w-114' : 
      'bottom-10 xl:h-58 md:h-44 xl:w-160 md:w-120 bg-gray-500/10 backdrop-blur-xs shadow-black/20 shadow-lg'
      "
      >
        <a href="#" @click="ChengeStore.KippuChenge">
        <h1 class="absolute xl:right-20 md:right-6 xl:text-[92px] md:text-[70px] font-bold">KIPPU</h1>
        </a>
        <div class="absolute xl:top-32 md:top-24 text-gray-600 xl:text-[16px] md:text-[14px] xl:right-20 md:right-6">
        <p class=" top-32 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
         <p class=" top-38 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
          <p class=" top-44 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
        </div>
      </div>
    </div>
    <div class="relative my-4 w-full h-1 px-14">
      <!-- 分割线 -->
      <!-- <div class="bg-gray-300 h-0.5"></div> -->
    </div>
    <div class="flex flex-wrap justify-center relative bg-blue-300/ w-full h-max">
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from '#imports'

const ChengeStore = useTestStore()
</script>

<!-- <style> -->
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap') */

/* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'); */

/* .Noto-Sans {
  font-family: 'Noto Sans JP', sans-serif;
} */
 /* .Noto-Sans {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 600;
  font-style: normal;
} */

<!-- </style> -->