<template>
<div class="page-container">
  <!-- 全页面容器 -->
  <div class="relative">
    <!-- 首页 Banner 容器 -->
    <HomeBanner />
  </div>

  <!-- 这里做分隔行 -->

  <!-- 分页 -->
  <div 
  class="flex relative justify-center items-center bg-gray-100 w-full h-440">
    <!-- 左侧信息容器 -->
    <LeftInfoPanel @change-class="onChangeClass" />
    <!-- 文章预览卡片 -->
    <div class="">
      <!-- 左侧分页标题 -->
      <div 
      class="
      absolute flex flex-col top-8 left-72 w-4 h-324
      justify-between items-center py-6">
          <div 
          class="
          w-[3px] h-1/18 z-20 mb-2 bg-black/20 rounded-2xl hidden sm:block"></div>
            <span class="sm:flex flex-col text-black/20 text-[20px] hidden">{{ titleMap[defaultComp] }}</span>
          <div class="w-[3px] h-full z-20 mt-4 bg-black/20 rounded-2xl hidden sm:block"></div>
        <div class="w-2 h-2 mt-4 bg-black/20 rounded-full hidden sm:block"></div>
      </div>
      <!-- 边角 -->
      <div>
        <div 
        class="
        transition-all duration-600 ease-in-out
        absolute w-[22px] h-[22px] top-5 left-[294.5px]
        border-t-[3.5px] border-l-[3.5px] border-black/20 
        hidden sm:block"
        :class="ChengeStore.PlaneOrSolid?
        'rounded-tl-none' : 'rounded-tl-xl'">
        </div>
      </div>
      <!-- 右侧包围线条 -->
      <div>
        <div
        class="
        absolute w-284 h-[3px] bg-black/20 rounded-xl
        right-12 top-5 hidden sm:block
        "></div>
        <div 
        class="
        absolute w-4 h-4 bg-black/20 rounded-full
        right-4 top-4 hidden sm:block
        "></div>
        <div
        class="
        absolute w-[3px] h-308 bg-black/20 rounded-xl
        right-5 top-12 hidden sm:block
        "></div>
        <div 
        class="
        w-2 h-2 absolute bg-black/20 rounded-full
        right-4.5 top-324.5 hidden sm:block
        "></div>
      </div>
      <!-- 三层背景容器 -->
      <div 
      class="
      transition-all duration-600 ease-in-out
      flex-row absolute z-10 top-10 left-0 lg:left-80 w-full lg:w-288 h-316
      justify-center items-center shadow-lg
      bg-gradient-to-bl from-pink-200/50 to-pink-100/50 rounded-t-xl
      flex"
      :class="ChengeStore.PlaneOrSolid?
      'shadow-black/0' : 'shadow-black/20'"
      >
        <div 
        class="
        transition-all duration-600 ease-in-out
        flex-row absolute z-20 left-0
        justify-center items-center shadow-lg backdrop-blur-sm
        bg-gradient-to-bl from-gray-50/60 to-white/95 rounded-t-xl
        flex"
        :class="ChengeStore.PlaneOrSolid?
        'w-full lg:w-288 top-0 h-316 shadow-black/0' :
        'w-full lg:w-284 top-4 h-308 shadow-black/20' "
        >
          <div 
          class="
          transition-all duration-600 ease-in-out
          flex absolute overflow-y-auto z-20 left-0
          shadow-lg rounded-t-xl"
          :class="ChengeStore.PlaneOrSolid?
          'w-288 top-0 h-316 shadow-black/0 bg-gray-100' :
          'w-full  lg:w-280 top-4 h-300 shadow-black/20 bg-white' "
          >
            <component :is="compMap[defaultComp]" />
          </div>
        </div>
      </div>
    </div>

    <!-- 下层容器 -->
    <LowerPane />
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, shallowRef, type Component } from 'vue'
// 全局状态管理
import { useTestStore } from '#imports'

// Nuxt 的自动组件导入只对模板中的组件标签有效
// 手动导入所有需要在 <script> 中使用的组件用作映射
import ArticlesList from '~/components/views/ArticlesList.vue'
import CategoryList from '~/components/views/CategoryList.vue'
import Playlists from '~/components/views/Playlists.vue'
import Videos from '~/components/views/Videos.vue'
import TechShares from '~/components/views/TechShares.vue'
import RelatedToMe from '~/components/views/RelatedToMe.vue'

// 把useTestStore存入ChengeStore
const ChengeStore = useTestStore()

// 写一个映射,Vue 3 中，Component 通常是指 Vue 组件的类型
// 记录表（Record）
const compMap: Record<string, Component> = {
  ArticlesList: ArticlesList,
  CategoryList: CategoryList,
  Playlists: Playlists,
  Videos: Videos,
  TechShares: TechShares,
  RelatedToMe: RelatedToMe,
}

const titleMap: Record<string, string> = {
  ArticlesList: '記事一覧',
  CategoryList: '分類わけ',
  Playlists: '音楽選び',
  Videos: '映像選び',
  TechShares: '技術共有',
  RelatedToMe: '私と関連',
}

const defaultComp = ref<string>('ArticlesList')

function onChangeClass(compName: string) {
  if (compName in compMap) {
    defaultComp.value = compName
  }
  else {
    console.warn(`[onChangeClass] Unknown component: "${compName}" Wt F**K did u just pass in?`)
  }
}
</script>

<style scoped>

</style>