<template>
  <!-- 全页面容器 -->
  <div class="relative bg-gray-300/10">
      <!-- 首页 Banner 容器 -->
    <div class="relative w-full h-106">
      <!-- 首页图容器 -->
      <div 
      class="relative bg-gray-200/10 h-106 overflow-hidden">
      <!-- 填充父容器的透明absolute添加图片上层添加shadow-inner -->
      <div class="absolute z-10 w-full h-full transition-all duration-600 ease-in-out" 
      :class="ChengeStore.PlaneOrSolid?
      'shadow-[inset_0_-4px_6px_rgba(0,0,0,0.0)]' : 'shadow-[inset_0_-5px_6px_rgba(0,0,0,0.2)]'"></div>
      <img 
      class="absolute transition-all duration-600 ease-in-out -left-4
      xl:w-262 lg:w-210 "
      :class="ChengeStore.PlaneOrSolid?
      'bottom-100' : 'xl:-bottom-192 lg:-bottom-144'
      "
      src="/img/eguegugang.png" alt="">
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
      flex flex-col
      absolute xl:mx-18 lg:mx-12 z-10 font-bold text-black/60
      "
      :class="ChengeStore.PlaneOrSolid? 'xl:top-34 lg:top-38' : '-top-80' ">
      <h1 class="xl:text-[72px] lg:text-[64px]">ターゲット は</h1>
      <!-- 文字中割线 -->
      <div class="xl:w-120 lg:w-98 xl:h-1 lg:h-1 bg-black/50 rounded-md"></div>
      <h1 class="xl:text-[84px] lg:text-[64px]">Full Stack Developer</h1>
      <div class="">
      </div>
      </div>
      <!-- 右侧文字容器 -->
      <div 
      class="transition-all duration-800 ease-in-out 
      absolute z-10 flex flex-col right-0 rounded-l-xl
      "
      :class="ChengeStore.PlaneOrSolid?
      'bottom-0 xl:h-70 lg:h-62 xl:w-146 lg:w-120 bg-gradient-to-bl from-gray-100-100/0 to-gray-100-100/0' : 
      'bottom-12 xl:h-62 lg:h-54 xl:w-156 lg:w-120 backdrop-blur-sm shadow-black/20 shadow-lg bg-gradient-to-bl'
      "
      >
        <!-- 点击大标题 -->
        <a class="" href="#" @click="ChengeStore.KippuChenge">
        <h1 
        ref="glowWrapper" 
        class="
        transition-all duration-800 ease-in-out
        absolute top-1 font-bold
        object-cover hover:scale-104
        bg-clip-text inline-block text-transparent bg-black/90"
        :class="ChengeStore.PlaneOrSolid? 
        'xl:right-18 lg:right-12 xl:text-[92px] lg:text-[84px]' : 
        'xl:right-20 lg:right-14 xl:text-[94px] lg:text-[86px]' "
        @mouseenter="onEnter"
        @mousemove="onMove"
        @mouseleave="onLeave"
        >KIPPU</h1>
        </a>
        <!-- 小字简介 -->
        <div       
        class="
        transition-all duration-800 ease-in-out
        absolute flex flex-col gap-2 items-end font-medium text-gray-600/90
        xl:text-[16px] lg:text-[14px]"
        :class="ChengeStore.PlaneOrSolid?
        'xl:right-18 lg:right-12 xl:top-30 lg:top-28' : 'xl:right-20 lg:right-14 xl:top-32 lg:top-30'
        ">
        <p class="flex flex-row">Frontend Dev [<span class="inline-flex xl:text-[11px] justify-center items-center">>></span>] Backend Dev / Graphic Designer / Writing</p>
         <p class="">16 November 2005 — My first commit, the day I became me</p>
          <p class="">If okay... mail me, maybe? 💌 : 
            <a 
            href="mailto:KIPPUDESU@OUTLOOK.COM?subject=Hello%20Kippu" 
            target="_blank"
            class="
            bg-clip-text text-transparent bg-gradient-to-br
            hover:from-gray-700/90 hover:to-gray-700/40"
            :class="ChengeStore.PlaneOrSolid?
            'from-gray-800/70 to-gray-800/70' : 'from-blue-900/70 to-blue-900/40' "
            >
              KIPPUDESU@OUTLOOK.COM</a></p>
        </div>
        <!-- 圆点 -->
        <div 
        class="relative flex flex-col 
        transition-all duration-800 ease-in-out"
        :class="ChengeStore.PlaneOrSolid?
        'mt-[126px] ml-6' : 'mt-[134px] ml-12' "
        >
          <svg 
          class="absolute mx-2
          transition-all duration-600 ease-in-out"
          :class="ChengeStore.PlaneOrSolid?
          'w-[0px] h-[0px] top-8' : 'w-[12px] h-[12px] top-0' "
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          >
           <circle cx="5" cy="5" r="5" fill="#636364"/>
          </svg>
          <svg 
          class="absolute mx-2 top-8
          transition-all duration-600 ease-in-out"
          :class="ChengeStore.PlaneOrSolid?
          'w-[0px] h-[0px]' : 'w-[12px] h-[12px]' "
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          >
           <circle cx="5" cy="5" r="5" fill="#636364"/>
          </svg>
          <svg 
          class="absolute mx-2
          transition-all duration-600 ease-in-out"
          :class="ChengeStore.PlaneOrSolid?
          'top-8 w-[0px] h-[0px]' : 'top-16 w-[12px] h-[12px]' "
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          >
           <circle cx="5" cy="5" r="5" fill="#636364"/>
          </svg>
        </div>
      </div>
    </div>
  </div>

<!-- 这里做分隔行 -->
<!-- <div class="relative my-4 w-full h-1 px-10 bg-red-400/0"> -->
  <!-- 分割线 -->
  <!-- <div class="bg-gray-300/0 h-0.5"></div> -->
<!-- </div> -->

<!-- 这里做分页 -->
<div class="flex relative justify-center items-center bg-gray-100/0 w-full h-max">
<!-- 左侧信息容器 -->
<div 
  class="
  absolute flex w-70 h-252 top-0 left-0
  justify-center rounded-2xl">
    <div 
    class="
    absolute flex top-14 w-40 h-40 rounded-full justify-center items-center
    overflow-hidden shadow-lg shadow-black/30 ring-4 ring-gray-300
    ">
      <img 
      class="
      transition-all duration-600 ease-in-out
      flex absolute w-full h-full object-cover hover:scale-110
      " 
      src="../public/img/egucool.jpg" 
      alt="KIPPUIMG">
    </div>
    <div 
    class="
    absolute flex flex-col top-62 w-48 h-10 gap-1
    justify-center items-center
    ">
      <span class="text-2xl text-gray-800 font-bold">切符</span>
      <p class="text-md text-gray-600/80 font-extrabold">もっとElegantになりたい</p>
    </div>
</div>
<!-- 文章预览卡片 -->
<div class="">
  <!-- 左侧分页标题 -->
  <div 
  class="
  absolute flex flex-col top-8 left-72 w-4 h-254
  justify-between items-center py-6 ">
    <div class="w-[3px] h-10 z-20 mb-2 bg-black/20 rounded-2xl"></div>
    <span class="text-black/20 text-[20px]">記</span>
    <span class="text-black/20 text-[20px]">事</span>
    <span class="text-black/20 text-[20px]">一</span>
    <span class="text-black/20 text-[20px]">覧</span>
    <div class="w-[3px] h-210 z-20 mt-4 bg-black/20 rounded-2xl"></div>
    <div class="w-2 h-2 mt-4 bg-black/20 rounded-full"></div>
  </div>
  <!-- 边角 -->
  <div>
    <div class="absolute w-[22px] h-[22px] top-5 left-[294.5px] bg-gray-300/0
    border-t-[3.5px] border-l-[3.5px] border-gray-300 rounded-tl-xl"></div>
  </div>
  <!-- 右侧包围线条 -->
  <div>
    <div
    class="
    absolute w-284 h-[3px] bg-gray-300 rounded-xl
    right-12 top-5
    "></div>
    <div 
    class="
    absolute w-4 h-4 bg-gray-300 rounded-full
    right-4 top-4
    "></div>
    <div
    class="
    absolute w-[3px] h-236 bg-gray-300 rounded-xl
    right-5 top-12
    "></div>
    <div 
    class="
    w-2 h-2 absolute bg-black/20 rounded-full
    right-4.5 top-252
    "></div>
  </div>
  <!-- 三层背景容器 -->
  <div 
   class="
   flex flex-row absolute z-10 top-10 left-80 w-288 h-246
   justify-center items-center shadow-black/20 shadow-lg
   bg-gradient-to-bl from-pink-200/50 to-pink-100/50 rounded-t-xl
   ">
   </div>
   <div 
   class="
   transition-all duration-800 ease-in-out
   flex flex-row absolute z-20 left-80
   justify-center items-center shadow-lg backdrop-blur-sm
   bg-gradient-to-bl from-gray-50/60 to-white/95 rounded-t-xl"
   :class="ChengeStore.PlaneOrSolid?
   'w-288 top-10 h-246 shadow-black/0' : 'w-284 top-14 h-238 shadow-black/20' "
   >
   </div>
  <div 
  class="
  transition-all duration-800 ease-in-out
  relative flex z-40 flex-wrap justify-center items-center
  bg-white
  ml-80 my-10 py-4 rounded-t-xl shadow-lg"
  :class="ChengeStore.PlaneOrSolid?
  'h-246 w-288 mx-10 mt-10 shadow-black/0' : 'h-230 w-280 mx-18 mt-18 shadow-black/20' "
   >
  <ArticleCard
   v-for="article in articles"
   :key="article.id"
   :card="{
     date: article.date,
     image: article.image || '/img/egudown.png',
     title: article.title,
     classify: article.classify || '未分类', 
   }"
   :PlaneOrSolid="ChengeStore.PlaneOrSolid"
   :to="`/`"
  />
  </div>
</div>
</div>
<!-- 分页按钮 -->
<div 
class="flex justify-between w-288 h-46 items-center mt-12 ml-80
bg-gray-100/0 transition-all duration-800 ease-in-out"
:class="DownOrUp ? 'px-10' : 'px-14'"
@mouseenter="PostsDown"
@mouseleave="PostsUp"
>
  <!-- 左 -->
  <div 
  class="flex py-2 px-4 w-66 h-12
  hover:py-2 hover:w-62 hover:h-13
  shadow-black/0 shadow-inner/0 text-[20px] text-gray-500
  hover:shadow-black/30 hover:shadow-inner/80 hover:text-[22px] hover:text-gray-600
  bg-gradient-to-br from-pink-300/60 to-white
  hover:from-pink-300/70 hover:to-white
  transition-all duration-500 ease-in-out
  justify-center items-center font-bold
  ">
  <!-- :to="`/?page=${pageNum - 1}`" -->
  <NuxtLink to="/" class="flex flex-nowrap items-center gap-3"
  >
    <!-- ← ← ← -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <g transform="scale(-1,1) translate(-16,0)">
          <polyline 
            points="4,2 12,8 4,14" 
            fill="none" 
            stroke="gray" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
        </g>
      </svg>
    Older Posts</NuxtLink>
  </div>
  <!-- 占位分隔图片 -->
  <div class="flex justify-center w-200 h-40 bg-red-400/0">
    <img
    class="h-40"
    src="../public/img/egutenshi.png" alt="">
  </div>
  <!-- 右 -->
  <div 
  class="flex py-2 px-4 w-66 h-12
  hover:py-2 hover:w-62 hover:h-13
  shadow-black/0 shadow-inner/0 text-[20px] text-gray-500
  hover:shadow-black/30 hover:shadow-inner/80 hover:text-[22px] hover:text-gray-600
  bg-gradient-to-br from-pink-300/60 to-white
  hover:from-pink-300/70 hover:to-white
  transition-all duration-500 ease-in-out
  justify-center items-center font-bold
  ">
  <!-- :to="`/?page=${pageNum + 1}`" -->
  <NuxtLink to="/" class="flex flex-nowrap items-center gap-3"
  
  >Newer Posts 
    <!-- → → → -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <polyline 
            points="4,2 12,8 4,14" 
            fill="none" 
            stroke="gray" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
      </svg>
  </NuxtLink>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 全局状态管理
import { useTestStore } from '#imports'
import { onMounted, onBeforeUnmount } from 'vue'
// vue 响应
// import { computed } from 'vue'

// import { queryContent } from '@nuxt/content'

// 把useTestStore存入ChengeStore
const ChengeStore = useTestStore()

const DownOrUp = ref(false)

// 两个方法
function PostsDown() {
  // NowKey.value = key
  DownOrUp.value = true
}
function PostsUp() {
  DownOrUp.value = false
  // NowKey.value = null
}

// 卡片渲染数据获取(异步)
// const { data: articles } = await useAsyncData('article', () => queryContent('blog').find())
// 以上编写中，最新的 Nuxt Content v3 已经不再提供 queryContent() 
// 改用基于「集合（collection）」的新 API：
const { data: articles } = await useAsyncData('article', () => 
queryCollection('blog').all()
)

// 路径光晕
// 绑定和解绑事件
const glowWrapper = ref<HTMLElement>()

// 统一的光晕 CSS 文本
const gradient = 'radial-gradient(circle 350px at var(--x) var(--y), rgba(248, 248, 248, 0.25), transparent 30%)'

// 鼠标进入时开启光晕
const onEnter = () => {
  const el = glowWrapper.value!
  // 初始化位置
  el.style.setProperty('--x', '50%')
  el.style.setProperty('--y', '50%')
  // 打开光晕
  el.style.backgroundImage = gradient
}

// 鼠标移动时：更新坐标
const onMove = (e: MouseEvent) => {
  const el = glowWrapper.value!
  const r = el.getBoundingClientRect()
  const x = ((e.clientX - r.left)  / r.width ) * 100
  const y = ((e.clientY - r.top)   / r.height) * 100
  el.style.setProperty('--x', `${x}%`)
  el.style.setProperty('--y', `${y}%`)
}

// 鼠标离开时：关闭光晕并重置位置
const onLeave = () => {
  const el = glowWrapper.value!
  el.style.backgroundImage = 'none'
  el.style.setProperty('--x', '50%')
  el.style.setProperty('--y', '50%')
}

onMounted(() => {
  // 如果想一开始就无光晕，这里不需要设置 backgroundImage
  const el = glowWrapper.value!
  el.style.setProperty('--x', '50%')
  el.style.setProperty('--y', '50%')
})
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