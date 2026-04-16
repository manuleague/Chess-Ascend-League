import Link from "next/link";

export function Community() {
  return (
    <section className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Comunitate
          </span>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Fii parte din mișcare
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Grupul nostru de Facebook este hub-ul principal al comunității. Aici
            găsești actualizări, discuții și oportunități de a te implica activ.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://www.facebook.com/groups/932989352246965/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 sm:h-12"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Alătură-te Comunității
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-3xl font-medium">500+</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Membri în comunitate
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-3xl font-medium">Zilnic</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Actualizări și discuții
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-3xl font-medium">Direct</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Acces la echipă
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
