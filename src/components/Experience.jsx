import { Check } from "lucide-react";
import { site } from "../data/site";
import { projects } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const work = [
  "Visual design & styling",
  "Page layouts & navigation",
  "Typography & spacing",
  "Elementor customization",
  "Responsive adjustments",
  "Client feedback revisions",
];
const tools = ["HTML", "CSS", "Bootstrap", "JavaScript Basics", "React Basics", "WordPress", "Git/GitHub"];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container-width">
        <Reveal>
          <SectionHeading number="03" label="Experience" title="My recent experience." />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 border-l border-white/10 pl-6">
            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-amber-400 ring-8 ring-[#070707]" />
              <h3 className="text-xl font-bold">{site.role}</h3>
              <p className="mt-1 text-amber-400">{site.experienceMonths} Months Experience</p>

              <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
                Worked on live client websites built with WordPress (Elementor) and Square Online — focused on
                visual design, page layouts and responsive presentation.
              </p>

              <ul className="mt-6 grid max-w-3xl gap-x-6 gap-y-3 sm:grid-cols-2">
                {work.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-400/15 text-amber-400">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">Live sites</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {projects.map((p) => (
                  <a
                    key={p.title}
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-amber-400/40 hover:text-amber-300"
                  >
                    {p.title.split(" — ")[0]} ↗
                  </a>
                ))}
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tools.map((x) => (
                  <span key={x} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
