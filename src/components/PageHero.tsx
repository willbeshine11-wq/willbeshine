import SectionEyebrow from "./SectionEyebrow";
import { LogoMark } from "./Logo";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-graphite-950 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <LogoMark
        tone="dark"
        className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 opacity-[0.07] md:-right-10 md:-top-28"
      />
      <div className="container-page relative">
        <SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>
        <h1 className="mt-6 max-w-2xl font-extrabold text-4xl leading-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-300">
          {description}
        </p>
      </div>
    </section>
  );
}
