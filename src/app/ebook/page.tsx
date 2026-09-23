import type { Metadata } from "next";
import { BookOpen, Download, TrendingUp } from "lucide-react";
import Button from "@/components/Button";
import SectionEyebrow from "@/components/SectionEyebrow";
import { LogoMark } from "@/components/Logo";
import CountUp from "@/components/CountUp";
import { ebookAudience, ebookChapters, ebookStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "무료 전자책 | 하이스타트",
  description:
    "무자본으로 병원 마케팅을 시작해 대표 키워드 첫 페이지 노출까지 이끈 실전 노하우를 담은 무료 전자책을 받아보세요.",
  alternates: { canonical: "/ebook" },
};

const EBOOK_PDF = "/ebook-hospital-marketing.pdf";

export default function EbookPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <LogoMark
          tone="dark"
          className="pointer-events-none absolute -right-24 -top-28 h-[28rem] w-[28rem] opacity-[0.06]"
        />

        <div className="container-page relative grid gap-14 py-24 md:grid-cols-[1fr_320px] md:items-center md:py-32">
          <div>
            <SectionEyebrow tone="dark">무료 전자책</SectionEyebrow>
            <h1 className="mt-6 font-extrabold text-4xl leading-[1.25] text-white md:text-5xl">
              무자본으로 시작해
              <br />
              <span className="text-blue-300">첫 페이지 노출</span>까지
              이끈 실전 기록
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-300 md:text-lg">
              개원 초기, 광고비 없이도 스마트플레이스와 블로그만으로 대표
              키워드 첫 페이지 노출과 매출 2배 성장을 만든 과정을 가감 없이
              공개합니다. 실제 병원 마케팅 현장에서 검증된 방법만 담았습니다.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={EBOOK_PDF} variant="primary" download>
                <Download className="size-4" aria-hidden="true" />
                무료로 전자책 받기
              </Button>
              <span className="text-sm text-ink-400">
                이메일 없이 바로 다운로드됩니다
              </span>
            </div>
          </div>

          {/* Book cover mockup */}
          <div className="mx-auto w-full max-w-xs md:mx-0">
            <div className="relative aspect-[3/4] w-full -rotate-2 rounded-lg border border-white/10 bg-gradient-to-br from-graphite-800 via-graphite-900 to-graphite-950 p-8 shadow-2xl shadow-black/40 transition-transform hover:rotate-0">
              <span className="inline-flex rounded-full border border-blue-400/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                HISTART 자료집
              </span>
              <p className="mt-10 font-extrabold text-3xl leading-tight text-white">
                무자본
                <br />
                병원 마케팅
              </p>
              <p className="mt-4 text-xs leading-relaxed text-ink-400">
                스마트플레이스부터 블로그, 리뷰, 채용까지
                <br />
                실전 병원 마케팅 완전 정복
              </p>
              <BookOpen
                className="absolute bottom-8 right-8 size-8 text-blue-400/70"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-mist py-14">
        <div className="container-page grid grid-cols-3 gap-4 sm:gap-8">
          {ebookStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-extrabold text-3xl text-blue-600 md:text-4xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 text-xs text-ink-500 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow>목차 미리보기</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
            13개 챕터에 담은
            <br />
            병원 마케팅의 모든 것
          </h2>

          <ol className="mt-14 grid gap-3 sm:grid-cols-2">
            {ebookChapters.map((chapter, index) => (
              <li
                key={chapter}
                className="flex items-start gap-4 rounded-xl border border-line bg-white p-5"
              >
                <span className="font-extrabold text-lg text-blue-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-0.5 text-sm font-medium text-graphite-900">
                  {chapter}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-graphite-950 py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow tone="dark">이런 분들에게 추천합니다</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-white md:text-4xl">
            지금, 딱 필요한 순간
          </h2>

          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {ebookAudience.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <TrendingUp
                  className="mt-0.5 size-5 shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-ink-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final download CTA */}
      <section className="bg-mist">
        <div className="container-page flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-24">
          <div className="max-w-xl">
            <h2 className="font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
              지금 바로 무료로 받아보세요
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              전자책만으로 부족하다면, 우리 병원에 맞는 맞춤 진단도 무료로
              받아보실 수 있습니다.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={EBOOK_PDF} variant="primary" download>
              <Download className="size-4" aria-hidden="true" />
              무료로 전자책 받기
            </Button>
            <Button href="/contact" variant="outline-dark">
              무료 상담 신청
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
