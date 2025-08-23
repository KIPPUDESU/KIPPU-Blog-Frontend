<template>
  <div 
  class="
  p-4 sm:p-6 md:p-8 w-full h-full 
  overflow-y-scroll scrollbar-hide">
    <!-- 渐变遮罩 -->
    <div class="flex flex-col absolute justify-between top-0 left-0 z-50 w-full h-full pointer-events-none">
      <!-- 上 -->
      <div 
      class="w-full h-10"
      :class="
      ChengeStore.PlaneOrSolid
      ? 'bg-gradient-to-b from-gray-100 via-gray-100/30 to-gary-100/0' 
      : 'bg-gradient-to-b from-white via-white/20 to-white/0' "
      >
      </div>
      <!-- 下 -->
      <div 
      class="
      transition-all duration-400
      flex justify-center items-end 
      w-full h-48  
      bg-gradient-to-t pointer-events-auto group cursor-pointer
      from-gray-100 via-gray-100/95 to-gary-100/0 
      hover:from-gray-200 hover:via-gray-200/95 hover:to-gary-200/0"
      >
        <!-- 箭头 -->
        <svg 
        class="w-18 text-gray-400 mb-3 group-hover:mb-5 transition-all duration-400"
        viewBox="0 0 24 22" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_38_11)">
            <path 
            d="M-8 13L12 2L32 13" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round"/>
          </g>
          <defs>
            <filter id="filter0_d_38_11" x="-13.0002" y="0.858729" width="50.0004" height="21.1415" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_11"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_11" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <!-- 歌单列表 -->
      <SongCard 
      v-for="song in songs"
      :key="song.id" 
      :song="song" />
      <div 
      v-if="!songs || songs.length === 0" 
      class="text-center text-gray-500 mt-8">
        <p>未能找到任何歌曲...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
// 全局状态管理
import { useTestStore } from '#imports'

// 把useTestStore存入ChengeStore
const ChengeStore = useTestStore()

const MaxSongCard = 20
const PageNum = ref(0)

const { data: songs, refresh: refreshSongs } =
await useAsyncData(
    `songs-page-${PageNum.value}`,
    () => queryCollection('songs')
    // .order('id', 'DESC')
    .limit(MaxSongCard)
    .skip( PageNum.value * MaxSongCard )
    .all(),
)

watch(PageNum, () => {
    refreshSongs()
    // songColors.value = {}
})

</script>