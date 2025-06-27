<template>
  <!-- 下层容器 -->
  <div class="
  absolute flex w-full bottom-0 my-4 h-1/4
  items-center perspective-1000">
    <!-- technology stack -->
    <div class="
    transition-all duration-600 ease-in-out
    relative flex mx-6 h-14/20 w-58 
    bg-white rounded-xl shadow-black/20 shadow-lg
    hover:shadow-black/30 hover:shadow-xl">
      <!-- 悬浮透明层 -->
      <div class="
      transition-all duration-600 ease-in-out
      absolute h-full w-full rounded-xl group
      hover:w-300">
          <!-- 主题句 -->
          <div 
          class="
          transition-all duration-600 ease-in-out
          absolute flex flex-col top-2 left-2 w-7/40 h-1/3
          text-[36px] text-black/70 font-bold
          group-hover:text-blue-400
          ">
            <h1 class="absolute">Technology</h1>
            <h1 class="absolute top-5/12">Stack</h1>
          </div>
          <!-- 箭头 -->
            <div 
            class="
            absolute w-12 h-12 top-3/18 left-28
            overflow-hidden">
              <div 
              class="
              transition-all duration-600 ease-in-out
              absolute flex -left-full w-24 h-full 
              group-hover:left-0
              group-hover:text-blue-400
              ">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 24 24"
              class="w-12 h-12">
                <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" fill="currentColor">
                </path>
              </svg>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 24 24"
              class="w-12 h-12">
                <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" fill="currentColor">
                </path>
              </svg>
              </div>
            </div>
          <!-- 卡片 -->
          <div class="
          transition-all duration-600 ease-in-out
          absolute flex items-center top-3/10 w-full h-1/2 z-40
          group-hover:top-0 group-hover:h-full">
            <!-- 隐藏字 -->
            <div class="
            transition-all duration-600 ease-in-out
            absolute top-4/12 left-2 z-0 text-[18px] font-bold
            group-hover:top-4/12  group-hover:text-[26px]"> 
              <p>You’ve finally <br>
                 noticed me</p>
            </div>
            <!-- HTML -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-0 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-80 group-hover:w-38  
            bg-white items-center justify-center
            -rotate-y-8 rotate-x-8 -rotate-6
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/html.png" alt="">
            </div>
            <!-- CSS -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-8 w-18 h-14/24 
            group-hover:top-4/20 group-hover:left-110 group-hover:w-38 
            bg-white items-center justify-center
            -rotate-y-4 -rotate-x-4 rotate-4
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:-rotate-x-0 group-hover:rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/CSS3.png" alt="">
            </div>
            <!-- JavaScript -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-16 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-140 group-hover:w-38 
            bg-white items-center justify-center
            -rotate-y-20 -rotate-x-8 -rotate-4
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:rotate-y-0 group-hover:-rotate-x-0 group-hover:-rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/JavaScript.png" alt="">
            </div>
            <!-- typescript -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-24 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-170 group-hover:w-38 
            bg-white items-center justify-center
            rotate-y-8 rotate-x-4 rotate-4
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/typescript.png" alt="">
            </div>
            <!-- Vue -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-32 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-200 group-hover:w-38
            bg-white items-center justify-center
            -rotate-y-8 rotate-x-8 -rotate-2
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/Vue.png" alt="">
            </div>
            <!-- Nuxt -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-40 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-230 group-hover:w-38
            bg-white items-center justify-center
            rotate-y-4 -rotate-x-18 rotate-6
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/Nuxt.png" alt="">
            </div>
            <!-- tailwindcss -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-40 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-260 group-hover:w-38
            bg-white items-center justify-center
            rotate-y-4 -rotate-x-18 rotate-6
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            group-hover:shadow-lg group-hover:shadow-black/20
            rounded-lg ">
              <img src="../public/img/tailwindcss_.png" alt="">
            </div>
            <!-- pnpm -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-40 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-290 group-hover:w-38
            bg-white items-center justify-center
            rotate-y-4 -rotate-x-18 rotate-6
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            group-hover:shadow-lg group-hover:shadow-black/20
            rounded-lg ">
              <img src="../public/img/pnpm.png" alt="">
            </div>
            <!-- git -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-40 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-320 group-hover:w-38
            bg-white items-center justify-center
            rotate-y-4 -rotate-x-18 rotate-6
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            group-hover:shadow-lg group-hover:shadow-black/20
            rounded-lg ">
              <img src="../public/img/git.png" alt="">
            </div>
            
            <!-- 尝试复制一份 -->

            <!-- HTML -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-0 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-80 group-hover:w-38  
            bg-white items-center justify-center
            -rotate-y-8 rotate-x-8 -rotate-6
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/html.png" alt="">
            </div>
            <!-- CSS -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-8 w-18 h-14/24 
            group-hover:top-4/20 group-hover:left-110 group-hover:w-38 
            bg-white items-center justify-center
            -rotate-y-4 -rotate-x-4 rotate-4
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:-rotate-x-0 group-hover:rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/CSS3.png" alt="">
            </div>
            <!-- JavaScript -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-16 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-140 group-hover:w-38 
            bg-white items-center justify-center
            -rotate-y-20 -rotate-x-8 -rotate-4
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:rotate-y-0 group-hover:-rotate-x-0 group-hover:-rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/JavaScript.png" alt="">
            </div>
            <!-- typescript -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-24 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-170 group-hover:w-38 
            bg-white items-center justify-center
            rotate-y-8 rotate-x-4 rotate-4
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/typescript.png" alt="">
            </div>
            <!-- Vue -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-32 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-200 group-hover:w-38
            bg-white items-center justify-center
            -rotate-y-8 rotate-x-8 -rotate-2
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/Vue.png" alt="">
            </div>
            <!-- Nuxt -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-40 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-230 group-hover:w-38
            bg-white items-center justify-center
            rotate-y-4 -rotate-x-18 rotate-6
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            rounded-lg shadow-lg shadow-black/20">
              <img src="../public/img/Nuxt.png" alt="">
            </div>
            <!-- tailwindcss -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-40 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-260 group-hover:w-38
            bg-white items-center justify-center
            rotate-y-4 -rotate-x-18 rotate-6
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            group-hover:shadow-lg group-hover:shadow-black/20
            rounded-lg ">
              <img src="../public/img/tailwindcss_.png" alt="">
            </div>
            <!-- pnpm -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-40 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-290 group-hover:w-38
            bg-white items-center justify-center
            rotate-y-4 -rotate-x-18 rotate-6
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            group-hover:shadow-lg group-hover:shadow-black/20
            rounded-lg ">
              <img src="../public/img/pnpm.png" alt="">
            </div>
            <!-- git -->
            <div class="
            transition-all duration-600 ease-in-out transform transform-gpu transform-style-3d
            absolute flex top-4 left-40 w-18 h-14/24
            group-hover:top-4/20 group-hover:left-320 group-hover:w-38
            bg-white items-center justify-center
            rotate-y-4 -rotate-x-18 rotate-6
            group-hover:bg-white/60 backdrop-blur-md
            group-hover:-rotate-y-0 group-hover:rotate-x-0 group-hover:-rotate-0
            group-hover:shadow-lg group-hover:shadow-black/20
            rounded-lg ">
              <img src="../public/img/git.png" alt="">
            </div>
          </div>
          <!-- 介绍句 -->
          <div class="
          absolute bottom-0 left-0 w-58 h-20
          bg-gradient-to-t rounded-b-lg
          px-2 py-5">
            <div 
            class="
            absolute flex left-0 -top-4 w-full h-8 px-2
            items-center gap-1 bg-gray-700">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 24 24"
              class="
              w-3 h-3 text-white">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71l-1.42 1.41z" fill="currentColor">
                </path>
              </svg>
              <span class="text-[12px] text-white font-medium">6h+ daily dev</span>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 16 16"
              class="w-3 h-3 text-white"><g fill="none">
                <path d="M7.541 3.948a3.25 3.25 0 0 0-4.595-.012a3.25 3.25 0 0 0 .012 4.595l4.707 4.708a.5.5 0 0 0 .707 0l4.683-4.68a3.25 3.25 0 0 0-.012-4.594a3.252 3.252 0 0 0-4.601-.012l-.447.448l-.454-.453z" fill="currentColor">
                </path></g>
              </svg>
              <span class="text-[12px] text-white font-medium">Interest-based</span>
            </div>
            <div class="text-[15px] text-black/60 font-medium">
              <p>Tech stack ignites innovation</p>
              <p>at the slightest whisper</p>
            </div>
          </div>
      </div>
    </div>
    <!-- 插图 -->
    <div class="
    absolute flex mx-80 h-16/20 w-288
    justify-center
    bg-blue-50/10 rounded-xl shadow-black/20 shadow-lg overflow-hidden">
      <img class="absolute z-0 -top-40 w-10/12" src="../public/img/egubule.png" alt="">
    </div>
  </div>
</template>