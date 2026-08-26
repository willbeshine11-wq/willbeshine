import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  LayoutTemplate,
  Palette,
  Target,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionEyebrow from "@/components/SectionEyebrow";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
import { portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "브랜드 전략 & 아이덴티티 | 하이스타트",
  description:
    "병원의 진료 철학과 강점을 진단해, 환자가 신뢰할 수 있는 브랜드 언어와 비주얼 시스템으로 설계합니다.",
};

const modules = [
  {
    icon: Target,
    title: "브랜드 포지셔닝 & 메시지 전략",
    description:
      "병원이 가진 진짜 강점을 진단하고, 경쟁 병원과 겹치지 않는 자리를 찾아 환자에게 닿는 언어로 정리합니다.",
    items: [
      "원장님·실장님 인터뷰 기반 진료 철학 진단",
      "지역 경쟁 병원 포지셔닝 분석",
      "핵심 메시지 & 톤앤매너 정의",
      "환자 페르소나별 커뮤니케이션 가이드",
    ],
  },
  {
    icon: Palette,
    title: "로고 · 사이니지 · 병원 아이덴티티 가이드",
    description:
      "정해진 메시지를 눈에 보이는 형태로 옮깁니다. 로고부터 원내 사이니지까지 하나의 톤으로 통일합니다.",
    items: [
      "심볼 + 워드마크 로고 디자인",
      "브랜드 컬러 · 타이포그래피 시스템",
      "원내 사이니지 · 안내 표지판 디자인",
      "명함 · 봉투 · 처방전 등 인쇄물 템플릿",
      "브랜드 가이드북 제작",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "홈페이지 · 원내 인쇄물 디자인",
    description:
      "환자가 가장 먼저 마주치는 접점부터, 진료실 안에서 마주치는 마지막 접점까지 브랜드 경험을 이어갑니다.",
    items: [
      "반응형 홈페이지 UI/UX 디자인",
      "진료과별 소개 페이지 구성",
      "리플렛 · 원내 포스터 · 배너 디자인",
      "원내 사진 · 영상 촬영 톤 가이드",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "진단",
    description:
      "원장님 인터뷰와 현장 방문으로 병원의 진료 철학, 강점, 환자층을 파악합니다.",
  },
  {
    step: "02",
    title: "컨셉 개발",
    description:
      "진단 결과를 바탕으로 브랜드 포지셔닝과 핵심 메시지, 톤앤매너 방향을 제안합니다.",
  },
  {
    step: "03",
    title: "디자인 시스템 구축",
    description: "로고, 컬러, 타이포그래피부터 사이니지·인쇄물까지 실제 산출물로 제작합니다.",
  },
  {
    step: "04",
    title: "가이드 배포 & 적용",
    description: "완성된 브랜드 가이드북을 전달하고, 원내 적용까지 함께 확인합니다.",
  },
];

const deliverables = [
  "브랜드 가이드북 (PDF)",
  "로고 원본 파일 (AI · EPS · PNG)",
  "컬러 · 타이포그래피 시스템 문서",
  "원내 사이니지 디자인 시안",
  "홈페이지 UI 키트",
  "명함 · 인쇄물 템플릿",
];

const brandingFaqs = [
  {
    question: "이미 있는 로고를 유지하면서 나머지만 새로 만들 수 있나요?",
    answer:
      "네, 가능합니다. 기존 로고를 살리면서 컬러·타이포그래피 시스템과 사이니지, 홈페이지만 새로 정비하는 부분 리브랜딩도 진행합니다.",
  },
  {
    question: "브랜드 가이드북은 어떤 형태로 전달되나요?",
    answer:
      "로고 사용 규정, 컬러·폰트 값, 적용 예시를 담은 PDF 가이드북과 함께, 실제 편집 가능한 원본 디자인 파일 일체를 전달해드립니다.",
  },
  {
    question: "작업 기간은 얼마나 걸리나요?",
    answer:
      "진단부터 가이드북 전달까지 평균 4~6주가 소요됩니다. 사이니지 제작·설치 등 오프라인 적용이 포함되면 일정은 별도로 협의합니다.",
  },
];

export default function BrandingServicePage() {
  const relatedCases = portfolioItems.filter((item) =>
    item.tags.includes("브랜딩"),
  );

  return (
    <>
      <PageHero
        eyebrow="서비스 · 브랜드 전략 & 아이덴티티"
        title="병원의 진심을, 흔들리지 않는 브랜드로"
        description="병원의 진료 철학과 강점을 진단해, 환자가 신뢰할 수 있는 브랜드 언어와 비주얼 시스템으로 설계합니다."
      />

      <section className="border-b border-line py-6">
        <div className="container-page">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-blue-600"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            전체 서비스 보기
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32">
        <div className="container-page max-w-3xl">
          <SectionEyebrow>왜 브랜드 전략이 필요한가요</SectionEyebrow>
          <h2 className="mt-5 font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
            환자는 실력만큼, 신뢰할 수 있어 보이는가를 봅니다
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-600 md:text-lg">
            같은 진료 실력이라도 로고, 색상, 홈페이지, 원내 사이니지가
            제각각이면 환자는 무의식적으로 병원을 의심합니다. 반대로 첫
            홈페이지 화면부터 진료실 안내판까지 하나의 톤으로 이어지면,
            환자는 그 병원을 &ldquo;준비된 곳&rdquo;으로 받아들입니다.
            하이스타트는 병원이 가진 진짜 강점을 진단해, 과장 없이 신뢰를
            만드는 브랜드 시스템을 설계합니다.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-mist py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow>포함 서비스</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
            3가지 축으로 완성하는
            <br />
            병원 브랜드
          </h2>

          <div className="mt-14 space-y-6">
            {modules.map((module) => (
              <div
                key={module.title}
                className="grid gap-8 rounded-xl border border-line bg-white p-8 md:grid-cols-[auto_1fr] md:items-start md:p-12"
              >
                <div className="inline-flex size-14 items-center justify-center rounded-lg bg-graphite-950">
                  <module.icon
                    className="size-6 text-blue-300"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-graphite-950 md:text-2xl">
                    {module.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500 md:text-base">
                    {module.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {module.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-ink-700"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-blue-600"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow>진행 프로세스</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
            4단계로 완성되는
            <br />
            브랜드 아이덴티티
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {process.map((item, index) => (
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
                {index < process.length - 1 && (
                  <span
                    className="absolute right-[-1rem] top-3 hidden h-px w-8 bg-line md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-graphite-950 py-24 md:py-32">
        <div className="container-page">
          <SectionEyebrow tone="dark">산출물</SectionEyebrow>
          <h2 className="mt-5 max-w-xl font-extrabold text-3xl leading-tight text-white md:text-4xl">
            작업이 끝나면 이렇게 전달됩니다
          </h2>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <FileText
                  className="size-5 shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <span className="text-sm text-ink-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related cases */}
      {relatedCases.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container-page">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <SectionEyebrow>관련 성공사례</SectionEyebrow>
                <h2 className="mt-5 font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
                  브랜드 전략으로 만든 변화
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1 text-sm font-semibold text-graphite-900 hover:text-blue-600"
              >
                전체 사례 보기
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {relatedCases.map((item) => (
                <Link
                  key={item.id}
                  href="/portfolio"
                  className="group flex flex-col rounded-xl border border-line bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-graphite-950/5"
                >
                  <span className="inline-flex w-fit rounded-full bg-graphite-950/5 px-3 py-1 text-xs font-medium text-graphite-800">
                    {item.category}
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-graphite-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{item.hospital}</p>
                  <div className="mt-6 flex items-baseline gap-2 border-t border-line pt-6">
                    <span className="font-extrabold text-2xl text-blue-600">
                      {item.metric.value}
                    </span>
                    <span className="text-xs text-ink-400">
                      {item.metric.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-mist py-24 md:py-32">
        <div className="container-page max-w-3xl">
          <SectionEyebrow>자주 묻는 질문</SectionEyebrow>
          <h2 className="mt-5 font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
            궁금한 점이 있으신가요
          </h2>
          <div className="mt-12">
            <FaqAccordion items={brandingFaqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="우리 병원 브랜드, 지금 진단받아 보세요"
        description="현재 병원의 브랜드 상태를 무료로 진단해드립니다."
      />
    </>
  );
}
