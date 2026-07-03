import { CompassMark } from "./Navbar";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line dark:border-line-dark"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(47,94,255,0.14), transparent 60%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.3fr_1fr] md:px-10 md:pb-28 md:pt-24">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest2 text-signal">
            Design &amp; Digital Studio — Est. Remote
          </p>
          <h1 className="font-display text-5xl leading-[1.03] tracking-tightest md:text-7xl">
            Design that moves
            <br />
            brands <span className="italic text-signal">forward.</span>
          </h1>
          <p className="mt-6 max-w-md font-body text-lg text-steel dark:text-steel-dark">
            Northbound partners with founders and product teams to build
            identities, interfaces, and campaigns for companies heading
            somewhere new.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-paper transition-transform hover:-translate-y-0.5 dark:bg-signal dark:text-white"
            >
              Get started
            </a>
            <a
              href="#work"
              className="rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-signal hover:text-signal dark:border-line-dark dark:text-ink-dark"
            >
              View work
            </a>
          </div>

          <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6 dark:border-line-dark">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest2 text-steel dark:text-steel-dark">
                Projects
              </dt>
              <dd className="mt-1 font-display text-2xl">120+</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest2 text-steel dark:text-steel-dark">
                Countries
              </dt>
              <dd className="mt-1 font-display text-2xl">14</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest2 text-steel dark:text-steel-dark">
                Years
              </dt>
              <dd className="mt-1 font-display text-2xl">8</dd>
            </div>
          </dl>
        </div>

        <div className="relative hidden items-center justify-center md:flex">
          <CompassMark className="h-64 w-64 animate-spin-slow text-ink/10 dark:text-ink-dark/10" />
          <div className="absolute h-40 w-40 rounded-full border border-line dark:border-line-dark" />
          <div className="absolute rounded-full bg-paper px-4 py-2 font-mono text-xs uppercase tracking-widest2 text-signal shadow-sm dark:bg-paper-dark">
            Heading: forward
          </div>
        </div>
      </div>
    </section>
  );
}
