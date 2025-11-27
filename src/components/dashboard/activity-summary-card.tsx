import type { ReactNode } from "react";

type ActivitySummaryCardProps = {
  title: string;
  value: string;
  subText: string;
  icon: ReactNode;
};

export default function ActivitySummaryCard({
  title,
  value,
  subText,
  icon,
}: ActivitySummaryCardProps) {
  return (
    <div className="rounded-lg p-6 bg-white shadow w-full">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <h2 className="text-2xl font-semibold">{value}</h2>
          <p className="text-sm text-muted-foreground">{subText}</p>
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </div>
    </div>
  );
}
