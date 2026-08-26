import Button from "./Button";

export default function CtaBanner({
  title = "지금, 무료 마케팅 진단을 받아보세요",
  description = "병원의 현재 위치와 성장 가능성을 데이터로 확인하는 첫걸음, 상담은 무료입니다.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-graphite-950">
      <div className="container-page flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-24">
        <div className="max-w-xl">
          <h2 className="font-extrabold text-3xl leading-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="primary" withArrow>
            무료 상담 신청
          </Button>
          <Button href="/portfolio" variant="outline-light">
            성공사례 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
