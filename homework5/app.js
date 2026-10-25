// ============ 数据：6 条指标，由 JS 数组渲染（不手写重复 HTML） ============
const METRICS = [
  {
    label: "总用户数",
    value: 128453,
    trend: +12.4,
    icon: '<path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5Z" fill="currentColor"/>'
  },
  {
    label: "今日订单",
    value: 3842,
    trend: +5.1,
    icon: '<path d="M6 2h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm8 1.5V8h4.5L14 3.5ZM8 12h8v2H8Zm0 4h8v2H8Z" fill="currentColor"/>'
  },
  {
    label: "销售额 (¥)",
    value: 269800,
    trend: +8.7,
    icon: '<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-2h2Zm2.1-6.9-1 1.1A2 2 0 0 0 13 15h-2v-.6a2 2 0 0 1 .9-1.7l1.4-1.2A1 1 0 0 0 13 10h-2V8h2a2 2 0 0 1 1.9 2.3Z" fill="currentColor"/>'
  },
  {
    label: "转化率",
    value: 3.82,
    trend: -0.6,
    icon: '<path d="M4 20V10h4v10Zm6 0V4h4v16Zm6 0v-6h4v6Z" fill="currentColor"/>'
  },
  {
    label: "活跃用户",
    value: 54210,
    trend: +3.2,
    icon: '<path d="M12 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 14c-5 0-9 2.5-9 5.5V22h18v-.5c0-3-4-5.5-9-5.5Z" fill="currentColor"/>'
  },
  {
    label: "退款率",
    value: 1.14,
    trend: -0.3,
    icon: '<path d="M12 5V2L7 7l5 5V8a5 5 0 1 1-5 5H5a7 7 0 1 0 7-8Z" fill="currentColor"/>'
  }
];

// 千分位格式化，配合 tabular-nums 不抖动
const fmt = (n) =>
  n.toLocaleString("zh-CN", { maximumFractionDigits: 2 });

function trendText(t) {
  const pct = Math.abs(t).toFixed(1) + "%";
  return (t >= 0 ? "▲ " : "▼ ") + pct + (t >= 0 ? " 环比" : " 环比");
}

function renderMetrics() {
  const root = document.getElementById("metrics");
  root.innerHTML = METRICS.map((m) => {
    const up = m.trend >= 0;
    return `
      <article class="card">
        <div class="card__head">
          <span class="card__icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">${m.icon}</svg>
          </span>
          <span class="card__label">${m.label}</span>
        </div>
        <div class="card__value tnum">${fmt(m.value)}</div>
        <div class="card__trend ${up ? "up" : "down"} tnum">${trendText(m.trend)}</div>
      </article>`;
  }).join("");
}

// 装饰性柱状图
function renderBars() {
  const bars = document.getElementById("bars");
  const data = [40, 65, 52, 78, 60, 88, 72];
  bars.innerHTML = data
    .map((h) => `<span style="height:${h}%"></span>`)
    .join("");
}

// ============ 主题切换（深色 / 浅色） ============
function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  const label = btn.querySelector(".theme-toggle__label");
  btn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    label.textContent = next === "dark" ? "浅色" : "深色";
    btn.setAttribute("aria-pressed", String(!isDark));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMetrics();
  renderBars();
  initThemeToggle();
});
