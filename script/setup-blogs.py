#!/usr/bin/env python3
"""Copy blog posts and generate blog-posts.json"""

import os
import re
import json
import shutil
from pathlib import Path
from datetime import datetime

source_dir = Path("/Volumes/evo4TB/kit/KGE/docs/products/blogs/blog")
dest_dir = Path("/Volumes/evo4TB/kit/KGE/Knight_InfoTek/content/blog")

def infer_category(title, filename):
    """Infer category from title and filename"""
    lower_title = title.lower()
    lower_file = filename.lower()
    
    if 'defi' in lower_title or 'exploit' in lower_title or 'wallet' in lower_title:
        return 'Blockchain Security'
    if 'ai' in lower_title or 'agent' in lower_title or 'autonomous' in lower_title:
        return 'AI'
    if 'compliance' in lower_title or 'regulatory' in lower_title or 'mica' in lower_title or 'genius' in lower_title:
        return 'Compliance'
    if 'bitcoin' in lower_title or 'miner' in lower_title or 'chain' in lower_title or 'ordinal' in lower_title:
        return 'Blockchain'
    if 'ransomware' in lower_title or 'zero-day' in lower_title or 'insider' in lower_title or 'air-gap' in lower_title or 'behavioral' in lower_title:
        return 'Cybersecurity'
    if 'cross-chain' in lower_title or 'fraud' in lower_title:
        return 'Security'
    if 'rwa' in lower_title or 'tokenization' in lower_title:
        return 'Tokenization'
    
    return 'Blockchain'

def generate_slug(filename):
    """Generate slug from filename"""
    slug = filename.replace('.md', '')
    # Remove date prefix if present
    slug = re.sub(r'^\d{4}-\d{2}-\d{2}-', '', slug)
    return slug.lower()

def extract_excerpt(content):
    """Extract excerpt from content"""
    lines = content.split('\n')
    start_index = 0
    
    # Find where content starts (after --- separator)
    for i, line in enumerate(lines):
        if line.strip() == '---':
            start_index = i + 1
            break
    
    # Get first substantial paragraph
    for i in range(start_index, len(lines)):
        line = lines[i].strip()
        if line and not line.startswith('#') and len(line) > 50:
            excerpt = line[:200]
            if len(line) > 200:
                excerpt += '...'
            return excerpt
    
    return 'Read more about this topic.'

def main():
    print("📝 Setting up blog posts...\n")
    
    # Copy all markdown files except README
    blog_files = [f for f in source_dir.glob('*.md') if f.name != 'README.md']
    
    print(f"Found {len(blog_files)} blog posts to copy\n")
    
    posts = []
    
    for blog_file in sorted(blog_files):
        try:
            # Copy file
            dest_file = dest_dir / blog_file.name
            shutil.copy2(blog_file, dest_file)
            print(f"✓ Copied: {blog_file.name}")
            
            # Read content
            content = blog_file.read_text(encoding='utf-8')
            
            # Extract title
            title_match = re.search(r'^# (.+)$', content, re.MULTILINE)
            if not title_match:
                continue
            
            title = title_match.group(1).strip()
            
            # Extract published date
            date_match = re.search(r'\*\*Published\*\*:\s*(.+)', content)
            date = date_match.group(1).strip() if date_match else 'January 2025'
            
            # Extract reading time
            time_match = re.search(r'\*\*Reading Time\*\*:\s*(\d+)\s*minutes?', content, re.IGNORECASE)
            reading_time = f"{time_match.group(1)} min read" if time_match else '5 min read'
            
            # Generate slug
            slug = generate_slug(blog_file.name)
            
            # Infer category
            category = infer_category(title, blog_file.name)
            
            # Extract excerpt
            excerpt = extract_excerpt(content)
            
            posts.append({
                'id': len(posts) + 1,
                'title': title,
                'excerpt': excerpt,
                'date': date,
                'category': category,
                'readTime': reading_time,
                'slug': slug,
                'published': True
            })
            
        except Exception as e:
            print(f"✗ Error processing {blog_file.name}: {e}")
    
    # Sort by date (newest first) - simple string comparison for now
    posts.sort(key=lambda x: x['date'], reverse=True)
    
    # Update IDs after sorting
    for i, post in enumerate(posts):
        post['id'] = i + 1
    
    # Write blog-posts.json
    json_file = dest_dir / 'blog-posts.json'
    json_file.write_text(json.dumps(posts, indent=2) + '\n', encoding='utf-8')
    
    print(f"\n✅ Setup complete!")
    print(f"   Copied {len(blog_files)} blog posts")
    print(f"   Generated blog-posts.json with {len(posts)} entries")
    print(f"   File: {json_file}")

if __name__ == '__main__':
    main()

