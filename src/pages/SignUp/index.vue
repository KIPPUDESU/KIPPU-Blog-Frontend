
<template>
  <div class="relative w-full h-screen overflow-hidden flex justify-center items-center">
    <!-- 动态背景层 -->
    <div 
      class="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out"
      :class="ChengeStore.PlaneOrSolid ? 'bg-gray-100' : 'bg-gray-800'"
    >
      <!-- 立体模式下的背景图 -->
      <img 
        src="/img/hatune.png" 
        alt="background"
        class="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
        :class="ChengeStore.PlaneOrSolid ? 'opacity-0' : 'opacity-20'"
      >
    </div>

    <!-- 注册表单容器 -->
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
        创建您的账户
      </h1>
      <p 
        class="mt-2 text-center transition-colors duration-500"
        :class="ChengeStore.PlaneOrSolid ? 'text-gray-500' : 'text-gray-300'"
      >
        加入我们，开始分享您的故事
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
            placeholder="设置一个独特的用户名"
            class="w-full px-4 py-3 mt-2 outline-none transition-all duration-300 ease-in-out"
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
            placeholder="设置您的密码"
            class="w-full px-4 py-3 mt-2 outline-none transition-all duration-300 ease-in-out"
            :class="ChengeStore.PlaneOrSolid ?
              'bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:bg-white rounded-md text-gray-800' :
              'bg-transparent border-b-2 border-white/40 focus:border-white text-white placeholder-gray-300/80'
            "
          >
        </div>

        <!-- 确认密码输入框 -->
        <div>
          <label 
            for="confirmPassword" 
            class="text-sm font-medium transition-colors duration-500"
            :class="ChengeStore.PlaneOrSolid ? 'text-gray-700' : 'text-gray-200'"
          >
            确认密码
          </label>
          <input 
            v-model="confirmPassword"
            type="password" 
            name="confirmPassword" 
            id="confirmPassword" 
            placeholder="请再次输入密码"
            class="w-full px-4 py-3 mt-2 outline-none transition-all duration-300 ease-in-out"
            :class="ChengeStore.PlaneOrSolid ?
              'bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:bg-white rounded-md text-gray-800' :
              'bg-transparent border-b-2 border-white/40 focus:border-white text-white placeholder-gray-300/80'
            "
          >
        </div>

        <!-- 注册按钮 -->
        <button 
          @click.prevent="handleSignUp"
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
          注 册
        </button>
      </form>

      <!-- 底部链接 -->
      <div class="mt-6 text-center">
        <NuxtLink 
          to="/LogIn" 
          class="text-sm font-medium transition-all duration-300 hover:underline"
          :class="ChengeStore.PlaneOrSolid ? 'text-blue-500 hover:text-blue-700' : 'text-gray-300 hover:text-white'"
        >
          已有账户？立即登录
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
const confirmPassword = ref('')

// 注册处理函数
const handleSignUp = () => {
  if (!username.value || !password.value || !confirmPassword.value) {
    alert('所有字段均为必填项！')
    return
  }
  if (password.value !== confirmPassword.value) {
    alert('两次输入的密码不一致！')
    return
  }
  console.log('注册信息:', {
    username: username.value,
    password: password.value
  })
  // 在这里可以添加实际的注册逻辑，例如API请求
  alert(`账户 ${username.value} 创建成功! (此为前端模拟)`)
}

// 设置页面meta信息
useHead({
  title: '注册 - KIPPU BLOG',
  meta: [
    { name: 'description', content: '在KIPPU BLOG创建新账户，开始您的创作之旅。' }
  ]
})
</script>
