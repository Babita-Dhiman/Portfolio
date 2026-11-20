export default function SectionHeading({ number, label, title, children }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-amber-400">
        {number} — {label}
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children}
    </div>
  );
}
