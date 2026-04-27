import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types';

async function getPosts(): Promise<BlogPost[]> {
  try {
    const file = path.join(process.cwd(), 'src', 'data', 'blog.json');
    if (fs.existsSync(file)) {
      const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
      return data.sort((a: BlogPost, b: BlogPost) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }
  } catch (error) {
    console.error('Error loading blog posts:', error);
  }
  return [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 20px;
        }
        .blog-header {
          margin-bottom: 50px;
          text-align: center;
        }
        .blog-header h1 {
          font-size: 42px;
          font-weight: 600;
          color: #1d1d1f;
          margin-bottom: 15px;
        }
        .blog-header p {
          font-size: 18px;
          color: #6f6f77;
          line-height: 1.6;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        .blog-card {
          background: #fbfbfd;
          border: 1px solid #e5e5e9;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
        }
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-color: #0057a8;
        }
        .blog-card-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #0057a8 0%, #00a896 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
        }
        .blog-card-content {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .blog-card-date {
          font-size: 12px;
          color: #999;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .blog-card-title {
          font-size: 20px;
          font-weight: 600;
          color: #1d1d1f;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .blog-card-excerpt {
          font-size: 14px;
          color: #6f6f77;
          line-height: 1.6;
          margin-bottom: 15px;
          flex: 1;
        }
        .blog-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid #e5e5e9;
        }
        .blog-card-reading-time {
          font-size: 12px;
          color: #999;
        }
        .blog-card-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .blog-tag {
          display: inline-block;
          background: #e8e8ed;
          color: #666;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 500;
        }
        .blog-empty {
          text-align: center;
          padding: 60px 20px;
          color: #999;
          font-size: 16px;
        }
      `}} />
      <div className="blog-container">
        <div className="blog-header">
          <h1>Blog</h1>
          <p>Trends, Erkenntnisse und praktische Tipps zu KI in der Raumplanung</p>
        </div>

        {posts.length === 0 ? (
          <div className="blog-empty">Keine Blog-Posts vorhanden.</div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article className="blog-card">
                  <div className="blog-card-image">
                    {post.image ? `Bild: ${post.title.substring(0, 20)}...` : 'Blog'}
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-date">
                      {new Date(post.date).toLocaleDateString('de-CH', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-reading-time">{post.readingTime} min Lesezeit</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
