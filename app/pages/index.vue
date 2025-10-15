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
  class="flex relative bg-gray-100 w-full xl:h-340 2xl:h-680">
    <!-- 左侧信息容器 -->
    <LeftInfoPanel @change-class="onChangeClass" />
    <!-- 文章预览卡片 -->
    <div class="w-full h-full xl:py-5 2xl:py-10 xl:px-5 2xl:px-10">
      <div class="relative flex flex-col w-full h-full">
        <!-- 封顶 -->
        <div class="flex flex-row">
            <!-- 边角 -->
            <div 
              class="
              transition-all duration-600 ease-in-out
              xl:w-[22px] 2xl:w-[44px] xl:h-[22px] 2xl:h-[44px] -translate-x-[1.5px] -translate-y-[1.5px]
              xl:border-t-[3.5px] 2xl:border-t-[7px] xl:border-l-[3.5px] 2xl:border-l-[7px] border-black/20
              hidden sm:block"
              :class="ChengeStore.PlaneOrSolid?
              'rounded-tl-none' : 'rounded-tl-xl'">
            </div>
            <!-- 横线 -->
            <div class="w-full xl:h-[3px] 2xl:h-[6px] xl:mx-6 2xl:mx-12 -translate-y-[1.5px] bg-black/20"></div>
            <!-- 圆球 -->
            <div class="xl:w-4 2xl:w-8 xl:h-4 2xl:h-8 bg-black/20 rounded-full xl:translate-x-1.5 2xl:translate-x-2.5 xl:-translate-y-1.5 2xl:-translate-y-2.5"></div>
        </div>
        <!-- 页面 -->
        <div class="relative flex flex-row w-full h-full">
          <!-- 左侧分页标题 -->
          <div 
            class="
            flex flex-col xl:w-[3px] 2xl:w-[6px] h-full -translate-x-[1.5px]
            justify-between items-center xl:py-6 2xl:py-12">
              <div 
                class="
                xl:w-[3px] 2xl:w-[6px] h-1/18 z-20 xl:mb-2 2xl:mb-4 bg-black/20 rounded-2xl hidden sm:block"></div>
                <span class="sm:flex flex-col text-black/20 xl:text-[20px] 2xl:text-[40px] hidden">{{ titleMap[defaultComp] }}</span>
              <div class="w-[3px] h-full z-20 xl:mt-4 2xl:mt-8 bg-black/20 rounded-2xl hidden sm:block"></div>
            <div class="xl:w-2 2xl:w-4 xl:h-2 2xl:h-4 xl:mt-4 2xl:mt-8 bg-black/20 rounded-full hidden sm:block"></div>
          </div>
          <!-- 中间 display -->
          <div class="flex justify-center w-full h-full">
            <!-- 三层背景容器 -->
            <div 
            class="
            transition-all duration-600 ease-in-out
            flex-row z-10 xl:mx-4 2xl:mx-8 w-full xl:h-316 2xl:h-632
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
              'xl:h-316 2xl:h-632' :
              'xl:h-308 2xl:h-616' "
              >
                <div 
                class="
                transition-all duration-600 ease-in-out
                flex relative overflow-y-auto z-20 w-full rounded-t-xl"
                :class="ChengeStore.PlaneOrSolid?
                'xl:h-316 2xl:h-632 bg-gray-100' :
                'xl:h-300 2xl:h-600 bg-white' "
                >
                  <component :is="compMap[defaultComp]" />
                </div>
              </div>
            </div>
          </div>
          <!-- 右侧线条 -->
          <div class="flex flex-col xl:w-[3px] 2xl:w-[6px] h-full translate-x-[1.5px] justify-center items-center xl:py-6 2xl:py-12">
            <div class="xl:w-[3px] 2xl:w-[6px] h-full bg-black/20 rounded-2xl hidden sm:block"></div>
            <div class="xl:w-2 2xl:w-4 xl:h-2 2xl:h-4 xl:mt-4 2xl:mt-8 bg-black/20 rounded-full hidden sm:block"></div>
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