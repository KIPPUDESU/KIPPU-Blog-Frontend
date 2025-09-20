<template>
    <div 
    class="
    transition-all duration-500 ease-in-out
    flex relative items-center w-full h-32 mt-0
    hover:scale-101 cursor-pointer overflow-hidden
    shadow-lg hover:shadow-xl bg-gray-50"
     :class="ChengeStore.PlaneOrSolid ? 
     'rounded-none shadow-black/0' : 'rounded-lg shadow-black/20' "
     @mouseenter="DescriptionOn"
     @mouseleave="MouseLeave"
     @mousemove="DescriptionOn">
        <!-- 封面图片 -->
        <div class="flex w-5/14 h-full overflow-hidden">
          <img
          :src="video.coverUrl || '/img/egusleep.png'"
          alt="Video cover"
          class="object-cover scale-110 z-10"
          referrerpolicy="no-referrer"
          />
        </div>
   
        <!-- 视频信息 -->
        <div class="flex flex-1 flex-col w-full h-full px-4 pt-2">
          <h2 
          class="text-lg font-semibold text-gray-800 z-10">
            {{ video.title }}
          </h2>
          <!-- 点击覆盖链接 -->
          <a 
          :href="video.url"
          target="_blank"
          rel="noopener noreferrer"
          class="absolute inset-0 z-0">
          </a>
        </div>

        <!-- 悬浮简介 (通过 Teleport 移动到 body) -->
        <Teleport to="body">
            <div
                ref="tooltipRef"
                v-if="isDescriptionVisible"
                class="fixed z-50 px-2 pt-1 bg-white rounded-md shadow-lg text-md text-gray-600 line-clamp-8 pointer-events-none max-w-60 break-words transition-opacity duration-800"
                :style="{ top: descriptionY + 'px', left: descriptionX + 'px', opacity: isTooltipReady ? 1 : 0 }"
            >
                {{ video.description }}
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

interface Video {
  id: string;
  title: string;
  description: string;
  coverUrl?: string;
  url?: string;
}

const props = defineProps<{
    video: Video
}>()

// 与标签元素绑定
const tooltipRef = ref<HTMLElement | null>(null)
// 控制简介盒子是否在DOM中
const isDescriptionVisible = ref(false)
// 控制简介盒子是否可见 (用于防止初次渲染闪烁)
const isTooltipReady = ref(false)
// 简介盒子的X坐标
const descriptionX = ref(0)
// 简介盒子的Y坐标
const descriptionY = ref(0)

// 鼠标离开时，隐藏并重置状态
const MouseLeave = () => {
    isDescriptionVisible.value = false;
    isTooltipReady.value = false;
}

// 移步操作，更新简介盒子的位置
const DescriptionOn = async (event: MouseEvent) => {
  // 加载简介盒子
  isDescriptionVisible.value = true;
  // 等待DOM更新
  await nextTick();

  const tooltipEl = tooltipRef.value;
  if (!tooltipEl) return;

  // 窗口大小和盒子大小
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const tooltipWidth = tooltipEl.offsetWidth;
  const tooltipHeight = tooltipEl.offsetHeight;
  const offset = 15; // 鼠标指针与提示框的间距

  // 鼠标在窗口的坐标加鼠标位移
  let newX = event.clientX + offset;
  let newY = event.clientY + offset;

  // 防溢出计算，如果提示框在鼠标右侧会超出屏幕宽度
  if (newX + tooltipWidth > viewportWidth) {
    // 就把它放到鼠标左侧
    newX = event.clientX - tooltipWidth - offset;
  }

  // 如果提示框在鼠标下方会超出屏幕高度
  if (newY + tooltipHeight > viewportHeight) {
    // 就把它放到鼠标上方
    newY = event.clientY - tooltipHeight - offset;
  }

  descriptionX.value = newX;
  descriptionY.value = newY;

  // 位置计算完毕，通过透明度设为可见
  isTooltipReady.value = true;
}
</script>
