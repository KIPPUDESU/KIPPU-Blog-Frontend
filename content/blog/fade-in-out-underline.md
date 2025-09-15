---
title: 渐退渐入下划线
description: "起因是我看到某网站内的动画效果于是也想要手搓一个试试  "
classify: 动画
date: 2025-07-02
image: "/img/egust.jpg"
---

# 渐退渐入下划线  
  
## 起因是我看到某网站内的动画效果于是也想要手搓一个试试  
  
## 引子
关于我看到的网站，是这个：  
[Capsules](https://capsules.moyra.co/)  
这种滚动层叠的展示页面虽然一直是我想做的，不过暂时对我来说还不太实用  
不过里面的一些小的过渡动画效果还是可以学习的，于是我打开控制台注意到了这样一段代码  
### 代码：
```html
<span class="relative inline-flex overflow-hidden">
    <!--[-->contact us.<!--]-->
      <div class="absolute bottom-0 h-[5%] w-full" 
      style="background-color: rgb(244, 239, 231); left: 0%;">
      </div>
</span>
```  

动画效果：**一个文字下划线，在鼠标上浮的时候下划线向右消失，鼠标离开，下划线从左边开始生长**  
感觉有点常见？不过这次我想试试了，原网站这里似乎是直接用js来控制style了  
我懒得研究这方面的说，于是我想，能不能用纯tailwindcss提供的方法来编写类似的样式  

---  

## 最终实现
经过一番研究得到了以下结果  
### 代码：
```html
<div class="relative flex items-center w-[226px] ml-[4px] h-7">
    <!-- 动画效果容器 -->
    <div 
    class="
    transition-all duration-600 ease-in-out
    absolute bottom-1 w-full h-full group">
       <!-- 邮箱 -->
       <a 
       href="mailto:KIPPUDESU@OUTLOOK.COM?subject=Hello%20Kippu" 
       target="_blank"
       class="
       absolute right-0 top-1 z-20
       hover:text-gray-400"
       :class="ChengeStore.PlaneOrSolid?
       'text-gray-500' : 'text-blue-400' "
       >
       KIPPUDESU@OUTLOOK.COM</a>
          <!-- 下划线 -->
          <div class="
          transition-all duration-600 ease-in-out
          absolute bottom-0 h-0.5 w-full rounded-4xl
          left-0 right-auto bg-gray-400
          group-hover:w-0 group-hover:left-auto group-hover:right-0" 
          ></div>
    </div>
</div>
```  

### 逻辑：
- 设定了一个长为`w-[226px]`的大容器来包裹邮箱和下划线  
- 填充子动画容器使用`group`与动画实现用的属性建立联系  
- 下划线用`group-hover`呼应动画效果  
- 鼠标上浮时`group-hover:w-0 group-hover:left-auto group-hover:right-0`下划线向右边消失  
- 鼠标离开后回复`left-0 right-auto`&`w-full`下划线从左边生长恢复  
  
~~不知道对比原主的效果性能怎么样，但是我觉得还不错（TT）~~  

---  
  
不过今天也没写什么东西，就先这样吧  

## 2025.09.15 新编：
最近优化了一下相关的代码  
```html
<!-- 动画效果容器 -->
<div 
class="
transition-all duration-600 ease-in-out
flex flex-col w-full h-full group
">
  <!-- 邮箱 -->
  <a 
  href="mailto:KIPPUDESU@OUTLOOK.COM?subject=Hello%20Kippu" 
  target="_blank"
  class="
  z-20 hover:text-gray-400"
  :class="ChengeStore.PlaneOrSolid?
  'text-gray-500' : 'text-blue-400' "
  >
  KIPPUDESU@OUTLOOK.COM</a>
  <!-- 下划线 -->
  <div class="
  transition-all duration-600 ease-in-out
  h-0.5 w-full rounded-4xl
  bg-gray-400
  ml-0 group-hover:w-0 group-hover:ml-auto" 
  ></div>
</div>
```
放弃了原先不稳定的 absolute 定位，防止在不同显示器尺寸下下划线与邮箱文本无法对齐  
为了应对这种改变，原先的逻辑也产生了微笑的变动  
- `left-0 right-auto group-hover:w-0 group-hover:left-auto group-hover:right-0`  
⬇⬇⬇⬇  
- `ml-0 group-hover:w-0 group-hover:ml-auto`  
用外边距控制定位  

## 总结
灵感：来自 Capsules 的 hover 下划线动画  
- 初版实现：依赖 absolute + group-hover，效果达成但存在布局风险  
- 优化实现：改用 flex + margin 控制，更适配不同屏幕尺寸  
  
## 速览
> _以下速览由 AI 生成，仅供参考。_

#CSS #TailwindCSS #动画 #前端技巧

**本文记录了一款悬浮下划线（Hover Underline）动画的两种 CSS 实现方式。灵感来源于 Capsules 网站，旨在实现一种从中间消失、从两边展开的动画效果。文章对比了依赖绝对定位（`absolute`）的初版方案和利用 Flexbox 与外边距（`margin`）的优化方案，最终推荐后者作为更健壮、适应性更强的选择。**

1.  **动画效果与灵感 (Effect & Inspiration)**
    -   目标效果：鼠标悬夫时，下划线从两边向中间收缩消失；鼠标移开时，下划线从中间向两边展开恢复。
    -   灵感来源：模仿 Capsules 网站的链接悬浮效果。
2.  **实现方案对比 (Implementation Comparison)**
    -   初版方案 (V1)：使用绝对定位 (`absolute`) 和 `width` 结合 `group-hover` 来控制下划线的动画。虽然能实现效果，但在不同屏幕尺寸下可能出现对齐问题，布局风险较高。
    -   优化方案 (V2)：放弃绝对定位，改用 Flexbox 布局 (`flex`)。通过控制下划线元素的 `width` 和 `margin-left: auto`，巧妙地实现了向右收缩的效果，代码更简洁且布局更稳健。

### 2025.06.22 共勉
