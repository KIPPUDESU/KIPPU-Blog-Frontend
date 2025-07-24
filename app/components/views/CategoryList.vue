<template>
  <div class="w-38/40 h-58/60">
    <div class="flex flex-wrap justify-center w-full aspect-square">
      <div
      v-for="(item, idx) in classify"
      :key="idx"
      class="
      transition-all duration-500 ease-in-out
      flex relative justify-center items-center w-74 h-74 m-6 
      rounded-lg bg-pink-400 
      hover:scale-110
      overflow-hidden group">
        <!-- 图片 -->
        <img class="object-cover w-full h-full" :src="item.src" alt="">
        <!-- 颜色遮罩 -->
        <div 
        class="
        transition-all duration-500 ease-in-out
        absolute z-10 inset-0 backdrop-blur-[2px] cursor-pointer 
        group-hover:bg-black/20 group-hover:backdrop-blur-none"
        :class="[ item.overlaycolor ]"></div>
        <!-- x 线条 -->
        <div 
        class="
        transition-all duration-500 ease-in-out
        absolute z-20 top-0 left-0 
        transform rotate-45 origin-top-left
        bg-gray-300/20 w-120 h-[4px]
        group-hover:w-0"></div>
        <div 
        class="
        transition-all duration-500 ease-in-out
        absolute z-20 top-0 right-0 
        transform -rotate-45 origin-top-right
        bg-gray-300/20 w-120 h-[4px]
        group-hover:w-0"></div>
        <!-- 文字 -->
        <div 
        class="
        transition-all duration-200 ease-in-outs
        flex flex-col absolute z-20 w-18/20 h-max top-32
        justify-center items-center text-center bg-white/0
        delay-300 group-hover:delay-0 group-hover:top-24
        ">
        <span 
        class="
      text-white text-[26px]
        ">{{ item.name }}</span>
          <p 
          class="
          transition-all duration-400 ease-in-outs
          text-white/0 text-[16px] 
          delay-300 group-hover:delay-0 group-hover:text-gray-100">
          {{ item.pText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const classify = ref([
  { name: '技术', src: 'classIMG/1.jpg', overlaycolor: 'bg-fuchsia-400/50', pText:'Deep dives into code, systems, and ideas worth building.'},
  { name: '笔记', src: 'classIMG/2.png', overlaycolor: 'bg-blue-200/50', pText:'Quick scribbles, lasting knowledge—your brain’s bookmarks.'},
  { name: '动画', src: 'classIMG/3.png', overlaycolor: 'bg-cyan-400/50', pText:'Where sketches breathe and stories come alive on screen.'},
  { name: '随笔', src: 'classIMG/4.png', overlaycolor: 'bg-gray-800/50', pText:'Wandering thoughts stitched into poetic reflections. '},
  { name: '分享', src: 'classIMG/5.jpg', overlaycolor: 'bg-purple-600/50', pText:'Spontaneous pieces from life, ready to pass around. '},
  { name: '项目', src: 'classIMG/6.jpg', overlaycolor: 'bg-red-500/50', pText:'Experiments, journeys, and hands-on ideas in motion. '},
  { name: '面试', src: 'classIMG/7.jpg', overlaycolor: 'bg-gray-100/50', pText:'First impressions, tough questions, and lessons earned. '},
  { name: '见闻', src: 'classIMG/8.png', overlaycolor: 'bg-stone-400/50', pText:'Moments noticed, places seensnapshots of curiosity. '},
  { name: '杂文', src: 'classIMG/9.jpg', overlaycolor: 'bg-pink-300/50', pText:'Thoughts that stray, but somehow still belong.'},
])
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
