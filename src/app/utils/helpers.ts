export const isElementVisible = (el: HTMLElement | null) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check if any part of the element is within the viewport
  const verticalVisible = rect.top <= windowHeight && rect.bottom >= 0;
  const horizontalVisible = rect.left <= windowWidth && rect.right >= 0;

  return verticalVisible && horizontalVisible;
};
