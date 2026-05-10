import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/data/site";
import VideoHero from "@/components/VideoHero";
import ProjectVideo from "@/components/ProjectVideo";

export default function Home() {
  return (
    <>
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top">{site.brand}</a>
        <nav className="nav-links" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
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

      <section className="section" id="system">
        <p className="section-kicker">01 / System</p>
        <h2>Ideas in. Ads out.</h2>
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
        <p className="section-kicker">03 / Work</p>
        <h2>Our Work</h2>
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

        {/* ── Poster Creatives ── */}
        <div className="poster-divider">
          <span />
          <p className="poster-divider-label">Poster Creatives</p>
          <span />
        </div>

        <div className="poster-grid-portrait">
          {site.posters.portrait.map((src, i) => (
            <div className="poster-portrait-card" key={i}>
              <img src={src} alt={`Ad creative ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="poster-grid-landscape">
          {site.posters.landscape.map((src, i) => (
            <img
              key={i}
              className="poster-landscape-img"
              src={src}
              alt={`Poster creative ${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="section" id="industries">
        <div className="section-head">
          <div>
            <p className="section-kicker">04 / Industries</p>
            <h2>Industries We Serve</h2>
          </div>
          <p>Specialized creative strategies for every vertical. We speak your customer&apos;s language.</p>
        </div>
        <div className="industry-grid">
          {site.industries.map((industry, index) => (
            <article className="industry-card" key={industry.title} data-num={String(index + 1).padStart(2, "0")}>
              <span className="industry-icon">{industry.icon}</span>
              <h3 className="industry-title">{industry.title}</h3>
              <div className="industry-tags">
                {industry.tags.map((tag) => (
                  <span className="industry-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <p className="section-kicker">05 / Process</p>
        <div className="process-orbit">
          <h2>Creative production loop</h2>
          {site.process.map((step, index) => (
            <span className={`process-chip chip-${index + 1}`} key={step}>{step}</span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker">06 / Contact</p>
        <h2>Ready to scale your brand?</h2>
        <a className="primary-button" href={`mailto:${site.email}`}>
          <Mail size={22} />
          {site.email}
        </a>
      </section>
    </main>

    <footer className="site-footer">
      <div className="footer-grid">
        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-label">Navigate</p>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>

        <div className="footer-contact">
          <p className="footer-label">Find Us</p>
          <address className="footer-address">
            /13, Gayathri Building, Hosur Rd,<br />
            Electronic City Phase I,<br />
            Bengaluru, 560100
          </address>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href="tel:+919535888299">+91 95358 88299</a>
        </div>
      </div>

      <div className="footer-hero">
        <a className="footer-wordmark" href="#top">SkyRise AI</a>
        <p className="footer-tagline">AI speed. Human precision.</p>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SkyRise AI. All rights reserved.</span>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
    </>
  );
}
