import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  overline,
  title,
  subtitle,
  center = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        center && "mx-auto text-center",
        className
      )}
    >
      {overline && (
        <p
          className={cn(
            "overline-text mb-4",
            light ? "text-gold" : "text-gold"
          )}
        >
          {overline}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl leading-tight",
          light ? "text-white" : "text-obsidian"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed font-light",
            light ? "text-white/60" : "text-charcoal/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
