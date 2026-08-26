export const navLinks = [
  { label: "홈", href: "/" },
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/services" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "무료 전자책", href: "/ebook" },
];

export const heroStats = [
  { value: "15년", label: "업계 경력" },
  { value: "98%", label: "고객 유지율" },
  { value: "100%", label: "의료광고 심의 준수" },
];

export const specialties = [
  "치과",
  "피부과",
  "성형외과",
  "한의원",
  "정형외과",
  "안과",
  "산부인과",
  "내과·검진센터",
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "branding",
    icon: "Sparkles",
    title: "브랜드 전략 & 아이덴티티",
    summary:
      "병원의 진료 철학과 강점을 진단해, 환자가 신뢰할 수 있는 브랜드 언어와 비주얼 시스템으로 설계합니다.",
    points: [
      "브랜드 포지셔닝 & 메시지 전략",
      "로고 · 사이니지 · 병원 아이덴티티 가이드",
      "홈페이지 · 원내 인쇄물 디자인",
    ],
  },
  {
    slug: "performance",
    icon: "TrendingUp",
    title: "퍼포먼스 마케팅",
    summary:
      "네이버, 구글, 메타 등 채널별 데이터를 기반으로 신환 유입 효율을 극대화하는 광고 운영을 실행합니다.",
    points: [
      "검색광고 · SNS광고 통합 운영",
      "채널별 예산 배분 최적화",
      "실시간 성과 대시보드 리포팅",
    ],
  },
  {
    slug: "seo-content",
    icon: "Search",
    title: "SEO & 콘텐츠 마케팅",
    summary:
      "의료법을 준수하는 전문 콘텐츠로 병원 홈페이지와 블로그의 검색 노출과 체류시간을 함께 끌어올립니다.",
    points: [
      "의학 자문 기반 블로그 · 칼럼 제작",
      "홈페이지 SEO 구조 최적화",
      "키워드 · 검색 유입 리포트",
    ],
  },
  {
    slug: "reputation",
    icon: "MessageSquareHeart",
    title: "온라인 평판 관리",
    summary:
      "리뷰와 커뮤니티 반응을 상시 모니터링하며, 병원의 신뢰도를 지키는 커뮤니케이션 대응 체계를 운영합니다.",
    points: [
      "리뷰 · 커뮤니티 모니터링",
      "위기 대응 매뉴얼 수립",
      "환자 후기 수집 · 관리 시스템",
    ],
  },
  {
    slug: "analytics",
    icon: "BarChart3",
    title: "데이터 분석 & 리포팅",
    summary:
      "문의부터 내원, 재진까지 전 과정의 데이터를 연결해 마케팅 투자 대비 성과(ROAS)를 명확하게 증명합니다.",
    points: [
      "통합 마케팅 대시보드 구축",
      "채널별 전환 데이터 분석",
      "월간 경영 보고서 제공",
    ],
  },
  {
    slug: "compliance",
    icon: "ShieldCheck",
    title: "의료광고 심의 대행",
    summary:
      "의료법과 자율심의 기준에 맞춰 광고 콘텐츠를 사전 검수하여, 법적 리스크 없이 안전하게 홍보할 수 있도록 돕습니다.",
    points: [
      "사전 의료광고 심의 대행",
      "의료법 준수 콘텐츠 가이드",
      "정기 컴플라이언스 점검",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "진단",
    description: "병원의 현재 마케팅 채널과 경쟁 환경을 데이터로 정밀 진단합니다.",
  },
  {
    step: "02",
    title: "전략 수립",
    description: "진료과 특성에 맞춘 브랜딩·채널 전략과 목표 KPI를 설계합니다.",
  },
  {
    step: "03",
    title: "실행",
    description: "브랜딩, 광고, 콘텐츠, 심의를 하나의 팀이 유기적으로 실행합니다.",
  },
  {
    step: "04",
    title: "리포트 & 최적화",
    description: "데이터를 근거로 매달 성과를 검증하고 전략을 지속 보완합니다.",
  },
];

export type PortfolioItem = {
  id: string;
  category: string;
  hospital: string;
  title: string;
  metric: { label: string; value: string };
  tags: string[];
};

export const portfolioCategories = [
  "전체",
  "치과",
  "피부과",
  "성형외과",
  "한의원",
  "정형외과",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "case-01",
    category: "치과",
    hospital: "선명치과의원",
    title: "리브랜딩과 지역 검색 광고 통합 운영",
    metric: { label: "신환 문의", value: "+182%" },
    tags: ["브랜딩", "퍼포먼스 마케팅"],
  },
  {
    id: "case-02",
    category: "피부과",
    hospital: "루센트피부과",
    title: "블로그 SEO 및 리뷰 신뢰도 개선 프로젝트",
    metric: { label: "홈페이지 유입", value: "+164%" },
    tags: ["SEO", "온라인 평판"],
  },
  {
    id: "case-03",
    category: "성형외과",
    hospital: "아펠성형외과",
    title: "프리미엄 브랜드 아이덴티티 전면 개편",
    metric: { label: "상담 전환율", value: "+37%" },
    tags: ["브랜딩", "데이터 분석"],
  },
  {
    id: "case-04",
    category: "한의원",
    hospital: "온담한의원",
    title: "SNS 콘텐츠 채널 신설 및 광고 최적화",
    metric: { label: "예약 문의", value: "+128%" },
    tags: ["콘텐츠", "퍼포먼스 마케팅"],
  },
  {
    id: "case-05",
    category: "정형외과",
    hospital: "바로선정형외과",
    title: "통합 대시보드 구축 및 광고 효율 개선",
    metric: { label: "광고 효율(ROAS)", value: "+95%" },
    tags: ["데이터 분석", "퍼포먼스 마케팅"],
  },
  {
    id: "case-06",
    category: "피부과",
    hospital: "클리어스킨클리닉",
    title: "의료광고 심의 대응 체계 구축",
    metric: { label: "심의 통과율", value: "100%" },
    tags: ["컴플라이언스", "브랜딩"],
  },
];

export const testimonials = [
  {
    quote:
      "숫자로 성과를 증명해주는 파트너를 처음 만났습니다. 매달 리포트만 봐도 어디에 예산이 쓰이는지 명확히 이해가 됩니다.",
    author: "김O진 원장",
    hospital: "선명치과의원",
  },
  {
    quote:
      "의료광고 규정 때문에 늘 조심스러웠는데, 심의까지 함께 대응해주니 마음 놓고 마케팅에 집중할 수 있었습니다.",
    author: "박O현 원장",
    hospital: "클리어스킨클리닉",
  },
  {
    quote:
      "브랜드 톤앤매너부터 광고 소재까지 병원의 격에 맞게 만들어줘서, 내원하시는 환자분들의 반응도 확실히 달라졌습니다.",
    author: "이O우 원장",
    hospital: "아펠성형외과",
  },
];

export const founder = {
  name: "우숙현",
  role: "대표 · 前 치과위생사 실장 (13년)",
  quote:
    "상담실 의자에 앉은 환자의 망설임과, 그 뒤에서 고민하던 원장님의 표정을 13년간 가장 가까이에서 지켜봤습니다. 하이스타트의 캠페인은 광고 회의실이 아니라, 그 진료실에서 시작합니다.",
  bio: "우숙현 대표는 13년간 치과위생사 실장으로 근무하며 신환 상담부터 재진 관리, 컴플레인 대응까지 병원 운영의 현장을 직접 경험했습니다. 광고 대행사 출신 마케터는 알기 어려운 '환자가 실제로 망설이는 지점'과 '원장님이 진짜 걱정하는 리스크'를, 데이터가 아니라 몸으로 이해합니다. 이것이 하이스타트만의 차별점입니다.",
};

export const values = [
  {
    icon: "Target",
    title: "데이터 기반 정직함",
    description: "추정이 아닌 데이터로 말합니다. 모든 전략과 리포트는 근거를 갖습니다.",
  },
  {
    icon: "Stethoscope",
    title: "임상 현장 출신 실행력",
    description:
      "실장으로 근무한 현장 경험을 바탕으로, 진료실에서 통하는 언어로 캠페인을 설계합니다.",
  },
  {
    icon: "ShieldCheck",
    title: "책임 있는 컴플라이언스",
    description: "의료법과 심의 기준을 가장 먼저 고려하는 안전한 마케팅을 실행합니다.",
  },
  {
    icon: "Sparkles",
    title: "병원다운 품격",
    description: "과장 없이, 병원이 가진 진짜 강점을 세련되게 전달합니다.",
  },
  {
    icon: "Users",
    title: "긴 호흡의 파트너십",
    description: "단발성 캠페인이 아닌, 병원과 함께 성장하는 장기적 관계를 지향합니다.",
  },
];

export const history = [
  { year: "2011", event: "병원 마케팅 전문 조직으로 출발" },
  { year: "2015", event: "퍼포먼스 마케팅 전담팀 신설" },
  { year: "2018", event: "의료광고 심의 대행 서비스 론칭" },
  { year: "2021", event: "통합 데이터 대시보드 자체 개발" },
  { year: "2024", event: "누적 파트너 병원 300곳 돌파" },
];

export const faqs = [
  {
    question: "계약 기간과 비용은 어떻게 산정되나요?",
    answer:
      "병원 규모와 진료과, 목표에 따라 맞춤 견적을 산정합니다. 최소 계약 기간은 3개월이며, 상담 후 상세 제안서를 드립니다.",
  },
  {
    question: "의료광고 심의는 어떤 방식으로 진행되나요?",
    answer:
      "제작된 광고 소재는 자체 컴플라이언스 팀의 1차 검수를 거쳐 관련 기관의 사전 심의 절차를 대행해드리며, 통과 전까지는 집행되지 않습니다.",
  },
  {
    question: "이미 운영 중인 광고 계정을 그대로 이관할 수 있나요?",
    answer:
      "네, 기존 네이버·구글·메타 광고 계정과 데이터를 그대로 인수하여 운영 이력 손실 없이 이어서 진행할 수 있습니다.",
  },
  {
    question: "성과 리포트는 얼마나 자주 받아볼 수 있나요?",
    answer:
      "매주 핵심 지표 요약과, 매월 상세 경영 보고서를 함께 제공합니다. 요청 시 실시간 대시보드 열람도 가능합니다.",
  },
];

export const contactInfo = {
  phone: "010-9421-2999",
  email: "contact@histart.co.kr",
  address: "경상남도 양산시 물금읍 범어로 33",
  hours: "평일 09:00 – 18:00 (주말 · 공휴일 휴무)",
  // TODO: 실제 카카오톡 채널 URL로 교체해주세요 (pf.kakao.com/_실제채널ID)
  kakaoChannelUrl: "https://pf.kakao.com/_xxxxxxx",
};

export const ebookStats = [
  { value: "26일", label: "대표 키워드 첫 페이지 노출" },
  { value: "2배", label: "전월 대비 매출 성장" },
  { value: "7명+", label: "하루 평균 신환 문의" },
];

export const ebookChapters = [
  "무자본 병원 마케팅 시작",
  "스마트 플레이스 마케팅의 모든 것",
  "마케팅의 핵심, 영수증 리뷰",
  "네이버 연동 서비스 활용하기",
  "블로그 마케팅 시작의 모든 것",
  "홈페이지 만들기",
  "인스타그램 마케팅",
  "파워링크 광고",
  "나만의 병원 시스템 만들기",
  "우리 조직에 맞는 직원 찾기",
  "직원을 용모 단정하게 유지하는 방법",
  "차별화된 병원 만들기",
  "리뷰 이벤트",
];

export const ebookAudience = [
  "광고비 없이 신규 개원 초반을 버텨야 하는 원장님",
  "대행사 없이 스마트플레이스·블로그를 직접 운영하고 싶은 실장님",
  "네이버 마케팅을 처음부터 체계적으로 배우고 싶은 마케팅 담당자",
];
