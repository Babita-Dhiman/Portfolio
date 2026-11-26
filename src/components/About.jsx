import { Monitor, Palette, Puzzle, Zap } from "lucide-react";
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

      <div className="container-width relative grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left content - sticky + top aligned */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading number="01" label="About" title="A frontend developer who cares about details.">
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-400">
              I build responsive, user-friendly websites and web interfaces with a strong focus on clean UI,
              reusable components and practical user experiences.
            </p>
          </SectionHeading>
        </Reveal>

        {/* Right side */}
        <div className="space-y-8">
          <Reveal delay={80}>
            <p className="text-sm leading-7 text-zinc-400 sm:text-base">
              My current toolkit includes{" "}
              <span className="font-medium text-amber-400">
                HTML, CSS, Bootstrap, JavaScript, Tailwind CSS and WordPress
              </span>
              . I enjoy turning designs into fast, polished and maintainable interfaces.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={120 + i * 50}>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{text}</p>
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
