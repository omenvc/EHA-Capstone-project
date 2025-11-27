import React from "react";

type HorizontalProgressBarProps = {
  progress: number;
};
const HorizontalProgress: React.FC<HorizontalProgressBarProps> = ({
  progress,
}) => {
  const clampedProgress = Math.max(0, Math.min(progress, 100));
  return (
    <div className="mt-2 bg-zinc-300 h-2 w-full rounded-lg overflow-hidden relative">
      <div className="absolute bottom-0 h-full bg-[#355CE1] rounded-lg transition-all" style={{ width: `${clampedProgress}%` }}></div>
    </div>
  );
};

export default HorizontalProgress;
