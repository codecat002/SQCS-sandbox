"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";

export type KpiCardTone =
  | "cyan"
  | "amber"
  | "emerald"
  | "rose"
  | "blue"
  | "purple"
  | "slate";

function getToneStyles(tone: KpiCardTone) {
  switch (tone) {
    case "cyan":
      return {
        iconShell: "border-cyan-500/20 bg-cyan-500/10 text-cyan-500",
        hoverBorder: "hover:border-cyan-500/40",
        badge: "text-cyan-500 bg-cyan-500/10",
      };
    case "amber":
      return {
        iconShell: "border-amber-500/20 bg-amber-500/10 text-amber-500",
        hoverBorder: "hover:border-amber-500/40",
        badge: "text-amber-500 bg-amber-500/10",
      };
    case "emerald":
      return {
        iconShell: "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
        hoverBorder: "hover:border-emerald-500/40",
        badge: "text-emerald-500 bg-emerald-500/10",
      };
    case "rose":
      return {
        iconShell: "border-rose-500/20 bg-rose-500/10 text-rose-500",
        hoverBorder: "hover:border-rose-500/40",
        badge: "text-rose-500 bg-rose-500/10",
      };
    case "blue":
      return {
        iconShell: "border-blue-500/20 bg-blue-500/10 text-blue-500",
        hoverBorder: "hover:border-blue-500/40",
        badge: "text-blue-500 bg-blue-500/10",
      };
    case "purple":
      return {
        iconShell: "border-purple-500/20 bg-purple-500/10 text-purple-500",
        hoverBorder: "hover:border-purple-500/40",
        badge: "text-purple-500 bg-purple-500/10",
      };
    case "slate":
    default:
      return {
        iconShell:
          "border-[color:var(--sqcs-border)] bg-[color:var(--sqcs-surface-2)] text-[color:var(--sqcs-text-muted)]",
        hoverBorder: "hover:border-[color:var(--sqcs-border)]",
        badge:
          "text-[color:var(--sqcs-text-muted)] bg-[color:var(--sqcs-surface-2)]",
      };
  }
}

export function KpiCard({
  label,
  value,
  subtitle,
  icon: Icon,
  tone = "slate",
  className,
}: Readonly<{
  label: string;
  value: string;
  subtitle?: string;
  icon?: LucideIcon;
  tone?: KpiCardTone;
  className?: string;
}>) {
  const styles = getToneStyles(tone);

  return (
    <div
      className={`group relative rounded-[var(--sqcs-radius-xl)] border border-[color:color-mix(in_srgb,var(--sqcs-border)_88%,transparent)] bg-[color:var(--sqcs-surface)] p-4 shadow-[var(--sqcs-shadow-soft)] transition-[border-color,box-shadow,transform] hover:-translate-y-px hover:bg-[color:var(--sqcs-surface-card)] hover:shadow-md ${styles.hoverBorder} ${className || ""}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[color:var(--sqcs-text-muted)]">
          {label}
        </span>
        {Icon && (
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-transform group-hover:scale-110 ${styles.iconShell}`}
          >
            <Icon className="h-4 w-4" />
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-extrabold tracking-tight text-[color:var(--sqcs-text)]">
          {value}
        </span>
        {subtitle && (
          <span className="text-xs text-[color:var(--sqcs-text-muted)] font-medium truncate">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
