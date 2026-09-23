import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SectionEyebrow from "@/components/SectionEyebrow";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "문의하기 | 하이스타트",
  description: "하이스타트에 무료 마케팅 진단과 상담을 신청해 보세요.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="문의하기"
        title="첫 상담은 무료입니다"
        description="병원의 현재 상황과 목표를 알려주시면, 담당자가 맞춤 제안서를 준비해드립니다."
      />

      <section className="py-24 md:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_380px]">
          <div>
            <SectionEyebrow>상담 신청</SectionEyebrow>
            <h2 className="mt-5 font-extrabold text-2xl text-graphite-950 md:text-3xl">
              아래 정보를 남겨주세요
            </h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-xl border border-line bg-mist p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                연락처
              </h3>
              <ul className="mt-6 space-y-5 text-sm text-ink-700">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-graphite-800" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-graphite-950">전화</p>
                    <p className="text-ink-500">{contactInfo.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-graphite-800" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-graphite-950">이메일</p>
                    <p className="text-ink-500">{contactInfo.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-graphite-800" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-graphite-950">주소</p>
                    <p className="text-ink-500">{contactInfo.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-graphite-800" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-graphite-950">운영시간</p>
                    <p className="text-ink-500">{contactInfo.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-white p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                상담 절차
              </h3>
              <ol className="mt-6 space-y-4 text-sm text-ink-600">
                <li className="flex gap-3">
                  <span className="font-extrabold text-base text-blue-600">1</span>
                  온라인 문의 접수
                </li>
                <li className="flex gap-3">
                  <span className="font-extrabold text-base text-blue-600">2</span>
                  담당자 유선 상담 (1영업일 이내)
                </li>
                <li className="flex gap-3">
                  <span className="font-extrabold text-base text-blue-600">3</span>
                  무료 마케팅 진단 리포트 제공
                </li>
                <li className="flex gap-3">
                  <span className="font-extrabold text-base text-blue-600">4</span>
                  맞춤 제안서 및 계약 안내
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
