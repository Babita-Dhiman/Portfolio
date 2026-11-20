import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-width flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-zinc-500">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white">
            <Github size={18} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="transition hover:text-white">
            <Mail size={18} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:border-amber-400/50 hover:text-amber-300"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
