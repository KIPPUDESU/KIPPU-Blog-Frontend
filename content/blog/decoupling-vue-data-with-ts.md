---
title: "直接用 TS 文件给组件提供数据"
classify: "笔记"
date: "2025-05-25"
image: "/img/boire.jpg"
---
# 直接用 TS 文件给组件提供数据

## 此文写于我的入门时期

## 问题：  
我并不想把**子组件**`ProductData.vue`的数据先传到**父组件**`App.vue`，再通过 props 传给**另一个子组件**`MiniCard.vue`  
我想有一个独立的组件来给MiniCard提供数据，以便将组件和数据逻辑解耦  
   
---
## 误区：  
最开始我的想法是：  
  
> “不如干脆新建一个 Vue **子组件**，比如叫 ProductData.vue，在它里面定义数据，但是**不把此组件挂载在任何组件页面上**，再次挂载`<MiniCard />`来通过父子通信传数据。”  
   
但是后面折腾了半天我终于知道了  
**这种做法存在一个根本问题：**  
即使我不把新的组件（ProductData.vue）挂载到app上让它不显示，可是不被挂载的组件**里面提供的所有东西都是不生效的**  
它依旧是一个组件，需要被挂载到 DOM 上才能运行生命周期逻辑。而我没挂载它，自然也就什么数据都传不出去  
> **结论**：Vue 组件**未挂载**即**不运行**，无法输出数据  
  
那究竟怎么办，我不想让一个组件的数据传给app后再传给minicard，这样一来会增加一层依赖关系，提高了设计的复杂性（读软件设计的哲学有感）  

---
## 思考：  
### 于是我大概想了办法，那就是把提供数据的组件变成ts文件  
我把 ProductData.ts 写成一个纯模块，在里面导出数据结构或响应式对象  
### 代码：
```ts
// ProductData.ts
import { reactive } from 'vue'

export const productData = reactive({
  AppleImg: new URL('../images/MacBookAirM2.png', import.meta.url).href,
  FeatureImg: new URL('../images/M2(k).png', import.meta.url).href,
  title: 'MacBook Air M2',
  desc: '强劲性能，轻薄便携'
})
```  
在组件中导入：
```ts
import { productData } from '@/assets/data/ProductData'
```
不过，我马上遇到了新的问题：看似响应式渲染已经完成了，但是图片路径却不能正常被解析  
起初，我尝试了使用所谓的new URL方法  
```ts
AppleImg: new URL('../images/MacBookAirM2.png', import.meta.url).href,
FeatureImg: new URL('../images/M2(k).png', import.meta.url).href,
```  
但其实没有起效  
这是因为路径是相对于 当前模块文件的路径，而不是相对于项目根目录  
  
经过大概了解，知道了ts组件**不能使用相对路径**  
经过替换：
```ts
AppleImg: '/images/MacBookAirM2.png',
FeatureImg: '/images/M2(k).png',
```  

---
## 小结
五、小结
- Vue 组件：未挂载则不执行
- TS 模块：适合提供纯数据、逻辑
- 资源路径：
    * - new URL() 适合模块内部引用，需注意相对位置
    * - public + 绝对路径 最稳定
---

### ~~就这一点问题我写了一整天啊，太痛苦了，明天又要早六了~~

### 05.05.25 共勉