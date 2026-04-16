import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary p-10 text-center text-primary-foreground lg:p-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Fii parte din transformarea șahului în România
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Alătură-te mișcării. Susține, participă, contribuie. Împreună
            construim ceva durabil.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#fundraising"
              className="inline-flex h-14 w-full items-center justify-center rounded-full bg-primary-foreground px-8 text-base font-medium text-primary transition-all hover:bg-primary-foreground/90 sm:h-12 sm:w-auto"
            >
              Susține Proiectul
            </Link>
            <Link
              href="https://www.facebook.com/groups/932989352246965/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/20 bg-transparent px-8 text-base font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10 sm:h-12 sm:w-auto"
            >
              Intră în Comunitate
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
      </div>
    </section>
  );
}
