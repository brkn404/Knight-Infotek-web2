import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile, cp } from "fs/promises";
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

const SITE_ORIGIN = "https://www.knightinfotek.com";

async function writeSitemapXml() {
  const staticPaths = [
    "/",
    "/enterprise-assurance",
    "/enterprise-assurance/when-data-becomes-infrastructure",
    "/enterprise-assurance/genomex-assurance-platform",
    "/blockchain-dna",
    "/cha-ching-analytics",
    "/agent-gx",
    "/services",
    "/services/cybersecurity-consulting",
    "/services/security-assessments",
    "/services/penetration-testing",
    "/enterprises",
    "/governments",
    "/blog",
    "/faq",
    "/privacy",
    "/terms",
  ];
  const solutionSlugs = [
    "fintech",
    "enterprise-assurance",
    "artificial-intelligence",
  ];
  const solutionPaths = solutionSlugs.map((s) => `/solutions/${s}`);

  const blogJsonPath = path.join(process.cwd(), "content/blog/blog-posts.json");
  let blogPaths: string[] = [];
  try {
    const raw = await readFile(blogJsonPath, "utf-8");
    const posts = JSON.parse(raw) as { slug: string; published?: boolean }[];
    blogPaths = posts
      .filter((p) => p.published !== false && p.slug)
      .map((p) => `/blog/${p.slug}`);
  } catch {
    console.warn("Could not read blog-posts.json for sitemap; skipping blog URLs");
  }

  const urls = [...staticPaths, ...solutionPaths, ...blogPaths];
  const lastmod = new Date().toISOString().split("T")[0];
  const body = urls
    .map((u) => {
      const priority = u === "/" ? "1.0" : u.startsWith("/blog/") ? "0.7" : "0.85";
      return `  <url>\n    <loc>${SITE_ORIGIN}${u}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  const outPath = path.join(process.cwd(), "client/public/sitemap.xml");
  await writeFile(outPath, xml, "utf-8");
  console.log("✓ sitemap written to client/public/sitemap.xml");
}

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  await writeSitemapXml();

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
