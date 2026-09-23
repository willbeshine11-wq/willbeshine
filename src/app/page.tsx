import Link from "next/link";
import { ArrowRight, Quote, ShieldCheck, Stethoscope } from "lucide-react";
import Button from "@/components/Button";
import SectionEyebrow from "@/components/SectionEyebrow";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import ProcessSteps from "@/components/ProcessSteps";
import { LogoMark } from "@/components/Logo";
import CountUp from "@/components/CountUp";
import {
  founder,
  heroStats,
  services,
  specialties,
  testimonials,
  portfolioItems,
} from "@/lib/data";

export default function Home() {
  const preview = portfolioItems.slice(0, 4);
  const [featuredService, ...restServices] = services;

  return (
    <>
      {/* Hero — static video hero (same on all breakpoints) */}
      <section className="relative bg-graphite-950">
        <div className="relative overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:object-center"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-graphite-950/85 via-graphite-950/75 to-graphite-950 md:bg-gradient-to-r md:from-graphite-950 md:via-graphite-950/70 md:to-graphite-950/20"
            aria-hidden="true"
          />
          <div className="container-page relative py-20 md:py-32">
            <SectionEyebrow tone="dark">
              병원 마케팅 전문 파트너 · 하이스타트
            </SectionEyebrow>
            <h1 className="mt-8 max-w-3xl font-extrabold text-4xl leading-[1.25] text-white md:text-6xl">
              높은 시작이
              <br />
              <span className="text-blue-300">확실한 성장</span>을 증명합니다
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-300 md:text-lg">
              다양한 진료과의 데이터로 검증한 전략과 실행으로,
              <br />
              캠페인 첫 달부터 신환 문의 곡선을 바꿉니다.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" withArrow>
                무료 마케팅 진단 신청
              </Button>
              <Button href="/portfolio" variant="outline-light">
                성공사례 보기
              </Button>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="container-page grid grid-cols-3 gap-4 py-10 sm:gap-8">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-extrabold text-3xl text-blue-300 md:text-4xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-1 text-xs text-ink-400 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder credibility strip */}
      <section className="border-b border-line bg-white py-6">
        <div className="container-page flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-3">
          <Stethoscope className="size-5 shrink-0 text-blue-600" aria-hidden="true" />
          <p className="text-sm text-ink-600">
            {founder.name} 대표가{" "}
            <span className="font-semibold text-graphite-900">
              13년간 치과위생사 실장으로
            </span>{" "}
            현장에서 겪은 경험을 캠페인 전략에 그대로 반영합니다.
          </p>
          <Link
            href="/about"
            className="text-sm font-semibold text-blue-600 hover:text-blue-500 hover:underline"
          >
            대표 이야기 보기
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-line bg-mist py-10">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
            이런 진료과 병원들이 하이스타트와 함께합니다
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {specialties.map((item) => (
              <li
                key={item}
                className="cursor-default rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-700 transition-colors hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services overview — featured + compact list */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <SectionEyebrow>핵심 서비스</SectionEyebrow>
              <h2 className="mt-5 font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
                진료과의 특성을 이해하는
                <br />
                전문 마케팅 솔루션
              </h2>
            </div>
            <Button href="/services" variant="ghost" withArrow>
              전체 서비스 보기
            </Button>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Link
              href={
                featuredService.slug === "branding"
                  ? "/services/branding"
                  : `/services#${featuredService.slug}`
              }
              className="group relative overflow-hidden rounded-xl bg-graphite-950 p-10 text-white lg:col-span-2"
            >
              <LogoMark
                tone="dark"
                className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 opacity-[0.06]"
              />
              <span className="relative inline-flex rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-300">
                대표 서비스
              </span>
              <div className="relative mt-6 inline-flex size-14 items-center justify-center rounded-lg bg-white/10">
                <Icon
                  name={featuredService.icon}
                  className="size-6 text-blue-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="relative mt-6 text-2xl font-bold">
                {featuredService.title}
              </h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-ink-300">
                {featuredService.summary}
              </p>
              <ul className="relative mt-6 space-y-2">
                {featuredService.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-ink-200"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-400"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="relative mt-8 inline-flex items-center gap-1 text-sm font-semibold text-blue-300 group-hover:text-white">
                자세히 보기
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>

            <div className="divide-y divide-line rounded-xl border border-line bg-white">
              {restServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="group flex items-start gap-4 p-6 transition-colors hover:bg-mist"
                >
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-graphite-950/5">
                    <Icon
                      name={service.icon}
                      className="size-4.5 text-graphite-800"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-graphite-950 group-hover:text-blue-600">
                      {service.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">
                      {service.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-mist py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow>프로세스</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
            네 단계로 완성되는
            <br />
            성과 중심의 마케팅
          </h2>

          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Portfolio preview — result ledger */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <SectionEyebrow>성공사례</SectionEyebrow>
              <h2 className="mt-5 font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
                숫자로 증명하는
                <br />
                하이스타트의 성과
              </h2>
            </div>
            <Button href="/portfolio" variant="ghost" withArrow>
              전체 사례 보기
            </Button>
          </div>

          <div className="mt-14 divide-y divide-line overflow-hidden rounded-xl border border-line">
            {preview.map((item) => (
              <Link
                key={item.id}
                href="/portfolio"
                className="group flex flex-col gap-4 p-6 transition-colors hover:bg-mist sm:flex-row sm:items-center sm:justify-between md:p-8"
              >
                <div className="flex items-center gap-6">
                  <span className="w-24 shrink-0 font-extrabold text-3xl text-blue-600 md:w-28 md:text-4xl">
                    <CountUp value={item.metric.value} />
                  </span>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-ink-400">
                      {item.category} · {item.metric.label}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-graphite-950">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink-500">{item.hospital}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 self-start text-sm font-medium text-graphite-900 group-hover:text-blue-600 sm:self-auto">
                  자세히 보기
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — featured + compact */}
      <section className="bg-graphite-950 py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow tone="dark">고객의 목소리</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-white md:text-4xl">
            병원장님들이 전하는
            <br />
            하이스타트와의 시간
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.author}
                className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <Quote className="size-6 text-blue-400" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-200">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4 text-base">
                  <span className="font-semibold text-white">
                    {item.author}
                  </span>
                  <span className="ml-2 text-ink-400">{item.hospital}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="border-y border-line py-10">
        <div className="container-page flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-left">
          <ShieldCheck className="size-6 shrink-0 text-blue-600" aria-hidden="true" />
          <p className="text-sm text-ink-600">
            하이스타트가 제작하는 모든 광고 소재는{" "}
            <span className="font-semibold text-graphite-900">
              의료법 및 의료광고 자율심의 기준
            </span>
            을 준수하며, 사전 심의 절차를 거친 뒤 집행됩니다.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
