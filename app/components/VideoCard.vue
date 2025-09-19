<template>
    <div 
    class="
    transition-all duration-500 ease-in-out
    flex relative items-center w-full h-32 mt-0
    hover:scale-101 cursor-pointer overflow-hidden
    shadow-lg hover:shadow-xl bg-white/80"
     :class="ChengeStore.PlaneOrSolid ? 
     'rounded-none shadow-black/0' : 'rounded-lg shadow-black/20' ">
        <!-- 封面图片 -->
        <div class="flex w-5/14 h-full overflow-hidden">
          <img
          :src="video.coverUrl || '/img/egusleep.png'"
          alt="Video cover"
          class="object-cover scale-110"
          referrerpolicy="no-referrer"
          />
        </div>
   
        <!-- 视频信息 -->
        <div class="flex flex-1 flex-col w-full h-full p-4 mb-4 justify-center">
          <h2 
          class="text-lg font-semibold text-gray-800">
            {{ video.title }}
          </h2>
          <a 
          :href="video.url"
          target="_blank"
          rel="noopener noreferrer"
          class="absolute w-full h-full">
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
  coverUrl?: string;
  url?: string;
}

const props = defineProps<{
    video: Video
}>()
</script>
