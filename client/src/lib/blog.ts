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
    return posts.filter(post => post.published);
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
    try {
      const contentResponse = await fetch(`/content/blog/${slug}.md`);
      if (contentResponse.ok) {
        const content = await contentResponse.text();
        // Parse frontmatter if present
        const { content: markdownContent } = parseMarkdownFrontmatter(content);
        return { ...post, content: markdownContent };
      }
    } catch (e) {
      // Markdown file not found, that's okay
    }
    
    return post;
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}

// Parse markdown frontmatter
function parseMarkdownFrontmatter(markdown: string): { frontmatter: Record<string, string>, content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content: markdown };
  }
  
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

