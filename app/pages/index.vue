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
    <div class="relative w-full h-full py-5 px-5">
      <!-- 为线条边框容器设定大小 -->
      <div class="relative flex flex-col w-full h-full py-[20px] px-[20px]">
        <!-- 放边框线条的地方，用 absolute -->
        <div class="absolute flex flex-col inset-0">
          <!-- 顶边框 -->
          <div class="flex flex-row w-full h-[20px]">
            <!-- 左上角 -->
            <div 
            class="
            transition-all duration-600 ease-in-out
            w-[22px] h-[22px] -translate-x-[1.5px] -translate-y-[1.5px]
            border-t-[3.5px] border-l-[3.5px] border-black/20"
            :class="ChengeStore.PlaneOrSolid?
            'rounded-tl-none' : 'rounded-tl-xl'">
            </div>
            <!-- 顶横 -->
            <div class="w-full h-[3px] mx-6 -translate-y-[1.5px] bg-black/20"></div>
            <!-- 右上圆 -->
            <!-- 容器 -->
            <div class="relative w-[22px] h-[22px]">
              <div class="absolute right-0 top-0 w-4 h-4 bg-black/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <!-- 左右边框 -->
          <div class="flex flex-1 flex-row justify-between">
            <!-- 左边竖线 -->
            <div class="flex flex-col w-[3px] inset-y-0 pt-6 gap-6">
              <div class="flex w-[3px] h-full -translate-x-[1.5px] bg-black/20 rounded-b-2xl"></div>
              <div class="w-2 h-2 -translate-x-1 -translate-y-2 bg-black/20 rounded-full"></div>
            </div>
            <!-- 右边 -->
            <div class="flex flex-col w-[3px] inset-y-0 pt-6 gap-6">
              <div class="flex w-[3px] h-full translate-x-[1.5px] bg-black/20 rounded-b-2xl"></div>
              <div class="w-2 h-2 -translate-y-2 bg-black/20 rounded-full"></div>
            </div>      
          </div>
        </div>
          <!-- 中间 display -->
          <div class="relative flex justify-center w-full h-full">
            <!-- 三层背景容器 -->
            <div 
            class="
            transition-all duration-600 ease-in-out
            absolute flex-row z-10 w-full h-316
            justify-center items-center 
            bg-pink-100 rounded-t-xl
            flex"
            :class="ChengeStore.PlaneOrSolid?
            'shadow-none' : 'shadow-lg'"
            >
              <div 
              class="
              transition-all duration-600 ease-in-out
              relative flex flex-row w-full z-20 justify-center items-center 
              bg-gray-50 rounded-t-xl
              "
              :class="ChengeStore.PlaneOrSolid?
              'h-316' :
              'h-308' "
              >
                <div 
                class="
                transition-all duration-600 ease-in-out
                flex relative z-20 w-full overflow-hidden"
                :class="ChengeStore.PlaneOrSolid?
                'h-316 bg-gray-100 rounded-t-none' :
                'h-300 bg-white rounded-t-xl' "
                >
                  <component :is="compMap[defaultComp]" />
                </div>
              </div>
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