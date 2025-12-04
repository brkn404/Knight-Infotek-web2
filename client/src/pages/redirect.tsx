import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Redirect page component that redirects to the correct /docs/ path
 */
export default function RedirectPage({ to }: { to: string }) {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Immediate redirect
    console.log(`[Redirect] Redirecting to: ${to}`);
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

