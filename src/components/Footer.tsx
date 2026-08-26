import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo, navLinks, services } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-graphite-950 text-ink-300">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-1">
          <Link href="/" aria-label="하이스타트 홈으로 이동">
            <Logo tone="dark" showTagline />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
            데이터와 선명한 브랜딩으로 병원의 신뢰와 성장을 함께 설계하는
            병원 마케팅 전문 파트너입니다.
          </p>
        </div>

        <nav aria-label="바로가기">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            바로가기
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-white">
                문의하기
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="서비스">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            서비스
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href="/services" className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            연락처
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-blue-400" aria-hidden="true" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-blue-400" aria-hidden="true" />
              <span>{contactInfo.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-blue-400" aria-hidden="true" />
              <span>{contactInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>
            (주)하이스타트 · 대표 우숙현 · 사업자등록번호 123-45-67890
          </p>
          <p>&copy; {new Date().getFullYear()} 하이스타트. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
