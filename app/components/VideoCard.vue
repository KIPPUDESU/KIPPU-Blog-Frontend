<template>
    <div 
    class="
    transition-all duration-500 ease-in-out
    flex relative items-center gap-4 w-full h-32 mt-0
    hover:scale-101 cursor-pointer overflow-hidden
    shadow-lg hover:shadow-xl bg-white/80"
     :class="ChengeStore.PlaneOrSolid ? 
     'rounded-none shadow-black/0' : 'rounded-lg shadow-black/20' ">
        <!-- 封面图片 -->
        <img
          :src="video.cover || '/img/egusleep.png'"
          alt="Video cover"
          class="h-full"
          />
        <!-- 视频信息 -->
        <div class="flex flex-col flex-grow">
          <h2 
          class="text-lg font-semibold text-gray-800">
            {{ video.title }}
          </h2>
          <p 
          class="text-md text-gray-600 mt-1">
            作者: {{ video.author }}
          </p>
          <a 
          :href="video.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-blue-500 hover:underline mt-1">
            观看视频
          </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

interface Video {
  id: string;
  title: string;
  author: string;
  cover?: string;
  url?: string;
}

const props = defineProps<{
    video: Video
}>()
</script>
