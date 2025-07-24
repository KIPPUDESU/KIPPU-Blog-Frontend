<template>
  <div class="w-38/40 h-58/60">
    <div class="flex flex-wrap justify-center w-full aspect-square">
      <div
      v-for="(item, idx) in classify"
      :key="idx"
      class="flex relative justify-center items-center w-80 h-80 m-4 
      rounded-lg bg-pink-400 
      overflow-hidden">
        <span class="absolute">{{ item.name }}</span>
        <img class="object-cover w-full h-full" :src="item.src" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const classify = ref([
  { name: '技术', src: 'classIMG/1.jpg'},
  { name: '笔记', src: 'classIMG/2.png'},
  { name: '动画', src: 'classIMG/3.png'},
  { name: '随笔', src: 'classIMG/4.png'},
  { name: '分享', src: 'classIMG/5.jpg'},
  { name: '项目', src: 'classIMG/6.jpg'},
  { name: '面试', src: 'classIMG/7.jpg'},
  { name: '见闻', src: 'classIMG/8.png'},
  { name: '杂文', src: 'classIMG/9.jpg'},
])
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
