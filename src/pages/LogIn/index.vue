
<template>
  <div class="relative w-full h-screen overflow-hidden flex justify-center items-center">
    <!-- 动态背景层 -->
    <div 
      class="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out"
      :class="ChengeStore.PlaneOrSolid ? 'bg-gray-100' : 'bg-gray-800'"
    >
      <!-- 立体模式下的背景图，增加氛围 -->
      <img 
        src="/img/mizuki(1).png" 
        alt="background"
        class="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
        :class="ChengeStore.PlaneOrSolid ? 'opacity-0' : 'opacity-30'"
      >
    </div>

    <!-- 登录表单容器 -->
    <div 
      class="
        relative z-10 w-full max-w-md px-8 py-10
        transition-all duration-500 ease-in-out transform
      "
      :class="ChengeStore.PlaneOrSolid ? 
        'bg-white/95 shadow-xl rounded-lg' : 
        'bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl ring-1 ring-white/20'
      "
    >
      <!-- 标题 -->
      <h1 
        class="text-3xl font-bold text-center transition-colors duration-500"
        :class="ChengeStore.PlaneOrSolid ? 'text-gray-800' : 'text-white'"
      >
        欢迎回来
      </h1>
      <p 
        class="mt-2 text-center transition-colors duration-500"
        :class="ChengeStore.PlaneOrSolid ? 'text-gray-500' : 'text-gray-300'"
      >
        登录以继续您的旅程
      </p>

      <!-- 表单 -->
      <form class="mt-8 space-y-6">
        <!-- 用户名输入框 -->
        <div>
          <label 
            for="username" 
            class="text-sm font-medium transition-colors duration-500"
            :class="ChengeStore.PlaneOrSolid ? 'text-gray-700' : 'text-gray-200'"
          >
            用户名
          </label>
          <input 
            v-model="username"
            type="text" 
            name="username" 
            id="username" 
            placeholder="请输入您的用户名"
            class="
              w-full px-4 py-3 mt-2 outline-none
              transition-all duration-300 ease-in-out
            "
            :class="ChengeStore.PlaneOrSolid ?
              'bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:bg-white rounded-md text-gray-800' :
              'bg-transparent border-b-2 border-white/40 focus:border-white text-white placeholder-gray-300/80'
            "
          >
        </div>

        <!-- 密码输入框 -->
        <div>
          <label 
            for="password" 
            class="text-sm font-medium transition-colors duration-500"
            :class="ChengeStore.PlaneOrSolid ? 'text-gray-700' : 'text-gray-200'"
          >
            密码
          </label>
          <input 
            v-model="password"
            type="password" 
            name="password" 
            id="password" 
            placeholder="请输入您的密码"
            class="
              w-full px-4 py-3 mt-2 outline-none
              transition-all duration-300 ease-in-out
            "
            :class="ChengeStore.PlaneOrSolid ?
              'bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:bg-white rounded-md text-gray-800' :
              'bg-transparent border-b-2 border-white/40 focus:border-white text-white placeholder-gray-300/80'
            "
          >
        </div>

        <!-- 登录按钮 -->
        <button 
          @click.prevent="handleLogin"
          class="
            w-full py-3 font-bold text-white
            transition-all duration-300 ease-in-out
            transform hover:scale-105 focus:outline-none
          "
          :class="ChengeStore.PlaneOrSolid ?
            'bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md hover:shadow-lg' :
            'bg-pink-500/60 hover:bg-pink-500/80 rounded-xl shadow-lg hover:shadow-pink-400/50 ring-1 ring-pink-500/50'
          "
        >
          登 录
        </button>
      </form>

      <!-- 底部链接 -->
      <div class="mt-6 text-center">
        <NuxtLink 
          to="/SignUp" 
          class="text-sm font-medium transition-all duration-300 hover:underline"
          :class="ChengeStore.PlaneOrSolid ? 'text-blue-500 hover:text-blue-700' : 'text-gray-300 hover:text-white'"
        >
          还没有账户？立即注册
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 引入全局状态管理
import { useTestStore } from '#imports'

// 实例化Store
const ChengeStore = useTestStore()

// 定义响应式数据
const username = ref('')
const password = ref('')

// 登录处理函数 (目前为占位符)
const handleLogin = () => {
  if (!username.value || !password.value) {
    alert('请输入用户名和密码！')
    return
  }
  console.log('登录信息:', {
    username: username.value,
    password: password.value
  })
  // 在这里可以添加实际的登录逻辑，例如API请求
  alert(`欢迎, ${username.value}! (此为前端模拟)`)
}

// 设置页面meta信息
useHead({
  title: '登录 - KIPPU BLOG',
  meta: [
    { name: 'description', content: '登录到KIPPU BLOG以撰写和管理您的文章。' }
  ]
})
</script>
