const treatments = [
  {
    title: 'Massage',
    image: 'massage.webp',
    description:
      'Hannah combines intuitive touch and remedial training—providing lasting results and a deeply restorative experience.',
  },
  {
    title: 'Cupping',
    image: 'cupping.webp',
    description:
      'Most massage is compression—by creating a vacuum and lifting the tissue, we create space so the tissues, blood and lymph can move. There is a reason why this therapy is favoured by elite athletes.',
  },
  {
    title: 'Breathwork',
    image: 'breathwork.webp',
    description:
      'It all starts with the breath. Hannah uses guided techniques in her massage to promote the optimum state for healing and repair. Hannah also facilitates longer Holotropic (conscious, connected) breathwork sessions.',
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <img
          className="logo"
          src="h2o-logo.png"
          alt="H2O Breath and Bodywork"
        />
      </header>

      <section className="treatments" aria-label="Treatments">
        {treatments.map((treatment) => (
          <article
            className="treatment-card"
            key={treatment.title}
            tabIndex={0}
          >
            <img src={treatment.image} alt="" />
            <div className="card-shade" />
            <h2>{treatment.title}</h2>
            <div className="card-description">
              <h3>{treatment.title}</h3>
              <p>{treatment.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
