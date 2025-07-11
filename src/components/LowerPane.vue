<template>
  <!-- 下层容器 -->
  <div class="
  absolute flex w-full bottom-0 my-4 h-1/4
  items-center perspective-1000">
    <!-- technology stack -->
    <div class="
    transition-all duration-600 ease-in-out
    relative flex mx-6 h-14/20 w-58 
    bg-white rounded-xl shadow-black/20 shadow-lg
    hover:shadow-black/30 hover:shadow-xl">
      <!-- 悬浮透明层 -->
      <div class="
      transition-all duration-600 ease-in-out
      absolute h-full w-full group
      hover:w-362">
          <!-- 主题句 -->
          <div 
          class="
          transition-all duration-600 ease-in-out
          absolute flex flex-col top-2 left-2 w-7/40 h-1/3
          text-[36px] text-black/70 font-bold
          group-hover:text-blue-400
          ">
            <h1 class="absolute">Technology</h1>
            <h1 class="absolute top-5/12">Stack</h1>
          </div>
          <!-- 箭头 -->
            <div 
            class="
            absolute w-12 h-12 top-3/18 left-28
            overflow-hidden">
              <div 
              class="
              transition-all duration-600 ease-in-out
              absolute flex -left-full w-24 h-full 
              group-hover:left-0
              group-hover:text-blue-400
              ">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 24 24"
              class="w-12 h-12">
                <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" fill="currentColor">
                </path>
              </svg>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 24 24"
              class="w-12 h-12">
                <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" fill="currentColor">
                </path>
              </svg>
              </div>
            </div>
            <!-- 隐藏字 -->
            <div class="
            transition-all duration-600 ease-in-out
            absolute top-5/12 left-2 z-0 text-[18px] font-bold
            group-hover:top-4/12  group-hover:text-[26px]"> 
              <p>You’ve finally <br>
                 noticed me</p>
            </div>
          <!-- 卡片 -->
          <!-- 288与文章外层容器一致 -->
          <div class="
          transition-all duration-600 ease-in-out
          absolute right-0 top-3/10 w-full h-1/2 z-40
          group-hover:top-0 group-hover:w-288 group-hover:h-full 
          group-hover:overflow-hidden">
            <!-- 动画容器 -->
            <div 
            class="
            animate-marquee transition-all duration-600 ease-in-out
            relative group-hover:w-max h-full flex items-center">
              <!-- 套壳，计算长度 -->
              <!-- 卡片展开后w-38, + 1 边距，于是卡片右侧距离容器 39 -->
              <!-- 第二个卡片左侧距离容器 32，第一张右侧与第二张左侧重合部分 39 - 32 = 7 -->
              <!-- 最后一张卡片 lfet-280，于是套壳的宽度是 280 + 38 -7 -->
              <!-- 为了保证第二个套壳内的第一张卡片与第一个套壳最后一张重合部分为 7 -->
              <!-- 考虑到第二个套壳内第一张卡片与套壳左侧也有 1 边距，于是削减第一个套壳 1 点的宽度 -->
              <!-- 最终结果 342 + 38 - ( 7 + 1 ) = w-372 -->
              <!-- 也就是 lastLeft + cardW - ( overLap + margin ) -->
              <!-- 后续添加卡片都如此计算 -->
              <div 
              class="
              transition-all duration-600 ease-in-out
              group-hover:relative group-hover:h-full"
              :style="{ width: ShellWidth }">
                <!-- card-v-for -->
                <div 
                v-for="(card, idx) in cards"
                :key="idx"
                class="
                transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
                absolute flex top-4 w-18 h-14/24
                group-hover:top-4/20 group-hover:w-38  
                bg-white/80 items-center justify-center
                group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
                rounded-lg shadow-lg"
                :class="[ card.shadowClass, card.initClass, card.leftClass, card.hoverClass ]"
                >
                  <img :src="card.src" alt="" />
                </div>
              </div>
              <!-- 复制一份 -->
              <!-- 套壳 -->
              <div 
              class="
              transition-all duration-600 ease-in-out
              group-hover:relative group-hover:h-full"
              :style="{ width: ShellWidth }">
              <!-- card-v-for -->
                <div 
                v-for="(card, idx) in cards"
                :key="idx"
                class="
                transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
                absolute flex top-4 w-18 h-14/24
                group-hover:top-4/20 group-hover:w-38  
                bg-white items-center justify-center
                group-hover:bg-white/80
                group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
                rounded-lg shadow-lg"
                :class="[ card.shadowClass, card.initClass, card.leftClass, card.hoverClass ]"
                >
                  <img :src="card.src" alt="" />
                </div>
              </div>
            </div>
          </div>
          <!-- 介绍句 -->
          <div class="
          absolute bottom-0 left-0 w-58 h-20
          bg-gradient-to-t rounded-b-lg
          px-2 py-5">
            <div 
            class="
            absolute flex left-0 -top-4 w-full h-8 px-2
            items-center gap-1 bg-gray-700">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 24 24"
              class="
              w-3 h-3 text-white">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71l-1.42 1.41z" fill="currentColor">
                </path>
              </svg>
              <span class="text-[12px] text-white font-medium">6h+ daily dev</span>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 16 16"
              class="w-3 h-3 text-white"><g fill="none">
                <path d="M7.541 3.948a3.25 3.25 0 0 0-4.595-.012a3.25 3.25 0 0 0 .012 4.595l4.707 4.708a.5.5 0 0 0 .707 0l4.683-4.68a3.25 3.25 0 0 0-.012-4.594a3.252 3.252 0 0 0-4.601-.012l-.447.448l-.454-.453z" fill="currentColor">
                </path></g>
              </svg>
              <span class="text-[12px] text-white font-medium">Interest-based</span>
            </div>
            <div class="text-[15px] text-black/60 font-medium">
              <p>Tech stack ignites innovation</p>
              <p>at the slightest whisper</p>
            </div>
          </div>
      </div>
    </div>
    <!-- 插图 -->
    <div class="
    transition-all duration-600 ease-in-out
    absolute flex mx-80 h-16/20 w-288 justify-center
    bg-blue-50/10 shadow-lg overflow-hidden"
    :class="ChengeStore.PlaneOrSolid ?
    'rounded-none shadow-black/0' : 'rounded-xl shadow-black/20' "
    >
      <img class="absolute z-0 -top-40 w-10/12" src="../public/img/egubule.png" alt="">
      <img class="absolute z-40 -top-40 w-10/12" src="../public/img/egubuleindex.png" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

const cards = ref([
  {
    src: '/img/html.png',
    shadowClass: 'shadow-black/20 group-hover:shadow-black/0',
    initClass: '-rotate-y-8 rotate-x-8 -rotate-6',
    leftClass: 'left-[0rem]',
    hoverClass: 'group-hover:left-[0.25rem]',
  },
  {
    src: '/img/CSS3.png',
    shadowClass: 'shadow-black/20 group-hover:shadow-black/0',
    initClass: '-rotate-y-4 -rotate-x-4 rotate-4',
    leftClass: 'left-[2rem]',
    hoverClass: 'group-hover:left-[8rem]',
  },
  {
    src: '/img/JavaScript.png',
    shadowClass: 'shadow-black/20 group-hover:shadow-black/0',
    initClass: '-rotate-y-20 -rotate-x-8 -rotate-4',
    leftClass: 'left-[4rem]',
    hoverClass: 'group-hover:left-[15.75rem]',
  },
  {
    src: '/img/typescript.png',
    shadowClass: 'shadow-black/20 group-hover:shadow-black/0',
    initClass: 'rotate-y-8 rotate-x-4 rotate-4',
    leftClass: 'left-[6rem]',
    hoverClass: 'group-hover:left-[23.5rem]',
  },
  {
    src: '/img/Vue.png',
    shadowClass: 'shadow-black/20 group-hover:shadow-black/0',
    initClass: '-rotate-y-8 rotate-x-8 -rotate-2',
    leftClass: 'left-[8rem]',
    hoverClass: 'group-hover:left-[31.25rem]',
  },
  {
    src: '/img/Nuxt.png',
    shadowClass: 'shadow-black/20 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[10rem]',
    hoverClass: 'group-hover:left-[39rem]',
  },
  { src: '/img/tailwindcss_.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[10rem]',
    hoverClass: 'group-hover:left-[46.75rem]',
  },
  {
    src: '/img/naiveui.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[10rem]',
    hoverClass: 'group-hover:left-[54.5rem]',
  },
  {
    src: '/img/pnpm.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[10rem]',
    hoverClass: 'group-hover:left-[62.25rem]',
  },
  {
    src: '/img/Node.js.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[10rem]',
    hoverClass: 'group-hover:left-[70rem]',
  },
  {
    src: '/img/sqlite.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[10rem]',
    hoverClass: 'group-hover:left-[77.75rem]',
  },
  {
    src: '/img/git.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[10rem]',
    hoverClass: 'group-hover:left-[85.5rem]',
  },
])

const cardW = 38
const cardKasane = 7
const margin = 1

// 从类名字符串中提取出卡片在 hover 状态下的 left 偏移值
function hoverClassLeft(left: string) {
  const hoverLeft = left.match(/group-hover:left-\[(.+)rem\]/)
  return hoverLeft ? parseFloat(hoverLeft[1]) : 0
}

// 计算套壳的 w
const ShellWidth = computed(() => {
  const lastCard = cards.value[cards.value.length - 1]
  const lastLeft = hoverClassLeft(lastCard.hoverClass)
  return `${(lastLeft * 4 + cardW - ( cardKasane + margin )) / 4}rem` 
}
)
</script>

<style>
/* 在 Tailwind CSS 中，一个单位默认等于 0.25rem */
:root {
  --marquee-width: 93rem;
}

/* 定义一个循环 */
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-1 * var(--marquee-width)));
  }
}
.animate-marquee {
  /* 强制为动画轨道创建独立的渲染层 */
  backface-visibility: hidden;
  }

/* 尝试为卡片也开启硬件加速 */
/* 选择器指向每一个卡片 */
.animate-marquee > div > div { 
  backface-visibility: hidden;
  /* 透明度动画*/
  /* 提示浏览器该元素的 transform 属性将会被频繁改变 */
  will-change: transform, opacity; 
}

/* 当父级的 .group 被 hover 时，播放动画 */
.group:hover .animate-marquee {
  animation: marquee 6s linear infinite;
  animation-play-state: running;
  animation-delay: 600ms;
}
</style>