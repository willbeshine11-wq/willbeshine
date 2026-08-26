import {
  Sparkles,
  TrendingUp,
  Search,
  MessageSquareHeart,
  BarChart3,
  ShieldCheck,
  Target,
  Users,
  Stethoscope,
  type LucideProps,
} from "lucide-react";

const registry = {
  Sparkles,
  TrendingUp,
  Search,
  MessageSquareHeart,
  BarChart3,
  ShieldCheck,
  Target,
  Users,
  Stethoscope,
} as const;

export type IconName = keyof typeof registry;

export default function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Component = registry[name as IconName] ?? Sparkles;
  return <Component {...props} />;
}
