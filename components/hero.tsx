import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col justify-center py-20 lg:py-32">
          <div className="mb-6 inline-flex">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Campanie activă de fundraising
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Construim ecosistemul de șah din România
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            O mișcare care unește comunitatea, organizează evenimente și pune
            bazele unei infrastructuri pe termen lung pentru șahul românesc.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#fundraising"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 sm:h-12"
            >
              Susține Mișcarea
            </Link>
            <Link
              href="#parteneri"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 text-base font-medium text-foreground transition-all hover:bg-secondary sm:h-12"
            >
              Devino Partener
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3 lg:mt-24">
            <div>
              <p className="text-3xl font-medium lg:text-4xl">2+</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Orașe active (Iași, Brașov)
              </p>
            </div>
            <div>
              <p className="text-3xl font-medium lg:text-4xl">10+</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Parteneri în ecosistem
              </p>
            </div>
            <div>
              <p className="text-3xl font-medium lg:text-4xl">2025</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Anul lansării platformei
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
