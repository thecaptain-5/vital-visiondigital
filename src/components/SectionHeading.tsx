interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleGradient?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({ badge, title, titleGradient, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-xs font-medium text-neon-blue mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}{" "}
        {titleGradient && <span className="gradient-text">{titleGradient}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
