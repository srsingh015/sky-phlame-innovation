import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconCircleProps = {
  children: ReactNode;
  className?: string;
};

export function IconCircle({ children, className }: IconCircleProps) {
  return <div className={cn("icon-shell", className)}>{children}</div>;
}
