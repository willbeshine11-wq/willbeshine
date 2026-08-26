import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactBar from "@/components/FloatingContactBar";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  title: "하이스타트 | 병원 마케팅 전문 파트너",
  description:
    "하이스타트는 데이터 기반 전략과 선명한 브랜딩으로 병원의 신뢰와 성장을 함께 설계하는 병원 마케팅 전문 파트너입니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactBar />
      </body>
    </html>
  );
}
