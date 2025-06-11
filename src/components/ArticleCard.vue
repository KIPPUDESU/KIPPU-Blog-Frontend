<template>
    <div 
    v-for="(card, index) in cards"
    :key="index"
    class="
    flex flex-col items-center mx-6 my-2 z-50 w-60 h-68 bg-white
    transition-all duration-600 ease-in-out
    "
    :class="PlaneOrSolid ? '' : ' shadow-lg shadow-black/30'"
    >
        <div class="flex m-4 justify-center items-center w-52 h-38 overflow-hidden">
            <img 
            class=" transition-all duration-600 ease-in-out overflow-hidden" 
            :class="PlaneOrSolid ? '' : 'rounded-lg'"
            :src="card.CardImg" alt="">
        </div>
        <div class="
        w-54 h-18 px-2 py-1 
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