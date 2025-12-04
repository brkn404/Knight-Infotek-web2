# Syncing Blog Posts to Development Server

To see the blog posts on your development server, you need to copy them to `client/public/content/blog/`.

## Quick Sync Command

Run this command to sync all blog files:

```bash
cd /Volumes/evo4TB/kit/KGE/Knight_InfoTek
./sync-all-blogs.sh
```

Or manually:

```bash
cd /Volumes/evo4TB/kit/KGE/Knight_InfoTek
mkdir -p client/public/content/blog
cp content/blog/*.md client/public/content/blog/
cp content/blog/blog-posts.json client/public/content/blog/
```

## After Syncing

1. **Restart your dev server** - The Vite dev server needs to be restarted to pick up new files in the `public` directory
2. **Hard refresh your browser** - Press `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux) to clear cache
3. **Check the blog page** - Visit `http://localhost:5001/blog` to see all 20 blog posts

## What's Already Done

✅ All 20 blog posts are in `content/blog/`  
✅ `blog-posts.json` is created with all entries  
✅ Blog loader is updated to handle date-prefixed filenames  
✅ Markdown parser handles our format (--- separator)

## Troubleshooting

If blog posts still don't show:

1. Check browser console for errors
2. Verify files exist: `ls client/public/content/blog/*.md | wc -l` (should show 20)
3. Check network tab - is `/content/blog/blog-posts.json` loading?
4. Restart dev server completely

---

**Note**: In production builds, the build script automatically copies `content/` to `dist/public/content/`, so this is only needed for development.

