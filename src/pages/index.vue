<template>
<!-- 全页面容器 -->
<div class="relative">
  <!-- 首页 Banner 容器 -->
   <HomeBanner />
</div>

<!-- 这里做分隔行 -->

<!-- 分页 -->
<div class="flex relative justify-center items-center bg-gray-100 w-full h-274">
<!-- 左侧信息容器 -->
<LeftInfoPanel />
<!-- 文章预览卡片 -->
<div class="">
  <!-- 左侧分页标题 -->
  <div 
  class="
  absolute flex flex-col top-8 left-72 w-4 h-254
  justify-between items-center py-6 ">
    <div class="w-[3px] h-10 z-20 mb-2 bg-black/20 rounded-2xl"></div>
    <span class="text-black/20 text-[20px]">記</span>
    <span class="text-black/20 text-[20px]">事</span>
    <span class="text-black/20 text-[20px]">一</span>
    <span class="text-black/20 text-[20px]">覧</span>
    <div class="w-[3px] h-210 z-20 mt-4 bg-black/20 rounded-2xl"></div>
    <div class="w-2 h-2 mt-4 bg-black/20 rounded-full"></div>
  </div>
  <!-- 边角 -->
  <div>
    <div class="absolute w-[22px] h-[22px] top-5 left-[294.5px] bg-gray-300/0
    border-t-[3.5px] border-l-[3.5px] border-gray-300 rounded-tl-xl"></div>
  </div>
  <!-- 右侧包围线条 -->
  <div>
    <div
    class="
    absolute w-284 h-[3px] bg-gray-300 rounded-xl
    right-12 top-5
    "></div>
    <div 
    class="
    absolute w-4 h-4 bg-gray-300 rounded-full
    right-4 top-4
    "></div>
    <div
    class="
    absolute w-[3px] h-238 bg-gray-300 rounded-xl
    right-5 top-12
    "></div>
    <div 
    class="
    w-2 h-2 absolute bg-black/20 rounded-full
    right-4.5 top-254
    "></div>
  </div>
  <!-- 三层背景容器 -->
  <div 
   class="
   transition-all duration-600 ease-in-out
   flex flex-row absolute z-10 top-10 left-80 w-288 h-256
   justify-center items-center shadow-lg
   bg-gradient-to-bl from-pink-200/50 to-pink-100/50 rounded-t-xl"
   :class="ChengeStore.PlaneOrSolid?
   'shadow-black/0' : 'shadow-black/20'"
   >
    <div 
    class="
    transition-all duration-600 ease-in-out
    flex flex-row absolute z-20 left-0
    justify-center items-center shadow-lg backdrop-blur-sm
    bg-gradient-to-bl from-gray-50/60 to-white/95 rounded-t-xl"
    :class="ChengeStore.PlaneOrSolid?
    'w-288 top-0 h-256 shadow-black/0' :
    'w-284 top-4 h-248 shadow-black/20' "
    >
      <div 
        class="
        transition-all duration-600 ease-in-out
        flex flex-wrap absolute z-20 left-0
        justify-center items-center shadow-lg backdrop-blur-sm
        bg-gradient-to-bl from-gray-50/60 to-white/95 rounded-t-xl"
        :class="ChengeStore.PlaneOrSolid?
        'w-288 top-0 h-256 shadow-black/0' : 'w-280 top-4 h-240 shadow-black/20' "
        >
        <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :card="{
          date: article.date,
          image: article.image || '/img/egudown.png',
          title: article.title,
          classify: article.classify || '未分类', 
        }"
        :PlaneOrSolid="ChengeStore.PlaneOrSolid"
        :to="`/`"
        />
        </div>
    </div>
   </div>
   

</div>
</div>
<!-- 分页按钮 -->
<div 
class="flex h-46 items-center bg-gray-100 ">
  <div 
  class="
  transition-all duration-600 ease-in-out
  px-10 hover:px-6
  flex justify-between items-center w-288 h-46 ml-80"
  >
  <!-- 左 -->
    <div 
    class="flex py-2 px-4 w-66 h-12
    hover:py-2 hover:w-64 hover:h-13
    text-[20px] text-gray-500
    hover:text-[22px] hover:text-gray-600
    bg-gradient-to-br from-pink-300/60 to-white
    hover:from-pink-300/70 hover:to-white
    transition-all duration-500 ease-in-out
    justify-center items-center font-bold"
    :class="ChengeStore.PlaneOrSolid?
    'shadow-black/20 shadow-none hover:shadow-black/20 hover:shadow-md rounded-none' : 
    'shadow-black/20 shadow-md hover:shadow-black/30 hover:shadow-lg rounded-lg'"
    >
    <!-- :to="`/?page=${pageNum - 1}`" -->
    <NuxtLink to="/" class="flex flex-nowrap items-center gap-3"
    >
      <!-- ← ← ← -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <g transform="scale(-1,1) translate(-16,0)">
            <polyline 
              points="4,2 12,8 4,14" 
              fill="none" 
              stroke="gray" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"/>
          </g>
        </svg>
      Older Posts</NuxtLink>
    </div>
    <!-- 占位分隔图片 -->
    <div class="flex justify-center w-200 h-40 bg-red-400/0">
      <img
      class="h-40"
      src="../public/img/egutenshi.png" alt="">
    </div>
    <!-- 右 -->
    <div 
    class="flex py-2 px-4 w-66 h-12
    hover:py-2 hover:w-64 hover:h-13
    text-[20px] text-gray-500
    hover:text-[22px] hover:text-gray-600
    bg-gradient-to-br from-pink-300/60 to-white
    hover:from-pink-300/70 hover:to-white
    transition-all duration-500 ease-in-out
    justify-center items-center font-bold"
    :class="ChengeStore.PlaneOrSolid?
    'shadow-black/20 shadow-none hover:shadow-black/20 hover:shadow-md rounded-none' : 
    'shadow-black/20 shadow-md hover:shadow-black/30 hover:shadow-lg rounded-lg'"
    >
    <!-- :to="`/?page=${pageNum + 1}`" -->
    <NuxtLink to="/" class="flex flex-nowrap items-center gap-3"
    >Newer Posts 
      <!-- → → → -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <polyline 
              points="4,2 12,8 4,14" 
              fill="none" 
              stroke="gray" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"/>
        </svg>
    </NuxtLink>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 全局状态管理
import { useTestStore } from '#imports'

// 把useTestStore存入ChengeStore
const ChengeStore = useTestStore()

// vue 响应
// import { computed } from 'vue'
// import { queryContent } from '@nuxt/content'

// 卡片渲染数据获取(异步)
// const { data: articles } = await useAsyncData('article', () => queryContent('blog').find())
// 以上编写中，最新的 Nuxt Content v3 已经不再提供 queryContent() 
// 改用基于「集合（collection）」的新 API：
const { data: articles } = await useAsyncData('article', () => 
queryCollection('blog').all()
)
</script>