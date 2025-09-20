<template>
<div 
ref="headerRef"
class="
 transition-all duration-600 linear 
 top-0 z-30 h-12 flex w-full justify-between backdrop-blur-lg
 shadow-md sticky"
:class="ChengeStore.PlaneOrSolid ?
 'bg-gray-100 shadow-black/0':
 'bg-gray-300/20 shadow-black/20'" 
 >
    <!-- 顶部横线 -->
    <div 
    class="
    transition-all duration-600 linear 
    w-96/100 rounded-2xl
    absolute left-1/2 -translate-x-1/2 z-30 h-0.5 bg-gray-300"
    :class="ChengeStore.PlaneOrSolid?
    'top-12' : '-top-20' "
    ></div>
    <!-- 左侧logo -->
    <div 
    class="
    flex p-0 lg:p-6 mx-4 w-40 lg:w-60 h-12 justify-center items-center">
       <NuxtLink to="/">
            <img src="/img/blog-header.svg" alt="">
       </NuxtLink>
    </div>
    <!-- 右侧用户组件 -->
    <div 
    class="
    relative flex justify-between items-center 
    h-12 lg:h-12 w-40 lg:w-58 px-2 lg:px-4 mx-2 lg:mx-4">
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
import Headroom from 'headroom.js'

// 全局
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

// 创建一个 ref 来引用 header 元素
const headerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // onMounted 中的代码保证只在客户端执行
  if (headerRef.value) {
    const headroom = new Headroom(headerRef.value, {
      // 一些配置项

    });
    headroom.init();
  }
})
</script>

<style scoped>
.headroom--unpinned {
  transform: translateY(-100%);
  transition-delay: 0.1s;
}

.headroom--pinned {
  transform: translateY(0);
}
</style>