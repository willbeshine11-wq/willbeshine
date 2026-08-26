"use client";

import { useMemo, useState } from "react";
import { portfolioCategories, type PortfolioItem } from "@/lib/data";

export default function PortfolioFilter({
  items,
}: {
  items: PortfolioItem[];
}) {
  const [active, setActive] = useState<string>("전체");

  const filtered = useMemo(
    () =>
      active === "전체"
        ? items
        : items.filter((item) => item.category === active),
    [active, items],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="진료과 필터"
      >
        {portfolioCategories.map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-graphite-950 bg-graphite-950 text-white"
                  : "border-line bg-white text-ink-600 hover:border-graphite-800 hover:text-graphite-900"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-ink-400" aria-live="polite">
        {filtered.length}개의 사례
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="flex flex-col rounded-xl border border-line bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-graphite-950/5"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex w-fit rounded-full bg-graphite-950/5 px-3 py-1 text-xs font-medium text-graphite-800">
                {item.category}
              </span>
            </div>
            <h3 className="mt-5 text-base font-semibold text-graphite-950">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-ink-500">{item.hospital}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-2.5 py-1 text-[11px] text-ink-500"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-baseline gap-2 border-t border-line pt-6">
              <span className="font-extrabold text-2xl text-blue-600">
                {item.metric.value}
              </span>
              <span className="text-xs text-ink-400">{item.metric.label}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
