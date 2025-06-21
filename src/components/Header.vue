<template>
<div 
class="
 transition-all duration-600 linear
 absolute z-10 flex w-full justify-between backdrop-blur-lg"
:class="ChengeStore.PlaneOrSolid ?
 'h-106 bg-white':
 'h-12 bg-gray-300/20 shadow-md shadow-black/20'" 
 >
    <!-- 左侧logo -->
    <div class="p-2 mx-6 w-46">
       <NuxtLink to="/">
            <img src="../public/img/blog-header.svg" alt="">
       </NuxtLink>
    </div>
    <!-- 右侧用户组件 -->
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