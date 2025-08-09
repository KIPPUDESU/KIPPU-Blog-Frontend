<template>
  <div class="p-4 sm:p-6 md:p-8 w-full h-91/100 
  overflow-y-scroll scrollbar-hide">
    <div class="flex flex-col gap-6">
      <!-- 视频列表 -->
      <VideoCard 
      v-for="video in videos"
      :key="video.id" 
      :video="video" />
      <div 
      v-if="!videos || videos.length === 0" 
      class="text-center text-gray-500 mt-8">
        <p>未能找到任何视频...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const MaxVideoCard = 20
const PageNum = ref(0)

const { data: videos, refresh: refreshVideos } =
await useAsyncData(
    `videos-page-${PageNum.value}`,
    () => queryCollection('videos')
    .limit(MaxVideoCard)
    .skip( PageNum.value * MaxVideoCard )
    .all(),
)

watch(PageNum, () => {
    refreshVideos()
})
</script>