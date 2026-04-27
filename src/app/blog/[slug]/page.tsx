import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types';
import { blogContent } from '@/data/blog-content';

interface BlogPageProps {
  params: { slug: string };
}

function getAllPosts(): BlogPost[] {
  try {
    const file = path.join(process.cwd(), 'src', 'data', 'blog.json');
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf-8'));
    }
  } catch (error) {
    console.error('Error loading blog posts:', error);
  }
  return [];
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

function getPost(slug: string): BlogPost | null {
  try {
    const file = path.join(process.cwd(), 'src', 'data', 'blog.json');
    if (fs.existsSync(file)) {
      const posts = JSON.parse(fs.readFileSync(file, 'utf-8'));
      return posts.find((p: BlogPost) => p.slug === slug) || null;
    }
  } catch (error) {
    console.error('Error loading blog post:', error);
  }
  return null;
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = getPost(params.slug);

  if (!post) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        <h1>Blog-Post nicht gefunden</h1>
        <p>
          <Link href="/blog" style={{ color: '#0057a8', textDecoration: 'none' }}>
            Zurück zum Blog
          </Link>
        </p>
      </div>
    );
  }

  const contentFn = blogContent[params.slug as keyof typeof blogContent];
  const content = contentFn ? contentFn() : '';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-post-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 60px 20px;
        }
        .blog-post-header {
          margin-bottom: 40px;
        }
        .blog-post-meta {
          display: flex;
          gap: 20px;
          font-size: 14px;
          color: #6f6f77;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .blog-post-title {
          font-size: 42px;
          font-weight: 600;
          color: #1d1d1f;
          line-height: 1.3;
          margin-bottom: 20px;
        }
        .blog-post-excerpt {
          font-size: 18px;
          color: #6f6f77;
          line-height: 1.6;
          font-weight: 500;
        }
        .blog-post-content {
          margin-top: 40px;
          font-size: 16px;
          line-height: 1.8;
          color: #1d1d1f;
        }
        .blog-post-content h2 {
          font-size: 28px;
          font-weight: 600;
          color: #1d1d1f;
          margin-top: 40px;
          margin-bottom: 20px;
        }
        .blog-post-content h3 {
          font-size: 22px;
          font-weight: 600;
          color: #1d1d1f;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        .blog-post-content p {
          margin-bottom: 18px;
        }
        .blog-post-content strong {
          color: #0057a8;
          font-weight: 600;
        }
        .blog-post-content ul,
        .blog-post-content ol {
          margin: 20px 0;
          padding-left: 30px;
        }
        .blog-post-content li {
          margin-bottom: 10px;
          line-height: 1.8;
        }
        .blog-post-content a {
          color: #0057a8;
          text-decoration: none;
          border-bottom: 1px solid rgba(0, 87, 168, 0.3);
        }
        .blog-post-content a:hover {
          border-bottom-color: #0057a8;
        }
        .blog-post-cta {
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          color: white;
          padding: 40px;
          border-radius: 12px;
          margin-top: 60px;
          text-align: center;
        }
        .blog-post-cta h3 {
          color: white;
          margin-top: 0;
        }
        .blog-post-cta p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
        }
        .blog-post-cta-button {
          display: inline-block;
          background: white;
          color: #0057a8;
          padding: 12px 30px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .blog-post-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .blog-post-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid #e5e5e9;
        }
        .blog-post-tag {
          background: #f0f0f5;
          color: #666;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 500;
        }
        .blog-post-nav {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 1px solid #e5e5e9;
        }
        .blog-post-nav a {
          color: #0057a8;
          text-decoration: none;
          font-weight: 500;
        }
      `}} />

      <article className="blog-post-container">
        <div className="blog-post-header">
          <div className="blog-post-meta">
            <span>{new Date(post.date).toLocaleDateString('de-CH', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}</span>
            <span>•</span>
            <span>{post.readingTime} min Lesezeit</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-excerpt">{post.excerpt}</p>
        </div>

        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: content }} />

        <div className="blog-post-cta">
          <h3>Bereit zum Lernen?</h3>
          <p>Starten Sie Ihre KI-Reise mit unseren praktischen Kursen für Raumplaner.</p>
          <Link href="/kurse" className="blog-post-cta-button">
            Zu den Kursen
          </Link>
        </div>

        {post.tags.length > 0 && (
          <div className="blog-post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-post-tag">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="blog-post-nav">
          <Link href="/blog">← Zurück zum Blog</Link>
        </div>
      </article>
    </>
  );
}
