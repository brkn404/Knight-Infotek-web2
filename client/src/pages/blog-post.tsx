import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { Link, useParams } from "wouter";
import { useEffect, useState } from "react";
import { getBlogPost, BlogPost } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      loadPost();
    } else {
      setError('Invalid blog post URL');
      setLoading(false);
    }
  }, [slug]);

  const loadPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const postData = await getBlogPost(slug);
      if (postData) {
        setPost(postData);
      } else {
        setError('Blog post not found');
      }
    } catch (err) {
      console.error('Error loading blog post:', err);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <div className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Loading blog post...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <div className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">{error || 'The blog post you are looking for does not exist.'}</p>
            <Link 
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline" className="border-primary/20 text-primary">
                {post.category}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {post.content ? (
              <div className="prose prose-invert prose-lg max-w-none">
                {renderMarkdown(post.content)}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Content not available for this blog post.</p>
              </div>
            )}

            {/* Back to Blog Link */}
            <div className="mt-12 pt-8 border-t border-white/10">
            <Link 
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

