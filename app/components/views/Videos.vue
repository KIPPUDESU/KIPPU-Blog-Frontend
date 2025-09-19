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
        v-for="video in Videos"
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
import { ref, onMounted, computed } from 'vue'
import { useTestStore } from '#imports'

const ChengeStore = useTestStore()

interface Video {
  id: string;
  title: string;
  description: string;
  coverUrl: string | undefined;
  url: string;
}


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

// 视频数据获取
const { data: videos, refresh: refreshVideos } =
await useAsyncData(
    `videos-page-${PageNum.value}`,
    async () => {
        const originalVideos = await queryCollection('videos')
            .limit(MaxVideoCard)
            .skip(PageNum.value * MaxVideoCard)
            .all();

        // 处理查询结果
        if (!originalVideos || originalVideos.length === 0) {
            return [];
        }
        // 得到一个 Promise 数组，交给 Promise.all 并行
        const videoDetails = await Promise.all(
          // 遍历原始视频列表：有 bvid 的发起 $fetch 请求，无 bvid 的返回 null
            originalVideos.map(video => video.bvid ? $fetch(`/api/bilibili/${video.bvid}`) : Promise.resolve(null))
        );

        // 返回最终处理好的数据
        return videoDetails.filter(Boolean);
    },
    // 页面变化重新执行上面的整个 async
    { watch: [PageNum] } 
)

// 过滤掉 null 值并显式说明处理后的数据一定是 Video
const Videos = computed(() => {
  if (!videos.value) return []
  return videos.value.filter((video): video is Video => !!video)
})

// 检测本页过后是否依旧有视频存在
const { data: haveNextPage, refresh: refreshHaveNextPage } =
await useAsyncData(
    `videos-haveNext-${PageNum.value}`,
    () => queryCollection('videos')
    .skip( (PageNum.value + 1 ) * MaxVideoCard )
    .limit(1)
    .select('title')
    .all(),
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

// 页面变化启动启动两个 refresh 重启查询
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
