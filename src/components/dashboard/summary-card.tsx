import type { ReactNode } from "react";

type SummaryCardProps = {
  title: string;
  value: string | number;
  icon: ReactNode;
  subText: string;
  subTextColor: "text-green-600" | "text-red-600" | "text-muted-foreground";
};

export function SummaryCard({
  title,
  value,
  icon,
  subText,
  subTextColor,
}: SummaryCardProps) {
  return (
    <div className="rounded-lg p-8 w-full shadow bg-white">
      <div className="flex justify-between items-start">
        <div className="gap-5">
          <p className="text-sm text-muted-foreground">{title}</p>
          <h2 className="text-2xl font-semibold">{value}</h2>
          <p className={`text-xs mt-1 ${subTextColor}`}>{subText}</p>
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </div>
    </div>
  );
}
