import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionEyebrow from "@/components/SectionEyebrow";
import CtaBanner from "@/components/CtaBanner";
import ProcessSteps from "@/components/ProcessSteps";
import Icon from "@/components/Icon";
import FaqAccordion from "@/components/FaqAccordion";
import { services, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "서비스 | 하이스타트",
  description:
    "브랜딩부터 퍼포먼스 마케팅, 의료광고 심의까지 하이스타트의 전 서비스를 확인하세요.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="서비스"
        title="병원 성장에 필요한 모든 마케팅을 한 팀에서"
        description="브랜딩, 광고, 콘텐츠, 데이터, 컴플라이언스까지 — 흩어진 마케팅 파트너를 하나로 통합합니다."
      />

      {/* Detailed services */}
      <section className="py-24 md:py-32">
        <div className="container-page space-y-6">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid gap-8 rounded-xl border border-line bg-white p-8 md:grid-cols-[auto_1fr] md:items-start md:p-12"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="inline-flex size-14 items-center justify-center rounded-lg bg-graphite-950">
                  <Icon
                    name={service.icon}
                    className="size-6 text-blue-300"
                    aria-hidden="true"
                  />
                </div>
                <span className="font-extrabold text-3xl text-ink-200 md:mt-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-graphite-950 md:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500 md:text-base">
                  {service.summary}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink-700">
                      <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                {service.slug === "branding" && (
                  <Link
                    href="/services/branding"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-500"
                  >
                    자세히 보기
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          ))}
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

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-page max-w-3xl">
          <SectionEyebrow>자주 묻는 질문</SectionEyebrow>
          <h2 className="mt-5 font-extrabold text-3xl leading-tight text-graphite-950 md:text-4xl">
            궁금한 점이 있으신가요
          </h2>
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="맞춤 견적이 궁금하신가요"
        description="병원 규모와 목표에 맞는 상세 제안서를 무료로 받아보세요."
      />
    </>
  );
}
