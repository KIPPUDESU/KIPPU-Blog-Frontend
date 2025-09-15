---
title: Nuxt 4 中插入页面过渡动画
description: "关于在 Nuxt 4 创建的项目中，为页面衔接间的过度状态插入一个独立的组件，在其中运行设定好的动效，用作过度的动画  "
classify: 动画
date: 2025-07-09
image: "/img/mizuki(1).png"
---

# Nuxt 4 中插入页面过渡动画  
## 关于在 Nuxt 4 创建的项目中，为页面衔接间的过度状态插入一个独立的组件，在其中运行设定好的动效，用作过度的动画  
  
## 首先需要考虑怎样使组件读取到页面状态的切换，以此插入动画  
Nuxt3 其中提供了`useNuxtApp`用以获取应用实例  
我们可以利用此方法正好读取页面切换，创造钩子函数，再利用钩子函数改变一个**布尔值**确定页面的状态  
### 代码：  
```ts  
import { ref } from 'vue'

const nuxtApp = useNuxtApp()
const isLoading = ref(false)

nuxtApp.hook('page:start', () => {
  isLoading.value = true;
})

nuxtApp.hook('page:finish', () => {
  // 延迟一点时间关闭，确保动画至少播放一小段时间
  setTimeout(() => {
    isLoading.value = false;
  }, 900); 
})
```  
本逻辑根据以下步骤完成了目的
- 创建一个 nuxtApp 方法（该方法由 useNuxtApp 检测路由切换后触发）
- 创建一个 loading 布尔值定义当前加载动画组件状态
- 路由变化注册 page:start 钩子改变布尔值为 true
- 随后注册 page:finish 钩子，根据setTimeout的定义 900毫秒后更变 loading   
  
这样就好似写好了一个 mc 中的小按钮，由路由变化触发  
---  
## 利用定义好的布尔值配合 vue3 的`v-if`控制组件显示  
这一步非常简单  
### 代码：
```vue
<template>
  <div class="">
    <!-- 使用 Vue 的 Transition 组件来包裹遮罩层，以实现平滑的淡入淡出 -->
    <Transition name="fade">
      <TransitionCover v-if="isLoading" />
    </Transition>
    <NuxtLayout>
     <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```  
就像注释里说的一样，使用 Vue 的 Transition 组件来包裹遮罩层实现更好的动画效果  
而`v-if`会根据布尔值切换 TransitionCover 组件的**销毁与创建**（此组件在样式上悬浮在页面上层）  
---  
## 在 CSS 里定义组件出现的动画
为了使得组件的出现不生硬，需要一些定义
### 代码：
```css
/* 为 TransitionCover 的淡入淡出效果定义 CSS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
```  
对于动画组件
- 只针对`opacity`属性操控
- 在 ease-in-out 缓动下操控 0.5 秒
- 透明度`opacity`初始为0，缓动过滤到1（透明度淡入）
对于切换的下一页面
- 同时针对`opacity`与`filter`属性
- 在 ease 默认缓动下同样操控 0.5 秒
- 初始为0，缓动过滤到1（透明度淡入）
- 透明度`opacity`初始为0，缓动过滤到1（透明度淡入）
- 模糊度`filter`初始为1，缓动过滤到0（模糊度淡入）  
  
**过度动画组件**与**入场组件**配合，实现舒适的过度缓动效果  
---  
## 总结
> _以下总结由 AI 生成，仅供参考。_
本文详细介绍了一种在 Nuxt 4 项目中实现页面过渡动画的优雅方案。该方案的核心是利用 Nuxt App 的生命周期钩子（`page:start` 和 `page:finish`）来精确控制一个独立过渡动画组件（`TransitionCover`）的显示与隐藏。通过在根组件（如 `app.vue`）中设置一个响应式状态（`isLoading`），并在钩子函数中改变其值，再结合 Vue 的 `<Transition>` 组件，实现了页面内容与过渡动画的解耦和无缝衔接，避免了页面跳转时的生硬感。

## 速览
> _以下速览由 AI 生成，仅供参考。_

#Nuxt #Vue #动画 #页面过渡 #前端开发

**本文是一篇关于在 Nuxt 4 项目中实现页面过渡动画的教程。文章的核心思路是利用 Nuxt App 的生命周期钩子（`page:start` 和 `page:finish`）来控制一个独立的过渡动画组件（`TransitionCover`）的显示与隐藏，从而在页面跳转时呈现平滑的动画效果。**

1.  **核心思路 (Core Idea)**
    -   目标：在 Nuxt 页面切换的间隙，插入一个全屏的、可自定义的过渡动画组件。
    -   关键：需要精确地监听“页面开始切换”和“页面切换完成”这两个时间点。
2.  **实现步骤 (Implementation)**
    -   利用 `useNuxtApp()`：在应用的根组件（如 `app.vue` 或 `layouts/default.vue`）中，通过 `useNuxtApp()` 获取 Nuxt 应用实例。
    -   监听钩子：使用 `nuxtApp.hook()` 来监听 `page:start` 和 `page:finish` 这两个钩子。
    -   状态管理：定义一个响应式变量（如 `isLoading = ref(false)`）来作为控制过渡动画组件显示/隐藏的开关。
    -   逻辑流程：
        -   当 `page:start` 触发时，将 `isLoading` 设为 `true`，显示过渡动画组件。
        -   当 `page:finish` 触发时，在短暂延迟后，将 `isLoading` 设为 `false`，隐藏过渡动画组件。
3.  **组件与样式 (Component & Styling)**
    -   组件集成：在模板中，使用 Vue 的 `<Transition>` 组件包裹过渡动画组件（如 `<TransitionCover v-if="isLoading" />`），以实现平滑的淡入淡出效果。
    -   CSS 动画：为 `<Transition>` 组件定义相应的 `fade-enter-active` / `fade-leave-active` 等 CSS 类，以控制透明度（`opacity`）的变化，实现动画效果。

### 2025.07.09 共勉
