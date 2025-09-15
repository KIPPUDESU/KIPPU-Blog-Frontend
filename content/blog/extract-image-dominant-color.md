---
title: "图片主导色的提取导出"
description: "总体上是一个复杂程度不高的算法，用于在一张图片中提取出最具代表性的颜色"
classify: "技术"
date: "2025-07-28"
image: "/img/meganekwi.jpg"
---
# 图片主导色的提取导出
  
## 总体上是一个复杂程度不高的算法，用于在一张图片中提取出最具代表性的颜色
  
从任意一张图片中提取出最具代表性的颜色，也被称作“主导色”或“主色调”。  
在很多视觉设计或数据呈现场景中，找到这类主色并加以运用的话可以大大提升用户界面的美感和一致性  
网上已经有很多类似方案了，所以我也只是为众多思路添砖加瓦罢了，总之希望对你有所启发  

## 应用  
图片的主色提取是一个很常见的需求  
### 例如：
- 音乐播放器：根据专辑封面自动匹配播放器主题色

- 图像背景生成：为图片生成渐变背景、模糊边缘背景等

- 图文卡片配色：让图片所在卡片的颜色风格更统一

- 氛围灯光系统：根据图片主色控制灯光氛围（YOUTUBE）

- 数据可视化：对图像来源进行颜色分类，用主色代表类别

总之，它可以很大程度上优化用户的视觉体验和产品的丰富度  
而我编写这段代码主要就是希望它可以帮助我完成前两件事的综合  

## 实现

### 完整代码：
```ts
import sharp from 'sharp'
import { defineEventHandler, getQuery } from 'h3'

const colorCache = new Map<string, string>()

export default defineEventHandler(async (event) => {
  const { imageUrl } = getQuery(event)

  if (!imageUrl || typeof imageUrl !== 'string') {
    return { error: 'No URL? Then f**k off' }
  }

  if (colorCache.has(imageUrl)) {
    return { color: colorCache.get(imageUrl) }
  }

  try {
    const imageBuffer = await fetch(imageUrl).then(res => res.arrayBuffer())

    const { data, info } = await sharp(Buffer.from(imageBuffer))
      .resize(50, 50, { fit: 'cover' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    let bestColor = { r: 128, g: 128, b: 128 };
    let maxScore = -1;

    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // 防御性检查
      // 如果任何一个颜色分量无效，就跳过这个像素
      if (r === undefined || g === undefined || b === undefined) {
        continue;
      }

      if (r > 245 && g > 245 && b > 245) continue;
      if (r < 10 && g < 10 && b < 10) continue;

      const [h, s, l] = rgbToHsl(r, g, b);
      const score = s * 0.7 + l * 0.3;

      if (score > maxScore) {
        maxScore = score;
        bestColor = { r, g, b };
      }
    }
    
    const { r, g, b } = bestColor;
    const colorHex = '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');

    colorCache.set(imageUrl, colorHex)
    return { color: colorHex }

  } catch (error) {
    console.error(`F**k this img: ${imageUrl}`, error)
    return { error: 'Failed. Totally f**ked', color: '#5a67d8' }
  }
})

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    // 无视掉的色相，不使用
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}
```

### 详解：
### 引入依赖

```ts
import sharp from 'sharp'
import { defineEventHandler, getQuery } from 'h3'
```
- Sharp 是一个高性能图片处理库，用来压缩、裁剪、获取像素等
- 从 Nuxt 底层 HTTP 框架 h3 中取出`defineEventHandler` 和 `getQuery`，分别用来定义接口处理逻辑和读取 URL 参数  

---

### 避免重复计算

```ts
const colorCache = new Map<string, string>()
```

- 用一个 Map 键值对缓存后续处理过的图片，保证同一张图不再重复处理  
- 键值对的左侧是图片id，右侧是处理后的颜色结果

---

### 主处理函数

```ts
export default defineEventHandler(async (event) => {
```

以下解释是基于 Nuxt 提供的方便方法，在其他条件下编写后端逻辑请灵活应对
- 这是接口的主入口函数，每当有请求过来，就会触发这个函数
- 用户使用这个功能，传进一个参数被包装进 event 后逻辑中自由使用这个 event
- 这个模块最终**默认导出**，Nuxt 自动读取 api 文件的默认导出作为该路由处理逻辑
- Nuxt 提供的 辅助函数`defineEventHandler`，用于包装请求处理逻辑

---

### 读取参数

```ts
  const { imageUrl } = getQuery(event)

  if (!imageUrl || typeof imageUrl !== 'string') {
    return { error: 'No URL? Then f**k off' }
  }
```

- 试图获取用户传来的参数，从 URL 查询参数里取出 `imageUrl`
- 如果没传，或不是字符串，就返回错误信息（目移）

---

### 使用缓存直接返回

```ts
  if (colorCache.has(imageUrl)) {
    return { color: colorCache.get(imageUrl) }
  }
```

- 使用前面定义的键值对检测
- 如果之前已经处理过这个地址，我们直接从缓存中取结果

---

### 处理颜色

```ts
  try {
    const imageBuffer = await fetch(imageUrl).then(res => res.arrayBuffer())
```

- 开始一个错误捕获块，如果过程中任何一步失败可以在 catch 中处理错误
- 使用 Node 环境的异步 fetch API 向 `imageUrl` 发起请求下载入 `res`
- 把获得到的图片通过 then 转换为 `ArrayBuffer` 二进制格式
- 结果最终存入 `imageBuffer` 等待使用

---

### 使用 Sharp 压缩

```ts
    const { data, info } = await sharp(Buffer.from(imageBuffer))
      .resize(50, 50, { fit: 'cover' }) // 压缩到 50x50，方便计算
      .ensureAlpha()                    // 确保有透明通道（alpha）
      .raw()                            // 获取原始像素数据
      .toBuffer({ resolveWithObject: true })
```

- 将来自 Web 的 ArrayBuffer 包装成 Node 能处理的 Buffer
- 把图片缩小到 50x50，目的是**降低数据量，提高处理速度**
- 拿到 RAW 会提取所有像素的 RGBA 完整数据
- 确保每个像素都有 RGBA 四通道
- 元信息里 `data` 是像素值数组，`info.channels` 表示有几个颜色通道

---

### 定义 RGB

```ts
    let bestColor = { r: 128, g: 128, b: 128 };
    let maxScore = -1;
```

- 声明变量，初始化一个默认颜色为中灰色
- 准备找“最优”颜色（根据色彩评分）
- 因为颜色打分可能是正值，可能永远不会更新 bestColor 所以初始值 -1

---

### 遍历像素

```ts
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
```

- 每 `info.channels` 个值表示一个像素，通常是 RGBA
- 这里只关注 RGB 三个分量
- 把一张图片的每一个像素点扫一遍然后拿到每一个像素的 RGB
> ```ts
> data = [120, 220, 85, 255,   70, 160, 60, 255,   ...]
>            ↑    ↑   ↑   ↑     ↑   ↑   ↑   ↑
>           R1   G1  B1  A1    R2  G2  B2  A2
> ```
> - 假设数据为以上样式
> - 每次 r、g、b 分别获取到一组内的第 1、2、3 个数据并保存
> - 接着一次循环结束，下一次跳过 `info.channels` 来到下一组

---

### 防御判断

```ts
      if (r === undefined || g === undefined || b === undefined) {
        continue;
      }

      if (r > 245 && g > 245 && b > 245) continue; // 太白了
      if (r < 10 && g < 10 && b < 10) continue;   // 太黑了
```

- 如果这个像素的 RGB 有缺失，或颜色太亮/太暗，直接跳过
- 这样可以避免纯黑白等“无用颜色”干扰主色判断

---

### 色彩评分

```ts
      const [h, s, l] = rgbToHsl(r, g, b);
      const score = s * 0.7 + l * 0.3;
```

- 把 RGB 转换成 HSL 的 `rgbToHsl` 方法在后面定义
- 根据“**饱和度** + **亮度**”来打分，越鲜明越高分
- 饱和度的权重大于亮度，色相不参与评分

---

### 找出最高评分

```ts
      if (score > maxScore) {
        maxScore = score;
        bestColor = { r, g, b };
      }
    }
```

- 如果当前像素的颜色分数更高，就更新记录
- 把当前的分数设为新的最高分
- 保存当前像素的 RGB 值作为主色候选

---

### 转换为 Hex

```ts
    const { r, g, b } = bestColor;
    const colorHex = '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
```

- 把三个数值转为数组
- 把每个颜色值转成十六进制字符串，比如 255 => ff
- 用 `.join('')` 拼成完整的字符串 Hex 色码 `#rrggbb`

---

### 缓存返回

```ts
    colorCache.set(imageUrl, colorHex)
    return { color: colorHex }
```

- 把这个结果存到缓存中，下次就不用再处理
- 返回主色调结果，呼应前面的键值对
- 调用这个函数的地方就能得到主色

---

### 报错处理

```ts
  } catch (error) {
    console.error(`F**k this img: ${imageUrl}`, error)
    return { error: 'Failed. Totally f**ked', color: '#5a67d8' }
  }
```

- 如果下载或处理图片失败，打印错误日志
- 返回一个备用颜色 `#5a67d8`（深蓝色）
- 全挂了，别问了

---

### 工具函数

```ts
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    // 无视掉的色相，不使用
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}
```

- 每次循环都调取一次本方法
- 原本 0~255 的整数值，为计算方便先转成 0~1 的小数
- max 和 min：用于计算饱和度和亮度
- 亮度 l 为 ` l = (max + min) / 2 `
- 如 max == min 颜色是灰色 →→ 无需计算，用 let 初始丢给上面
- d 是色彩的“差异强度”
- 饱和度公式有两种分支（明暗），避免分母过小导致爆值
- 当颜色很亮时（ > 0.5 ），不会因为总亮度过高而把饱和度压得太低
- 当颜色很暗时（ < 0.5 ），放大色彩差异的影响，避免暗部色彩都堆一起
- 把 RGB（红绿蓝）转换成 HSL（色相、饱和度、亮度）
- 这样评分时更符合人眼对所谓主色的感知

## 总结
这套方案还算是简单易用，能满足大多数场景下对“智能配色”的需求  
总之，希望思路能够帮助到你在项目中实现更智能、更美观的配色功能  
  
## 速览
> _以下速览由 AI 生成，仅供参考。_

#算法 #图像处理 #JavaScript #色彩学 #NodeJS

**本文详细介绍了一种在后端从图片中提取主色调（Dominant Color）的算法实现。该算法旨在智能地选取最能代表图片视觉风格的颜色，而非简单地取平均色。其核心在于通过色彩空间转换和加权评分，筛选出最符合人眼感知的、鲜艳且具代表性的色彩。**

1.  **算法目标与应用 (Goal & Application)**
    -   目标：从任意图片中智能地选取一个“主色调”，用于音乐播放器、卡片配色、氛围灯等场景，提升视觉一致性。
    -   核心思路：避免简单的颜色平均，而是找到最具代表性的颜色。
2.  **实现步骤与代码详解 (Implementation & Code)**
    -   预处理：在后端（如 Node.js）使用 Sharp 库，先将图片缩小（例如到 50x50 像素）以大幅提高性能，并获取其原始像素数据（RAW Buffer）。
    -   像素遍历与筛选：遍历缩小后图片的每一个像素点，并过滤掉不具代表性的极端颜色，如纯黑（RGB 值 < 10）和纯白（RGB 值 > 245）。
    -   缓存机制：使用 `Map` 对象缓存已处理过的图片 URL 及其颜色结果，避免重复计算。
3.  **核心评分机制 (Core Scoring Mechanism)**
    -   色彩空间转换：将每个通过筛选的像素的 RGB 值转换为 HSL（色相、饱和度、亮度）值，因为 HSL 模型更符合人类对色彩的感知。
    -   加权评分：设计一个评分公式 `score = saturation * 0.7 + lightness * 0.3`，赋予饱和度更高的权重，以倾向于选择更鲜艳、更具活力的颜色。
    -   选出最佳：在所有像素的评分中，持续追踪并更新得分最高的颜色，作为最终选定的主色调。

### 2025.07.28 共勉
