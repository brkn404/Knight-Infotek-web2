/** Fixed navbar clearance (matches scroll-mt-* on section anchors). */
export const NAVBAR_SCROLL_OFFSET = 100;

export function scrollToTop(behavior: ScrollBehavior = "auto") {
  window.scrollTo({ top: 0, left: 0, behavior });
}

export function scrollToHash(hash: string, behavior: ScrollBehavior = "auto") {
  const id = hash.replace(/^#/, "");
  if (!id) {
    scrollToTop(behavior);
    return;
  }

  const attempt = (retries = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - NAVBAR_SCROLL_OFFSET;
      window.scrollTo({ top: Math.max(0, top), behavior });
      return;
    }
    if (retries < 12) {
      window.setTimeout(() => attempt(retries + 1), 50);
    }
  };

  requestAnimationFrame(() => attempt());
}

export function scrollForNavigation(pathname: string, hash: string, behavior: ScrollBehavior = "auto") {
  if (hash) {
    scrollToHash(hash, behavior);
    return;
  }
  scrollToTop(behavior);
}
