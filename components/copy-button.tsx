"use client";

import { useEffect, useState } from "react";
import { CopyIcon, CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  value: string;
  label: string;
  className?: string;
};

export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border border-brand-border bg-white px-3 py-2 text-xs font-semibold text-brand-navy transition hover:border-brand-navy hover:bg-brand-accent focus-visible:outline-none",
        className,
      )}
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <CheckIcon className="h-3.5 w-3.5 text-brand-red" />
      ) : (
        <CopyIcon className="h-3.5 w-3.5" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
