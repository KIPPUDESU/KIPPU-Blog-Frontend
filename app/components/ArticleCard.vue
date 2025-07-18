<template>
<NuxtLink :to="card.path">
    <!-- 纯展示组件，只接收 props -->
    <!-- 外壳 -->
    <div 
    class="
    transition-all duration-500 ease-in-out
    flex flex-col items-center 
    ring-4
    object-cover hover:scale-106"
    :class="PlaneOrSolid ? 
    'bg-blue-50 hover:bg-blue-100/30 ring-gray-200 mx-5 w-60 h-72' :
    ' bg-pink-50 hover:bg-pink-100 ring-pink-200/50 shadow-lg shadow-black/40 hover:shadow-pink-500/50 rounded-lg mx-4 w-58 h-70'"
    >   
        <!-- 图片容器 -->
        <div 
            class="
            flex justify-center items-center overflow-hidden
            transition-all duration-500 ease-in-out
            w-50 h-36 mx-4 mt-6
            object-cover hover:scale-104 
            hover:shadow-lg hover:shadow-black/20 hover:rounded-none
            "
            :class="PlaneOrSolid ? 'rounded-none' : 'rounded-lg'"
            >
            <img 
            class="transition-all duration-600 ease-in-out overflow-hidden" 
            :src="card.image" alt="图片">
        </div>
        <!-- 文字 -->
        <div class="
        flex flex-col relative w-52 h-24 px-2 mt-2
        transition-all duration-500 ease-in-out"
        >
            <h1 class="text-[18px] font-bold text-gray-900/90">{{ card.title }}</h1>
            <span class="text-[14px] font-bold text-gray-600/90">{{ card.classify }}</span>
            <p class="absolute bottom-0 text-[12px] text-blue-300">{{ card.date }}</p>
        </div>        
    </div>
</NuxtLink>
</template>

<script setup lang="ts">
// 定义接口
interface Card {
    title: string
    date: string
    image: string
    classify: string
    path: string
}

// 接收被父组件从 content 结构的数据
const props = defineProps<{
    // 自定义接口
    card: Card
    to: string
    PlaneOrSolid: boolean
}>()
</script>