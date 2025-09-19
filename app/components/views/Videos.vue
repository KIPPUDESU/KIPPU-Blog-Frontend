<template>
  <div 
  class="
  flex flex-col justify-between items-center w-full">
    <Transition :name="isNextPage ? 'fade-left' : 'fade-right'" mode="out-in">
      <div 
      :key="PageNum"
      class="
      transition-all duration-800 ease-in-out
      grid grid-cols-2 w-full p-8 gap-8
      "
      :class="isIre ? 'opacity-100' : 'opacity-0' "
      >
        <!-- 视频列表 -->
        <VideoCard 
        v-for="video in processedVideos"
        :key="video.id" 
        :video="video" />
        <div 
        v-if="!videos || videos.length === 0" 
        class="text-center text-gray-500 mt-8">
          <p>未能找到任何视频...</p>
        </div>
      </div>
    </Transition>
    <!-- 分页按钮 -->
      <VideoPaginator
        :PageNum="PageNum"
        @subPage="subPage"
        @addPage="addPage"
      />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useTestStore } from '#imports'

const ChengeStore = useTestStore()

// 动画
const isNextPage = ref<boolean>(true)
const isIre = ref<boolean>(false)

onMounted(() => {
  setTimeout(() => {
    isIre.value = true
  },50)
})

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

// +++ START OF NEW, NON-INVASIVE LOGIC +++
const processedVideos = ref<any[]>([])

watch(videos, async (newVideos) => {
  if (newVideos && newVideos.length > 0) {
    try {
        const videoDetails = await Promise.all(
          newVideos.map(bvidObj => bvidObj.bvid ? $fetch(`/api/bilibili/${bvidObj.bvid}`) : Promise.resolve(null))
        )
        processedVideos.value = videoDetails.filter(Boolean)
    } catch (error) {
      // Suppress error logging
    }
  } else {
    processedVideos.value = []
  }
}, { immediate: true }) // immediate: true ensures it runs on initial load
// +++ END OF NEW LOGIC +++

// 检测本页过后是否依旧有视频存在
const { data: haveNextPage, refresh: refreshHaveNextPage } =
await useAsyncData(
    `videos-haveNext-${PageNum.value}`,
    () => queryCollection('videos')
    .skip( (PageNum.value + 1 ) * MaxVideoCard )
    .limit(1)
    .select('title')
    .all()
)

// 加减方法
function subPage() {
    if ( PageNum.value > 0 ) {
        PageNum.value--
        isNextPage.value = false
    }
}
function addPage() {
    // 数组长度大于零才启用
    if ( haveNextPage.value && haveNextPage.value.length > 0 ) {
        PageNum.value++
        isNextPage.value = true
    }
}

watch(PageNum, () => {
    refreshVideos()
    refreshHaveNextPage()
})
</script>

<style scoped>
.fade-left-enter-active,
.fade-left-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.fade-left-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.fade-right-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
