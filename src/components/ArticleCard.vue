<template>
    <div class="
    flex flex-col items-center mx-6 my-2 z-50 w-60 h-68 bg-white
    transition-all duration-600 ease-in-out
    "
    :class="PlaneOrSolid ? '' : ' shadow-lg shadow-black/20 rounded-lg'"
    >
        <div class="flex p-4 justify-center items-center w-60">
            <img 
            class="w-52 transition-all duration-600 ease-in-out" 
            :class="PlaneOrSolid ? '' : 'shadow-black/20 shadow-lg rounded-lg'"
            src="../img/hatune.png" alt="">
        </div>
        <div class="
        w-54 h-18 px-2 py-1 
        transition-all duration-600 ease-in-out"
        :class="PlaneOrSolid ? '' : 'bg-gradient-to-l from-white/80 to-gray-100/80 backdrop-blur-2xl shadow-black/20 shadow-lg rounded-lg'"
        >
            <h1 class="text-[18px] font-bold text-gray-900/90">你好我是切符</h1>
            <span class="text-[14px] font-bold text-gray-800/90">日常</span>
            <p class="text-[12px] text-blue-300">2025.06.07</p>
        </div>        
    </div>
</template>

<script setup lang="ts">
const { PlaneOrSolid } = defineProps<Props>()

interface Props {
    PlaneOrSolid: boolean
}
</script>