import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                Chess Ascend
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Construim ecosistemul de șah din România. Comunitate, evenimente,
              parteneriate și viziune pe termen lung.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/50">
                Navigare
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="#despre"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Despre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#fundraising"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Susține
                  </Link>
                </li>
                <li>
                  <Link
                    href="#parteneri"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Parteneri
                  </Link>
                </li>
                <li>
                  <Link
                    href="#roadmap"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/50">
                Contact
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="mailto:contact@chessascend.ro"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    contact@chessascend.ro
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:parteneriate@chessascend.ro"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    parteneriate@chessascend.ro
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/50">
                Comunitate
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="https://www.facebook.com/groups/932989352246965/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Facebook
                    <svg
                      className="h-3 w-3"
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
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Chess Ascend League SRL. Toate
            drepturile rezervate.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground"
            >
              Termeni și Condiții
            </Link>
            <Link
              href="#"
              className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground"
            >
              Politica de Confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
