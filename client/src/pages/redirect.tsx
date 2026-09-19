import { useEffect } from "react";
import { useLocation } from "wouter";
import { scrollToHash } from "@/lib/scroll";

/**
 * Redirect page component that redirects to the correct /docs/ path
 */
export default function RedirectPage({ to }: { to: string }) {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    const hashIndex = to.indexOf("#");
    if (hashIndex >= 0) {
      const path = to.slice(0, hashIndex) || "/";
      const hash = to.slice(hashIndex + 1);
      setLocation(path);
      requestAnimationFrame(() => {
        scrollToHash(hash, "smooth");
      });
      return;
    }
    setLocation(to);
  }, [to, setLocation]);
  
  // Show a brief message while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    </div>
  );
}

