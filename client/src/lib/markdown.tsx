// Simple markdown renderer without external dependencies
import React from 'react';

export function renderMarkdown(markdown: string, currentPath?: string): React.ReactNode {
  if (!markdown) return null;

  const lines = markdown.split('\n');
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLanguage = '';

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        elements.push(
          <p key={elements.length} className="text-muted-foreground mb-4 leading-relaxed">
            {processInlineMarkdown(text, currentPath)}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  // Convert relative markdown paths to /docs/ routes
  const normalizeLink = (url: string, currentPath?: string): string => {
    // If already absolute /docs/ link, return as-is
    if (url.startsWith('/docs/')) {
      return url;
    }
    
    // If external link (http/https), return as-is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // Normalize the URL for pattern matching (lowercase, remove extra slashes)
    const normalizedUrl = url.toLowerCase().replace(/\/+/g, '/');
    
    // Extract product from currentPath if available (e.g., /content/docs/blockchain-dna/faq/README.md)
    let product = 'blockchain-dna'; // default
    if (currentPath) {
      const match = currentPath.match(/\/content\/docs\/([^\/]+)/);
      if (match) {
        product = match[1];
      }
    }
    
    // Map common relative paths to /docs/ routes
    // Check for specific patterns in the URL
    if (normalizedUrl.includes('genomex_whitepaper') || 
        (normalizedUrl.includes('wps') && normalizedUrl.includes('genomex'))) {
      return '/docs/blockchain-dna/features/genomex';
    }
    
    if (normalizedUrl.includes('quantum_syndrome') || 
        normalizedUrl.includes('quantum_syndrome_behavioral') ||
        (normalizedUrl.includes('wps') && (normalizedUrl.includes('quantum') || normalizedUrl.includes('syndrome')))) {
      return '/docs/blockchain-dna/features/drifscanner';
    }
    
    if (normalizedUrl.includes('bte.md') || 
        (normalizedUrl.includes('features') && normalizedUrl.includes('bte'))) {
      return '/docs/blockchain-dna/features/patterntags';
    }
    
    if ((normalizedUrl.includes('whitepaper.md') || normalizedUrl.includes('whitepaper')) && 
        normalizedUrl.includes('whitepapers')) {
      return '/docs/blockchain-dna/resources/whitepapers';
    }
    
    // Handle relative paths with ../ - this is the most common case
    if (url.includes('../')) {
      // Extract filename and parent directory from paths like ../../wps/GENOMEX_WHITEPAPER.md
      const parts = url.split('/').filter(p => p && p !== '..' && p !== '.');
      const filename = parts[parts.length - 1] || '';
      const parentDir = parts.length > 1 ? parts[parts.length - 2].toLowerCase() : '';
      const filenameLower = filename.toLowerCase();
      
      // Handle common directory patterns
      if (parentDir === 'documentation') {
        // ../documentation/ or ../documentation/FILE.md
        if (filenameLower === '' || filenameLower === 'index.md' || filenameLower === 'index') {
          return `/docs/${product}/documentation/README`;
        }
        // Specific files like MINER_INTEGRATION_GUIDE.md
        if (filenameLower.includes('miner') && filenameLower.includes('integration')) {
          return `/docs/${product}/documentation/README`;
        }
        if (filenameLower.includes('genomex') && filenameLower.includes('integration')) {
          return `/docs/${product}/documentation/README`;
        }
        // Generic documentation file
        return `/docs/${product}/documentation/README`;
      }
      
      if (parentDir === 'integrations') {
        // ../integrations/ or ../integrations/chainlink.md
        if (filenameLower === '' || filenameLower === 'index.md' || filenameLower === 'index') {
          return `/docs/${product}/integrations/README`;
        }
        if (filenameLower.includes('chainlink')) {
          return `/docs/${product}/integrations/README`;
        }
        if (filenameLower.includes('multi') && filenameLower.includes('chain')) {
          return `/docs/${product}/integrations/README`;
        }
        // Generic integration file
        return `/docs/${product}/integrations/README`;
      }
      
      if (parentDir === 'api') {
        // ../api/ or ../api/README.md or ../api/file.md
        if (filenameLower === '' || filenameLower === 'index.md' || filenameLower === 'index' || filenameLower === 'readme.md') {
          return `/docs/${product}/api/README`;
        }
        // Specific API files
        return `/docs/${product}/api/README`;
      }
      
      if (parentDir === 'troubleshooting') {
        // ../troubleshooting/ or ../troubleshooting/README.md
        if (filenameLower === '' || filenameLower === 'index.md' || filenameLower === 'index' || filenameLower === 'readme.md') {
          return `/docs/${product}/troubleshooting/README`;
        }
        return `/docs/${product}/troubleshooting/README`;
      }
      
      // Handle directory-only links (ending with /)
      if (url.endsWith('/') && !url.includes('.')) {
        const dirName = parts[0]?.toLowerCase() || '';
        if (dirName === 'api') {
          return `/docs/${product}/api/README`;
        }
        if (dirName === 'troubleshooting') {
          return `/docs/${product}/troubleshooting/README`;
        }
        if (dirName === 'integrations') {
          return `/docs/${product}/integrations/README`;
        }
        if (dirName === 'documentation') {
          return `/docs/${product}/documentation/README`;
        }
        if (dirName === 'features') {
          return `/docs/${product}/features/README`;
        }
        if (dirName === 'resources') {
          return `/docs/${product}/resources/README`;
        }
        // Generic directory
        return `/docs/${product}/${dirName}/README`;
      }
      
      if (filenameLower === 'readme.md' || filenameLower === 'readme') {
        // ../README.md
        return `/docs/${product}/README`;
      }
      
      if (filenameLower === 'resources.md' || filenameLower === 'resources') {
        // ../resources.md
        return `/docs/${product}/resources/README`;
      }
      
      // Map based on directory and filename (case-insensitive)
      if (parentDir === 'wps') {
        if (filenameLower.includes('genomex')) return '/docs/blockchain-dna/features/genomex';
        if (filenameLower.includes('quantum') || filenameLower.includes('syndrome')) return '/docs/blockchain-dna/features/drifscanner';
      }
      if (parentDir === 'features' && filenameLower.includes('bte')) {
        return '/docs/blockchain-dna/features/patterntags';
      }
      if (parentDir === 'whitepapers') {
        if (filenameLower.includes('whitepaper')) return '/docs/blockchain-dna/resources/whitepapers';
      }
    }
    
    // Handle relative paths without ../
    if (url.startsWith('./')) {
      const cleanUrl = url.substring(2);
      if (cleanUrl === 'README.md' || cleanUrl === 'README') {
        return `/docs/${product}/README`;
      }
      if (cleanUrl === 'resources.md' || cleanUrl === 'resources') {
        return `/docs/${product}/resources/README`;
      }
      // Handle directory links like ./api/
      if (cleanUrl.endsWith('/')) {
        const dirName = cleanUrl.slice(0, -1).toLowerCase();
        if (dirName === 'api') {
          return `/docs/${product}/api/README`;
        }
        if (dirName === 'troubleshooting') {
          return `/docs/${product}/troubleshooting/README`;
        }
        if (dirName === 'integrations') {
          return `/docs/${product}/integrations/README`;
        }
        if (dirName === 'documentation') {
          return `/docs/${product}/documentation/README`;
        }
        return `/docs/${product}/${dirName}/README`;
      }
    }
    
    // Handle bare directory names (no ./ or ../)
    if (!url.includes('/') && !url.includes('.')) {
      // Could be a directory name
      const dirName = url.toLowerCase();
      if (dirName === 'api') {
        return `/docs/${product}/api/README`;
      }
      if (dirName === 'troubleshooting') {
        return `/docs/${product}/troubleshooting/README`;
      }
      if (dirName === 'integrations') {
        return `/docs/${product}/integrations/README`;
      }
    }
    
    // If still a relative path, return as-is (browser will try to resolve it)
    return url;
  };

  const processInlineMarkdown = (text: string, currentPath?: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    // Process bold **text**
    const boldRegex = /\*\*(.+?)\*\*/g;
    // Process links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    // Process inline code `code`
    const codeRegex = /`([^`]+)`/g;

    // Split by all patterns
    const allMatches: Array<{ type: 'bold' | 'link' | 'code' | 'text'; start: number; end: number; content: string; url?: string }> = [];

    let match;
    while ((match = boldRegex.exec(remaining)) !== null) {
      allMatches.push({ type: 'bold', start: match.index, end: match.index + match[0].length, content: match[1] });
    }
    while ((match = linkRegex.exec(remaining)) !== null) {
      allMatches.push({ type: 'link', start: match.index, end: match.index + match[0].length, content: match[1], url: match[2] });
    }
    while ((match = codeRegex.exec(remaining)) !== null) {
      allMatches.push({ type: 'code', start: match.index, end: match.index + match[0].length, content: match[1] });
    }

    // Sort by start position
    allMatches.sort((a, b) => a.start - b.start);

    let lastIndex = 0;
    allMatches.forEach((match) => {
      // Add text before match
      if (match.start > lastIndex) {
        const textBefore = remaining.substring(lastIndex, match.start);
        if (textBefore) {
          parts.push(<span key={key++}>{textBefore}</span>);
        }
      }

      // Add match
      if (match.type === 'bold') {
        parts.push(<strong key={key++} className="text-white font-semibold">{match.content}</strong>);
      } else if (match.type === 'link') {
        const originalUrl = match.url || '';
        const normalizedUrl = normalizeLink(originalUrl, currentPath);
        // Always log normalization for debugging
        console.log(`[Markdown] Link: "${originalUrl}" → "${normalizedUrl}"`);
        parts.push(<a key={key++} href={normalizedUrl} className="text-primary hover:text-primary/80 underline">{match.content}</a>);
      } else if (match.type === 'code') {
        parts.push(<code key={key++} className="bg-card px-2 py-1 rounded text-sm font-mono text-primary">{match.content}</code>);
      }

      lastIndex = match.end;
    });

    // Add remaining text
    if (lastIndex < remaining.length) {
      parts.push(<span key={key++}>{remaining.substring(lastIndex)}</span>);
    }

    return parts.length > 0 ? parts : text;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Code blocks
    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        // End code block
        flushParagraph();
        elements.push(
          <pre key={elements.length} className="bg-card p-4 rounded-lg overflow-x-auto my-4">
            <code className="text-sm font-mono">{codeBlockContent.join('\n')}</code>
          </pre>
        );
        codeBlockContent = [];
        inCodeBlock = false;
      } else {
        // Start code block
        flushParagraph();
        codeBlockLanguage = trimmed.substring(3).trim();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    // Headers
    if (trimmed.startsWith('### ')) {
      flushParagraph();
      elements.push(
        <h3 key={elements.length} className="text-xl font-bold mt-4 mb-2 text-white">
          {processInlineMarkdown(trimmed.substring(4))}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushParagraph();
      elements.push(
        <h2 key={elements.length} className="text-2xl font-bold mt-6 mb-3 text-white">
          {processInlineMarkdown(trimmed.substring(3))}
        </h2>
      );
      return;
    }

    if (trimmed.startsWith('# ')) {
      flushParagraph();
      elements.push(
        <h1 key={elements.length} className="text-3xl font-bold mt-8 mb-4 text-white">
          {processInlineMarkdown(trimmed.substring(2))}
        </h1>
      );
      return;
    }

    // Horizontal rule
    if (trimmed === '---' || trimmed === '***') {
      flushParagraph();
      elements.push(<hr key={elements.length} className="my-8 border-white/10" />);
      return;
    }

    // List items
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      flushParagraph();
      elements.push(
        <li key={elements.length} className="ml-4 mb-2 text-muted-foreground">
          {processInlineMarkdown(trimmed.substring(2))}
        </li>
      );
      return;
    }

    // Empty line
    if (trimmed === '') {
      flushParagraph();
      return;
    }

    // Regular paragraph
    currentParagraph.push(line);
  });

  flushParagraph();

  return <div>{elements}</div>;
}

