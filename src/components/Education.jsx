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
          <SectionHeading number="06" label="Education" title="Education & learning." />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map(([years, title, short], i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="glass flex gap-5 rounded-3xl p-7 transition hover:border-amber-400/30">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-400/10 text-amber-400">
                  <GraduationCap size={24} />
                </span>
                <div>
                  <p className="text-sm text-amber-400">{years}</p>
                  <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  <p className="mt-1 text-zinc-400">{short}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
