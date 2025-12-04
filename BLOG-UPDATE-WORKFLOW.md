# Blog Update Workflow

Simple guide for updating blog posts on the Knight InfoTek website.

## Quick Update Process

1. **Edit locally** → 2. **Push to GitHub** → 3. **Deploy on VPS**

## Step-by-Step

### 1. Edit Blog Posts (Local)

```bash
cd /Volumes/evo4TB/kit/KGE/KnightGlobal

# Edit the blog posts JSON file
nano content/blog/blog-posts.json
# Or use your preferred editor
```

### 2. Add a New Blog Post

Edit `content/blog/blog-posts.json` and add a new entry:

```json
{
  "id": 4,
  "title": "Your Blog Post Title",
  "excerpt": "A brief, compelling description of your post...",
  "date": "January 25, 2025",
  "category": "Blockchain",
  "readTime": "5 min read",
  "slug": "your-blog-post-slug",
  "published": true
}
```

**Fields:**
- `id`: Unique number (increment from last post)
- `title`: Post title
- `excerpt`: Short description (under 160 chars recommended)
- `date`: Display date (e.g., "January 25, 2025")
- `category`: "Blockchain", "AI", "Compliance", "Cybersecurity", "Technology", or "Industry News"
- `readTime`: Estimated reading time
- `slug`: URL-friendly identifier (lowercase, hyphens only)
- `published`: `true` to show, `false` to hide

### 3. Optional: Add Full Content

Create a markdown file for full post content:

```bash
nano content/blog/your-blog-post-slug.md
```

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description..."
date: "2025-01-25"
category: "Blockchain"
readTime: "5 min read"
slug: "your-blog-post-slug"
---

# Your Blog Post Title

Your full blog post content here in Markdown format.

## Section 1

Content...

## Section 2

More content...
```

### 4. Commit and Push

```bash
# Stage changes
git add content/blog/

# Commit
git commit -m "Add new blog post: Your Title"

# Push to GitHub
git push origin main
```

### 5. Deploy on VPS

```bash
# SSH to your VPS
ssh user@your-vps

# Navigate to site directory
cd /var/www/knightinfotek.com

# Pull and deploy
git pull origin main
npm run build
rm -rf /var/www/knightinfotek.com/html/*
cp -r dist/public/* /var/www/knightinfotek.com/html/
chown -R www-data:www-data /var/www/knightinfotek.com/html
```

Or use the deploy script:
```bash
./deploy.sh
```

## Editing Existing Posts

### Update Post Metadata

```bash
# Edit the JSON file
nano content/blog/blog-posts.json

# Find the post and update fields
# Change title, excerpt, date, category, etc.

# Commit and push
git add content/blog/blog-posts.json
git commit -m "Update blog post: Post Title"
git push origin main

# Deploy on VPS
./deploy.sh
```

### Update Post Content

```bash
# Edit the markdown file (if it exists)
nano content/blog/post-slug.md

# Or create it if it doesn't exist
# Make your changes

# Commit and push
git add content/blog/
git commit -m "Update blog post content: Post Title"
git push origin main

# Deploy on VPS
./deploy.sh
```

## Unpublishing a Post

```bash
# Edit blog-posts.json
nano content/blog/blog-posts.json

# Find the post and change:
"published": false

# Commit and push
git add content/blog/blog-posts.json
git commit -m "Unpublish blog post: Post Title"
git push origin main

# Deploy on VPS
./deploy.sh
```

## Blog Post Categories

Available categories:
- **Blockchain**
- **AI**
- **Compliance**
- **Cybersecurity**
- **Technology**
- **Industry News**

## File Structure

```
content/blog/
├── blog-posts.json          # List of all posts (REQUIRED)
├── post-slug-1.md          # Full content (OPTIONAL)
├── post-slug-2.md          # Full content (OPTIONAL)
└── README.md               # Documentation
```

## Tips

- **Slugs:** Use lowercase, hyphens only (e.g., `my-awesome-post`)
- **Excerpts:** Keep under 160 characters for best display
- **Dates:** Use format "Month Day, Year" (e.g., "January 25, 2025")
- **Read Time:** Estimate based on word count (~200 words per minute)
- **Markdown:** Optional - posts work with just JSON entries

## Quick Commands Reference

```bash
# Local: Edit blog
nano content/blog/blog-posts.json

# Local: Commit and push
git add content/blog/ && git commit -m "Update blog" && git push origin main

# VPS: Deploy
cd /var/www/knightinfotek.com && ./deploy.sh
```

## Example: Complete Blog Post Addition

```bash
# 1. Edit JSON (local)
nano content/blog/blog-posts.json
# Add new entry with id: 4

# 2. Create markdown (optional, local)
nano content/blog/new-post-slug.md
# Add full content

# 3. Commit and push (local)
git add content/blog/
git commit -m "Add blog post: New Post Title"
git push origin main

# 4. Deploy (VPS)
cd /var/www/knightinfotek.com
./deploy.sh

# Done! Post is live at: https://knightinfotek.com/blog
```

