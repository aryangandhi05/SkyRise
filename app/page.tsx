import { ArrowUpRight, Mail, Menu } from "lucide-react";
import { site } from "@/data/site";
import VideoHero from "@/components/VideoHero";
import ProjectVideo from "@/components/ProjectVideo";

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top">{site.brand}</a>
        <nav className="nav-links" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <button className="icon-button" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </header>

      <section className="hero-section" id="top">
        <VideoHero src={site.hero.videoSrc} poster={site.hero.videoPoster} />
      </section>

      <section className="hero-content-section">
        <div className="hero-copy">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1>{site.hero.title}</h1>
          <p className="hero-subtitle">{site.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              {site.hero.primaryCta}
              <ArrowUpRight size={22} />
            </a>
            <a className="secondary-button" href="#system">{site.hero.secondaryCta}</a>
          </div>
        </div>
      </section>

      <section className="metric-strip" aria-label="Key metrics">
        {site.metrics.map(([value, label]) => (
          <div key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section two-column" id="system">
        <div>
          <p className="section-kicker">01 / System</p>
          <h2>Human vision. AI execution.</h2>
        </div>
        <div className="copy-stack">
          <p>
            This structure is ready for your real content: final headline, proof points, service copy,
            videos, client logos, posts, and CTA links.
          </p>
          <p>
            The content lives in <code>data/site.ts</code>, so updates stay clean and the UI stays reusable.
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <p className="section-kicker">02 / Services</p>
        <div className="service-list">
          {site.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-row" key={service.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={28} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-head">
          <div>
            <p className="section-kicker">03 / Work</p>
            <h2>Project slots</h2>
          </div>
          <p>Add your portfolio videos and poster creatives here when ready.</p>
        </div>
        <div className="project-grid">
          {site.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <ProjectVideo src={project.videoSrc} poster={project.poster} title={project.title} />
              <div className="project-meta">
                <h3>{project.title}</h3>
                <span>{project.type}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <p className="section-kicker">04 / Process</p>
        <div className="process-orbit">
          <h2>Creative production loop</h2>
          {site.process.map((step, index) => (
            <span className={`process-chip chip-${index + 1}`} key={step}>{step}</span>
          ))}
        </div>
      </section>

      <section className="section" id="posts">
        <div className="section-head">
          <div>
            <p className="section-kicker">05 / Posts</p>
            <h2>Content hub</h2>
          </div>
          <p>Send your post topics or blog copy and I’ll turn this into real post cards/pages.</p>
        </div>
        <div className="post-grid">
          {site.posts.map((post) => (
            <article className="post-card" key={post}>
              <h3>{post}</h3>
              <ArrowUpRight size={28} />
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker">06 / Contact</p>
        <h2>Ready for your final content.</h2>
        <a className="primary-button" href={`mailto:${site.email}`}>
          <Mail size={22} />
          {site.email}
        </a>
      </section>
    </main>
  );
}
