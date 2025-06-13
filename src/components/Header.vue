<template>
    <div 
    class="
     transition-all duration-600 ease-in-out
     absolute z-10 flex w-full justify-between
     shadow-black/20 shadow-lg"
    :class="ChengeStore.PlaneOrSolid ?
     'h-100 bg-gradient-to-br from-white/50 to-gray-100/50 backdrop-blur-sm' : 'h-12 bg-gray-300/30 backdrop-blur-md'" 
     >
        <div class="p-2 mx-6 w-46">
            <a href="#"></a>
            <a href="#">
                <img src="../public/img/blog-header.svg" alt="">
            </a>
        </div>
        <div class="flex h-12 w-40 p-0.5 mx-4">
            <div class=" text-center text-[18px] m-2 h-full w-18">注册</div>
            <div class=" text-center text-[18px] m-2 h-full w-18">登录</div>
        </div>
    </div>
</template>

<script setup lang="ts">

// 全局
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

</script>