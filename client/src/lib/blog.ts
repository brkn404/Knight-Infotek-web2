// Blog utility functions for reading blog posts

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
  published: boolean;
  content?: string; // Full markdown content if loaded
}

// Load blog posts from JSON file
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // In production, this will fetch from the public directory
    const response = await fetch('/content/blog/blog-posts.json');
    if (!response.ok) {
      console.warn('Could not load blog posts, using fallback');
      return getFallbackPosts();
    }
    const posts: BlogPost[] = await response.json();
    const published = posts.filter(post => post.published);
    // Sort by date (newest first)
    return published.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA; // Descending order (newest first)
    });
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return getFallbackPosts();
  }
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getBlogPosts();
    const post = posts.find(p => p.slug === slug);
    
    if (!post) return null;
    
    // Try to load full content from markdown file
    // Files may have date prefixes (YYYY-MM-DD-) or no prefix
    // Use the post's date to determine the most likely filename first
    
    // Generate possible filenames based on the post's date
    const possibleFilenames: string[] = [];
    
    // Extract date from post.date (format: "December 24, 2025" or "March 20, 2025")
    // Convert to YYYY-MM-DD format for filename matching
    if (post.date) {
      try {
        const dateObj = new Date(post.date);
        if (!isNaN(dateObj.getTime())) {
          const year = dateObj.getFullYear();
          const month = String(dateObj.getMonth() + 1).padStart(2, '0');
          const day = String(dateObj.getDate()).padStart(2, '0');
          const datePrefix = `${year}-${month}-${day}-`;
          // Try the post's specific date first (most likely match)
          possibleFilenames.push(`${datePrefix}${slug}.md`);
        }
      } catch (e) {
        console.debug('Could not parse date from post:', e);
      }
    }
    
    // Add other common date prefixes as fallback
    const datePrefixes = ['2025-12-24-', '2025-12-25-', '2025-01-15-', '2025-01-22-', '2025-02-01-', '2025-02-10-', '2025-02-20-', '2025-02-27-', '2025-02-28-'];
    datePrefixes.forEach(prefix => {
      if (!possibleFilenames.includes(`${prefix}${slug}.md`)) {
        possibleFilenames.push(`${prefix}${slug}.md`);
      }
    });
    
    // Add slug-only version as last resort
    possibleFilenames.push(`${slug}.md`);
    
    // Try each filename
    for (const filename of possibleFilenames) {
      try {
        const contentResponse = await fetch(`/content/blog/${filename}`);
        if (contentResponse.ok) {
          const contentType = contentResponse.headers.get('content-type');
          // Only process if it's text/markdown or text/plain, not HTML
          if (!contentType || !contentType.includes('text/html')) {
            const content = await contentResponse.text();
            // Check if content looks like HTML (starts with <!DOCTYPE or <html)
            const trimmed = content.trim();
            if (trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html')) {
              console.warn(`File ${filename} returned HTML instead of markdown`);
              continue;
            }
            // Parse frontmatter if present (our format uses --- separator)
            const { content: markdownContent } = parseMarkdownFrontmatter(content);
            if (markdownContent && markdownContent.trim().length > 0) {
              console.log(`✓ Loaded content from ${filename}`);
              return { ...post, content: markdownContent };
            } else {
              console.warn(`File ${filename} parsed but has no content after frontmatter`);
            }
          }
        }
      } catch (e) {
        // Continue to next filename pattern
        console.debug(`Failed to load ${filename}:`, e);
      }
    }
    
    console.warn(`Could not find markdown file for slug: ${slug}. Tried: ${possibleFilenames.join(', ')}`);
    
    return post;
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}

// Parse markdown frontmatter
// Our blog format uses --- as a separator after metadata, not traditional frontmatter
function parseMarkdownFrontmatter(markdown: string): { frontmatter: Record<string, string>, content: string } {
  // Check for traditional frontmatter first
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);
  
  if (match) {
    const frontmatterText = match[1];
    const content = match[2];
    const frontmatter: Record<string, string> = {};
    
    frontmatterText.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
        frontmatter[key] = value;
      }
    });
    
    return { frontmatter, content };
  }
  
  // Our format: title, then metadata lines, then --- separator, then content
  // Skip the title (first line starting with #)
  // Skip metadata lines (starting with **)
  // Find the --- separator
  const lines = markdown.split('\n');
  let contentStart = 0;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      contentStart = i + 1;
      break;
    }
  }
  
  // Return everything after the --- separator as content
  const content = lines.slice(contentStart).join('\n');
  return { frontmatter: {}, content };
}

// Fallback posts if JSON file can't be loaded
function getFallbackPosts(): BlogPost[] {
  return [
    {
      id: 1,
      title: "The Future of Behavioral Trust in Blockchain",
      excerpt: "Exploring how behavioral intelligence is transforming blockchain security and compliance.",
      date: "January 15, 2025",
      category: "Blockchain",
      readTime: "5 min read",
      slug: "future-behavioral-trust-blockchain",
      published: true
    },
    {
      id: 2,
      title: "AI Governance: Balancing Autonomy and Control",
      excerpt: "How GenomeX enables safe deployment of autonomous AI agents in regulated industries.",
      date: "January 10, 2025",
      category: "AI",
      readTime: "7 min read",
      slug: "ai-governance-autonomy-control",
      published: true
    },
    {
      id: 3,
      title: "Real-Time Compliance at Blockchain Speed",
      excerpt: "Understanding how Cha-Ching Analytics delivers compliance in under 4 seconds.",
      date: "January 5, 2025",
      category: "Compliance",
      readTime: "6 min read",
      slug: "real-time-compliance-blockchain-speed",
      published: true
    }
  ];
}

