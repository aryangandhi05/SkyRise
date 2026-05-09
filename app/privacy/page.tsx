import { ArrowUpLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — SkyRise AI",
  description: "How SkyRise AI collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="blog-page">
      <header className="blog-nav">
        <a className="brand" href="/">SkyRise AI</a>
        <a className="blog-back" href="/">
          <ArrowUpLeft size={18} />
          Back
        </a>
      </header>

      <article>
        <div className="blog-hero">
          <span className="blog-meta">
            <span className="blog-category">Legal</span>
            <span className="blog-read-time">Last updated: May 2025</span>
          </span>
          <h1 className="blog-title">Privacy Policy</h1>
          <p className="blog-intro">
            SkyRise AI is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding that information.
          </p>
        </div>

        <div className="blog-body">
          <section className="blog-section">
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us — such as your name, email address, and any project details you share when you contact us or start a project. We do not collect sensitive personal information beyond what is necessary to deliver our services.</p>
            <p>When you visit our website, we may automatically collect certain technical information such as your IP address, browser type, and pages visited. This data is used solely for analytics and improving the website experience.</p>
          </section>

          <section className="blog-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to respond to your enquiries, deliver creative services, send project updates, and improve our offerings. We do not sell, rent, or trade your personal information to third parties under any circumstances.</p>
            <p>We may use your email address to send you relevant updates about your project or, with your consent, occasional information about our services. You can opt out of any marketing communication at any time.</p>
          </section>

          <section className="blog-section">
            <h2>Data Storage and Security</h2>
            <p>Your information is stored securely and accessed only by team members who need it to deliver your project. We use industry-standard security practices to protect your data from unauthorised access, disclosure, or loss.</p>
            <p>We retain your information only as long as necessary to fulfil the purposes outlined in this policy or as required by applicable law.</p>
          </section>

          <section className="blog-section">
            <h2>Cookies</h2>
            <p>Our website may use cookies to improve your browsing experience and gather anonymous analytics data. You can disable cookies through your browser settings at any time. Disabling cookies will not affect your ability to use this website.</p>
          </section>

          <section className="blog-section">
            <h2>Your Rights</h2>
            <p>You have the right to request access to the personal information we hold about you, ask for corrections, or request deletion. To exercise any of these rights, contact us at <a href="mailto:hello@skyrisedigitalsolutions.com" style={{ color: "var(--accent)" }}>hello@skyrisedigitalsolutions.com</a>.</p>
          </section>

          <section className="blog-section">
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the revised policy.</p>
          </section>

          <section className="blog-section">
            <h2>Contact</h2>
            <p>If you have any questions about this Privacy Policy, please reach out to us at <a href="mailto:hello@skyrisedigitalsolutions.com" style={{ color: "var(--accent)" }}>hello@skyrisedigitalsolutions.com</a> or call us at <a href="tel:+919535888299" style={{ color: "var(--accent)" }}>+91 95358 88299</a>.</p>
          </section>
        </div>
      </article>

      <footer className="blog-footer">
        <a className="primary-button" href="/#contact">Start a Project</a>
        <a className="secondary-button" href="/">Back to Home</a>
      </footer>
    </main>
  );
}
