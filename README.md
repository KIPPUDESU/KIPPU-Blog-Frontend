# KIPPU Blog Frontend

本项目基于 Nuxt 3 和 Tailwind CSS 构建、是一个高度定制化的个人博客前端  
此博客不仅作为简单的内容展示平台，更是一个汇集作者审美理解，集成丰富动态交互和现代 Web 技术栈的个人作品集  

## 功能与特性

*   **动态视图**: 应用核心采用动态组件加载  
在主页 (`pages/index.vue`) 中，可根据左侧导航栏的选择，无刷新的同时还能切换不同视图  
切换的视图内容显示在`index.vue`的容器中，也就是左侧导航栏右侧的展示区域  
  
*   **内容驱动**: 全站文章内容由 `@nuxt/content` 模块驱动  
所有文章均通过 `content/` 目录下的 Markdown 文件进行管理  
通过 Nuxt Hooks，实现了对 Markdown 内容的扩展，例如自动计算并注入**阅读时长**  
  
*   **全局状态管理**: 使用 Pinia (`stores/test.ts`) 并开启持久化 (`pinia-plugin-persistedstate`)  
用于管理全局 UI 状态（如 `PlaneOrSolid` 模式），确保用户设置在刷新后依然保留  
网站提供了一个 Plane 主题与一个 Solid  主题，切换方法是通过点击主页的“KIPPU”大图标  
这样一来，你将会在 Tailwind 的过渡动画后看到本博客提供的第二种主题，请挑选喜欢的主题样式进行文章浏览  
  
*   **动画**：本博客包含了大量互动动画  
但由于本人并不认可让用户“被动交互”的动画，所以本博客的动画以**保障不破坏用户的浏览体验**为前提构建  
**如若依旧给你带来了糟糕的浏览体验，我在此向你郑重道歉**  

## 技术栈

*   **框架**: [Nuxt 4](https://nuxt.com/)
*   **视图层**: [Vue 3](https://vuejs.org/)
*   **UI 框架**: [Tailwind CSS](https://tailwindcss.com/)
*   **状态管理**: [Pinia](https://pinia.vuejs.org/) & `pinia-plugin-persistedstate`
*   **内容管理**: [Nuxt Content v3](https://content.nuxt.com/)
*   **语言**: [TypeScript](https://www.typescriptlang.org/)
*   **包管理器**: [pnpm](https://pnpm.io/)

## 本地开发

**环境要求**:
*   Node.js (v22.14.0)
*   pnpm

**1. 克隆仓库**
```bash
git clone [https://github.com/KIPPUDESU/KIPPU-Blog-Frontend.git]
cd KIPPU-Blog-Frontend
```

**2. 安装依赖**
```bash
pnpm install
```

**3. 启动开发服务器**
访问 `http://localhost:3000` 查看
```bash
# 直接启动开发页面
pnpm dev
  
# 构建用于生产环境的应用
pnpm run build
   
# 本地预览生产版本
pnpm run preview
```

## 项目结构

```
.
├── app/
│   ├── components/    # 主要组件
│   │   └── views/     # 视图选项组件 (由 index.vue 动态加载)
│   ├── layouts/       # 网页布局
│   ├── pages/         # 页面与路由
│   │   ├── index.vue        # 主页动态视图
│   │   └── blog/[...slug].vue # 文章详情
│   └── stores/        # Pinia 状态模块
├── content/
│   └── blog/          # Markdown 源文件
├── public/            # 静态资源
├── nuxt.config.ts     # Nuxt 核心配置
└── package.json       # 项目依赖与脚本
```

## 核心组件概览

*   `app/components/LeftInfoPanel.vue`: **交互中枢**。常驻左侧导航面板，负责内容区视图切换
*   `app/pages/index.vue`: **应用主舞台**。整合 `LeftInfoPanel` 和动态视图区，通过 `<component :is="...">` 实现单页内多视图切换
*   `app/pages/blog/[...slug].vue`: **内容渲染器**。使用 `<ContentRenderer />` 组件及 tailwindcss/typography 渲染 Markdown 生成的文章页

## 内容管理

要发布一篇新文章，请在 `content/blog/` 目录下添加一个新的 Markdown (`.md`) 文件。文件必须包含 `front-matter` 以定义文章元数据。

**Front-matter 示例:**
```yaml
---
title: "文章标题"
classify: "此文章的分类"
date: "20xx-xx-xx(文章日期)"
image: "/img/xxxx.png（文章封面相对路径）"
---
文章正文内容...
```

---
### 本项目是作者在前端领域不断探索和学习的记录，如果说给您带来某些启发，我不胜荣幸

&copy; 2025 KIPPU.