import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    years: "2020 – 2023",
    title: "Bachelor of Computer Applications",
    subtitle: "BCA · University",
  },
  {
    years: "2023 – 2025",
    title: "Master of Computer Applications",
    subtitle: "MCA · University",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden border-y border-white/5 bg-white/[.015] py-24">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-amber-500/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-width relative">
        <Reveal>
          <SectionHeading number="06" label="Education" title="Education & learning.">
            <p className="mt-3 max-w-xl text-zinc-400">
              My academic journey and continuous learning path.
            </p>
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map(({ years, title, subtitle }, i) => (
            <Reveal key={title} delay={i * 90} className="h-full">
              <article className="group relative flex h-full items-center gap-5 overflow-hidden rounded-3xl border border-amber-400/20 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-[0_0_40px_-12px_rgba(245,158,11,0.3)]">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-400 shadow-[0_0_20px_-4px_rgba(245,158,11,0.4)]">
                  <GraduationCap size={26} strokeWidth={1.75} />
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-amber-400">{years}</p>
                  <h3 className="mt-1.5 text-lg font-bold leading-snug text-white sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
