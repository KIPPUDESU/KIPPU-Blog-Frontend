<template>
    <!-- 纯展示组件，只接收 props -->
    <!-- v-for="(card, index) in cards"
    :key="index" -->
    <!-- 外壳 -->
    <div 
    class="
    flex flex-col items-center my-4 z-50 w-58 h-66
    bg-gradient-to-bl 
    transition-all duration-600 ease-in-out
    hover:my-2 hover:py-2 hover:w-62 hover:h-72
    hover:bg-gradient-to-bl backdrop-blur-2xl
    mx-4
    "
    :class="PlaneOrSolid ? 
    'from-gray-50 to-gray-100/80 hover:from-blue-100/70 hover:to-blue-100/70' :
    'shadow-lg shadow-black/40 hover:shadow-pink-500/50 rounded-lg from-pink-200/30 to-white/30 hover:from-blue-100/60 hover:to-white/60 ring-4 ring-pink-200/50'"
    >   
        <!-- 图片容器 -->
        <div 
            class="flex justify-center items-center overflow-hidden
            transition-all duration-600 ease-in-out
            hover:mx-2 hover:mt-4 hover:w-54 hover:h-40 
            hover:shadow-lg hover:shadow-black/20 hover:rounded-none
            "
            :class="PlaneOrSolid ? 'w-49 h-35 mx-5 mt-7' : 'rounded-lg w-50 h-36  mx-4 mt-6'"
            >
            <img 
            class=" transition-all duration-600 ease-in-out overflow-hidden" 
            :src="card.image" alt="图片" loading="lazy">
        </div>
        <!-- 文字 -->
        <div class="
        w-52 h-16 px-2 mt-3
        transition-all duration-600 ease-in-out"
        >
            <h1 class="text-[18px] font-bold text-gray-900/90">{{ card.title }}</h1>
            <span class="text-[14px] font-bold text-gray-800/90">{{ card.classify }}</span>
            <p class="text-[12px] text-blue-300">{{ card.date }}</p>
        </div>        
    </div>
</template>

<script setup lang="ts">
// 定义接口
interface Card {
    title: string
    date: string
    image: string
    classify: string
}

// 接收被父组件从 content 结构的数据
const props = defineProps<{
    // 自定义接口
    card: Card
    to: string
    PlaneOrSolid: boolean
}>()
</script>