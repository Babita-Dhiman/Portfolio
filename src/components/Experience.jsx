import { Check, Calendar, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
import { projects } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const work = [
  "Visual Design & Styling",
  "Page Layouts & Navigation",
  "Typography & Spacing",
  "Elementor Customization",
  "Responsive Adjustments",
  "Client Feedback Revisions",
];

const tools = [
  { name: "HTML", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
  { name: "CSS", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { name: "Bootstrap", color: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
  { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-200 border-yellow-500/30" },
  { name: "React Basics", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  { name: "WordPress", color: "bg-sky-500/20 text-sky-300 border-sky-500/30" },
  { name: "GitHub", color: "bg-zinc-500/20 text-zinc-300 border-zinc-500/30" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container-width">
        <Reveal>
          <SectionHeading number="03" label="Experience" title="My recent experience." />
        </Reveal>

        <Reveal delay={100}>
          {/* Main experience card */}
          <div className="glass mt-10 overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
              {/* Left: role + description */}
              <div className="flex flex-1 gap-4 sm:gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sky-500/15 text-sky-400 sm:h-16 sm:w-16">
                  {/* WordPress-style W mark */}
                  <span className="text-2xl font-black tracking-tight sm:text-3xl">W</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold sm:text-2xl">{site.role}</h3>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-amber-400">
                    <Calendar size={14} />
                    {site.experienceMonths} Months Experience
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                    Worked on live client websites built with WordPress (Elementor) and Square Online — focused on
                    visual design, page layouts and responsive presentation.
                  </p>
                </div>
              </div>

              {/* Right: checklist */}
              <ul className="grid flex-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:max-w-md">
                {work.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-400/15 text-amber-400">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Live Sites */}
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <span className="h-4 w-1 rounded-full bg-amber-400" aria-hidden="true" />
              <p className="text-sm font-semibold text-white">Live Sites</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {projects.map((p) => (
                <a
                  key={p.title}
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.03] px-3.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-amber-400/40 hover:text-amber-300"
                >
                  {p.title}
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <span className="h-4 w-1 rounded-full bg-amber-400" aria-hidden="true" />
              <p className="text-sm font-semibold text-white">Tools</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t.name}
                  className={`inline-flex items-center rounded-full border px-3.5 py-2 text-xs font-semibold ${t.color}`}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
