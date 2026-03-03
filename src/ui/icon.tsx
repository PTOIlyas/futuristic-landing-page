import * as LucideIcons from "lucide-react";
import { LucideIcon, LucideProps } from "lucide-react";



type IconName = keyof typeof LucideIcons;

type Props = {
  name: IconName;
} & LucideProps;

export const IconRenderer = ({ name, ...props }: Props) => {
  const Icon = LucideIcons[name] as LucideIcon;

  if (!Icon) return <LucideIcons.HelpCircle {...props} />;

  return <Icon {...props} />;
};
