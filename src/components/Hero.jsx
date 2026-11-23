import { ArrowDown, ArrowUpRight, Github, Linkedin, Code2, Heart } from "lucide-react";
import { site } from "../data/site";
import useTypewriter from "../hooks/useTypewriter";

export default function Hero() {
  const text = useTypewriter(site.roles);

  return (
    <section id="home" className="grid-bg relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="aurora" aria-hidden="true" />
      {/* soft secondary glow bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-width relative grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-10 lg:py-20">
        {/* Left content */}
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[.18em] text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            Available for frontend projects
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Building clean,
            <br />
            modern web{" "}
            <span className="text-amber-400">experiences.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I'm a{" "}
            <span className="font-semibold text-white">{text}</span>
            <span className="ml-1 animate-pulse text-amber-400" aria-hidden="true">
              |
            </span>{" "}
            focused on responsive interfaces and polished UI.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-300 sm:text-base"
            >
              View Projects <ArrowUpRight size={17} />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/[.04] sm:text-base"
            >
              Let's Work Together <Heart size={15} className="text-amber-400" />
            </a>
          </div>

          <div className="mt-7 flex gap-4 text-zinc-500">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white">
              <Github />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Right: code window */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          {/* floating JS badge */}
          <div className="absolute -right-2 -top-3 z-10 inline-flex items-center gap-1.5 rounded-lg border border-amber-400/30 bg-zinc-950 px-2.5 py-1.5 text-[11px] font-semibold text-amber-300 shadow-lg shadow-amber-500/10 sm:-right-4 sm:-top-4">
            <span className="grid h-4 w-4 place-items-center rounded bg-amber-400/20 text-[9px] text-amber-400">JS</span>
            JavaScript
          </div>
          {/* floating code icon */}
          <div className="absolute -bottom-3 -right-2 z-10 grid h-10 w-10 place-items-center rounded-xl border border-amber-400/25 bg-zinc-950 text-amber-400 shadow-lg shadow-amber-500/10 sm:-bottom-4 sm:-right-4">
            <Code2 size={18} />
          </div>

          {/* glow ring */}
          <div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-amber-400/40 via-amber-500/10 to-transparent opacity-80 blur-[1px]" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-2xl border border-amber-400/25 bg-[#0c0c0e] shadow-2xl shadow-amber-500/10">
            {/* title bar */}
            <div className="flex items-center gap-2 border-b border-white/8 bg-white/[.03] px-4 py-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
              </span>
              <span className="ml-2 truncate text-[11px] text-zinc-500">developer.js</span>
            </div>

            {/* code body with line numbers */}
            <div className="overflow-x-auto p-4 font-mono text-[12px] leading-6 sm:text-[13px] sm:leading-7">
              <CodeLine n={1}>
                <Kw>const</Kw> <Var>developer</Var> <Op>=</Op> {"{"}
              </CodeLine>
              <CodeLine n={2}>
                {"  "}
                <Prop>name</Prop>
                <Op>:</Op> <Str>"{site.name}"</Str>,
              </CodeLine>
              <CodeLine n={3}>
                {"  "}
                <Prop>role</Prop>
                <Op>:</Op> <Str>"{site.role}"</Str>,
              </CodeLine>
              <CodeLine n={4}>
                {"  "}
                <Prop>stack</Prop>
                <Op>:</Op> [
              </CodeLine>
              <CodeLine n={5}>
                {"    "}
                <Str>"HTML"</Str>, <Str>"CSS"</Str>, <Str>"JavaScript"</Str>,
              </CodeLine>
              <CodeLine n={6}>
                {"    "}
                <Str>"React"</Str>, <Str>"Tailwind"</Str>, <Str>"WordPress"</Str>
              </CodeLine>
              <CodeLine n={7}>
                {"  "}],
              </CodeLine>
              <CodeLine n={8}>
                {"  "}
                <Prop>focus</Prop>
                <Op>:</Op> <Str>"Clean & Responsive UI"</Str>,
              </CodeLine>
              <CodeLine n={9}>
                {"  "}
                <Prop>experience</Prop>
                <Op>:</Op> <Str>"{site.experienceMonths} months"</Str>
              </CodeLine>
              <CodeLine n={10}>{"}"};</CodeLine>
              <CodeLine n={11}>&nbsp;</CodeLine>
              <CodeLine n={12}>
                <Var>developer</Var>
                <Op>.</Op>
                <Fn>build</Fn>
                <Op>()</Op>;
              </CodeLine>
            </div>
          </div>
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

function CodeLine({ n, children }) {
  return (
    <div className="flex gap-3 whitespace-pre">
      <span className="w-5 shrink-0 select-none text-right text-zinc-600">{n}</span>
      <span className="min-w-0 text-zinc-300">{children}</span>
    </div>
  );
}

function Kw({ children }) {
  return <span className="text-fuchsia-400">{children}</span>;
}
function Var({ children }) {
  return <span className="text-sky-300">{children}</span>;
}
function Prop({ children }) {
  return <span className="text-amber-200">{children}</span>;
}
function Str({ children }) {
  return <span className="text-emerald-400">{children}</span>;
}
function Op({ children }) {
  return <span className="text-zinc-400">{children}</span>;
}
function Fn({ children }) {
  return <span className="text-amber-400">{children}</span>;
}
