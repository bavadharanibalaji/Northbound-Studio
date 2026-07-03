import Image from "next/image";

const projects = [
  { title: "Alder & Finch", category: "Branding", seed: "alder-finch" },
  { title: "Portside Bank", category: "Web Development", seed: "portside" },
  { title: "Loom Studio", category: "UI/UX Design", seed: "loom" },
  { title: "Cascade Foods", category: "Digital Marketing", seed: "cascade" },
  { title: "Marrow Health", category: "Branding", seed: "marrow" },
  { title: "Fielder App", category: "UI/UX Design", seed: "fielder" },
];

export default function Portfolio() {
  return (
    <section id="work" className="border-b border-line px-6 py-20 dark:border-line-dark md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest2 text-signal">
            Selected work
          </p>
          <h2 className="max-w-xl font-display text-4xl tracking-tightest md:text-5xl">
            Recent bearings.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.seed}
              href="#"
              className="group relative block overflow-hidden rounded-2xl border border-line dark:border-line-dark"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={`https://picsum.photos/seed/${project.seed}/800/600`}
                  alt={`${project.title} project thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest2 text-white/70">
                      {project.category}
                    </p>
                    <p className="font-display text-lg text-white">{project.title}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 group-hover:hidden">
                <span className="font-display text-lg">{project.title}</span>
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-steel dark:text-steel-dark">
                  {project.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
