import { readFile, readdir, writeFile } from 'fs/promises';
import { join } from 'path';

const blogDir = join(process.cwd(), 'content/blog');

// Category mapping based on keywords in title/content
function inferCategory(title, filename) {
  const lowerTitle = title.toLowerCase();
  const lowerFile = filename.toLowerCase();
  
  if (lowerTitle.includes('defi') || lowerTitle.includes('exploit') || lowerTitle.includes('wallet')) {
    return 'Blockchain Security';
  }
  if (lowerTitle.includes('ai') || lowerTitle.includes('agent') || lowerTitle.includes('autonomous')) {
    return 'AI';
  }
  if (lowerTitle.includes('compliance') || lowerTitle.includes('regulatory') || lowerTitle.includes('mica') || lowerTitle.includes('genius')) {
    return 'Compliance';
  }
  if (lowerTitle.includes('bitcoin') || lowerTitle.includes('miner') || lowerTitle.includes('chain') || lowerTitle.includes('ordinal')) {
    return 'Blockchain';
  }
  if (lowerTitle.includes('ransomware') || lowerTitle.includes('zero-day') || lowerTitle.includes('insider') || lowerTitle.includes('air-gap') || lowerTitle.includes('behavioral')) {
    return 'Cybersecurity';
  }
  if (lowerTitle.includes('cross-chain') || lowerTitle.includes('fraud')) {
    return 'Security';
  }
  if (lowerTitle.includes('rwa') || lowerTitle.includes('tokenization')) {
    return 'Tokenization';
  }
  
  return 'Blockchain';
}

// Generate slug from filename
function generateSlug(filename) {
  return filename
    .replace(/^\d{4}-\d{2}-\d{2}-/, '') // Remove date prefix
    .replace(/\.md$/, '') // Remove .md extension
    .toLowerCase();
}

// Extract excerpt from content (first paragraph after intro)
function extractExcerpt(content) {
  // Skip the title and metadata
  const lines = content.split('\n');
  let startIndex = 0;
  
  // Find where content starts (after --- separator)
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      startIndex = i + 1;
      break;
    }
  }
  
  // Get first substantial paragraph
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line && !line.startsWith('#') && line.length > 50) {
      // Take first 200 characters
      let excerpt = line.substring(0, 200);
      if (excerpt.length === 200) {
        excerpt += '...';
      }
      return excerpt;
    }
  }
  
  return 'Read more about this topic.';
}

async function generateBlogIndex() {
  console.log('📝 Generating blog index...\n');
  
  const files = await readdir(blogDir);
  const blogFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md' && f !== 'example-post.md');
  
  const posts = [];
  let id = 1;
  
  for (const file of blogFiles.sort()) {
    try {
      const content = await readFile(join(blogDir, file), 'utf-8');
      
      // Extract title (first # heading)
      const titleMatch = content.match(/^# (.+)$/m);
      if (!titleMatch) continue;
      
      const title = titleMatch[1].trim();
      
      // Extract published date
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
        id: id++,
        title,
        excerpt,
        date,
        category,
        readTime: readingTime,
        slug,
        published: true
      });
      
      console.log(`✓ Processed: ${title.substring(0, 50)}...`);
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }
  
  // Sort by date (newest first)
  posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
  
  // Update IDs after sorting
  posts.forEach((post, index) => {
    post.id = index + 1;
  });
  
  // Write blog-posts.json
  await writeFile(
    join(blogDir, 'blog-posts.json'),
    JSON.stringify(posts, null, 2) + '\n',
    'utf-8'
  );
  
  console.log(`\n✅ Generated blog index with ${posts.length} posts`);
  console.log(`   File: ${join(blogDir, 'blog-posts.json')}`);
}

generateBlogIndex().catch(console.error);

