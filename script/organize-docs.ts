import { cp, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const sourceBase = "/Volumes/evo4TB/kit/KGE/docs/products";
const destBase = "/Volumes/evo4TB/kit/KGE/KnightGlobal/content/docs";

const products = [
  { source: "BDNA/knowledge-base", dest: "blockchain-dna" },
  { source: "CCA/knowledge-base", dest: "cha-ching-analytics" },
  { source: "zk30/knowledge-base", dest: "zero-knight-30" },
  { source: "ChainGuard/knowledge-base", dest: "chain-guardian" },
];

async function organizeDocs() {
  console.log("Organizing product documentation...\n");

  for (const product of products) {
    const sourcePath = path.join(sourceBase, product.source);
    const destPath = path.join(destBase, product.dest);

    if (!existsSync(sourcePath)) {
      console.log(`⚠️  Source not found: ${sourcePath}`);
      continue;
    }

    try {
      // Create destination directory
      await mkdir(destPath, { recursive: true });

      // Copy all files
      await cp(sourcePath, destPath, { recursive: true });
      console.log(`✓ Copied ${product.dest} documentation`);
    } catch (error) {
      console.error(`✗ Error copying ${product.dest}:`, error);
    }
  }

  console.log("\n✅ Documentation organization complete!");
  console.log(`Files are in: ${destBase}`);
}

organizeDocs().catch(console.error);

