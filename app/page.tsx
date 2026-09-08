import { ArrowUpRight, Menu } from 'lucide-react';

const treatments = [
  {
    number: '01',
    title: 'Cupping',
    line: 'Create space. Restore flow.',
    className: 'treatment-card--cupping',
  },
  {
    number: '02',
    title: 'Remedial',
    line: 'Focused care for the way you move.',
    className: 'treatment-card--remedial',
  },
  {
    number: '03',
    title: 'Breathwork',
    line: 'Slow down. Breathe deeper.',
    className: 'treatment-card--breathwork',
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="H2O Breath and Bodywork home">
          <img src="/h2o-logo.png" alt="H2O Breath and Bodywork" />
        </a>
        <p className="location">Massage · Movement · Breath</p>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#treatments">Treatments</a>
          <a href="#contact">Contact</a>
          <a className="book-link" href="#contact">
            Book a session <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label="Open menu"
          disabled
        >
          <Menu aria-hidden="true" size={23} />
        </button>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">Come back to your body</p>
        <h1 id="page-title">
          Feel <em>more</em> like you.
        </h1>
        <p className="hero-copy">
          Grounded, intuitive bodywork to help you release tension, reconnect
          and breathe a little easier.
        </p>
      </section>

      <section className="treatments" id="treatments" aria-label="Treatments">
        {treatments.map((treatment) => (
          <a
            href="#contact"
            className={`treatment-card ${treatment.className}`}
            key={treatment.title}
          >
            <span className="card-art" aria-hidden="true">
              <span>{treatment.number}</span>
            </span>
            <span className="card-copy">
              <span>
                <small>{treatment.line}</small>
                <strong>{treatment.title}</strong>
              </span>
              <span className="card-arrow" aria-hidden="true">
                <ArrowUpRight size={19} />
              </span>
            </span>
          </a>
        ))}
      </section>

      <footer className="site-footer" id="contact">
        <p>H2O Breath &amp; Bodywork</p>
        <a href="#">Instagram</a>
        <a href="mailto:hello@h20bodywork.com">hello@h20bodywork.com</a>
      </footer>
    </main>
  );
}
