import { useMemo, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
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

  // Filters come from each project's `category`, with counts.
  const filters = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category))];
    return [
      { name: "All", count: projects.length },
      ...cats.map((name) => ({ name, count: projects.filter((p) => p.category === name).length })),
    ];
  }, []);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

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
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="block overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
                >
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
                </a>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">{project.category}</p>
                  {project.tag && (
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-zinc-500">
                      {project.tag}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                <ul className="mt-3 flex-1 space-y-2 text-sm leading-6 text-zinc-400">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-md bg-white/[.05] px-2 py-1 text-[11px] text-zinc-400">
                      {t}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 transition hover:text-amber-300"
                >
                  <ExternalLink size={16} /> Visit Website
                  <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
