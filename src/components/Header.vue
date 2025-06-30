<template>
<div 
class="
 transition-all duration-600 linear
 absolute z-20 flex w-full justify-between backdrop-blur-lg"
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
    <div class="
    relative flex justify-between items-center h-12 w-66 px-8">
        <div 
        class="
        relative w-1/2 h-full overflow-hidden">
            <NuxtLink 
            to="SignUp"
            class="
            transition-all duration-600 ease-in-out
            absolute z-50 flex justify-center items-center w-full h-full
            bg-gray-400/0 object-cover group
            hover:scale-110 hover:bg-gray-400/10">
                <span class="text-[20px] text-gray-900 group-hover:text-gray-700">
                注册
                </span>
            </NuxtLink>
        </div>
        <div 
        class="
        relative w-1/2 h-full overflow-hidden">
            <NuxtLink 
            to="Login"
            class="
            transition-all duration-600 ease-in-out
            absolute z-50 flex justify-center items-center w-full h-full
            bg-gray-400/0 object-cover group
            hover:scale-110 hover:bg-gray-400/10">
                <span 
                class="
                text-[20px] text-gray-900 group-hover:text-gray-700">
                登录
                </span>
            </NuxtLink>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
// 全局
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

</script>