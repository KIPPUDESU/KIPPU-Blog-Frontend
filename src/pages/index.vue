<template>
  <div class="relative bg-gray-100">
    <div class="relative mt-0 w-full h-88 bg-gray-300/0">
      <div class="absolute flex flex-col right-0 bottom-0 h-50 w-150 bg-green-300/0">
        <a href="#" @click="KippuChenge">
        <h1 class="absolute right-20 text-[68px] font-bold">KIPPU</h1>
        </a>
        <p class="absolute right-20 top-24 text-gray-600 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
         <p class="absolute right-20 top-30 text-gray-600 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
          <p class="absolute right-20 top-36 text-gray-600 font-bold">这里是很短的简介，也可以很长，我不知道怎么样，就先这样</p>
      </div>
    </div>
    <div class="relative my-4 w-full h-1 px-14">
      <div class="bg-gray-300 h-0.5"></div>
    </div>
    <div class="flex flex-wrap justify-center relative bg-blue-300/0 w-full h-max">
    <ArticleCard 
    :PlaneOrSolid="PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="PlaneOrSolid"
    />
    <ArticleCard 
    :PlaneOrSolid="PlaneOrSolid"
    />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const PlaneOrSolid = ref(false)

function KippuChenge() {
  PlaneOrSolid.value = !PlaneOrSolid.value
}

</script>