import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types';

function getBlogPost(slug: string): BlogPost | null {
  try {
    const file = path.join(process.cwd(), 'src', 'data', 'blog.json');
    if (!fs.existsSync(file)) return null;
    const posts = JSON.parse(fs.readFileSync(file, 'utf-8'));
    return posts.find((p: BlogPost) => p.slug === slug) || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Blog Post nicht gefunden',
      description: 'Der angeforderte Blog-Post existiert nicht.',
    };
  }

  return {
    title: `${post.title} | KI-Kurse SPEKTRUM`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://kurse.spekt.ch/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.ogImage
        ? [{ url: post.ogImage, width: 1200, height: 630 }]
        : [{ url: 'https://kurse.spekt.ch/images/og-kurse.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.ogImage ? [post.ogImage] : [],
    },
  };
}

const blogPostingJsonLd = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: post.ogImage || post.image || 'https://kurse.spekt.ch/images/og-kurse.jpg',
  datePublished: post.date,
  dateModified: post.updatedAt || post.date,
  author: {
    '@type': 'Person',
    name: post.author,
    url: 'https://spekt.ch',
  },
  publisher: {
    '@type': 'EducationalOrganization',
    name: 'SPEKTRUM Partner GmbH',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kurse.spekt.ch/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://kurse.spekt.ch/blog/${post.slug}`,
  },
});

const newsArticleJsonLd = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: post.title,
  description: post.excerpt,
  image: post.ogImage || post.image || 'https://kurse.spekt.ch/images/og-kurse.jpg',
  datePublished: post.date,
  dateModified: post.updatedAt || post.date,
  author: {
    '@type': 'Person',
    name: post.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'SPEKTRUM Partner GmbH',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kurse.spekt.ch/logo.svg',
    },
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.blog-post-content h2', '.blog-post-content h3', '.blog-post-content p'],
  },
});

export default function BlogPostLayout({ children, params }: { children: React.ReactNode; params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  return (
    <>
      {post && (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd(post)) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd(post)) }} />
        </>
      )}
      {children}
    </>
  );
}
