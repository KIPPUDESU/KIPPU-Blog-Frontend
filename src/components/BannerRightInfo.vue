<template>
<!-- banner的右侧文字容器 -->
<div 
class="transition-all duration-600 ease-in-out 
absolute z-20 flex-col right-0 rounded-l-xl
hidden sm:flex"
:class="ChengeStore.PlaneOrSolid?
'bottom-0 xl:h-70 lg:h-62 xl:w-146 lg:w-120 bg-gradient-to-bl' : 
'bottom-12 xl:h-62 lg:h-54 xl:w-156 lg:w-120 backdrop-blur-sm shadow-black/20 shadow-lg'
"
>
  <!-- 点击大标题 -->
  <a class="cursor-pointer" @click="ChengeStore.KippuChenge">
  <h1 
  ref="glowWrapper" 
  class="
  transition-all duration-600 ease-in-out
  absolute top-1 font-bold
  object-cover hover:scale-104
  bg-clip-text text-transparent bg-black/80"
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
  transition-all duration-600 ease-in-out
  absolute flex flex-col gap-2 items-end font-medium text-gray-600/90
  xl:text-[16px] lg:text-[14px]"
  :class="ChengeStore.PlaneOrSolid?
  'xl:right-18 lg:right-12 xl:top-30 lg:top-28' : 'xl:right-20 lg:right-14 xl:top-32 lg:top-30'
  ">
  <p class="flex flex-row">Frontend Dev [<span class="inline-flex xl:text-[11px] justify-center items-center">>></span>] Backend Dev / Graphic Designer / Writing</p>
  <p class="">16 November 2005 — My first commit, the day I became me</p>
  <div class="flex flex-row w-full h-7">
  <p class="w-1/2"> If okay... mail me, maybe? 💌 :  </p>
      <!-- 邮箱容器 -->
      <div class="relative w-1/2 px-0.5">
        <!-- 动画效果容器 -->
        <div 
        class="
        transition-all duration-600 ease-in-out
        absolute w-full h-full group
        ">
          <!-- 邮箱 -->
          <a 
          href="mailto:KIPPUDESU@OUTLOOK.COM?subject=Hello%20Kippu" 
          target="_blank"
          class="
          absolute right-0.5 z-20
          hover:text-gray-400"
          :class="ChengeStore.PlaneOrSolid?
          'text-gray-500' : 'text-blue-400' "
          >
          KIPPUDESU@OUTLOOK.COM</a>
          <!-- 下划线 -->
          <div class="
          transition-all duration-600 ease-in-out
          absolute bottom-1 h-0.5 w-full rounded-4xl
          left-0 right-auto bg-gray-400
          group-hover:w-0 group-hover:left-auto group-hover:right-0" 
          ></div>
        </div>
      </div>
    </div>
  </div>
  <!-- 圆点 -->
  <div 
  class="relative flex flex-col 
  transition-all duration-600 ease-in-out"
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
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
// 全局
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

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