import { useEffect, useState } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Types and deletes through `words`. `words` must be a stable (module-level) array. */
export default function useTypewriter(words, { type = 90, erase = 50, hold = 1100 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduced = prefersReduced();

  useEffect(() => {
    if (reduced) return;
    const word = words[index];
    let timer;

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timer = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? erase : type
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, type, erase, hold, reduced]);

  return reduced ? words[0] : text;
}
