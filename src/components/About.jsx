import { Smartphone, Palette, Puzzle, Zap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  [Smartphone, "Responsive UI", "Layouts that hold up on mobile, tablet and desktop."],
  [Palette, "Pixel-focused design", "Spacing, type and details that match the design."],
  [Puzzle, "Reusable components", "Clean structure that is easy to extend."],
  [Zap, "Fast & maintainable", "Lightweight pages that are simple to update."],
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-width grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <Reveal>
          <SectionHeading number="01" label="About" title="A frontend developer who cares about details." />
        </Reveal>

        <Reveal delay={100} className="space-y-5 text-lg leading-8 text-zinc-400">
          <p>
            I build responsive, user-friendly websites and web interfaces with a strong focus on clean UI,
            reusable components and practical user experiences.
          </p>
          <p>
            My current toolkit includes HTML, CSS, Bootstrap, JavaScript, React, Tailwind CSS and WordPress.
            I enjoy turning designs into fast, polished and maintainable interfaces.
          </p>

          <div className="grid gap-3 pt-3 sm:grid-cols-2">
            {highlights.map(([Icon, title, text]) => (
              <div key={title} className="glass rounded-2xl p-5 transition hover:border-amber-400/30">
                <Icon size={20} className="text-amber-400" />
                <h3 className="mt-3 text-sm font-semibold text-zinc-100">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
