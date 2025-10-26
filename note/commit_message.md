refactor(banner): simplify responsive breakpoints

### 变更描述

本次提交重构了 `Banner` 相关组件的响应式样式代码，旨在简化并统一大屏幕尺寸下的显示效果。

**主要变更:**

*   **简化响应式断点:** 移除了专门针对 `xl` 和 `2xl` 等超大屏幕尺寸的特定 Tailwind CSS 样式类。
*   **统一设计基准:** 将大屏幕的响应式样式统一到 `lg` 断点，确保了设计在所有大尺寸屏幕上的一致性，并减少了冗余代码。

**影响范围:**

*   `app/components/banner/BannerLeftInfo.vue`
*   `app/components/banner/BannerRightInfo.vue`
*   `app/components/banner/HomeBanner.vue`

此举提升了样式代码的可读性与长期可维护性。

---
*标题行中文翻译：* 重构(Banner): 简化响应式断点