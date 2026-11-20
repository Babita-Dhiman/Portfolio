import { Code2, LayoutTemplate, Smartphone, Wrench, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  [Code2, "Frontend Development", "Responsive and reusable interfaces using modern HTML, CSS, JavaScript and React."],
  [LayoutTemplate, "UI Implementation", "Convert designs into clean, responsive web pages with attention to spacing and details."],
  [Smartphone, "Responsive Design", "Mobile, tablet and desktop layouts that remain usable across screen sizes."],
  [Wrench, "Website Improvements", "Fix layout issues, improve existing pages and add frontend interactions."],
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-width">
        <Reveal>
          <SectionHeading number="05" label="Services" title="How I can help." />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([Icon, title, text], i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <div className="glass h-full rounded-3xl p-6 transition hover:-translate-y-1 hover:border-amber-400/30">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-400/10 text-amber-400">
                  <Icon size={24} />
                </span>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-amber-400/20 bg-amber-400/[.04] p-6 sm:flex-row sm:items-center">
            <p className="text-zinc-300">Have a page or project that needs work? Send me an email.</p>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-300"
            >
              Email me <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
