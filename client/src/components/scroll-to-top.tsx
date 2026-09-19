import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { scrollForNavigation } from "@/lib/scroll";

/**
 * Scroll to top on route changes, or to the target section when the URL has a hash.
 */
export function ScrollToTop() {
  const [location] = useLocation();
  const previousPathRef = useRef<string | null>(null);
  const previousHashRef = useRef<string | null>(null);

  useEffect(() => {
    const pathname = location.split("#")[0] || location;
    const hash = window.location.hash;
    const pathChanged = previousPathRef.current !== pathname;
    const hashChanged = previousHashRef.current !== hash;

    previousPathRef.current = pathname;
    previousHashRef.current = hash;

    if (!pathChanged && !hashChanged) {
      return;
    }

    const behavior: ScrollBehavior = pathChanged ? "auto" : "smooth";
    scrollForNavigation(pathname, hash, behavior);
  }, [location]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      previousHashRef.current = hash;
      scrollForNavigation(window.location.pathname, hash, "smooth");
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
