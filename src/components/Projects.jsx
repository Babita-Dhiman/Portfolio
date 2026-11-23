import { useMemo, useState, useEffect } from "react";
import { ExternalLink, ArrowUpRight, X } from "lucide-react";
import { projects } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const hostname = (url) => new URL(url).hostname.replace("www.", "");
const initials = (title) =>
  title
    .split(/[\s—-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filters = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category))];
    return [
      { name: "All", count: projects.length },
      ...cats.map((name) => ({ name, count: projects.filter((p) => p.category === name).length })),
    ];
  }, []);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  // Close modal on Escape
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="projects" className="border-y border-white/5 bg-white/[.015] py-24">
      <div className="container-width">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading number="04" label="Projects" title="Selected work.">
              <p className="mt-3 max-w-xl text-zinc-400">Live client websites I have worked on.</p>
            </SectionHeading>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {filters.map(({ name, count }) => (
                <button
                  key={name}
                  onClick={() => setFilter(name)}
                  aria-pressed={filter === name}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    filter === name
                      ? "bg-amber-400 text-black"
                      : "border border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  {name} <span className="opacity-60">{count}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 80} className="h-full">
              <article className="glass group flex h-full flex-col rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
                  {/* mini browser frame */}
                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/[.03] px-3 py-2">
                    <span className="flex gap-1" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                    </span>
                    <span className="min-w-0 flex-1 truncate rounded-md bg-black/40 px-2 py-0.5 text-[11px] text-zinc-500">
                      {hostname(project.live)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
                    </span>
                  </div>
                  <div className={`relative grid h-36 place-items-center bg-gradient-to-br ${project.accent}`}>
                    <span className="text-6xl font-black tracking-tighter text-white/25 transition duration-500 group-hover:scale-110 group-hover:text-white/40">
                      {initials(project.title)}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">{project.category}</p>
                  {project.tag && (
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-zinc-500">
                      {project.tag}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-xl font-bold">{project.title}</h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold transition hover:border-amber-400/40 hover:bg-white/[.04]"
                  >
                    View Details
                  </button>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-amber-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-300"
                  >
                    Visit Website <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl">
            <div className={`relative grid h-40 place-items-center bg-gradient-to-br ${selected.accent}`}>
              <span className="text-7xl font-black tracking-tighter text-white/20">
                {initials(selected.title)}
              </span>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-black/60"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  {selected.category}
                </p>
                {selected.tag && (
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-zinc-500">
                    {selected.tag}
                  </span>
                )}
              </div>

              <h3 id="project-modal-title" className="mt-2 text-2xl font-bold">
                {selected.title}
              </h3>

              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-zinc-400">
                {selected.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {selected.tech.map((t) => (
                  <li key={t} className="rounded-md bg-white/[.05] px-2.5 py-1 text-[11px] text-zinc-400">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
                >
                  <ExternalLink size={16} /> Visit Website
                </a>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/[.04]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
