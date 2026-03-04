import { LucideProps, Zap, Cpu, ShieldCheck,Quote, HelpCircle } from "lucide-react";

const ICON_REGISTRY = {
  Zap,
  Cpu,
  ShieldCheck,
  Quote,
} as const;

export type IconName = keyof typeof ICON_REGISTRY;

type Props = {
  name: IconName;
} & LucideProps;

export const IconRenderer = ({ name, ...props }: Props) => {
  const Icon = ICON_REGISTRY[name];

  if (!Icon) return <HelpCircle {...props} />;

  return <Icon {...props} />;
};
