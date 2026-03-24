import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  children,
  className,
  as,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={cn("site-container", className)} {...props}>
      {children}
    </Component>
  );
}
