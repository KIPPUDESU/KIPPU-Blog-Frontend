<template>
  <!-- 下层容器 -->
  <div class="
  relative flex w-full bottom-0 px-[40px] my-4 lg:h-116 2xl:h-140
  items-center justify-center perspective-1000">
    <!-- stack div -->
    <div 
    class="flex h-9/10 w-full shadow-black/20 "
    :class="ChengeStore.PlaneOrSolid ?
    'shadow-none rounded-none' : 'shadow-lg rounded-2xl'"
    >
      <!-- stack -->
      <div class="
      flex h-full w-full justify-between
      [clip-path:inset(0_0_0_-2rem)]">
        <!-- 左侧卡片 -->
        <div class="
        transition-all duration-600 ease-in-out
        relative flex h-full w-70 group
        bg-white"
        :class="ChengeStore.PlaneOrSolid ?
        'shadow-[4px_0_10px_rgba(0,0,0,0)] rounded-l-none' : 'shadow-[4px_0_10px_rgba(0,0,0,0.2)] rounded-l-2xl' ">
          <!-- 介绍句 -->
          <div class="
          absolute bottom-0 left-0 w-full h-1/4 px-2 py-5">
            <!-- 标签 -->
            <div 
            class="
            transition-all duration-600 ease-in-out
            absolute flex left-0 -top-4 w-full h-8 px-2
            items-center gap-1 bg-gray-600 group-hover:bg-blue-400">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 24 24"
              class="
              w-4 h-4 text-white">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71l-1.42 1.41z" fill="currentColor">
                </path>
              </svg>
              <span class="text-[14px] text-white font-medium">Dev-All the time</span>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 16 16"
              class="w-4 h-4 text-white"><g fill="none">
                <path d="M7.541 3.948a3.25 3.25 0 0 0-4.595-.012a3.25 3.25 0 0 0 .012 4.595l4.707 4.708a.5.5 0 0 0 .707 0l4.683-4.68a3.25 3.25 0 0 0-.012-4.594a3.252 3.252 0 0 0-4.601-.012l-.447.448l-.454-.453z" fill="currentColor">
                </path></g>
              </svg>
              <span class="text-[14px] text-white font-medium">Interest-based</span>
            </div>
            <!-- 介绍句 -->
            <div class="text-[18px] text-black/60 font-medium">
              <p>Tech stack ignites innovation</p>
              <p>at the slightest whisper</p>
            </div>
          </div>
          <!-- 悬浮透明层 -->
          <div class="
          transition-all duration-600 ease-in-out
          absolute h-full w-full 
          hover:w-380">
              <!-- 主题句 -->
              <div 
              class="
              transition-all duration-600 ease-in-out
              flex flex-col px-2 pt-1 w-full h-1/3
              text-[40px] text-black/70 font-bold
              group-hover:text-blue-400
              ">
                <!-- 上面那行字 -->
                <h1 class="">Technology</h1>
                <!-- 下面一行字加上箭头 -->
                <div class="flex flex-row items-center gap-2">
                  <h1 class="">Stack</h1>
                  <!-- 箭头 -->
                  <div 
                  class="relative w-12 h-12 overflow-hidden">
                    <div 
                    class="
                    transition-all duration-600 ease-in-out
                    absolute flex -left-full w-24 h-full text-black/70
                    group-hover:left-0 group-hover:text-blue-400
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
                </div>
              </div>

                <!-- 隐藏字 -->
                <div class="
                transition-all duration-600 ease-in-out
                absolute top-5/12 left-2 z-0 text-[20px] font-bold
                group-hover:top-4/12  group-hover:text-[32px]"> 
                  <p>You’ve finally <br>
                    noticed me</p>
                </div>
              <!-- 卡片 -->
              <!-- 288与文章外层容器一致 -->
              <div class="
              transition-all duration-600 ease-in-out
              absolute left-0 group-hover:left-70 top-3/10 w-90 h-1/2 z-40
              group-hover:top-0 group-hover:w-288 group-hover:h-full
              group-hover:overflow-hidden">
                <!-- 动画容器 -->
                <div 
                class="
                animate-marquee transition-all duration-600 ease-in-out
                group-hover:w-max h-full flex items-center">
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
                    absolute flex top-1 w-24 h-32 z-50
                    group-hover:top-4/20 group-hover:w-38 group-hover:h-14/24  
                    bg-white items-center justify-center
                    group-hover:bg-white/80 group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
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
                    absolute flex top-1 w-24 h-32 z-50
                    group-hover:top-4/20 group-hover:w-38 group-hover:h-14/24
                    bg-white items-center justify-center
                    group-hover:bg-white/80 group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
                    rounded-lg shadow-lg"
                    :class="[ card.shadowClass, card.initClass, card.leftClass, card.hoverClass ]">
                      <img :src="card.src" alt="" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <!-- 插图 -->
        <div 
          class="
          transition-all duration-600 ease-in-out
          flex flex-1 relative h-full justify-center
          overflow-hidden bg-blue-100/20"
          :class="ChengeStore.PlaneOrSolid? 'rounded-none' : 'rounded-2xl'"
        >
            <img class="absolute z-0  lg:w-10/12 2xl:w-6/12 -top-30" src="/img/egubule.png" alt="">
            <img class="absolute z-40 lg:w-10/12 2xl:w-6/12 -top-30" src="/img/egubuleindex.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

// 卡片数据
const cards = ref([
  {
    src: '/img/html.png',
    shadowClass: 'shadow-black/20 group-hover:shadow-black/0',
    initClass: '-rotate-y-8 rotate-x-8 -rotate-6',
    leftClass: 'left-[-0.5rem]',
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
    leftClass: 'left-[4.5rem]',
    hoverClass: 'group-hover:left-[15.75rem]',
  },
  {
    src: '/img/typescript.png',
    shadowClass: 'shadow-black/20 group-hover:shadow-black/0',
    initClass: 'rotate-y-8 rotate-x-4 rotate-4',
    leftClass: 'left-[7rem]',
    hoverClass: 'group-hover:left-[23.5rem]',
  },
  {
    src: '/img/Vue.png',
    shadowClass: 'shadow-black/20 group-hover:shadow-black/0',
    initClass: '-rotate-y-8 rotate-x-8 -rotate-2',
    leftClass: 'left-[9.5rem]',
    hoverClass: 'group-hover:left-[31.25rem]',
  },
  {
    src: '/img/Nuxt.png',
    shadowClass: 'shadow-black/20 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[12rem]',
    hoverClass: 'group-hover:left-[39rem]',
  },
  { src: '/img/tailwindcss_.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[12rem]',
    hoverClass: 'group-hover:left-[46.75rem]',
  },
  {
    src: '/img/naiveui.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[12rem]',
    hoverClass: 'group-hover:left-[54.5rem]',
  },
  {
    src: '/img/pnpm.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[12rem]',
    hoverClass: 'group-hover:left-[62.25rem]',
  },
  {
    src: '/img/Node.js.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[12rem]',
    hoverClass: 'group-hover:left-[70rem]',
  },
  {
    src: '/img/sqlite.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[12rem]',
    hoverClass: 'group-hover:left-[77.75rem]',
  },
  {
    src: '/img/git.png',
    shadowClass: 'shadow-black/0 group-hover:shadow-black/0',
    initClass: 'rotate-y-4 -rotate-x-18 rotate-6',
    leftClass: 'left-[12rem]',
    hoverClass: 'group-hover:left-[85.5rem]',
  },
])

const cardW = 38
const cardKasane = 7
const margin = 1

// 从类名字符串中提取出卡片在 hover 状态下的 left 偏移值
function hoverClassLeft(left: string) {
  const hoverLeft = left.match(/group-hover:left-\[(.+)rem\]/)
  // 确保 hoverLeft 和 hoverLeft[1] 都存在
  if (hoverLeft && hoverLeft[1]) {
    return parseFloat(hoverLeft[1])
  }
  return 0
}

// 计算套壳的 w
const ShellWidth = computed(() => {
  const lastCard = cards.value[cards.value.length - 1]
  if (!lastCard) {
    // 如果数组是空的，lastCard 就是 undefined
    return '0rem'
   }
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