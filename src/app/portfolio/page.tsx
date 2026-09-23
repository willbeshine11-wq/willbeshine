import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioFilter from "@/components/PortfolioFilter";
import CtaBanner from "@/components/CtaBanner";
import { portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "포트폴리오 | 하이스타트",
  description: "진료과별 하이스타트의 마케팅 성공사례를 확인하세요.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="포트폴리오"
        title="숫자로 증명하는 하이스타트의 성과"
        description="치과부터 성형외과까지, 진료과별 특성에 맞춘 전략이 만들어낸 실제 결과입니다."
      />

      <section className="py-24 md:py-32">
        <div className="container-page">
          <PortfolioFilter items={portfolioItems} />
        </div>
      </section>

      <CtaBanner
        title="우리 병원의 성공사례를 만들어보세요"
        description="비슷한 진료과의 사례를 참고해 맞춤 전략을 제안해드립니다."
      />
    </>
  );
}
