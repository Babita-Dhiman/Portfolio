import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    role: "Frontend Developer",
    company: "Freelance / Personal Projects",
    period: "2023 – Present",
    points: [
      "Building responsive websites and web apps using React, Tailwind CSS and modern frontend tools.",
      "Translating designs into clean, reusable components with attention to spacing, typography and accessibility.",
      "Working with WordPress, Elementor and page builders for client-ready websites.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container-width">
        <Reveal>
          <SectionHeading number="04" label="Experience" title="Where I've worked." />
        </Reveal>

        <div className="mt-10 space-y-6">
          {jobs.map((job, i) => (
            <Reveal key={job.role} delay={i * 80}>
              <div className="glass rounded-3xl p-6 transition hover:border-amber-400/30 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-400/10 text-amber-400">
                      <Briefcase size={22} />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100">{job.role}</h3>
                      <p className="mt-1 text-sm text-zinc-400">{job.company}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/[.06] px-3 py-1 text-sm text-zinc-400">{job.period}</span>
                </div>
                <ul className="mt-5 space-y-2 pl-16">
                  {job.points.map((point) => (
                    <li key={point} className="relative text-sm leading-7 text-zinc-400 before:absolute before:-left-4 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-400/60">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
