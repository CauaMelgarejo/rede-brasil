import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-[0.9rem] border px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A353C]/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "border-[#1A353C] bg-[#1A353C] text-white shadow-[0_12px_30px_rgba(26,53,60,0.18)] hover:bg-[#214751]"
      : "border-[#1A353C]/25 bg-white text-[#1A353C] hover:border-[#1A353C]/40 hover:bg-[#F5F5F5]";

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
