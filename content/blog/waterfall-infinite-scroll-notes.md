---
title: "瀑布流无限滚动功能开发与调试随想"
classify: "记录"
date: "2025-09-01"
image: "/img/kawaikokoro.png"
---

# 瀑布流无限滚动功能开发与调试随想录

# 为了实现小红书网站类似的错落不一的瀑布流卡片展示，在引入某库后的自我摸索

本文记录了为实现首页瀑布流无限滚动功能，从初步实现到解决一个顽固的“洗牌”Bug 的全过程  
在我坚持保留“卡片高度随机”的核心需求下，找到了接近完美的解决方案

## 初始目标与实现

项目的初始目标是实现一个瀑布流布局的卡片列表  
当用户滚动到页面底部时，能自动加载下一批卡片  
  
初步的技术方案是：
1.  使用 `useIntersectionObserver` (来自 `@vueuse/core`) 来监听一个位于列表底部的哨兵触发加载。
2.  通过 `loadMore` 函数，动态地向 `DisplayCards` 数组中追加新数据。

## “洗牌”Bug 的艰难调试历程

在实现了基本的无限滚动后，我们遇到了一个非常顽固且奇怪的 Bug：  
**只有在加载第二组卡片时，第一组已经渲染好的卡片布局会被完全打乱。而后续加载第三、四组时，则表现正常**  
  
为了解决这个问题，进行了漫长曲折的排查：

1.  **失败的尝试**：  
我们依次尝试了为卡片添加 `key`  
我查询了库提供的专用的 `key-mapper`  
修改组件加载时机、移除特殊卡片、甚至更换瀑布流库 (`@yeger/vue-masonry-wall` -> `vue-masonry-css`)  
前者不管用，后者的库已经停止维护很久了，无法简单的插入到我的项目中使用

2.  **最终诊断**：  
在排除了所有库和 Vue 本身的因素后，我们最终确定了问题的根源  
**布局计算与图片加载的执行时间问题 (Race Condition)**  
  - 库在初次渲染时，基于**不包含图片高度**的“卡片骨架”进行了计算布局  
  - 在加载第二组数据时，第一组的图片才加载完成，导致卡片纳入计算的尺寸“长高”  
  - 库在进行第二次计算时，发现第一批的尺寸产生改变
  - 进行一次剧烈的全局计算重排，从而导致了“洗牌”

## 解决方案

在确定了问题根源后，我们面临两个选择：

### 方案 A：CSS 固定宽高比 (否决)

- **思路**：为图片容器预设一个固定的宽高比
- **结果**：这是一个技术上最简单、性能最好的方案。但很显然与我需要他“错落不一致”的需求有冲突，因此被否决

### 方案 B：图片预加载 (最终方案)

- **核心需求**：**卡片的高度必须是随机的**，由网站的用户上传的图片与内容其内容自由决定，不能被统一的宽高比限制
- **思路**：提前加载图片
- **实现细节**：
这里需要用到一个 ts 辅助函数`preloadImages`  
他负责接受传过来的图片链接，并确认图片的下载（成功或失败都输出结果）  
用来卡住整个执行过程，强制图片必须尝试下载完才能执行接下来的逻辑  
  - 重构了 `loadMore` 函数，使其成为一个 `async` 异步函数
  - 创建了一个 `preloadImages` 辅助函数
  - `loadMore` 在获取到下一批卡片数据后，并不立即更新 UI，而是先提取出所有图片链接
  - `await` 等待 `preloadImages` 函数（通过 `Promise.all`）
  - 通知所有图片都已下载完毕后，才将新卡片数据添加到 `DisplayCards` 数组中
  - 最终触发页面渲染。这确保了瀑布流库每次计算时，面对的都是具有真实高度的卡片

- **最终实现代码 (`HomePage.vue`)**：

```ts
// 加载状态，防止重复触发
const isLoading = ref(false)

// 预加载图片函数
const preloadImages = (urls: string[]) => {
  const promises = urls.map((url) => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = resolve
      img.onerror = resolve // 错误也算完成，防止单个图片失败阻塞整个流程
      img.src = url
    })
  })
  return Promise.all(promises)
}

const loadMore = async () => {
  // 防止在加载时重复触发
  if (isLoading.value) return
  // 检查是否还有更多卡片可以加载
  if (DisplayCards.value.length >= AllCard.value.length) {
    stop()
    return
  }

  isLoading.value = true

  const nextCards = AllCard.value.slice(DisplayCards.value.length, DisplayCards.value.length + PAGE_SIZE)

  if (nextCards.length > 0) {
    const imageUrlsToPreload = nextCards.map((card) => card.coverUrl).filter(Boolean)

    // 等待所有图片加载完成
    await preloadImages(imageUrlsToPreload)

    // 图片加载完后，再更新到页面上
    DisplayCards.value = [...DisplayCards.value, ...nextCards]
  }

  isLoading.value = false
}
```

## 总结
我们的瀑布流库并不完善，图片加载的时间差会导致布局突变  
修改 key、库配置、切库，都未能解决根本问题  
最终通过 图片预加载，确保在渲染时已有真实高度避免了布局洗牌  

**代码中的微妙问题，往往根源在执行顺序**

### 2025.09.01 · 共勉