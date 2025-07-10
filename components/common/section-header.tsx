import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4 text-center", className)}>
      <h1
        className={cn(
          "text-4xl lg:text-5xl font-bold text-foreground",
          titleClassName
        )}
      >
        {title}
      </h1>
      {description && (
        <p
          className={cn(
            "text-xl text-muted-foreground mx-auto max-w-2xl",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
