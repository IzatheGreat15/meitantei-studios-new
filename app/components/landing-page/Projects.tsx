import { FiArrowUpRight, FiLink } from "react-icons/fi";

const concepts = [
  {
    name: "Riverside Plumbing",
    category: "PLUMBING · PERTH",
    description:
      "A professional website designed to turn visitors into quote requests.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=85",
    initials: "RP",
  },
  {
    name: "GreenScape Landscaping",
    category: "LANDSCAPING · SYDNEY",
    description:
      "A visual-first website concept for showcasing landscaping services.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    initials: "GS",
  },
  {
    name: "PestSafe Solutions",
    category: "PEST CONTROL · PERTH",
    description:
      "A clear, mobile-friendly concept with service information and calls to action.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    initials: "PS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-blue-600">
              Selected concepts
            </p>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Websites made to stand out.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              A glimpse of how your business could look online. Each concept
              explores a different local service business.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 self-start text-xs font-bold text-blue-600 hover:text-blue-800"
          >
            Discuss your website <FiArrowUpRight />
          </a>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((project) => (
            <article
              key={project.name}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
            >
              <div className="relative h-52 shrink-0 overflow-hidden bg-slate-100 sm:h-60">
                <img
                  src={project.image}
                  alt={`${project.name} illustrative website concept`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wide text-blue-700 shadow-sm">
                  Website concept
                </span>

                <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-extrabold text-slate-900 shadow-md">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-blue-600 text-[10px] text-white">
                    {project.initials}
                  </span>
                  {project.name}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[9px] font-extrabold tracking-[.15em] text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                  {project.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-2 text-[10px] text-slate-500">
                    <FiLink className="shrink-0 text-blue-500" />
                    Independent concept
                  </span>

                  <a
                    href="#contact"
                    aria-label={`Discuss a website like ${project.name}`}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}