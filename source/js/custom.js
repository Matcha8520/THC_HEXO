/*================================
            侧边样式修复JS
 =================================*/
document.addEventListener("DOMContentLoaded", () => {
    const widgets = document.querySelectorAll("section.widget, section[class*='widget']");
    widgets.forEach(sec => {
      // 确保核心样式存在
      if (!sec.classList.contains("blur")) sec.classList.add("blur");
      if (!sec.classList.contains("floatable")) sec.classList.add("floatable");
      if (!sec.classList.contains("shadow")) sec.classList.add("shadow");
    });
  });
  