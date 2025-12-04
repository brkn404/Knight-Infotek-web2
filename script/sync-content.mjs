import { readdir, copyFile, mkdir, stat, cp, rm } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const sourceBlogDir = join(process.cwd(), 'content/blog');
const destBlogDir = join(process.cwd(), 'client/public/content/blog');
const sourceDocsDir = join(process.cwd(), 'content/docs');
const destDocsDir = join(process.cwd(), 'client/public/content/docs');

console.log('🔄 Syncing content files...\n');
console.log(`Working directory: ${process.cwd()}`);
console.log(`Source docs: ${sourceDocsDir}`);
console.log(`Dest docs: ${destDocsDir}\n`);

async function syncContent() {
  try {
    // Sync blog files
    await mkdir(destBlogDir, { recursive: true });
    
    const blogFiles = await readdir(sourceBlogDir);
    
    let blogCount = 0;
    for (const file of blogFiles) {
      if (file.endsWith('.md') && file !== 'README.md' && file !== 'example-post.md') {
        const sourcePath = join(sourceBlogDir, file);
        const destPath = join(destBlogDir, file);
        
        const stats = await stat(sourcePath);
        if (stats.isFile()) {
          await copyFile(sourcePath, destPath);
          blogCount++;
        }
      }
    }
    
    // Copy blog JSON file
    const jsonSource = join(sourceBlogDir, 'blog-posts.json');
    const jsonDest = join(destBlogDir, 'blog-posts.json');
    try {
      await copyFile(jsonSource, jsonDest);
    } catch (e) {
      console.warn(`⚠ Could not copy blog-posts.json:`, e.message);
    }
    
    // Sync docs directory (recursive copy)
    try {
      if (!existsSync(sourceDocsDir)) {
        console.warn(`⚠️  Source docs directory not found: ${sourceDocsDir}`);
      } else {
        // Remove existing docs directory
        try {
          await rm(destDocsDir, { recursive: true, force: true });
          console.log(`Removed existing public docs directory`);
        } catch (e) {
          // Ignore if doesn't exist
        }
        
        // Create parent directory
        await mkdir(join(process.cwd(), 'client/public/content'), { recursive: true });
        
        // Copy docs directory
        await cp(sourceDocsDir, destDocsDir, { recursive: true, force: true });
        console.log(`✓ Synced docs directory from ${sourceDocsDir} to ${destDocsDir}`);
        
        // Verify key files exist
        const testFiles = [
          'blockchain-dna/README.md',
          'blockchain-dna/integrations/README.md',
          'blockchain-dna/api/README.md',
          'blockchain-dna/troubleshooting/README.md',
          'cha-ching-analytics/knowledge-base.md',
          'zero-knight-30/faq.md',
          'chain-guardian/README.md',
        ];
        
        let verified = 0;
        for (const testFile of testFiles) {
          const testPath = join(destDocsDir, testFile);
          try {
            await stat(testPath);
            verified++;
          } catch (e) {
            console.warn(`⚠️  Could not verify: ${testFile}`);
          }
        }
        console.log(`✓ Verified ${verified}/${testFiles.length} key files exist`);
      }
    } catch (e) {
      console.error(`❌ Error syncing docs directory:`, e.message);
      console.error(`   Source: ${sourceDocsDir}`);
      console.error(`   Dest: ${destDocsDir}`);
    }
    
    console.log(`\n✅ Synced ${blogCount} blog files + docs directory`);
  } catch (error) {
    console.error('Error syncing content:', error);
    process.exit(1);
  }
}

syncContent();

