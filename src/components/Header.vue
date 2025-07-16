<template>
<div 
class="
 transition-all duration-600 linear
 absolute z-30 flex w-full justify-between backdrop-blur-lg"
:class="ChengeStore.PlaneOrSolid ?
 'h-12 bg-gray-100':
 'h-12 bg-gray-300/20 shadow-md shadow-black/20'" 
 >
    <!-- 顶部横线 -->
    <div 
    class="
    transition-all duration-600 linear 
    w-362 rounded-2xl
    absolute left-1/2 -translate-x-1/2 z-30 h-0.5 bg-gray-300"
    :class="ChengeStore.PlaneOrSolid?
    'top-12' : '-top-20' "
    ></div>
    <!-- 左侧logo -->
    <div 
    class="
    flex p-6 mx-4 w-36 sm:w-60 h-12 justify-center items-center">
       <NuxtLink to="/">
            <img src="../public/img/blog-header.svg" alt="">
       </NuxtLink>
    </div>
    <!-- 右侧用户组件 -->
    <div 
    class="
    relative flex justify-between items-center 
    h-10 sm:h-12 w-42 sm:w-58 px-4 mx-4">
        <div 
        class="
        relative w-1/2 h-full overflow-hidden">
            <!-- 使用绝对路径防止渲染 /blog/SignUp -->
            <NuxtLink 
            to="/SignUp"
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
            to="/Login"
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