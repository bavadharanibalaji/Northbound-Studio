const services = [
  {
    code: "UX",
    title: "UI/UX Design",
    description:
      "Research-driven interfaces that make complex products feel obvious to use.",
    icon: (
      <path d="M4 6h16M4 12h10M4 18h16" strokeLinecap="round" strokeWidth="1.6" />
    ),
  },
  {
    code: "WD",
    title: "Web Development",
    description:
      "Fast, accessible, production-grade builds on modern frameworks like Next.js.",
    icon: (
      <path
        d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    ),
  },
  {
    code: "BR",
    title: "Branding",
    description:
      "Identity systems, from mark and type to voice, built to hold up at any scale.",
    icon: (
      <>
        <circle cx="12" cy="9" r="4" strokeWidth="1.6" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    code: "DM",
    title: "Digital Marketing",
    description:
      "Positioning and campaigns that connect the work to the people it's for.",
    icon: (
      <path
        d="M4 18l6-6 4 4 6-9M20 7h-4v4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-line px-6 py-20 dark:border-line-dark md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest2 text-signal">
              What we do
            </p>
            <h2 className="max-w-xl font-display text-4xl tracking-tightest md:text-5xl">
              Four disciplines, one studio.
            </h2>
          </div>
          <p className="max-w-sm text-steel dark:text-steel-dark">
            We keep our focus narrow on purpose — deep expertise across the
            work that actually moves a brand.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line dark:border-line-dark dark:bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.code}
              className="group flex flex-col gap-6 bg-paper p-8 transition-colors hover:bg-signal-soft dark:bg-paper-dark dark:hover:bg-signal-soft-dark"
            >
              <div className="flex items-center justify-between">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-ink transition-colors group-hover:text-signal dark:text-ink-dark"
                  fill="none"
                  stroke="currentColor"
                >
                  {service.icon}
                </svg>
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-steel dark:text-steel-dark">
                  {service.code}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl">{service.title}</h3>
                <p className="mt-2 text-sm text-steel dark:text-steel-dark">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
