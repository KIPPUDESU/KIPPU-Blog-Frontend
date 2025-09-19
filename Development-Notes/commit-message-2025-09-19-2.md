### 重构描述

本次提交优化了 `Videos.vue` 中视频数据的获取和处理逻辑，使其更符合 Nuxt 3 的响应式数据获取范式。同时，改进了 `VideoCard.vue` 的布局和交互，提升了用户体验，并修复了 Bilibili 视频标题提取的准确性问题。

### 主要变更

*   **`app/components/views/Videos.vue`**:
    *   将视频列表和 Bilibili 视频详情的获取逻辑整合到 `useAsyncData` 中，并利用其 `watch` 选项实现响应式更新，取代了原有的 `watch` Effect，提高了代码的内聚性和效率。
    *   引入 `validVideos` 计算属性，用于过滤掉无效的视频数据，确保渲染的数据质量和类型安全。
    *   明确定义了 `Video` 接口，增强了类型检查。

*   **`app/components/VideoCard.vue`**:
    *   调整了视频封面区域的宽度 (`w-1/3` -> `w-5/14`) 和图片缩放比例 (`scale-104` -> `scale-110`)，优化视觉效果。
    *   修改了视频信息区域的内边距和外边距。
    *   移除了“观看视频”文本，将整个视频卡片区域设置为可点击链接，提升用户交互的直观性。

*   **`server/api/bilibili/[videoId].get.ts`**:
    *   修复了 Bilibili 视频标题提取的逻辑，通过正则表达式移除了标题末尾的 `_哔哩哔哩_bilibili` 后缀并去除多余空格，确保获取到的标题更简洁准确。

*   **`content/videos/*.md`**:
    *   更新了所有占位视频 Markdown 文件中的 `bvid` 字段，指向实际的 Bilibili 视频。
