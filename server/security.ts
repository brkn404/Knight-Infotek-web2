import { type Express } from "express";

/**
 * Security middleware to protect against common attacks
 */
export function setupSecurity(app: Express) {
  // Block access to sensitive paths
  app.use((req, res, next) => {
    const sensitivePaths = [
      "/.env",
      "/.git",
      "/node_modules",
      "/attached_assets",
      "/gpt",
      "/zk30",
      "/CCA",
      "/server",
      "/script",
      "/.DS_Store",
      "/package.json",
      "/package-lock.json",
      "/tsconfig.json",
      "/vite.config.ts",
    ];

    const path = req.path.toLowerCase();
    
    // Block if path starts with any sensitive path
    for (const sensitive of sensitivePaths) {
      if (path.startsWith(sensitive.toLowerCase())) {
        res.status(404).json({ error: "Not Found" });
        return;
      }
    }

    // Block directory traversal attempts
    if (path.includes("..") || path.includes("//")) {
      res.status(400).json({ error: "Bad Request" });
      return;
    }

    next();
  });

  // Security headers
  app.use((req, res, next) => {
    // Prevent directory listing
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    
    // Remove server information
    res.removeHeader("X-Powered-By");
    
    next();
  });

  // Rate limiting for API endpoints (basic)
  const requestCounts = new Map<string, { count: number; resetTime: number }>();
  const RATE_LIMIT_WINDOW = 60000; // 1 minute
  const RATE_LIMIT_MAX = 100; // 100 requests per minute

  app.use((req, res, next) => {
    if (req.path.startsWith("/api")) {
      const ip = req.ip || req.socket.remoteAddress || "unknown";
      const now = Date.now();
      
      const record = requestCounts.get(ip);
      
      if (!record || now > record.resetTime) {
        requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        next();
      } else if (record.count >= RATE_LIMIT_MAX) {
        res.status(429).json({ error: "Too many requests" });
        return;
      } else {
        record.count++;
        next();
      }
    } else {
      next();
    }
  });
}

