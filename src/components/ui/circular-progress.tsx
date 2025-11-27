import React from "react";

type ProgressProp = {
  progress: number;
};

const CircularProgress: React.FC<ProgressProp> = ({ progress }: ProgressProp) => {
  const radius = 52;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#355CE1"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
        <text
          x="30%"
          y="50%"
          dominantBaseline="middle"
          className="fill-gray-800 font-bold text-xl"
        >
          {progress}
          %
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
