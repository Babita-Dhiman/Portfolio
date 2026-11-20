import { Code2, Layers, GitBranch } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  { title: "Frontend", icon: Code2, items: ["HTML5", "CSS3", "JavaScript Basics", "React Basics", "Tailwind CSS", "Bootstrap"] },
  { title: "CMS & UI", icon: Layers, items: ["WordPress", "Elementor", "Beaver Builder", "Responsive Design", "UI Implementation", "Wix", "Square Online", "Webflow"] },
  { title: "Workflow", icon: GitBranch, items: ["Git", "GitHub", "REST APIs", "VS Code", "Vite", "Browser DevTools"] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-white/[.015] py-24">
      <div className="container-width">
        <Reveal>
          <SectionHeading number="02" label="Skills" title="Tools I use to build." />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {groups.map(({ title, icon: Icon, items }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="glass h-full rounded-3xl p-6 transition hover:border-amber-400/30">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/10 text-amber-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-white/[.06] px-3 py-2 text-sm text-zinc-300 transition hover:bg-amber-400/15 hover:text-amber-200"
                    >
                      {item}
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
