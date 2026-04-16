export function Vision() {
  const pillars = [
    {
      number: "01",
      title: "Comunitate",
      description:
        "Construim o rețea activă de jucători, organizatori și entuziaști care împărtășesc pasiunea pentru șah.",
    },
    {
      number: "02",
      title: "Educație",
      description:
        "Promovăm șahul ca instrument de dezvoltare cognitivă și socială pentru toate vârstele.",
    },
    {
      number: "03",
      title: "Evenimente",
      description:
        "Organizăm turnee, meetup-uri și competiții care aduc oamenii împreună.",
    },
    {
      number: "04",
      title: "Infrastructură",
      description:
        "Dezvoltăm platforma digitală și punem bazele pentru cluburi fizice de șah.",
    },
    {
      number: "05",
      title: "Parteneriate",
      description:
        "Colaborăm cu organizații, festivaluri, universități și business-uri pentru creștere sustenabilă.",
    },
  ];

  return (
    <section id="despre" className="bg-primary py-20 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/60">
            De ce contează
          </span>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            O viziune pentru șahul românesc
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Construim mai mult decât o platformă. Creăm un ecosistem complet
            care conectează jucători, organizatori și comunități pentru a
            transforma șahul în România.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-colors hover:bg-primary-foreground/10 lg:p-8"
            >
              <span className="text-sm font-medium text-primary-foreground/40">
                {pillar.number}
              </span>
              <h3 className="mt-4 text-xl font-medium">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
