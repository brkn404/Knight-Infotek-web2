# Blog Content Management

This directory contains all blog posts for the Knight InfoTek website.

## Quick Update Guide

### Adding a New Blog Post

1. **Add entry to `blog-posts.json`**:
   ```json
   {
     "id": 4,
     "title": "Your Blog Post Title",
     "excerpt": "A brief description of your post...",
     "date": "January 20, 2025",
     "category": "Blockchain",
     "readTime": "5 min read",
     "slug": "your-blog-post-slug",
     "published": true
   }
   ```

2. **Create markdown file** (optional):
   - Create `your-blog-post-slug.md` in this directory
   - Use frontmatter for metadata:
     ```markdown
     ---
     title: "Your Blog Post Title"
     excerpt: "A brief description..."
     date: "2025-01-20"
     category: "Blockchain"
     readTime: "5 min read"
     slug: "your-blog-post-slug"
     ---
     
     # Your Blog Post Title
     
     Your content here in Markdown...
     ```

3. **Commit and push**:
   ```bash
   git add content/blog/
   git commit -m "Add new blog post: Your Title"
   git push
   ```

4. **On your VPS**:
   ```bash
   cd /path/to/Knight_InfoTek
   git pull
   npm run build
   # Restart your server if needed
   ```

### Editing an Existing Post

1. Edit the entry in `blog-posts.json`
2. Edit the markdown file if it exists
3. Commit and push
4. Pull and rebuild on VPS

### Unpublishing a Post

Set `"published": false` in `blog-posts.json` for that post.

## File Structure

```
content/blog/
├── README.md (this file)
├── blog-posts.json (list of all posts)
├── example-post.md (example markdown post)
└── [slug].md (individual post markdown files)
```

## Categories

Available categories:
- Blockchain
- AI
- Compliance
- Cybersecurity
- Technology
- Industry News

## Tips

- Use descriptive slugs (lowercase, hyphens)
- Keep excerpts under 160 characters
- Use proper date format: "Month Day, Year"
- Markdown files are optional - posts work with just JSON entries

