style(ui): refine corner rounding for plane/solid style

### 变更描述

对 `LeftInfoPanel` 和 `LowerPane` 组件的“平面/立体”切换样式进行了视觉微调，以提升界面的一致性和美感。

### 主要调整

- **统一圆角**: 将多个组件在“立体”模式下的圆角大小从 `rounded-lg` 和 `rounded-xl` 统一调整为 `rounded-2xl`，增强了视觉的和谐与柔和感。
- **精确控制**: 为 `LowerPane` 的左右面板分别添加了独立的圆角控制（`rounded-l-2xl`），确保在不同模式下边缘过渡平滑。
- **细节优化**: 微调了 `LeftInfoPanel` 内部元素的圆角，使其与整体设计语言保持一致。

---

**标题行中文翻译**:

样式(UI): 微调平面/立体风格的圆角样式
