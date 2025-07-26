<template>
  <div class="p-4 sm:p-6 md:p-8 w-full h-full overflow-y-auto">
    <h1 class="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">歌单推荐</h1>
    <div class="flex flex-col gap-6">
      <!-- 
        这是一个纵向排列的歌单列表.
        你可以将下面的 'div' 块提取为一个独立的 `SongCard.vue` 组件进行样式化.
      -->
      <div
        v-for="song in songs"
        :key="song.id"
        class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
      >
        <!-- 封面图片 -->
        <img
          :src="song.image || '/img/egusleep.png'"
          alt="Song cover"
          class="w-24 h-24 object-cover rounded-md flex-shrink-0"
        />
        <!-- 歌曲信息 -->
        <div class="flex flex-col flex-grow">
          <h2 class="text-xl font-semibold text-gray-900">{{ song.title }}</h2>
          <p class="text-md text-gray-600 mt-1">歌手: {{ song.vocalist }}</p>
           <p v-if="song.classify" class="text-sm text-gray-500 mt-1">分类: {{ song.classify }}</p>
        </div>
      </div>

      <!-- 如果没有歌曲数据，显示提示信息 -->
      <div v-if="!songs || songs.length === 0" class="text-center text-gray-500 mt-8">
        <p>未能找到任何歌曲，请检查 `songs` 目录是否包含有效的 `.md` 文件。</p>
        <p>确保文件 front-matter 包含 `title` 和 `vocalist` 字段。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 使用 useAsyncData 从 'songs' 集合中获取数据
// queryContent() 会自动寻找名为 'songs' 的集合

const MaxSongCard = 12

const PageNum = ref(
    (() => {
        const PageNum = (0)
        // 保证分页数始终为合法非负数
        if ( PageNum < 0 ) {
            return 0
        }
        return PageNum
    })()
)

const { data: songs, refresh: refreshSongs } =
await useAsyncData(
    `songs-page-${PageNum.value}`,
    () => queryCollection('songs')
    // sql风格
    .limit(MaxSongCard)
    .skip( PageNum.value * MaxSongCard )
    .all()
)
</script>