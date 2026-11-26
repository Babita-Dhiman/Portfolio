import { Monitor, Palette, Puzzle, Zap, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Monitor,
    title: "Responsive UI",
    text: "Layouts that hold up on mobile, tablet and desktop.",
  },
  {
    icon: Palette,
    title: "Pixel-focused design",
    text: "Spacing, type and details that match the design.",
  },
  {
    icon: Puzzle,
    title: "Reusable components",
    text: "Clean structure that is easy to extend.",
  },
  {
    icon: Zap,
    title: "Fast & maintainable",
    text: "Lightweight pages that are simple to update.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-amber-500/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-width relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Left content */}
        <Reveal>
          <SectionHeading number="01" label="About" title="A frontend developer who cares about details.">
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-400">
              I build responsive, user-friendly websites and web interfaces with a strong focus on clean UI,
              reusable components and practical user experiences.
            </p>
          </SectionHeading>
        </Reveal>

        {/* Right: 2x2 cards + toolkit note */}
        <div className="space-y-5">
          <Reveal delay={80}>
            <p className="text-sm leading-7 text-zinc-400">
              My current toolkit includes{" "}
              <span className="font-medium text-amber-400">
                HTML, CSS, Bootstrap, JavaScript, React, Tailwind CSS and WordPress
              </span>
              . I enjoy turning designs into fast, polished and maintainable interfaces.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={120 + i * 60} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-amber-400/20 bg-zinc-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-[0_0_40px_-12px_rgba(245,158,11,0.3)]">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-400 shadow-[0_0_18px_-4px_rgba(245,158,11,0.4)]">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-zinc-500 transition group-hover:border-amber-400/40 group-hover:text-amber-400">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-zinc-400">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
