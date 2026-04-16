export function Roadmap() {
  const milestones = [
    {
      phase: "Q1 2025",
      status: "completed",
      items: [
        { title: "Lansare landing page", done: true },
        { title: "Creare companie", done: true },
        { title: "Înregistrare OSIM", done: true },
      ],
    },
    {
      phase: "Q2 2025",
      status: "active",
      items: [
        { title: "Activare ecosistem parteneri", done: true },
        { title: "Fundraising comunitar + ads", done: false },
        { title: "Prezență Arena - 5 Mai", done: false },
        { title: "Investment ask: 25.000 EUR platformă", done: false },
      ],
    },
    {
      phase: "Q3 2025",
      status: "upcoming",
      items: [
        { title: "Extindere fundraising Brașov (QR)", done: false },
        { title: "Acces 50.000 EUR - Raiffeisen Factory", done: false },
        { title: "Lansare versiune beta platformă", done: false },
      ],
    },
    {
      phase: "Q4 2025+",
      status: "upcoming",
      items: [
        { title: "Facilitare granturi și scaling", done: false },
        { title: "Cluburi fizice de șah", done: false },
        { title: "Expansiune națională", done: false },
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Roadmap
          </span>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Pașii către viziune
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Un plan clar de execuție care transformă ideea în realitate. Fiecare
            milestone ne apropie de obiectivul final.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.phase}
                className={`relative rounded-xl border p-6 lg:p-8 ${
                  milestone.status === "active"
                    ? "border-accent bg-accent/5"
                    : milestone.status === "completed"
                    ? "border-border bg-secondary/50"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                      milestone.status === "active"
                        ? "bg-accent text-accent-foreground"
                        : milestone.status === "completed"
                        ? "bg-foreground text-background"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      milestone.status === "active"
                        ? "text-accent"
                        : "text-muted-foreground"
                    }`}
                  >
                    {milestone.phase}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {milestone.items.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          item.done
                            ? "bg-foreground text-background"
                            : "border border-border bg-background"
                        }`}
                      >
                        {item.done && (
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`text-sm ${
                          item.done
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>

                {milestone.status === "active" && (
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                      În progres
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
