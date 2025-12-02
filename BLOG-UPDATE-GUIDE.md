# Easy Blog Update Guide for VPS

## Overview

The blog system uses simple JSON and Markdown files that can be easily updated without touching code. All blog content is stored in the `content/blog/` directory.

## Quick Update Workflow

### On Your Local Machine or VPS:

1. **Edit `content/blog/blog-posts.json`** to add/edit posts
2. **Create/edit markdown files** in `content/blog/` (optional)
3. **Commit and push**:
   ```bash
   git add content/blog/
   git commit -m "Update blog posts"
   git push
   ```

### On Your VPS:

```bash
cd /path/to/KnightGlobal
git pull
npm run build
# Restart your server (if using PM2: pm2 restart knightinfotek)
```

That's it! Your blog is updated.

## Adding a New Blog Post

### Step 1: Add to blog-posts.json

Edit `content/blog/blog-posts.json` and add a new entry:

```json
{
  "id": 4,
  "title": "Your New Blog Post Title",
  "excerpt": "A compelling excerpt that describes your post...",
  "date": "January 25, 2025",
  "category": "Blockchain",
  "readTime": "5 min read",
  "slug": "your-new-post-slug",
  "published": true
}
```

**Fields:**
- `id`: Unique number (increment from last post)
- `title`: Post title
- `excerpt`: Short description (under 160 chars recommended)
- `date`: Display date (e.g., "January 25, 2025")
- `category`: One of: "Blockchain", "AI", "Compliance", "Cybersecurity", "Technology", "Industry News"
- `readTime`: Estimated reading time (e.g., "5 min read")
- `slug`: URL-friendly identifier (lowercase, hyphens)
- `published`: `true` to show, `false` to hide

### Step 2: Create Markdown File (Optional)

Create `content/blog/your-new-post-slug.md`:

```markdown
---
title: "Your New Blog Post Title"
excerpt: "A compelling excerpt..."
date: "2025-01-25"
category: "Blockchain"
readTime: "5 min read"
slug: "your-new-post-slug"
---

# Your New Blog Post Title

Your full blog post content here in Markdown format.

## Section 1

Content...

## Section 2

More content...
```

### Step 3: Deploy

```bash
git add content/blog/
git commit -m "Add new blog post: Your Title"
git push
```

On VPS:
```bash
git pull && npm run build
```

## Editing Existing Posts

1. Edit the entry in `content/blog/blog-posts.json`
2. Edit the markdown file if it exists
3. Commit, push, and pull on VPS

## Unpublishing a Post

Set `"published": false` in the JSON entry. The post will remain in the file but won't appear on the website.

## File Locations

- **Blog list**: `content/blog/blog-posts.json`
- **Post content**: `content/blog/[slug].md`
- **Documentation**: `content/blog/README.md`

## Tips

- Use descriptive slugs (lowercase, hyphens only)
- Keep excerpts concise and compelling
- Use proper date formatting: "Month Day, Year"
- Markdown files are optional - posts work with just JSON
- Categories should match existing ones for consistency

## Troubleshooting

**Posts not showing?**
- Check `"published": true` in JSON
- Verify JSON syntax is valid
- Check browser console for errors
- Ensure build completed successfully

**Content not updating?**
- Make sure you ran `npm run build` after pulling
- Clear browser cache
- Check that files are in `dist/public/content/` after build

