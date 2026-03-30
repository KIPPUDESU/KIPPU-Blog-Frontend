<template>
<NuxtLink :to="card.path" 
class="
transition-all duration-600 ease-in-out
w-58 h-72 object-cover mt-6 hover:scale-104 "
:class="PlaneOrSolid ?
'mx-6 ' : 'mx-4' ">
    <!-- 纯展示组件，只接收 props -->
    <!-- 外壳 -->
    <div 
    class="
    transition-all duration-500 ease-in-out
    flex flex-col items-center w-full h-full ring-2"
    :class="PlaneOrSolid ? 
    'bg-blue-50/0 hover:bg-blue-50 ring-gray-200' :
    'bg-pink-100/0 hover:bg-pink-100/40 ring-pink-200/50 shadow-sm shadow-black/20 hover:shadow-pink-500/80 rounded-lg'">   
        <!-- 图片容器 -->
        <div 
            class="
            transition-all duration-500 ease-in-out group
            flex justify-center items-center overflow-hidden
            w-50 h-36 mx-4 mt-5 object-cover ring-2 ring-gray-200"
            :class="PlaneOrSolid 
            ? 'rounded-none ring-gray-200' 
            : 'rounded-lg ring-pink-200/50'"
            >
            <img 
            class="
            transition-all duration-500 ease-in-out
            w-full scale-105 group-hover:scale-110"
            :src="card.image" 
            alt="文章封面">
        </div>
        <!-- 文字 -->
        <div class="
        flex flex-col relative w-52 h-26 px-2 mt-2 justify-between">
            <h1 class="text-[18px] w-full h-22/40 mt-0 font-bold text-gray-900/90">{{ card.title }}</h1>
            <span class="text-[14px] flex items-center font-bold w-max h-6 text-gray-600/90">{{ card.classify }}</span>
            <p class="text-[12px] text-blue-300">{{ card.date }}</p>
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