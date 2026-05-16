import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles = {
  primary:
    "bg-obsidian text-white hover:bg-charcoal border border-obsidian",
  secondary:
    "bg-white text-obsidian hover:bg-ivory border border-warm-dark",
  outline:
    "bg-transparent text-obsidian border border-obsidian hover:bg-obsidian hover:text-white",
  "outline-white":
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10",
  ghost:
    "bg-transparent text-obsidian hover:text-gold border border-transparent",
  gold:
    "bg-gold text-obsidian hover:bg-gold-dark border border-gold",
} as const;

const sizeStyles = {
  sm: "px-4 py-2 text-[10px] tracking-[0.14em]",
  md: "px-6 py-3 text-[11px] tracking-[0.14em]",
  lg: "px-8 py-4 text-[11px] tracking-[0.16em]",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold uppercase rounded-full transition-all duration-250 whitespace-nowrap",
    variantStyles[variant as keyof typeof variantStyles] ?? variantStyles.primary,
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
