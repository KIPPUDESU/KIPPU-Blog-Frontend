<template>
  <div class="p-4 sm:p-6 md:p-8 w-full h-full">
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
    // songColors.value = {}
})

</script>