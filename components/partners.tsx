import Link from "next/link";

export function Partners() {
  const partners = [
    {
      name: "Senzoria Festival",
      type: "Festival",
      description: "Partener strategic pentru evenimente culturale",
    },
    {
      name: "Politehnica Iași",
      type: "Universitate",
      description: "Colaborare pentru comunitatea studențească",
    },
    {
      name: "Micul Șahist",
      type: "Club de Șah",
      description: "Parteneriat pentru dezvoltarea juniorilor",
    },
    {
      name: "Cluburi de Șah",
      type: "Organizații",
      description: "Rețea de cluburi partenere în România",
    },
    {
      name: "Cafenele & Huburi",
      type: "Locații",
      description: "Spații pentru turnee și meetup-uri",
    },
    {
      name: "Organizatori Boardgames",
      type: "Comunități",
      description: "Colaborare pentru evenimente mixte",
    },
  ];

  return (
    <section id="parteneri" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Ecosistem
            </span>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Parteneri și colaboratori
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Construim o rețea de parteneri care găzduiesc turnee, activează
              comunități și cresc împreună cu ecosistemul nostru.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-all hover:bg-secondary"
          >
            Devino Partener
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm lg:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <span className="text-lg font-semibold text-secondary-foreground">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <div className="mt-6">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {partner.type}
                </span>
                <h3 className="mt-2 text-lg font-medium">{partner.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-secondary/30 p-6 lg:p-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-lg font-medium">
                Vrei să devii parte din ecosistem?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Festivaluri, cafenele, restaurante, huburi, cluburi - toți pot
                găzdui turnee și evenimente.
              </p>
            </div>
            <Link
              href="mailto:contact@chessascend.ro"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Contactează-ne
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
