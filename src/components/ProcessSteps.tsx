import { processSteps } from "@/lib/data";

export default function ProcessSteps() {
  return (
    <div className="grid gap-8 md:grid-cols-4">
      {processSteps.map((item, index) => (
        <div key={item.step} className="relative">
          <p className="font-extrabold text-4xl text-blue-500">
            {item.step}
          </p>
          <h3 className="mt-4 text-base font-semibold text-graphite-950">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            {item.description}
          </p>
          {index < processSteps.length - 1 && (
            <span
              className="absolute right-[-1rem] top-3 hidden h-px w-8 bg-line md:block"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
