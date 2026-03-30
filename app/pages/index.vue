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
  class="flex relative bg-gray-100 w-full h-340">
    <!-- 左侧信息容器 -->
    <LeftInfoPanel @change-class="onChangeClass" />
    <!-- 文章预览卡片 -->
    <div class="w-full h-full py-5 px-5">
      <div class="relative flex flex-col w-full h-full bg-blue-500">
        <!-- 封顶 -->
        <div class="flex flex-row bg-red-500">
            <!-- 边角 -->
            <div 
              class="
              transition-all duration-600 ease-in-out
              w-[22px] h-[22px] -translate-x-[1.5px] -translate-y-[1.5px]
              border-t-[3.5px] border-l-[3.5px] border-black/20"
              :class="ChengeStore.PlaneOrSolid?
              'rounded-tl-none' : 'rounded-tl-xl'">
            </div>
            <!-- 横线 -->
            <div class="w-full h-[3px] mx-6 -translate-y-[1.5px] bg-black/20"></div>
            <!-- 圆球 -->
            <div class="w-4 h-4 bg-black/20 rounded-full translate-x-1.5 -translate-y-1.5"></div>
        </div>
        <!-- 页面 -->
        <div class="relative flex flex-row w-full h-full">
          <!-- 左侧分页标题 -->
          <div 
            class="
            flex flex-col w-[3px] h-full -translate-x-[1.5px]
            justify-between items-center py-6">
              <div 
                class="
                w-[3px] h-1/18 z-20 mb-2 bg-black/20 rounded-2xl"></div>
                <!-- <span class="sm:flex flex-col text-black/20 xl:text-[20px] 2xl:text-[40px] hidden">{{ titleMap[defaultComp] }}</span> -->
              <div class="w-[3px] h-full z-20 mt-4 bg-black/20 rounded-2xl"></div>
            <div class="w-2 h-2 mt-4 bg-black/20 rounded-full"></div>
          </div>
          <!-- 中间 display -->
          <div class="flex justify-center w-full h-full">
            <!-- 三层背景容器 -->
            <div 
            class="
            transition-all duration-600 ease-in-out
            flex-row z-10 mx-4 w-full h-316
            justify-center items-center 
            bg-pink-100 rounded-t-xl
            flex"
            :class="ChengeStore.PlaneOrSolid?
            'shadow-none' : 'shadow-lg'"
            >
              <div 
              class="
              transition-all duration-600 ease-in-out
              flex flex-row w-full z-20 justify-center items-center 
              bg-gray-50 rounded-t-xl
              "
              :class="ChengeStore.PlaneOrSolid?
              'h-316' :
              'h-308' "
              >
                <div 
                class="
                transition-all duration-600 ease-in-out
                flex relative z-20 w-full rounded-t-xl"
                :class="ChengeStore.PlaneOrSolid?
                'h-316 bg-gray-100' :
                'h-300 bg-white' "
                >
                  <component :is="compMap[defaultComp]" />
                </div>
              </div>
            </div>
          </div>
          <!-- 右侧线条 -->
          <div class="flex flex-col w-[3px] h-full translate-x-[1.5px] justify-center items-center py-6">
            <div class="w-[3px] h-full bg-black/20 rounded-2xl"></div>
            <div class="w-2 h-2 mt-4 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 下层容器 -->
  <div class="flex relative bg-gray-100 w-full h-max">
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