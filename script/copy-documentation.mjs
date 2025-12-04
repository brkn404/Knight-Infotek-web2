import { cp, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const sourceBase = '/Volumes/evo4TB/kit/KGE/docs/products';
const destBase = join(projectRoot, 'content/docs');

const products = [
  { source: 'BDNA/knowledge-base', dest: 'blockchain-dna' },
  { source: 'CCA/knowledge-base', dest: 'cha-ching-analytics' },
  { source: 'zk30/knowledge-base', dest: 'zero-knight-30' },
  { source: 'ChainGuard/knowledge-base', dest: 'chain-guardian' },
];

async function copyDocumentation() {
  console.log('📚 Organizing product documentation...\n');

  for (const product of products) {
    const sourcePath = join(sourceBase, product.source);
    const destPath = join(destBase, product.dest);

    if (!existsSync(sourcePath)) {
      console.log(`⚠️  Source not found: ${sourcePath}`);
      continue;
    }

    try {
      // Create destination directory
      await mkdir(destPath, { recursive: true });

      // Copy all files recursively
      await cp(sourcePath, destPath, { recursive: true });
      console.log(`✓ Copied ${product.dest} documentation`);
    } catch (error) {
      console.error(`✗ Error copying ${product.dest}:`, error.message);
    }
  }

  console.log('\n✅ Documentation organization complete!');
  console.log(`Files are in: ${destBase}`);
}

copyDocumentation().catch(console.error);

