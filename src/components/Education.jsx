import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  ["2020 – 2023", "Bachelor of Computer Applications", "BCA"],
  ["2023 – 2025", "Master of Computer Applications", "MCA"],
];

export default function Education() {
  return (
    <section id="education" className="border-y border-white/5 bg-white/[.015] py-24">
      <div className="container-width">
        <Reveal>
          <SectionHeading number="05" label="Education" title="Academic background." />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map(([year, title, degree], i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="glass rounded-3xl p-6 transition hover:border-amber-400/30">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-400/10 text-amber-400">
                    <GraduationCap size={22} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-amber-400">{year}</p>
                    <h3 className="mt-1 text-lg font-bold text-zinc-100">{title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{degree}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
