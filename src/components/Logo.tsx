import Image from "next/image";

const ICON_RATIO = 468 / 422;
const WORDMARK_RATIO = 805 / 166;

export function LogoMark({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const src = tone === "light" ? "/logo-icon.png" : "/logo-dark-icon.png";
  return (
    // eslint-disable-next-line @next/next/no-img-element -- decorative, arbitrarily scaled watermark
    <img src={src} alt="" aria-hidden="true" className={className} />
  );
}

export default function Logo({
  tone = "light",
  showTagline = false,
  className = "",
  iconSize = 34,
}: {
  tone?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  iconSize?: number;
}) {
  const iconSrc = tone === "light" ? "/logo-icon.png" : "/logo-dark-icon.png";
  const wordmarkSrc =
    tone === "light" ? "/logo-wordmark.png" : "/logo-dark-wordmark.png";
  const taglineColor = "text-ink-400";

  const iconWidth = Math.round(iconSize * ICON_RATIO);
  const wordmarkHeight = Math.round(iconSize * 0.42);
  const wordmarkWidth = Math.round(wordmarkHeight * WORDMARK_RATIO);

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={iconSrc}
        alt=""
        width={iconWidth}
        height={iconSize}
        className="shrink-0"
        priority
      />
      <span className="flex flex-col justify-center leading-none">
        <Image
          src={wordmarkSrc}
          alt="하이스타트"
          width={wordmarkWidth}
          height={wordmarkHeight}
          priority
        />
        {showTagline && (
          <span
            className={`mt-1.5 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.25em] ${taglineColor}`}
          >
            Marketing Company
          </span>
        )}
      </span>
    </span>
  );
}
