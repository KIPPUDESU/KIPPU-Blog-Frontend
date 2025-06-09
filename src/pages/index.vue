<template>
  <div class="relative bg-gray-100/20">
    <div class="relative mt-0 w-full h-92 bg-gray-300/">
      <div class="relative w-full h-92 overflow-hidden">
      <img 
      class="absolute transition-all duration-600 ease-in-out"
      :class="ChengeStore.PlaneOrSolid?
      'bottom-94' : '-bottom-140'
      "
      src="../img/egufukuro.png" alt="">
      </div>
      <div 
      class="transition-all duration-600 ease-in-out"
      :class="ChengeStore.PlaneOrSolid?
      'absolute z-10 flex flex-col right-0 bottom-0 h-50 w-130' : 
      'absolute z-10 flex right-0 bottom-10 h-50 w-150 bg-white/10 backdrop-blur-xs shadow-black/20 shadow-lg'
      "
      >
        <a href="#" @click="ChengeStore.KippuChenge">
        <h1 class="absolute right-20 text-[68px] font-bold">KIPPU</h1>
        </a>
        <div>
        <p class="absolute right-20 top-24 text-gray-600 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
         <p class="absolute right-20 top-30 text-gray-600 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
          <p class="absolute right-20 top-36 text-gray-600 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
        </div>
      </div>
    </div>
    <div class="relative my-4 w-full h-1 px-14">
      <!-- 分割线 -->
      <!-- <div class="bg-gray-300 h-0.5"></div> -->
    </div>
    <div class="flex flex-wrap justify-center relative bg-blue-300/0 w-full h-max">
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