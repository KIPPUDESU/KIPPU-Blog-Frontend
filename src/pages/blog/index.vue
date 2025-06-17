<script setup lang="ts">
// 异步加载文章
const { data: home } = await useAsyncData(() => queryCollection('content').path('/blog/first0').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
<div class="bg-gradient-to-tr from-blue-200/50 to-white/80 w-full h-max flex relative justify-center">
  <div 
  class="
  flex mt-25 mx-40 my-10 text-[30px]
  px-16 pt-14 py-16
  rounded-lg
  bg-gradient-to-tr from-white/80 to-white/50 backdrop-blur-xs">
    <ContentRenderer v-if="home" :value="home" />
    <!-- <div v-else>Home not found</div> -->
  </div>
</div>
</template>
