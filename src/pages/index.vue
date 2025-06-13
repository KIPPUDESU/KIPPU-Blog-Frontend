<template>
  <!-- 全页面容器 -->
  <div class="relative bg-gray-300/10">
      <!-- 首页容器 -->
    <div class="relative w-full h-100">
      <!-- 首页图容器 -->
      <div 
      class="relative h-100 overflow-hidden">
      <!-- 填充父容器的透明absolute添加图片上层添加shadow-inner -->
      <div class="absolute z-10 w-full h-full transition-all duration-600 ease-in-out" :class="ChengeStore.PlaneOrSolid?
      'shadow-[inset_0_-4px_6px_rgba(0,0,0,0.0)]' : 'shadow-[inset_0_-5px_6px_rgba(0,0,0,0.2)]'"></div>
      <img 
      class="absolute transition-all duration-600 ease-in-out
      xl:w-260 lg:w-210"
      :class="ChengeStore.PlaneOrSolid?
      'bottom-100' : 'xl:-bottom-195 lg:-bottom-150'
      "
      src="../public/img/egugang.png" alt="">
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
      <div 
      class="transition-all duration-600 ease-in-out
      flex flex-col bg-gray-300/0 Noto-Sans 
      absolute xl:mx-20 lg:mx-12 z-10 font-bold text-black/60
      "
      :class="ChengeStore.PlaneOrSolid? 'xl:top-32 lg:top-38' : '-top-80' ">
      <h1 class="xl:text-[70px] lg:text-[64px]">ターゲット は</h1>
      <!-- 文字中割线 -->
      <div class="xl:w-120 lg:w-98 xl:h-1 lg:h-1 bg-black/50 rounded-md"></div>
      <h1 class="xl:text-[80px] lg:text-[64px]">Full Stack Developer</h1>
      <div class="">
      </div>
      </div>
      <!-- 右侧文字容器 -->
      <div 
      class="transition-all duration-800 ease-in-out bg-red-200/0
      absolute z-10 flex flex-col right-0 rounded-l-lg
      "
      :class="ChengeStore.PlaneOrSolid?
      'bottom-0 xl:h-66 lg:h-62 xl:w-140 lg:w-120' : 
      'bottom-10 xl:h-58 lg:h-54 xl:w-160 lg:w-120 bg-gray-500/10 backdrop-blur-xs shadow-black/20 shadow-lg'
      "
      >
        <a href="#" @click="ChengeStore.KippuChenge">
        <h1 class="absolute xl:right-20 lg:right-12 xl:text-[92px] lg:text-[84px] font-bold">KIPPU</h1>
        </a>
        <div class="absolute xl:top-32 lg:top-28 text-gray-600 xl:text-[16px] lg:text-[14px] xl:right-20 lg:right-12">
        <p class=" top-32 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
         <p class=" top-38 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
          <p class=" top-44 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
        </div>
      </div>
    </div>
    
  </div>

<!-- 做一下分割 -->

<!-- 这里做分隔行 -->
<div class="relative my-4 w-full h-1 px-10 bg-red-400/0">
  <!-- 分割线 -->
  <!-- <div class="bg-gray-300/0 h-0.5"></div> -->
</div>

<!-- 这里做分页 -->
<div class="flex flex-wrap relative justify-center bg-blue-300/0 w-full h-max">
  <ArticleCard 
  :PlaneOrSolid="ChengeStore.PlaneOrSolid"
  />
</div>
<div 
class="flex justify-between w-full h-28 items-center
bg-blue-200/0 transition-all duration-800 ease-in-out"
:class="DownOrUp ? 'px-12' : 'px-14'"
>
  <div 
  class="flex rounded-lg
  transition-all duration-800 ease-in-out
  justify-center items-center font-extralight
  bg-gradient-to-br"
  :class="
  DownOrUp ? 
  'from-pink-300/80 to-white shadow-black/12 shadow-xl py-2 px-6 w-54 h-13 text-[22px]' : ' from-pink-300/40 to-white backdrop-blur-sm shadow-black/20 shadow-lg py-2 px-4 w-60 h-12 text-[20px]'
  "
  @mouseenter="PostsDown"
  @mouseleave="PostsUp"
  >
  <NuxtLink>← Older Posts</NuxtLink>
  </div>
  <!-- 占位分隔 -->
  <div></div>
  <div 
  class="py-2 px-4 w-60 flex rounded-lg
  transition-all duration-800 ease-in-out
  text-[20px] justify-center items-center font-extralight
  bg-gradient-to-br "
  :class="ChengeStore.PlaneOrSolid?
  'from-pink-300/80 to-white' : 'from-pink-300/40 to-white shadow-black/20 shadow-lg'
  "
  @mouseenter="PostsDown"
  @mouseleave="PostsUp"
  >
  <NuxtLink>Newer Posts →</NuxtLink>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 全局状态管理
import { useTestStore } from '#imports'
// 把useTestStore存入ChengeStore
const ChengeStore = useTestStore()

const DownOrUp = ref(false)

function PostsDown(key:string) {
  // NowKey.value = key
  DownOrUp.value = true
}

function PostsUp() {
  DownOrUp.value = false
  // NowKey.value = null
}
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