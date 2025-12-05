import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static files with directory listing disabled
  app.use(express.static(distPath, {
    dotfiles: "deny", // Deny access to dotfiles (.env, .git, etc.)
    index: false, // Disable directory listing
  }));

  // Serve robots.txt if it exists
  const robotsPath = path.join(distPath, "robots.txt");
  if (fs.existsSync(robotsPath)) {
    app.get("/robots.txt", (_req, res) => {
      res.sendFile(robotsPath);
    });
  }

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
