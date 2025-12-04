import { cp, rm, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Source is at /Volumes/evo4TB/kit/KGE/docs/products
// Dest is at /Volumes/evo4TB/kit/KGE/Knight_InfoTek/content/docs
const sourceBase = '/Volumes/evo4TB/kit/KGE/docs/products';
const destBase = join(process.cwd(), 'content/docs');

console.log(`Working directory: ${process.cwd()}`);
console.log(`Source base: ${sourceBase}`);
console.log(`Dest base: ${destBase}`);

const productMappings = {
  'BDNA': 'blockchain-dna',
  'CCA': 'cha-ching-analytics',
  'zk30': 'zero-knight-30',
  'ChainGuard': 'chain-guardian',
};

async function syncProductDocs() {
  console.log('🔄 Syncing product documentation...\n');

  for (const [sourceDir, destDir] of Object.entries(productMappings)) {
    const sourcePath = join(sourceBase, sourceDir, 'knowledge-base');
    const destPath = join(destBase, destDir);

    try {
      // Check if source exists
      const { existsSync } = await import('fs');
      if (!existsSync(sourcePath)) {
        console.warn(`⚠️  Source not found: ${sourcePath}`);
        continue;
      }

      // Create destination directory
      await mkdir(destPath, { recursive: true });

      // Remove existing destination (to ensure clean copy)
      try {
        await rm(destPath, { recursive: true, force: true });
      } catch (e) {
        // Ignore if doesn't exist
      }

      // Create fresh directory
      await mkdir(destPath, { recursive: true });

      // Copy all files recursively
      await cp(sourcePath, destPath, { recursive: true, force: true });

      console.log(`✅ Synced ${sourceDir} → ${destDir}`);
      console.log(`   Source: ${sourcePath}`);
      console.log(`   Dest: ${destPath}\n`);
    } catch (error) {
      console.error(`❌ Error syncing ${sourceDir}:`, error.message);
    }
  }

  console.log('✅ Product documentation sync complete!');
}

syncProductDocs();

