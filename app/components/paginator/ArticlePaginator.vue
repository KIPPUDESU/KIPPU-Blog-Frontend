<template>
<!-- 分页按钮 -->
<div 
class="
relative mb-0 flex justify-center w-full h-10 lg:h-2/10">
    <div 
    class="
    transition-all duration-600 ease-in-out
    absolute mt-0 pb-12 pt-4 px-18 hover:px-16
    flex justify-between items-center w-full h-full"
    >
        <!-- 左 -->
        <div 
        class="
        transition-all duration-500 ease-in-out
        relative flex w-56 h-12
        hover:w-54 hover:h-13">
            <button 
            @click="$emit('subPage')" 
            class="
            transition-all duration-500 ease-in-out
            flex flex-nowrap w-full h-full 
            items-center justify-center 
            text-[18px] text-pink-300 font-bold bg-white
            hover:bg-pink-50 hover:ring-pink-300 hover:text-[20px] hover:text-pink-500 hover:shadow-lg
            cursor-pointer gap-4 hover:gap-6
            ring-4 ring-pink-200"
            :class="ChengeStore.PlaneOrSolid?
            'shadow-none rounded-none' : 
            'shadow-md rounded-lg'">
                <!-- ← ← ← -->
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 256 512"
                class="w-3">
                    <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" fill="currentColor">
                    </path>
                </svg>
            上一页</button>
        </div>
        <!-- 占位分隔图片 -->
        <div 
        class="
        flex justify-center w-max h-full">
        <img
        class="h-full"
        src="/img/egutenshi.png" alt="">
        </div>
        <!-- 右 -->
        <div 
        class="
        transition-all duration-500 ease-in-out
        relative flex w-56 h-12
        hover:w-54 hover:h-13">
            <button 
            @click="$emit('addPage')" 
            class="
            transition-all duration-500 ease-in-out
            flex flex-nowrap w-full h-full 
            items-center justify-center 
            text-[18px] text-pink-300 font-bold bg-white
            hover:bg-pink-50 hover:ring-pink-300 hover:text-[20px] hover:text-pink-500 hover:shadow-lg
            cursor-pointer gap-4 hover:gap-6
            ring-4 ring-pink-200"
            :class="ChengeStore.PlaneOrSolid?
            'shadow-none rounded-none' : 
            'shadow-md rounded-lg'">
            下一页 
            <!-- → → → -->
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 256 512"
                class="w-3">
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" fill="currentColor">
                </path></svg>
            </button>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { useTestStore } from '#imports';

defineProps<{ 
    PageNum: number;
}>();

defineEmits(['subPage', 'addPage']);

const ChengeStore = useTestStore();
</script>
