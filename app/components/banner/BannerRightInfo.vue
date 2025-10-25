<template>
  <!-- banner的右侧文字容器 -->
  <div
    class="absolute right-0 z-20 hidden flex-col rounded-l-xl transition-all duration-600 ease-in-out sm:flex"
    :class="
      ChengeStore.PlaneOrSolid
        ? 'bottom-0 bg-gradient-to-bl xl:h-70 2xl:h-140 lg:h-62 xl:w-146 2xl:w-292 lg:w-120'
        : 'bottom-12 bg-gray-300/10 shadow-black/20 backdrop-blur-sm shadow-lg xl:h-62 2xl:h-124 lg:h-54 xl:w-156 2xl:w-300 lg:w-120'
    "
  >
    <!-- 点击大标题 -->
    <a class="cursor-pointer" @click="ChengeStore.KippuChenge">
      <h1
        ref="glowWrapper"
        class="absolute bg-clip-text bg-black/80 object-cover text-transparent transition-all duration-600 ease-in-out hover:scale-104 font-bold"
        :class="
          ChengeStore.PlaneOrSolid
            ? 'xl:right-18 lg:right-12 xl:text-[92px] 2xl:text-[184px] lg:text-[84px]'
            : 'xl:right-20 lg:right-14 xl:text-[94px] 2xl:text-[184px] lg:text-[86px]'
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
          ? 'xl:right-18 lg:right-12 xl:top-30 2xl:top-60 lg:top-28'
          : 'xl:right-20 lg:right-14 xl:top-32 2xl:top-60 lg:top-30'
      "
    >
      <p class="flex flex-row">
        Frontend Dev [
        <span class="inline-flex items-center justify-center xl:text-[11px] 2xl:text-[20px]"
          >> >
        </span>
        ] Backend Dev / Graphic Designer / Writing
      </p>
      <p class="">16 November 2005 — My first commit, the day I became me</p>
      <div class="flex xl:h-7 2xl:h-14 w-full flex-row gap-1">
        <p class="w-max">If okay.. mail me, maybe? 💌 :</p>
        <!-- 邮箱容器 -->
        <div class="relative w-max">
          <!-- 动画效果容器 -->
          <div
            class="group flex h-full w-full flex-col transition-all duration-600 ease-in-out"
          >
            <!-- 邮箱 -->
            <a
              href="mailto:KIPPUDESU@OUTLOOK.COM?subject=Hello%20Kippu"
              target="_blank"
              class="z-20 hover:text-gray-400"
              :class="
                ChengeStore.PlaneOrSolid ? 'text-gray-500' : 'text-blue-400'
              "
            >
              KIPPUDESU@OUTLOOK.COM</a
            >
            <!-- 下划线 -->
            <div
              class="xl:h-0.5 2xl:h-1 w-full rounded-4xl bg-gray-400 transition-all duration-600 ease-in-out ml-0 group-hover:w-0 group-hover:ml-auto"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 圆点 -->
    <div
      class="relative flex flex-col transition-all duration-600 ease-in-out"
      :class="
        ChengeStore.PlaneOrSolid ? 'xl:mt-[126px] 2xl:mt-[222px] xl:ml-6 2xl:ml-12' : 'xl:mt-[134px] 2xl:mt-[254px] xl:ml-12 2xl:ml-44'
      "
    >
      <!-- 1 -->
      <svg
        class="absolute xl:mx-2 2xl:mx-8 transition-all duration-600 ease-in-out"
        :class="
          ChengeStore.PlaneOrSolid
            ? 'w-[0px] h-[0px] top-8'
            : 'xl:w-[12px] 2xl:w-[22px] xl:h-[12px] 2xl:h-[22px] top-0'
        "
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#636364" />
      </svg>
      <!-- 2 -->
      <svg
        class="absolute xl:mx-2 2xl:mx-8 transition-all duration-600 ease-in-out"
        :class="ChengeStore.PlaneOrSolid ? 
        'w-[0px] h-[0px] top-8' 
        :'xl:w-[12px] 2xl:w-[20px] xl:h-[12px] 2xl:h-[20px] xl:top-8 2xl:top-14'"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#636364" />
      </svg>
      <!-- 3 -->
      <svg
        class="absolute xl:mx-2 2xl:mx-8 transition-all duration-600 ease-in-out"
        :class="
          ChengeStore.PlaneOrSolid
            ? 'w-[0px] h-[0px] top-8'
            : 'xl:w-[12px] 2xl:w-[22px] xl:h-[12px] 2xl:h-[22px] xl:top-16 2xl:top-28'
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
