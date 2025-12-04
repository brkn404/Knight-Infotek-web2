import { readFile } from 'fs/promises';
import { join } from 'path';
import { writeFile } from 'fs/promises';

const sourceDir = '/Volumes/evo4TB/kit/KGE/docs/products/blogs/blog';
const destDir = join(process.cwd(), 'content/blog');

const blogFiles = [
  '2025-02-20-regulatory-compliance-behavioral-analytics.md',
  '2025-02-10-cross-chain-security-behavioral-analytics.md',
  '2025-02-01-wallet-security-behavioral-anomaly-detection.md',
  '2025-01-22-ai-agents-blockchain-identity-governance.md',
  '2025-01-15-preventing-defi-exploits-behavioral-intelligence.md',
  'ai-attacks-ai-defense.md',
  'air-gapped-security-challenge.md',
  'behavioral-intelligence-proactive-threat-detection.md',
  'bitcoin-miner-liability-illegal-content.md',
  'cross-chain-fraud-frontier.md',
  'genius-act-real-time-compliance.md',
  'insider-threat-behavioral-detection.md',
  'legacy-compliance-failure.md',
  'mica-multi-jurisdiction-compliance.md',
  'ordinals-illegal-content-bitcoin.md',
  'privacy-compliance-bitcoin-mining.md',
  'ransomware-recovery-revolution.md',
  'regulatory-compliance-bitcoin-miners.md',
  'rwa-tokenization-compliance.md',
  'zero-day-defense-behavioral-analysis.md',
];

function inferCategory(title, filename) {
  const lower = (title + ' ' + filename).toLowerCase();
  if (lower.includes('defi') || lower.includes('exploit') || lower.includes('wallet')) return 'Blockchain Security';
  if (lower.includes('ai') || lower.includes('agent') || lower.includes('autonomous')) return 'AI';
  if (lower.includes('compliance') || lower.includes('regulatory') || lower.includes('mica') || lower.includes('genius')) return 'Compliance';
  if (lower.includes('bitcoin') || lower.includes('miner') || lower.includes('chain') || lower.includes('ordinal')) return 'Blockchain';
  if (lower.includes('ransomware') || lower.includes('zero-day') || lower.includes('insider') || lower.includes('air-gap') || lower.includes('behavioral')) return 'Cybersecurity';
  if (lower.includes('cross-chain') || lower.includes('fraud')) return 'Security';
  if (lower.includes('rwa') || lower.includes('tokenization')) return 'Tokenization';
  return 'Blockchain';
}

function generateSlug(filename) {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '').toLowerCase();
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
  console.log('📝 Generating blog index from source files...\n');
  
  const posts = [];
  
  for (const file of blogFiles) {
    try {
      const content = await readFile(join(sourceDir, file), 'utf-8');
      const titleMatch = content.match(/^# (.+)$/m);
      if (!titleMatch) continue;
      
      const title = titleMatch[1].trim();
      const dateMatch = content.match(/\*\*Published\*\*:\s*(.+)/);
      const date = dateMatch ? dateMatch[1].trim() : 'January 2025';
      const timeMatch = content.match(/\*\*Reading Time\*\*:\s*(\d+)\s*minutes?/i);
      const readingTime = timeMatch ? `${timeMatch[1]} min read` : '5 min read';
      const slug = generateSlug(file);
      const category = inferCategory(title, file);
      const excerpt = extractExcerpt(content);
      
      posts.push({ id: posts.length + 1, title, excerpt, date, category, readTime: readingTime, slug, published: true });
      console.log(`✓ ${title.substring(0, 50)}...`);
    } catch (error) {
      console.error(`✗ ${file}:`, error.message);
    }
  }
  
  // Sort by date
  posts.sort((a, b) => {
    try {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (!isNaN(dateA) && !isNaN(dateB)) return dateB - dateA;
    } catch (e) {}
    return b.date.localeCompare(a.date);
  });
  
  posts.forEach((post, i) => { post.id = i + 1; });
  
  await writeFile(join(destDir, 'blog-posts.json'), JSON.stringify(posts, null, 2) + '\n', 'utf-8');
  console.log(`\n✅ Generated blog-posts.json with ${posts.length} entries`);
}

main().catch(console.error);

