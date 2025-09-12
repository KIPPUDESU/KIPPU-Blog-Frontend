<template>
    <NuxtLink :to="share.url" target="_blank" 
    class="
    transition-all duration-500 ease-in-out
    flex relative items-center gap-4 p-4 w-full h-32
    hover:scale-101 cursor-pointer
    shadow-lg hover:shadow-xl"
     :class="ChengeStore.PlaneOrSolid ? 
     'rounded-none shadow-black/0' : 'rounded-lg shadow-black/20' ">
        <!-- 封面图片 -->
        <img
          :src="share.image || '/img/egusleep.png'"
          alt="Share cover"
          class="h-full rounded-lg"
          />
        <!-- 分享信息 -->
        <div class="flex flex-col flex-grow">
          <h2 
          class="text-xl font-semibold text-gray-800">
            {{ share.title }}
          </h2>
          <p 
          class="text-md text-gray-600 mt-1">
            {{ share.description }}
          </p>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

interface Share {
  title: string;
  description: string;
  image?: string;
  url: string;
}

defineProps<{
    share: Share
}>()
</script>
