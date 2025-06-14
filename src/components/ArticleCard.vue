<template>
    <div 
    v-for="(card, index) in cards"
    :key="index"
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
            :src="card.CardImg" alt="">
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
import { ref } from 'vue'

interface Card {
    CardImg: string
    title: string
    classify: string
    TimeData: string
}

const cards = ref<Card[]>([
    {
        CardImg: "/img/egudown.png",
        title: "你好我是切符",
        classify: "日常",
        TimeData: "2025.06.11"
    },
    {
        CardImg: "/img/egudown.png",
        title: "你好我是切符",
        classify: "日常",
        TimeData: "2025.06.11"
    },
    {
        CardImg: "/img/egudown.png",
        title: "你好我是切符",
        classify: "日常",
        TimeData: "2025.06.11"
    },
    {
        CardImg: "/img/egudown.png",
        title: "你好我是切符",
        classify: "日常",
        TimeData: "2025.06.11"
    },
    {
        CardImg: "/img/egudown.png",
        title: "你好我是切符",
        classify: "日常",
        TimeData: "2025.06.11"
    },
    {
        CardImg: "/img/egudown.png",
        title: "你好我是切符",
        classify: "日常",
        TimeData: "2025.06.11"
    },
    {
        CardImg: "/img/egudown.png",
        title: "你好我是切符",
        classify: "日常",
        TimeData: "2025.06.11"
    },
    {
        CardImg: "/img/egudown.png",
        title: "你好我是切符",
        classify: "日常",
        TimeData: "2025.06.11"
    },
    {
        CardImg: "/img/egudown.png",
        title: "你好我是切符",
        classify: "日常",
        TimeData: "2025.06.11"
    },
    {
        CardImg: "/img/egudown.png",
        title: "你好我是切符",
        classify: "日常",
        TimeData: "2025.06.11"
    },
])

const { PlaneOrSolid } = defineProps<Props>()

interface Props {
    PlaneOrSolid: boolean
}
</script>