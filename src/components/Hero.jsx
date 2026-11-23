import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { site } from "../data/site";
import useTypewriter from "../hooks/useTypewriter";

export default function Hero() {
  const text = useTypewriter(site.roles);

  return (
    <section id="home" className="grid-bg relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="aurora" aria-hidden="true" />

      <div className="container-width relative grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.18em] text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for frontend projects
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Building clean,
            <br />
            modern <span className="gradient-text">web experiences.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            I’m a <span className="font-semibold text-white">{text}</span>
            <span className="ml-1 animate-pulse text-amber-400" aria-hidden="true">|</span> focused on
            responsive interfaces and polished UI.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 font-semibold text-black transition hover:bg-amber-300"
            >
              View Projects <ArrowUpRight size={17} />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-white/15 px-5 py-3 font-semibold transition hover:border-white/30 hover:bg-white/[.04]"
            >
              Let’s Work Together
            </a>
          </div>

          <div className="mt-8 flex gap-4 text-zinc-500">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white">
              <Github />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <Linkedin />
            </a>
          </div>
        </div>

        <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-2xl">
          <div className="mb-5 flex gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <pre className="overflow-auto text-sm leading-7 text-zinc-300">
{`const developer = {
  name: "${site.name}",
  role: "${site.role}",
  stack: [
    "HTML", "CSS", "JavaScript",
    "React", "Tailwind", "WordPress"
  ],
  focus: "Clean & responsive UI",
  experience: "${site.experienceMonths} months"
};

developer.build();`}
          </pre>
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl" />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-300 lg:flex"
      >
        <ArrowDown size={16} className="animate-bounce" /> Scroll to explore
      </a>
    </section>
  );
}
