"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/button-link";
import { WhatsAppIcon } from "@/components/icons";
import { buildContactFormWhatsAppUrl, serviceOptions } from "@/lib/site";
import { siteConfig } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type QuoteFormProps = {
  className?: string;
  compact?: boolean;
  defaultService?: string;
  defaultCity?: string;
  submitLabel?: string;
  submitSize?: "md" | "lg";
  actionNote?: string;
  footerNote?: string;
  tone?: "light" | "dark";
};

type FormField = "name" | "phone" | "service";
type FormErrors = Partial<Record<FormField, string>>;

const FIELD_IDS = {
  name: "quote-name",
  phone: "quote-phone",
  city: "quote-city",
  service: "quote-service",
  message: "quote-message",
} as const;

function getFieldValue(formData: FormData, field: string) {
  return String(formData.get(field) ?? "").trim();
}

function validatePhone(value: string) {
  return value.replace(/\D/g, "").length >= 10;
}

function validateForm(formData: FormData) {
  const errors: FormErrors = {};

  if (!getFieldValue(formData, "name")) {
    errors.name = "Enter your name so the team knows who to contact.";
  }

  const phone = getFieldValue(formData, "phone");
  if (!phone) {
    errors.phone = "Enter a phone number for callback or WhatsApp follow-up.";
  } else if (!validatePhone(phone)) {
    errors.phone = "Enter a valid phone number with at least 10 digits.";
  }

  if (!getFieldValue(formData, "service")) {
    errors.service = "Select the service you want to discuss.";
  }

  return errors;
}

export function QuoteForm({
  className,
  compact = false,
  defaultService = "",
  defaultCity = siteConfig.contact.defaultCity,
  submitLabel = "Send on WhatsApp",
  submitSize = "md",
  actionNote = "Opens WhatsApp with a prefilled message.",
  footerNote = "No data is stored on this website.",
  tone = "light",
}: QuoteFormProps) {
  const isDark = tone === "dark";
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const href = buildContactFormWhatsAppUrl({
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      city: String(formData.get("city") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    });

    setErrors({});
    window.open(href, "_blank", "noopener,noreferrer");
  }

  function clearFieldError(field: FormField) {
    if (!errors[field]) {
      return;
    }

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  const fieldClassName = cn(
    "w-full rounded-2xl border px-4 py-3 text-sm outline-none transition",
    isDark
      ? "border-white/[0.15] bg-white/[0.08] text-white placeholder:text-white/[0.45]"
      : "border-brand-border bg-white text-brand-navy placeholder:text-brand-muted/75",
  );

  const errorFieldClassName = isDark
    ? "border-brand-red-strong shadow-[0_0_0_1px_rgba(230,61,61,0.65)]"
    : "border-brand-red-strong shadow-[0_0_0_1px_rgba(230,61,61,0.35)]";

  const labelClassName = cn(
    "text-sm font-semibold",
    isDark ? "text-white" : "text-brand-navy",
  );

  const helpTextClassName = cn(
    "text-xs leading-5",
    isDark ? "text-white/70" : "text-brand-muted",
  );

  const supportTextClassName = cn(helpTextClassName, "min-h-[1.25rem]");

  const errorTextClassName = cn(
    "text-xs font-medium leading-5",
    isDark ? "text-white" : "text-brand-red-strong",
  );

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={cn(
        "grid gap-4 rounded-[1.75rem] border p-5 sm:grid-cols-2 md:p-6",
        isDark
          ? "border-white/[0.12] bg-white/[0.06] text-white"
          : "border-white/80 bg-white/[0.86] text-brand-navy shadow-[0_24px_70px_-38px_rgba(15,33,59,0.35)] backdrop-blur-sm",
        className,
      )}
    >
      {Object.keys(errors).length ? (
        <div
          role="alert"
          className={cn(
            "rounded-2xl border px-4 py-3 text-sm sm:col-span-2",
            isDark
              ? "border-brand-red-strong/70 bg-brand-red-strong/15 text-white"
              : "border-brand-red-strong/20 bg-brand-red-strong/10 text-brand-navy",
          )}
        >
          Check the highlighted fields before opening WhatsApp.
        </div>
      ) : null}

      <label className="flex flex-col gap-2">
        <span className={labelClassName}>Name</span>
        <input
          required
          id={FIELD_IDS.name}
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${FIELD_IDS.name}-error` : undefined}
          className={cn(fieldClassName, errors.name && errorFieldClassName)}
          onInput={() => clearFieldError("name")}
        />
        <span
          id={errors.name ? `${FIELD_IDS.name}-error` : undefined}
          className={cn(supportTextClassName, errors.name && errorTextClassName)}
        >
          {errors.name ?? ""}
        </span>
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelClassName}>Phone</span>
        <input
          required
          id={FIELD_IDS.phone}
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+91"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={
            errors.phone ? `${FIELD_IDS.phone}-error` : `${FIELD_IDS.phone}-help`
          }
          className={cn(fieldClassName, errors.phone && errorFieldClassName)}
          onInput={() => clearFieldError("phone")}
        />
        <span
          id={errors.phone ? `${FIELD_IDS.phone}-error` : `${FIELD_IDS.phone}-help`}
          className={cn(supportTextClassName, errors.phone && errorTextClassName)}
        >
          {errors.phone ?? "Use the number you want the team to call or WhatsApp."}
        </span>
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelClassName}>City</span>
        <input
          id={FIELD_IDS.city}
          type="text"
          name="city"
          autoComplete="address-level2"
          defaultValue={defaultCity}
          placeholder={siteConfig.contact.defaultCity}
          aria-describedby={`${FIELD_IDS.city}-help`}
          className={fieldClassName}
        />
        <span id={`${FIELD_IDS.city}-help`} className={supportTextClassName}>
          Optional. Default city is {siteConfig.contact.defaultCity}.
        </span>
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelClassName}>Service</span>
        <select
          required
          id={FIELD_IDS.service}
          name="service"
          defaultValue={defaultService}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={
            errors.service ? `${FIELD_IDS.service}-error` : undefined
          }
          className={cn(fieldClassName, errors.service && errorFieldClassName)}
          onInput={() => clearFieldError("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span
          id={errors.service ? `${FIELD_IDS.service}-error` : undefined}
          className={cn(
            supportTextClassName,
            errors.service && errorTextClassName,
          )}
        >
          {errors.service ?? ""}
        </span>
      </label>

      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className={labelClassName}>Message</span>
        <textarea
          id={FIELD_IDS.message}
          name="message"
          rows={compact ? 4 : 5}
          placeholder="Tell us about your site, urgency, or preferred survey timing."
          className={fieldClassName}
        />
        <span className={supportTextClassName}>
          Optional. Add site type, urgency, or preferred visit timing.
        </span>
      </label>

      <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-end sm:justify-between">
        <p className={helpTextClassName}>
          {footerNote}
        </p>
        <div className="flex flex-col gap-2 sm:items-end">
          <Button type="submit" size={submitSize} variant="whatsapp">
            <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            {submitLabel}
          </Button>
          <p className={cn(helpTextClassName, "max-w-[15rem] sm:text-right")}>
            {actionNote}
          </p>
        </div>
      </div>
    </form>
  );
}
