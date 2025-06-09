<template>
  <div class="relative bg-gray-300/20">
    <div class="relative mt-0 w-full h-100 bg-gray-300/">
      <div class="relative w-full h-100 overflow-hidden">
      <img 
      class="absolute transition-all duration-600 ease-in-out"
      :class="ChengeStore.PlaneOrSolid?
      'bottom-100' : '-bottom-60'
      "
      src="../img/KIPPUMIG.jpg" alt="">
      </div>
      <div 
      class="
      transition-all duration-600 ease-in-out w-364
      absolute left-1/2 -translate-x-1/2 z-10 h-0.5 bg-gray-300"
      :class="ChengeStore.PlaneOrSolid?
      'top-13' : '-top-13' "
      ></div>
      <div 
      class="transition-all duration-600 ease-in-out
      flex flex-col
      absolute  mx-20 z-10 font-bold text-black/60
      "
      :class="ChengeStore.PlaneOrSolid? 'top-32' : '-top-80' ">
      <h1 class="text-[70px]">ターゲット は</h1>
      <h1 class="text-[80px]">Full Stack Developer</h1>
      </div>
      <div 
      class="transition-all duration-800 ease-in-out
      absolute z-10 flex flex-col right-0
      "
      :class="ChengeStore.PlaneOrSolid?
      'bottom-0 h-66 w-140' : 
      'bottom-10 h-54 w-160 bg-gray-500/10 backdrop-blur-xs shadow-black/20 shadow-lg'
      "
      >
        <a href="#" @click="ChengeStore.KippuChenge">
        <h1 class="absolute right-20 text-[92px] font-bold">KIPPU</h1>
        </a>
        <div>
        <p class="absolute right-20 top-32 text-gray-600 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
         <p class="absolute right-20 top-38 text-gray-600 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
          <p class="absolute right-20 top-44 text-gray-600 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
        </div>
      </div>
    </div>
    <div class="relative my-4 w-full h-1 px-14">
      <!-- 分割线 -->
      <!-- <div class="bg-gray-300 h-0.5"></div> -->
    </div>
    <div class="flex flex-wrap justify-center relative bg-blue-300/ w-full h-max">
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="ChengeStore.PlaneOrSolid"
    />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from '#imports'

const ChengeStore = useTestStore()
</script>