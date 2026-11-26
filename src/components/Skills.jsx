import {
  Code2,
  Layers,
  Settings2,
  FileCode2,
  Braces,
  Atom,
  Wind,
  Box,
  LayoutTemplate,
  Puzzle,
  MonitorSmartphone,
  PenTool,
  Globe,
  GitBranch,
  Github,
  Terminal,
  Chrome,
  Lightbulb,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Frontend",
    description: "Crafting responsive and interactive user interfaces.",
    icon: Code2,
    items: [
      { name: "HTML5", icon: FileCode2, color: "text-orange-400" },
      { name: "CSS3", icon: Braces, color: "text-blue-400" },
      { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
      { name: "React Basics", icon: Atom, color: "text-sky-400" },
      { name: "Tailwind CSS", icon: Wind, color: "text-cyan-400" },
      { name: "Bootstrap", icon: Box, color: "text-violet-400" },
    ],
  },
  {
    title: "CMS & UI",
    description: "Building flexible and customizable experiences.",
    icon: Layers,
    items: [
      { name: "WordPress", icon: Globe, color: "text-blue-300" },
      { name: "Elementor", icon: LayoutTemplate, color: "text-pink-400" },
      { name: "Beaver Builder", icon: Puzzle, color: "text-amber-300" },
      { name: "Responsive Design", icon: MonitorSmartphone, color: "text-emerald-400" },
      { name: "UI Implementation", icon: PenTool, color: "text-rose-400" },
      { name: "Wix", icon: Box, color: "text-zinc-300" },
      { name: "Square Online", icon: Globe, color: "text-zinc-300" },
      { name: "Webflow", icon: Wind, color: "text-blue-400" },
    ],
  },
  {
    title: "Workflow",
    description: "Improving development workflow and productivity.",
    icon: Settings2,
    items: [
      { name: "Git", icon: GitBranch, color: "text-orange-400" },
      { name: "GitHub", icon: Github, color: "text-zinc-200" },
      { name: "VS Code", icon: Terminal, color: "text-sky-400" },
      { name: "Browser DevTools", icon: Chrome, color: "text-amber-300" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-white/5 bg-white/[.015] py-24">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-[380px] w-[380px] rounded-full bg-amber-500/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-width relative">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading number="02" label="Skills" title="Tools I use to build.">
              <p className="mt-3 max-w-xl text-zinc-400">
                Modern tools and technologies to create fast, scalable and beautiful websites.
              </p>
            </SectionHeading>

            {/* floating tech badges */}
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {[Code2, Globe, Atom, PenTool].map((Icon, i) => (
                <span
                  key={i}
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-amber-400/25 bg-zinc-950/80 text-amber-400 shadow-[0_0_20px_-6px_rgba(245,158,11,0.35)]"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {groups.map(({ title, description, icon: Icon, items }, i) => (
            <Reveal key={title} delay={i * 90} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-amber-400/20 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-[0_0_40px_-12px_rgba(245,158,11,0.3)]">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-400 shadow-[0_0_20px_-4px_rgba(245,158,11,0.4)]">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {items.map(({ name, icon: ItemIcon, color }) => (
                    <span
                      key={name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[.04] px-3 py-1.5 text-xs font-medium text-zinc-300 transition group-hover:border-amber-400/20"
                    >
                      <ItemIcon size={13} className={color} strokeWidth={2} />
                      {name}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="mt-10 flex items-center justify-center gap-3 rounded-full border border-amber-400/20 bg-zinc-950/50 px-5 py-3.5 text-sm text-zinc-400">
            <Lightbulb size={16} className="shrink-0 text-amber-400" />
            <p>
              Always exploring new tools to build{" "}
              <span className="font-medium text-amber-400">better solutions</span>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
