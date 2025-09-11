<template>
  <div 
  class="
  flex flex-col justify-center items-center
  w-full h-full">
    <div 
    class="
    transition-all duration-600 ease-in-out
    grid grid-cols-2 w-full p-8 gap-8 items-start justify-items-start
    h-full lg:h-8/10">
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
    <!-- 分页按钮 -->
      <VideoPaginator
        :PageNum="PageNum"
        @subPage="subPage"
        @addPage="addPage"
      />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTestStore } from '#imports'

const ChengeStore = useTestStore()

const MaxVideoCard = 20
const PageNum = ref(
    (() => {
        const PageNum = (0)
        // 保证分页数始终为合法非负数
        if ( PageNum < 0 ) {
            return 0
        }
        return PageNum
    })()
)

const { data: videos, refresh: refreshVideos } =
await useAsyncData(
    `videos-page-${PageNum.value}`,
    () => queryCollection('videos')
    .limit(MaxVideoCard)
    .skip( PageNum.value * MaxVideoCard )
    .all(),
)

// 检测本页过后是否依旧有视频存在
const { data: haveNextPage, refresh: refreshHaveNextPage } =
await useAsyncData(
    `videos-haveNext-${PageNum.value}`,
    () => queryCollection('blog')
    .order('date', 'DESC')
    .skip( (PageNum.value + 1 ) * MaxVideoCard )
    .limit(1)
    .select('title')
    .all()
)

// 加减方法
function subPage() {
    if ( PageNum.value > 0 ) {
        PageNum.value--
    }
}
function addPage() {
    // 数组长度大于零才启用
    if ( haveNextPage.value && haveNextPage.value.length > 0 ) {
        PageNum.value++
    }
}

watch(PageNum, () => {
    refreshVideos()
})
</script>