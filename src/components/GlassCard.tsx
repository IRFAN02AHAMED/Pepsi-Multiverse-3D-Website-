import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-panel rim-light rounded-[32px] overflow-hidden relative",
        className
      )}
    >
      {children}
    </div>
  );
}
