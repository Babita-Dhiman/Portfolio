import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    years: "2020 – 2023",
    title: "Bachelor of Computer Applications",
    subtitle: "BCA · University",
    description: "Built a strong foundation in computer applications and web technologies.",
  },
  {
    years: "2023 – 2025",
    title: "Master of Computer Applications",
    subtitle: "MCA · University",
    description: "Deepened my knowledge in advanced computer applications.",
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

      <div className="container-width relative grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Left */}
        <Reveal>
          <SectionHeading number="06" label="Education" title="Education & learning.">
            <p className="mt-5 max-w-sm text-base leading-7 text-zinc-400">
              My academic journey and continuous learning path.
            </p>
          </SectionHeading>
        </Reveal>

        {/* Right: timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/60 via-amber-400/30 to-amber-400/10"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {items.map(({ years, title, subtitle, description }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="relative flex gap-5 pl-1">
                  {/* dot */}
                  <span
                    className="relative z-10 mt-1.5 grid h-3 w-3 shrink-0 place-items-center rounded-full border-2 border-amber-400 bg-zinc-950 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                    aria-hidden="true"
                  />

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-amber-400">{years}</p>
                    <h3 className="mt-1.5 text-lg font-bold text-white sm:text-xl">{title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
