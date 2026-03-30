<template>
  <!-- banner的右侧文字容器 -->
  <div
    class="absolute right-0 z-20 hidden flex-col rounded-l-xl transition-all duration-600 ease-in-out sm:flex"
    :class="
      ChengeStore.PlaneOrSolid
        ? 'bottom-0 bg-gradient-to-bl h-70 w-146'
        : 'bottom-12 bg-gray-300/10 shadow-black/20 backdrop-blur-sm shadow-lg lg:h-62 lg:w-156'
    "
  >
    <!-- 点击大标题 -->
    <a class="cursor-pointer" @click="ChengeStore.KippuChenge">
      <h1
        ref="glowWrapper"
        class="absolute bg-clip-text bg-black/80 object-cover text-transparent transition-all duration-600 ease-in-out hover:scale-104 font-bold"
        :class="
          ChengeStore.PlaneOrSolid
            ? 'lg:right-18 lg:text-[92px]'
            : 'lg:right-20 lg:text-[94px]'
        "
        @mouseenter="onEnter"
        @mousemove="onMove"
        @mouseleave="onLeave"
      >
        KIPPU
      </h1>
    </a>
    <!-- 小字简介 -->
    <div
      class="absolute flex flex-col items-end gap-2 font-medium text-gray-600/90 transition-all duration-600 ease-in-out xl:text-[16px] 2xl:text-[32px] lg:text-[14px]"
      :class="
        ChengeStore.PlaneOrSolid
          ? 'lg:right-18 lg:top-30'
          : 'lg:right-20 lg:top-32'
      "
    >
      <!-- <p class="flex flex-row">
        Frontend Dev [
        <span class="inline-flex items-center justify-center lg:text-[11px]"
          >> >
        </span>
        ] Backend Dev / Graphic Designer / Writing
      </p>
      <p class="">16 November 2005 — My first commit, the day I became me</p> -->
      <div class="flex lg:h-7 w-full flex-row gap-1">
        <!-- <p class="w-max">If okay.. mail me, maybe? 💌 :</p> -->
        <!-- 邮箱容器 -->
        <div class="relative w-max">
          <!-- 动画效果容器 -->
          <div
            class="group flex h-full w-full flex-col transition-all duration-600 ease-in-out"
          >
            <!-- 邮箱 -->
            <!-- <a
              href="mailto:KIPPUDESU@OUTLOOK.COM?subject=Hello%20Kippu"
              target="_blank"
              class="z-20 hover:text-gray-400"
              :class="
                ChengeStore.PlaneOrSolid ? 'text-gray-500' : 'text-blue-400'
              "
            >
              KIPPUDESU@OUTLOOK.COM</a
            > -->
            <!-- 下划线 -->
            <div
              class="lg:h-0.5 w-full rounded-4xl bg-gray-400 transition-all duration-600 ease-in-out ml-0 group-hover:w-0 group-hover:ml-auto"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 圆点 -->
    <div
      class="relative flex flex-col transition-all duration-600 ease-in-out"
      :class="
        ChengeStore.PlaneOrSolid ? 'lg:mt-[126px] lg:ml-6' : 'lg:mt-[134px] lg:ml-12'
      "
    >
      <!-- 1 -->
      <svg
        class="absolute lg:mx-2 transition-all duration-600 ease-in-out"
        :class="
          ChengeStore.PlaneOrSolid
            ? 'w-[0px] h-[0px] top-8'
            : 'lg:w-[12px] lg:h-[12px] top-0'
        "
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#636364" />
      </svg>
      <!-- 2 -->
      <svg
        class="absolute lg:mx-2 transition-all duration-600 ease-in-out"
        :class="ChengeStore.PlaneOrSolid ? 
        'w-[0px] h-[0px] top-8' 
        :'lg:w-[12px] lg:h-[12px] lg:top-8'"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#636364" />
      </svg>
      <!-- 3 -->
      <svg
        class="absolute lg:mx-2 transition-all duration-600 ease-in-out"
        :class="
          ChengeStore.PlaneOrSolid
            ? 'w-[0px] h-[0px] top-8'
            : 'lg:w-[12px] lg:h-[12px] lg:top-16'
        "
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#636364" />
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
const gradient =
  'radial-gradient(circle 350px at var(--x) var(--y), rgba(248, 248, 248, 0.25), transparent 30%)'

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
  const x = ((e.clientX - r.left) / r.width) * 100
  const y = ((e.clientY - r.top) / r.height) * 100
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
