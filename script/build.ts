import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, cp } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "@neondatabase/serverless",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  // Copy content directory to public folder for blog posts
  const contentDir = path.join(process.cwd(), "content");
  const publicContentDir = path.join(process.cwd(), "dist", "public", "content");
  if (existsSync(contentDir)) {
    console.log("copying content files...");
    try {
      await cp(contentDir, publicContentDir, { recursive: true });
      console.log("✓ Content files copied");
    } catch (err) {
      console.warn("Warning: Could not copy content files:", err);
    }
  }

  // If BUILD_TO_HTML is set, copy to Nginx html directory
  if (process.env.BUILD_TO_HTML === "true" || process.env.BUILD_TO_HTML === "1") {
    const htmlDir = "/var/www/knightinfotek.com/html";
    const distPublic = path.join(process.cwd(), "dist", "public");
    if (existsSync(htmlDir) && existsSync(distPublic)) {
      console.log("copying to Nginx html directory...");
      try {
        // Copy all files from dist/public to html directory
        const files = await import("fs/promises");
        const entries = await files.readdir(distPublic, { withFileTypes: true });
        for (const entry of entries) {
          const src = path.join(distPublic, entry.name);
          const dest = path.join(htmlDir, entry.name);
          if (entry.isDirectory()) {
            await cp(src, dest, { recursive: true });
          } else {
            await files.copyFile(src, dest);
          }
        }
        console.log("✓ Files copied to:", htmlDir);
      } catch (err) {
        console.warn("Warning: Could not copy to html directory:", err);
      }
    } else {
      console.warn("Warning: html directory or dist/public not found");
    }
  }

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
