import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";
import { cn, isExternalHref } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "dark" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
};

type ButtonLinkProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  };

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function buttonStyles({
  variant = "primary",
  size = "md",
  block = false,
  className,
}: Omit<SharedProps, "children">) {
  const variantClasses = {
    primary: "btn btn-primary",
    whatsapp: "btn btn-whatsapp",
    secondary: "btn btn-secondary",
    tertiary: "btn btn-tertiary",
    dark: "btn btn-dark",
  } satisfies Record<ButtonVariant, string>;

  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  } satisfies Record<ButtonSize, string>;

  return cn(
    variantClasses[variant],
    sizeClasses[size],
    block && "w-full",
    className,
  );
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  block = false,
  ...props
}: ButtonLinkProps) {
  const styles = buttonStyles({ variant, size, block, className });

  if (isExternalHref(href)) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  block = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ variant, size, block, className })}
      {...props}
    >
      {children}
    </button>
  );
}
