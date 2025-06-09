<template>
    <div class="
    flex flex-col items-center mx-6 my-2 z-50 w-60 h-68 bg-white
    transition-all duration-600 ease-in-out
    "
    :class="PlaneOrSolid ? '' : ' shadow-lg shadow-black/30'"
    >
        <div class="flex m-4 justify-center items-center w-52 h-38 overflow-hidden">
            <img 
            class=" transition-all duration-600 ease-in-out overflow-hidden" 
            :class="PlaneOrSolid ? '' : 'rounded-lg'"
            src="../img/egudown.png" alt="">
        </div>
        <div class="
        w-54 h-18 px-2 py-1 
        transition-all duration-600 ease-in-out"
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