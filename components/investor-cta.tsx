import Link from "next/link";

export function InvestorCTA() {
  const options = [
    {
      title: "Partener",
      description:
        "Găzduiește turnee și evenimente în spațiul tău. Devino parte din ecosistem.",
      cta: "Devino Partener",
      href: "mailto:parteneriate@chessascend.ro?subject=Parteneriat%20Chess%20Ascend",
    },
    {
      title: "Sponsor",
      description:
        "Susține vizibilitatea brandului tău în comunitatea de șah din România.",
      cta: "Discută Sponsorizare",
      href: "mailto:sponsorizari@chessascend.ro?subject=Sponsorizare%20Chess%20Ascend",
    },
    {
      title: "Investitor",
      description:
        "Investește în ecosistemul de șah din România. Ask: 25.000 EUR pentru platformă.",
      cta: "Discută Investiția",
      href: "mailto:investitii@chessascend.ro?subject=Investitie%20Chess%20Ascend",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Colaborează cu noi
          </span>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Susține misiunea strategic
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Fie că ești partener, sponsor sau investitor, există un loc pentru
            tine în ecosistemul Chess Ascend.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.title}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <h3 className="text-xl font-medium">{option.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {option.description}
              </p>
              <Link
                href={option.href}
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-border bg-transparent text-sm font-medium text-foreground transition-all hover:bg-secondary"
              >
                {option.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
