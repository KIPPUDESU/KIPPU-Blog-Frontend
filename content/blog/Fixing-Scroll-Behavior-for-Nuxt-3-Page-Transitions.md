---
title: 解决 Nuxt3 页面过渡动画与滚动冲突问题
classify: 技术
date: 2025-07-17
image: "/img/hoshipb.png"
---
# 解决 Nuxt3 页面过渡动画与滚动冲突问题

## 遇到的问题  
  
在 Nuxt 3 应用中，当从一个已经有滚动位置的页面跳转到另一个新页面时，会遇到一个常见的用户体验问题：  
  
**在页面过渡动画（例如淡入淡出）开始播放的同时，新页面的内容会立即被渲染，并且浏览器会尝试自动将滚动条重置到顶部。**  
    
这样一来会出现一个非常突兀的结果：  
我们进行路由页面跳转前，会明显看到页面内容**闪烁**一下，马上跳到顶部  
在这之后过渡动画的组件才出现在页面上  
通俗来说，就是在进行 页面/路由 跳转之前，前一个页面已经向下滚动了一定距离，当动画开始执行前，浏览器会生硬的回滚到顶部位置，此后才播放过渡动画    
**这破坏了过渡动画的沉浸感、连贯性**

---
## 解决问题的逻辑与步骤  
很显然，我们需要的是**先动画，后滚动**的逻辑，也就是在过渡动画播放的过程中执行浏览器的滚动顶部行为  
  
### 我们可以将整个过程拆解为了三个核心：  
- **第一步：全面禁止“自动滚动”**  
需要一个方法，阻止浏览器和 Nuxt3 在路由切换时自作主张地滚动页面。这是前提  
- **第二步：实现“手动滚动”**  
禁用了自动滚动后，自己接管滚动的控制权。需要在页面过渡动画**播放完成时**，通过额外的代码手动将页面滚动到顶部    
- **第三步：协调动画与滚动**  
精确地监听“页面开始切换”和“页面动画结束”这两个时间点  
在这两个点上分别触发“显示加载动画”和“手动滚动并隐藏加载动画”的操作  
由于动画在结束阶段延迟 900ms 执行，所以直接写在结束阶段就能在结束前进行滚动，具体解释看后续代码  

---
## 代码解决方案
通过三个文件的配合执行了上述逻辑：  
  
**全面禁止自动滚动：**  
```ts
src/app/router.options.ts
    
export default <RouterConfig> {
    scrollBehavior() {
    return {} // 返回空对象，阻止 Nuxt 的路由滚动
    }
}
```  
覆盖路由的 `scrollBehavior` 并返回空对象，从 Nuxt 的层面禁用了所有自动滚动行为  
  
```ts
plugins/scroll-restoration.client.ts
    
export default defineNuxtPlugin(() => {
    history.scrollRestoration = 'manual'; // 禁用浏览器自身的滚动恢复
});
```
你通过一个客户端插件，将浏览器的 `scrollRestoration` 设置为 `manual`，从器的层面进一步确保了自动滚动不会发生  
**这一步可有可无，亲测删去后无明显影响，证明 Nuxt 的默认行为或许高于浏览器的默认行为**

**然后在 `app.vue` 中同时执行了第二步和第三步：协调动画与手动滚动**
```vue
src/app.vue

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const isLoading = ref(false) // 控制过渡动画遮罩的显示/隐藏

// 监听“页面开始切换”
nuxtApp.hook('page:start', () => {
  isLoading.value = true; // 显示加载动画
})

// 监听“页面（动画）结束”
nuxtApp.hook('page:finish', () => {
  // 延迟 900ms，确保动画播放充分
  setTimeout(() => {
    window.scrollTo(0, 0);    // 在这里执行“手动滚动”
    isLoading.value = false;  // 隐藏加载动画
  }, 900);
})
</script>

<template>
  <div>
    <!-- 过渡动画遮罩 -->
    <Transition name="fade">
      <TransitionCover v-show="isLoading" />
    </Transition>
    <NuxtLayout>
     <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```
- 通过 `page:start` 钩子，在路由切换开始时，立刻将 `isLoading` 设为 `true`，触发 `TransitionCover` 组件的淡入动画。
- 通过 `page:finish` 钩子，在页面过渡动画播放完毕后，执行一个 `setTimeout`。
- 在 `setTimeout` 的回调函数中，你完美地执行了**手动滚动** (`window.scrollTo(0, 0)`)，
- 在滚动后将 `isLoading` 设为 `false`，触发 `TransitionCover` 的淡出。900ms 的延迟确保了即使用户网络很快，加载动画也能有一个优雅的展示时间  
---
## 总结

通过**禁用默认行为**和**手动精细控制**两策略，将路由和 `app.vue` 联动的过渡方案，彻底解决“动画和滚动”的冲突

## 速览
> _以下速览由 AI 生成，仅供参考。_

#Nuxt #Vue #前端 #Bug修复 #页面过渡

**本文深入探讨并解决了一个在 Nuxt 3 中常见的页面过渡动画与滚动行为的冲突问题。该问题表现为页面跳转时，内容会先于过渡动画“闪烁”并滚动到顶部。文章提出的解决方案核心是：禁用路由的默认滚动行为，并利用 Nuxt 的生命周期钩子（Lifecycle Hooks）进行手动、精准的控制，从而实现平滑、无缝的页面过渡体验。**

1.  **问题描述 (Problem Description)**
    -   现象：在 Nuxt 应用中，当从一个已向下滚动的页面跳转到新页面时，浏览器会立即将滚动条重置到顶部，然后才播放淡入淡出的过渡动画，造成视觉上的“闪烁”和不连贯。
    -   根源：这是 SPA 路由的默认滚动行为与页面过渡动画的时机冲突所致。
2.  **解决方案与实现 (Solution & Implementation)**
    -   第一步：禁用默认滚动行为。通过在 `app/router.options.ts` 文件中，将 `scrollBehavior` 函数的返回值设为 `{}`，来阻止 Nuxt 的自动滚动。同时，也可以在客户端插件中将 `history.scrollRestoration` 设为 `manual` 来禁用浏览器行为。
    -   第二步：手动控制滚动。在根组件（如 `app.vue`）中，利用 `useNuxtApp()` 提供的页面生命周期钩子。
    -   具体实现：在 `page:start` 钩子触发时（页面开始跳转），显示加载/过渡动画。在 `page:finish` 钩子触发时（新页面加载且过渡动画即将结束），在一个 `setTimeout` 延迟后，手动执行 `window.scrollTo(0, 0)` 将页面滚动到顶部，并隐藏加载动画。

### 2025.07.17 共勉
