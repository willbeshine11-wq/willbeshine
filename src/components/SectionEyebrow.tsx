export default function SectionEyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "light" ? "text-blue-600" : "text-blue-300"
      } ${className}`}
    >
      <span
        className={`h-px w-8 ${tone === "light" ? "bg-blue-600" : "bg-blue-300"}`}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
