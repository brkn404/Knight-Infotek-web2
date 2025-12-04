import { readFile, readdir, writeFile, copyFile } from 'fs/promises';
import { join } from 'path';

const sourceDir = '/Volumes/evo4TB/kit/KGE/docs/products/blogs/blog';
const destDir = join(process.cwd(), 'content/blog');

function inferCategory(title, filename) {
  const lower = (title + ' ' + filename).toLowerCase();
  
  if (lower.includes('defi') || lower.includes('exploit') || lower.includes('wallet')) {
    return 'Blockchain Security';
  }
  if (lower.includes('ai') || lower.includes('agent') || lower.includes('autonomous')) {
    return 'AI';
  }
  if (lower.includes('compliance') || lower.includes('regulatory') || lower.includes('mica') || lower.includes('genius')) {
    return 'Compliance';
  }
  if (lower.includes('bitcoin') || lower.includes('miner') || lower.includes('chain') || lower.includes('ordinal')) {
    return 'Blockchain';
  }
  if (lower.includes('ransomware') || lower.includes('zero-day') || lower.includes('insider') || lower.includes('air-gap') || lower.includes('behavioral')) {
    return 'Cybersecurity';
  }
  if (lower.includes('cross-chain') || lower.includes('fraud')) {
    return 'Security';
  }
  if (lower.includes('rwa') || lower.includes('tokenization')) {
    return 'Tokenization';
  }
  
  return 'Blockchain';
}

function generateSlug(filename) {
  return filename
    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
    .replace(/\.md$/, '')
    .toLowerCase();
}

function extractExcerpt(content) {
  const lines = content.split('\n');
  let startIndex = 0;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      startIndex = i + 1;
      break;
    }
  }
  
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line && !line.startsWith('#') && line.length > 50) {
      return line.substring(0, 200) + (line.length > 200 ? '...' : '');
    }
  }
  
  return 'Read more about this topic.';
}

async function main() {
  console.log('📝 Copying and indexing blog posts...\n');
  
  const files = await readdir(sourceDir);
  const blogFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md').sort();
  
  console.log(`Found ${blogFiles.length} blog posts\n`);
  
  const posts = [];
  
  for (const file of blogFiles) {
    try {
      const sourcePath = join(sourceDir, file);
      const destPath = join(destDir, file);
      
      // Copy file
      await copyFile(sourcePath, destPath);
      console.log(`✓ Copied: ${file}`);
      
      // Read content
      const content = await readFile(sourcePath, 'utf-8');
      
      // Extract title
      const titleMatch = content.match(/^# (.+)$/m);
      if (!titleMatch) continue;
      
      const title = titleMatch[1].trim();
      
      // Extract date
      const dateMatch = content.match(/\*\*Published\*\*:\s*(.+)/);
      const date = dateMatch ? dateMatch[1].trim() : 'January 2025';
      
      // Extract reading time
      const timeMatch = content.match(/\*\*Reading Time\*\*:\s*(\d+)\s*minutes?/i);
      const readingTime = timeMatch ? `${timeMatch[1]} min read` : '5 min read';
      
      // Generate slug
      const slug = generateSlug(file);
      
      // Infer category
      const category = inferCategory(title, file);
      
      // Extract excerpt
      const excerpt = extractExcerpt(content);
      
      posts.push({
        id: posts.length + 1,
        title,
        excerpt,
        date,
        category,
        readTime: readingTime,
        slug,
        published: true
      });
      
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }
  
  // Sort by date (newest first) - simple string sort
  posts.sort((a, b) => {
    // Try to parse dates, fallback to string comparison
    try {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (!isNaN(dateA) && !isNaN(dateB)) {
        return dateB - dateA;
      }
    } catch (e) {}
    return b.date.localeCompare(a.date);
  });
  
  // Update IDs
  posts.forEach((post, i) => {
    post.id = i + 1;
  });
  
  // Write blog-posts.json
  await writeFile(
    join(destDir, 'blog-posts.json'),
    JSON.stringify(posts, null, 2) + '\n',
    'utf-8'
  );
  
  console.log(`\n✅ Complete!`);
  console.log(`   Copied ${blogFiles.length} blog posts`);
  console.log(`   Generated blog-posts.json with ${posts.length} entries`);
}

main().catch(console.error);

