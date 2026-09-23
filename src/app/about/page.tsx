import type { Metadata } from "next";
import { Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionEyebrow from "@/components/SectionEyebrow";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { founder, history, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "회사소개 | 하이스타트",
  description:
    "하이스타트의 미션과 핵심 가치, 15년간의 여정을 소개합니다.",
  alternates: { canonical: "/about" },
};

const teams = [
  {
    name: "전략기획팀",
    description: "병원 진단, 브랜드 포지셔닝, 마케팅 로드맵을 설계합니다.",
  },
  {
    name: "퍼포먼스마케팅팀",
    description: "검색·SNS 광고 채널을 통합 운영하며 효율을 관리합니다.",
  },
  {
    name: "콘텐츠팀",
    description: "의학 자문 기반의 블로그, SNS, 영상 콘텐츠를 제작합니다.",
  },
  {
    name: "데이터분석팀",
    description: "통합 대시보드를 구축하고 성과를 데이터로 증명합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="회사소개"
        title="병원의 언어로, 병원의 성장을 설계합니다"
        description="하이스타트는 2011년부터 병원 마케팅이라는 한 길을 걸어온 전문 파트너입니다. 진료과별 특성과 의료법 환경을 가장 깊이 이해하는 팀이 함께합니다."
      />

      {/* Mission */}
      <section className="py-24 md:py-32">
        <div className="container-page max-w-3xl">
          <SectionEyebrow>미션</SectionEyebrow>
          <p className="mt-6 font-extrabold text-2xl leading-relaxed text-graphite-950 md:text-3xl">
            &ldquo;우리는 병원이 가진 진짜 강점이 과장 없이,
            가장 신뢰할 수 있는 방식으로 환자에게 닿도록 만듭니다.&rdquo;
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow>대표 이야기</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
            광고가 아니라, 진료실에서 시작합니다
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
            <div className="flex flex-col items-center gap-4 rounded-xl border border-line bg-mist p-10 text-center lg:items-start lg:text-left">
              <div
                className="flex size-20 items-center justify-center rounded-full bg-graphite-950 text-2xl font-extrabold text-white"
                aria-hidden="true"
              >
                우
              </div>
              <div>
                <p className="text-lg font-bold text-graphite-950">
                  {founder.name}
                </p>
                <p className="mt-1 text-sm text-ink-500">{founder.role}</p>
              </div>
            </div>

            <div>
              <Quote className="size-8 text-blue-500" aria-hidden="true" />
              <blockquote className="mt-4 text-xl font-medium leading-relaxed text-graphite-900 md:text-2xl">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-500">
                {founder.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow>핵심 가치</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
            하이스타트가 일하는 방식
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-line bg-white p-8"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-lg bg-graphite-950">
                  <Icon
                    name={value.icon}
                    className="size-5 text-blue-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold text-graphite-950">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow>연혁</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
            15년, 병원 마케팅 한 길
          </h2>

          <ol className="mt-14 border-l border-line pl-8">
            {history.map((item) => (
              <li key={item.year} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-blue-500"
                  aria-hidden="true"
                />
                <p className="font-extrabold text-xl text-graphite-950">
                  {item.year}
                </p>
                <p className="mt-1 text-sm text-ink-500">{item.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Teams */}
      <section className="bg-graphite-950 py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow tone="dark">전문성</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-white md:text-4xl">
            4개 전문팀이 유기적으로 움직입니다
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teams.map((team) => (
              <div
                key={team.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-base font-semibold text-white">
                  {team.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="하이스타트와 함께할 준비가 되셨나요"
        description="병원의 상황에 맞는 맞춤 제안서를 무료로 받아보세요."
      />
    </>
  );
}
