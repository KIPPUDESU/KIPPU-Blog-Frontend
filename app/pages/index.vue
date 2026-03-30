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
    <div class="relative w-full h-full py-5 px-5 bg-red-500">
      <!-- 为线条边框容器设定大小 -->
      <div class="relative flex flex-col w-full h-full py-[22px] px-[19px] bg-green-400">
        <!-- 放边框线条的地方，用 absolute -->
        <div class=" absolute flex inset-0 bg-white"></div>
          <!-- 中间 display -->
          <div class="relative flex justify-center w-full h-full bg-blue-500">
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