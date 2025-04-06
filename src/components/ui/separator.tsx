import * as React from "react";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Separator({ className = "", ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={`h-px w-full bg-purple-800/40 ${className}`}
      {...props}
    />
  );
}
