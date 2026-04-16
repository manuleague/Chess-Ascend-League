import Link from "next/link";

export function Fundraising() {
  return (
    <section id="fundraising" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Fundraising
            </span>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Susține construcția ecosistemului
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Proiectul este în faza de fundraising comunitar. Fiecare
              contribuție ajută la organizarea de evenimente, activarea
              comunităților locale și construirea infrastructurii necesare.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Evenimente și turnee</p>
                  <p className="text-sm text-muted-foreground">
                    Organizare de competiții în Iași, Brașov și alte orașe
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Activare comunități locale</p>
                  <p className="text-sm text-muted-foreground">
                    Parteneriate cu cafenele, huburi și organizatori
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Vizibilitate și promovare</p>
                  <p className="text-sm text-muted-foreground">
                    Campanii de awareness în comunitățile locale
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="https://www.facebook.com/groups/932989352246965/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
              >
                Urmărește progresul în comunitate
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Donație via Revolut Business
                </p>
                <h3 className="mt-4 font-serif text-2xl font-medium">
                  Scanează codul QR
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Orice sumă contează și ajută misiunea
                </p>
              </div>

              {/* QR Code Placeholder - Replace with actual QR */}
              <div className="mx-auto mt-8 flex h-48 w-48 items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/50">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                    />
                  </svg>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Adaugă QR-ul aici
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="#contact"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Vreau să contribui altfel
                </Link>
                <p className="mt-4 text-xs text-muted-foreground">
                  Campania susține vizibilitatea în Iași și Brașov
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
