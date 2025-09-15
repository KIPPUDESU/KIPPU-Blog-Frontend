---
title: "关于全局样式状态"
classify: "技术"
date: "2025-06-14"
image: "/img/hatune.png"
---
# 关于全局样式状态  
  
## 在Nuxt3项目内使用状态管理的一般性：  
  
**毫无疑问**在 Vue 为基础的项目内，使用状态管理的主流方法就是 Pinia 方法  
一般来说引入此方法会有以下两个步骤  
### stores 文件目录下创建由 pinia 管理的函数与方法  
```ts
// ../stores/test
export const useTestStore = defineStore(
  'KippuBlog-public-test',
  () => {
    const PlaneOrSolid = ref(false)

    const KippuChenge = () => {
      PlaneOrSolid.value = !PlaneOrSolid.value
    }

    return {
      PlaneOrSolid,
      KippuChenge
    }
  },
  {
    persist: true // 持久化
  }
)
```  
在`const PlaneOrSolid = ref(false)`定义的毫无疑问是布尔值  
在`const KippuChenge = () => {`后也编辑了方法定义  
  
通过以下引入后
```ts
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()
```  
把整个stores传入**自定义**的ChengeStore后就可以自由应用  
在前缀加上`ChengeStore`就可以自由使用  
诸如：
```vue
<ArticleCard  :PlaneOrSolid="ChengeStore.PlaneOrSolid"/>
```
或者KippuChenge方法  

### 持久化处理  
本意在本地存储目前状态方便用户的习惯，需要定义**plugins**文件内的**pinia.ts**文件  
```ts
//来自haruki
import { defineNuxtPlugin } from '#app'
import { usePinia } from '#imports'
import persistedState from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((_nuxtApp) => {
  // 客户端才能使用 persistedState
  if (import.meta.client) {
    // 这是 Nuxt 自动创建的 pinia 实例
    const pinia = usePinia()
    // 使用 pinia-plugin-persistedstate 插件，持久化
    pinia.use(persistedState)
  }
})
```  
  
- `defineNuxtPlugin` Nuxt 通过这个函数定义自定义插件  
- `usePinia` 这个函数用于获取 Nuxt 自动创建的 Pinia 实例  
- `pinia-plugin-persistedstate` 插件，它可以让 Pinia 状态在浏览器中持久化保存  
  
这些都是引入方法的一环  
  
但是在 Nuxt 开发下这个步骤或许**不被需要**  
直接通过 Nuxt 自带的开发组件 Modules 来实现一键式部署，所以 plugins 内的定义就不再需要  
  
## 总结
> _以下总结由 AI 生成，仅供参考。_
本文介绍了在 Nuxt 3 项目中使用 Pinia 进行全局状态管理的方法。文章首先展示了定义一个标准 Pinia store（包含 state, action）并实现持久化（`persist: true`）的基础代码。随后，文章讲解了通过手动创建 Nuxt 插件（`plugins/pinia.ts`）并引入 `pinia-plugin-persistedstate` 来启用持久化功能的传统步骤。最后，文章提出了一个关键点：在现代 Nuxt 开发中，通过使用官方提供的 Nuxt Modules（如 `@pinia/nuxt` 和 `@pinia-plugin-persistedstate/nuxt`），可以极大地简化配置，甚至不再需要手动编写插件文件，实现“一键式”部署。

## 速览
> _以下速览由 AI 生成，仅供参考。_

#Nuxt #Vue #Pinia #状态管理 #前端开发

**本文探讨了在 Nuxt 3 中使用 Pinia 进行状态管理，特别是持久化储存的实现方式，并指出了通过使用 Nuxt Modules 可以极大地简化传统手动配置插件的流程。**

1.  **Pinia 基础用法 (Basic Usage)**
    -   Store 定义：展示了如何使用 `defineStore` 创建一个 Pinia store，其中包含响应式状态 (`ref`) 和修改状态的 action。
    -   组件应用：说明了如何在组件中通过 `useTestStore()` 引入并使用 store 中的状态和方法。
2.  **持久化实现 (Persistence Implementation)**
    -   传统方式：详细介绍了通过创建一个 Nuxt 插件 (`plugins/pinia.ts`)，并引入 `pinia-plugin-persistedstate` 库，来为 Pinia 开启状态持久化功能的步骤。
    -   现代方式：文章最后点明，在当前的 Nuxt 生态中，可以直接使用官方提供的 Modules 来集成 Pinia 及其持久化插件，这使得整个配置过程更简单、自动化，不再需要手动编写插件。

### 2025.06.10 共勉