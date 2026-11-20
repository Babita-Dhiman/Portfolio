export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-sky-500 mx-auto mt-4 rounded-full" />
    </div>
  );
}
