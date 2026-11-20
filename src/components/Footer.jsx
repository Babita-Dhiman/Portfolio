import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-width flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-zinc-300">{site.name}</p>
          <p className="mt-1 text-sm text-zinc-500">Frontend Developer · {site.location}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/[.06] text-zinc-400 transition hover:bg-amber-400/15 hover:text-amber-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/[.06] text-zinc-400 transition hover:bg-amber-400/15 hover:text-amber-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/[.06] text-zinc-400 transition hover:bg-amber-400/15 hover:text-amber-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
