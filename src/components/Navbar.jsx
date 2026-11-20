import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Services", "#services"],
];
const ids = links.map(([, href]) => href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "border-white/10 bg-black/80" : "border-transparent bg-black/30"
      }`}
    >
      <div className="container-width flex h-18 items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight" aria-label="Back to top">
          <span className="text-white">{'<'}</span>
          <span className="text-amber-400 uppercase">{site.name}</span>
          <span className="text-white">{'>'}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map(([label, href]) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={label}
                href={href}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  isActive ? "bg-white/[.07] text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            );
          })}
          <a
            href={site.resume}
            className="ml-3 inline-flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-amber-400/50 hover:text-amber-300"
          >
            Resume <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-5 md:hidden">
          <nav className="container-width flex flex-col gap-4" aria-label="Mobile">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="text-zinc-300">
                {label}
              </a>
            ))}
            <a href={site.resume} className="text-amber-400">
              Download Resume →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
