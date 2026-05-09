import { notFound } from "next/navigation";
import { blogPosts } from "@/data/posts";
import { ArrowUpLeft } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: `${post.title} — SkyRise AI`, description: post.intro };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="blog-page">
      <header className="blog-nav">
        <a className="brand" href="/">SkyRise AI</a>
        <a className="blog-back" href="/#posts">
          <ArrowUpLeft size={18} />
          Back
        </a>
      </header>

      <article>
        <div className="blog-hero">
          <span className="blog-meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-read-time">{post.readTime}</span>
          </span>
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-intro">{post.intro}</p>
        </div>

        <div className="blog-body">
          {post.sections.map((section) => (
            <section className="blog-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <footer className="blog-footer">
        <a className="primary-button" href="/#contact">Start a Project</a>
        <a className="secondary-button" href="/#posts">More Posts</a>
      </footer>
    </main>
  );
}
