<template>
<!-- 左侧信息容器 -->
<div 
  class="
  absolute flex w-70 h-252 top-0 left-0
  justify-center rounded-2xl">
    <!-- 头像 -->
    <div 
    class="
    absolute flex top-14 w-40 h-40 rounded-full justify-center items-center
    overflow-hidden shadow-lg shadow-black/30 ring-4 ring-gray-300
    ">
      <img 
      class="
      transition-all duration-600 ease-in-out
      flex absolute w-full h-full object-cover hover:scale-110" 
      src="../public/img/egucool.jpg" 
      alt="KIPPUIMG">
    </div>
    <!-- id 简介 -->
    <div 
    class="
    absolute flex flex-col top-62 w-48 h-10 gap-1
    justify-center items-center
    ">
      <span class="text-2xl text-gray-800 font-bold">切符</span>
      <p class="text-md text-gray-600/80 font-extrabold">もっとElegantになりたい</p>
    </div>
    
</div>
</template>