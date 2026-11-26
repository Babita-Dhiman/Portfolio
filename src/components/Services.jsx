import { Code2, LayoutTemplate, Smartphone, TrendingUp, ArrowUpRight, Mail } from "lucide-react";
import { site } from "../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    text: "I build modern and responsive web interfaces using HTML, CSS, JavaScript and React.",
  },
  {
    icon: LayoutTemplate,
    title: "UI Implementation",
    text: "Convert designs into clean, responsive web pages with attention to spacing and details.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "Make websites look amazing across all devices — desktop, tablet and mobile.",
  },
  {
    icon: TrendingUp,
    title: "Website Improvements",
    text: "Enhance website performance, speed, and user experience with modern best practices.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      {/* soft ambient glow */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-width relative">
        <Reveal>
          <SectionHeading number="05" label="Services" title="How I can help.">
            <p className="mt-3 max-w-xl text-zinc-400">
              I build modern and responsive{" "}
              <span className="font-medium text-amber-400">web solutions</span> to bring your
              ideas to life.
            </p>
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-amber-400/20 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-[0_0_40px_-12px_rgba(245,158,11,0.35)]">
                {/* subtle inner glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(245,158,11,0.06), transparent 40%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-400 shadow-[0_0_20px_-4px_rgba(245,158,11,0.4)]">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-500 transition group-hover:border-amber-400/40 group-hover:text-amber-400">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-stretch justify-between gap-4 rounded-full border border-amber-400/25 bg-zinc-950/60 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-zinc-200">
                  Have a project or an idea that needs work?
                </p>
                <p className="text-sm text-zinc-500">Send me an email.</p>
              </div>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-300"
            >
              Email me <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
