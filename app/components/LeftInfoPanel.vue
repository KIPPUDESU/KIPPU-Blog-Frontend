<template>
  <!-- 左侧信息容器 -->
  <div class="
  w-max h-326 justify-center items-center
  hidden sm:block">
    <!-- 外壳 -->
    <div class="sticky top-0 w-full h-max xl:pb-4 2xl:pb-8 xl:px-[20px] 2xl:px-[30px] flex flex-col items-center">
      <!-- 头像 -->
      <div 
      class="
      transition-all duration-600 ease-in-out
      relative mt-8 flex xl:w-40 2xl:w-68 xl:h-40 2xl:h-68 rounded-full 
      justify-center items-center overflow-hidden 
      shadow-lg xl:ring-4 2xl:ring-8 ring-gray-300 "
      :class="ChengeStore.PlaneOrSolid ?
      'shadow-black/0' : 'shadow-black/20' "
      >
        <img
          class="
          transition-all duration-600 ease-in-out 
          flex absolute w-full h-full object-cover 
          hover:scale-110"
          src="/img/egucool.jpg"
          alt="KIPPUIMG"
        />
      </div>
      <!-- id 简介 -->
      <div class="relative flex flex-col xl:w-50 2xl:w-100 xl:h-18 2xl:h-36 xl:mt-2 2xl:mt-4 justify-center items-center">
        <span class="xl:text-[24px] 2xl:text-[48px] text-gray-800 font-bold">切符</span>
        <p class="xl:text-[16px] 2xl:text-[32px]  text-gray-600/80 font-extrabold">もっと Elegant になりたい</p>
      </div>
      <!-- 联系方式 -->
      <div 
    class="
    relative flex flex-row xl:w-40 2xl:w-80 xl:h-10 2xl:h-20 xl:px-4 2xl:px-8
    justify-between items-center
    ">
      <a 
      class="
      transition-all duration-600 ease-in-out
      xl:w-8 2xl:w-16 xl:h-8 2xl:h-16 text-blue-500/50 hover:text-blue-500/90" 
      href="https://x.com/aKIPPUz" target="_blank">
        <svg 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 512 512" 
        enable-background="new 0 0 512 512" 
        xml:space="preserve"
        class="fill-current">
          <path d="M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5
          C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1c-80.5-4-151.9-42.6-199.6-101.3
          c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.2,63.3,43.2,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95
          c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5
          c-7.8,0-15.5-0.5-23.1-1.4C62.8,432,113.7,448,168.3,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5
          C462.6,146,479,129,492,109.5z">
          </path>
        </svg>
      </a>
      <a 
      class="
      transition-all duration-600 ease-in-out
      xl:w-8 2xl:w-16 xl:h-8 2xl:h-16 text-blue-500/50 hover:text-blue-500/90" 
      href="https://t.me/aKIPPUDESUz" target="_blank">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 480 512"
        class="fill-current">
          <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9l-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9l190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284L16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" fill="currentColor">
          </path>
        </svg>
      </a>
      <a 
      class="
      transition-all duration-600 ease-in-out
      xl:w-8 2xl:w-16 xl:h-8 2xl:h-16 text-blue-500/50 hover:text-blue-600/90" 
      href="https://discord.gg/F22fCZtr" target="_blank1">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 24 24"
        class="fill-current"
        >
          <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64-.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" fill="currentColor">
          </path>
      </svg>
      </a>
    </div>

      <!-- 分类 -->
      <div class="w-full xl:h-96 2xl:h-192 xl:mt-4 2xl:mt-8 xl:px-[20px] 2xl:px-[40px]">
        <div
        class=" 
        relative flex flex-col w-full h-full rounded-2xl">
          <!-- 遮罩 -->
          <div class="
          transition-all duration-600 ease-in-out
          absolute flex z-10 inset-0
          justify-center items-center
          bg-gradient-to-bl from-gray-50 to-white ring-0"
          :class="ChengeStore.PlaneOrSolid ? 
          'rounded-none shadow-none ring-black/0' :
          'rounded-xl shadow-lg ring-gray-300'"
          >
            <!-- 列表项容器 -->
            <div 
            class="
            absolute flex flex-col z-10
            justify-center items-center inset-0 overflow-hidden">
              <div
                v-for="(item, idx) in categories"
                :key="idx"
                @click="onChangeClass(item.compName)"
                class="
                transition-all duration-300 ease-in-out
                flex flex-row flex-1 items-center xl:gap-3 2xl:gap-6 xl:px-6 2xl:px-12 w-full
                object-cover bg-white/0 
                xl:text-[16px] 2xl:text-[32px] text-blue-300 font-bold cursor-pointer
                hover:scale-110 hover:text-blue-400
                hover:bg-blue-300/10
                active:scale-90"
                :class="{
                'text-blue-500 scale-110 bg-white/0 backdrop-blur-none': activeItemName === item.compName,
                'text-blue-300 ': activeItemName === item.compName}"
              >
                <span v-html="item.svg" 
                class="w-3/16"></span>
                <span>{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+SC:wght@100..900&display=swap');

.bebas-neue-regular {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>

<script setup lang="ts">
import { useTestStore, ref } from '#imports'
const ChengeStore = useTestStore()

const emit = defineEmits(['change-class'])

const categories = [
  { label: '文章列表',
    compName: 'ArticlesList', 
    svg: `
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 24 24">
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="currentColor"></path><path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor">
      </path>
    </svg>` },
  { label: '分类列表', 
    compName: 'CategoryList',
    svg: `
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 32 32">
      <path d="M14 4h4v4h-4z" fill="currentColor"></path><path d="M4 4h4v4H4z" fill="currentColor"></path><path d="M24 4h4v4h-4z" fill="currentColor"></path><path d="M14 14h4v4h-4z" fill="currentColor"></path><path d="M4 14h4v4H4z" fill="currentColor"></path><path d="M24 14h4v4h-4z" fill="currentColor"></path><path d="M14 24h4v4h-4z" fill="currentColor"></path><path d="M4 24h4v4H4z" fill="currentColor"></path><path d="M24 24h4v4h-4z" fill="currentColor">
      </path>
    </svg>` },
  { label: '歌单推荐',
    compName: 'Playlists', 
    svg: `
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 24 24">
      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7.5-1a2.5 2.5 0 0 0 2.5-2.5V7h3V5h-4v5.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" fill="currentColor">
      </path>
    </svg>` },
  { label: '视频推荐',
    compName: 'Videos', 
    svg: `
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 24 24">
      <path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" fill="currentColor">
      </path>
    </svg>` },
  { label: '技术分享',
    compName: 'TechShares', 
    svg: `
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 24 24">
      <path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65c0-5.52-4.48-10-10-10z" fill="currentColor">
      </path>
    </svg>` },
  { label: '与我相关',
    compName: 'RelatedToMe', 
    svg: `
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 24 24">
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.22 0 .41.1.55.25c.12.13.2.31.2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5c.14-.15.33-.25.55-.25zM19 19H5V5h14v14zM12 6c-1.65 0-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3s-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-6 6.47V18h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z" fill="currentColor">
      </path>
    </svg>` },
]

function onChangeClass(compName: string) {
  emit('change-class', compName)
  activeItemName.value = compName
}

// 创建一个用来存储当前点击的分类组件名称的变量
const activeItemName = ref('ArticlesList')

// cosnt setActiev = (copName: string) => {
  
// }
</script>
