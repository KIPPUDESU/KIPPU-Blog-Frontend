<template>
  <div class="p-4 sm:p-6 md:p-8 w-full h-full overflow-y-auto">
    <div class="flex flex-col gap-6">
      <!-- 歌单列表 -->
      <div
        v-for="song in songs"
        :key="song.id" 
        class="
        transition-all duration-300 ease-in-out
        flex items-center gap-4 p-4 
        rounded-lg shadow-lg shadow-black/20 hover:shadow-xl"
         :style="{ background: getGradientBackground(song.id) }"> <!-- 严格使用 song.id -->
        <!-- 封面图片 -->
        <img
          :src="song.image || '/img/egusleep.png'"
          alt="Song cover"
          class="w-24 h-24 object-cover rounded-md flex-shrink-0 border-2 border-white/50"
          @load="fetchDominantColor($event, song)"
          />
        <!-- 歌曲信息 -->
        <div class="flex flex-col flex-grow">
          <h2 
          class="text-xl font-semibold text-gray-800">
            {{ song.title }}
          </h2>
          <p 
          class="text-md text-gray-600 mt-1">
            歌手: {{ song.vocalist }}
          </p>
          <p 
          v-if="song.classify" 
          class="text-sm text-gray-400 mt-1">
            地区: {{ song.classify }}
          </p>
        </div>
      </div>

      <div v-if="!songs || songs.length === 0" class="text-center text-gray-500 mt-8">
        <p>未能找到任何歌曲...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const MaxSongCard = 12
const PageNum = ref(0)

const { data: songs, refresh: refreshSongs } =
await useAsyncData(
    `songs-page-${PageNum.value}`,
    () => queryCollection('songs')
    .limit(MaxSongCard)
    .skip( PageNum.value * MaxSongCard )
    .all(),
)

watch(PageNum, () => {
    refreshSongs()
    songColors.value = {}
})

// 使用一个响应式对象来存储每首歌的颜色, 键是 song.id
const songColors = ref<Record<string, string>>({})

// 函数：当图片加载完成时触发，调用 API 获取颜色
async function fetchDominantColor(event: Event, song: any) {
  const imageUrl = (event.target as HTMLImageElement).src
  // 严格使用 song.id
  if (imageUrl && !songColors.value[song.id]) {
    try {
      const response = await $fetch(`/api/get-color?imageUrl=${encodeURIComponent(imageUrl)}`)
      
      if (response && 'color' in response && typeof response.color === 'string') {
        songColors.value[song.id] = response.color
      } else {
        songColors.value[song.id] = '#808080'
      }
    } catch (error) {
      console.error('Failed to fetch dominant color:', error)
      // 严格使用 song.id
      songColors.value[song.id] = '#808080'
    }
  }
}

// 函数：根据歌曲 ID 获取渐变背景样式
function getGradientBackground(songId: string): string {
  const key = songId || 'default'
  const color = songColors.value[key] || '#808080'
  const endColor = adjustColor(color, -60)
  const alpha = 0.85 
  const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0')
  return `linear-gradient(135deg, ${color}${alphaHex}, ${endColor}${alphaHex})`
}

// 辅助函数：微调颜色
function adjustColor(color: string, amount: number): string {
  let usePound = false
  if (color[0] === '#') {
    color = color.slice(1)
    usePound = true
   }
   if(/[^0-9a-f]/i.test(color)) return '#808080';
   const num = parseInt(color, 16)
   if(isNaN(num)) return '#808080';
   let r = (num >> 16) + amount
   if (r > 255) r = 255
   else if (r < 0) r = 0
   let b = ((num >> 8) & 0x00FF) + amount
   if (b > 255) b = 255
   else if (b < 0) b = 0
   let g = (num & 0x0000FF) + amount
   if (g > 255) g = 255
   else if (g < 0) g = 0
   const result = (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0')
   return (usePound ? '#' : '') + result
 }
</script>