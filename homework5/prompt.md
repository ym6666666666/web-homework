# 实验 Prompt（用于生成本项目）

> 用 HTML + CSS + 原生 JS 做一个能在手机(<768)、平板(768–1199)、桌面(≥1200)三档宽度下都正常使用的响应式数据看板。
> 必须满足：
> 1. 三个断点明确实现：<768 单列、768–1199 两列、≥1200 四列 + 固定侧栏；
> 2. 卡片布局用 grid 的 auto-fit / minmax() 或 flex-wrap，不得写死 width:1200px；
> 3. 页面在 320px–1920px 全程不出现横向滚动条；
> 4. 卡片的 6 条数据必须由 JS 数组渲染，不得手写 6 段重复 HTML；
> 5. 数字使用 font-variant-numeric: tabular-nums，切换时不抖动；
> 6. 用 CSS 变量管理颜色，提供深色/浅色可切换主题；
> 7. 图标用内联 SVG（明确尺寸 + currentColor）；
> 8. 语义化结构：h1/h2 标题、卡片区用 section、主题切换用 <button>。
> 额外：侧栏在桌面端固定（sticky），移动/平板端转为顶部横向导航。

# 文件说明
- `index.html`：语义化结构（aside 侧栏 / header / section 卡片区 / section 面板区）。
- `styles.css`：CSS 变量主题、三档媒体查询断点、grid auto-fit+minmax 卡片网格、overflow-x:hidden 防溢出。
- `app.js`：`METRICS` 数组渲染 6 张卡片、柱状图装饰、深/浅主题切换。
- `prompt.md`：本文件，记录生成用的 prompt。
