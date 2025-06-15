<template>
    <!-- 纯展示组件，只接收 props -->
    <!-- v-for="(card, index) in cards"
    :key="index" -->
    <div 
    class="
    flex flex-col items-center mx-6 my-4 z-50 w-60 h-68
    bg-gradient-to-b 
    transition-all duration-600 ease-in-out
    hover:my-2 hover:py-2 hover:w-64 hover:h-74
    hover:bg-gradient-to-b
    "
    :class="PlaneOrSolid ? 
    'from-gray-200/60 to-white/20 hover:from-blue-200/50 hover:to-white/20' : ' shadow-lg shadow-black/40 hover:shadow-black/50 rounded-lg from-gray-100/50 to-white/20 hover:from-blue-100/50 hover:to-white/20'"
    >
        <div 
        class="flex justify-center items-center overflow-hidden
        transition-all duration-600 ease-in-out
        hover:mx-2 hover:mt-4 hover:w-56 hover:h-42 
        hover:shadow-lg hover:shadow-black/20 hover:rounded-none
        "
        :class="PlaneOrSolid ? 'w-51 h-37 mx-5 mt-7' : 'rounded-lg w-52 h-38  mx-4 mt-6'"
        >
            <img 
            class=" transition-all duration-600 ease-in-out overflow-hidden" 
            :src="card.CardImg" alt="图片" loading="lazy">
        </div>
        <div class="
        w-54 h-18 px-2 mt-3
        transition-all duration-600 ease-in-out"
        >
            <h1 class="text-[18px] font-bold text-gray-900/90">{{ card.title }}</h1>
            <span class="text-[14px] font-bold text-gray-800/90">{{ card.classify }}</span>
            <p class="text-[12px] text-blue-300">{{ card.TimeData }}</p>
        </div>        
    </div>
</template>

<script setup lang="ts">
// 定义
interface Card {
    CardImg: string
    title: string
    classify: string
    TimeData: string
}

// 接收被父组件从 content 结构的数据
const props = defineProps<{
    // 自定义接口
    card: Card
    to: string
    PlaneOrSolid: boolean
}>()
</script>