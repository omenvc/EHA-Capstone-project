import { useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Button } from "@/components/ui/button";

const yearData = [
  { name: "Jan", visits: 30 },
  { name: "Feb", visits: 26 },
  { name: "Mar", visits: 10 },
  { name: "Apr", visits: 21 },
  { name: "May", visits: 23 },
  { name: "Jun", visits: 30 },
  { name: "Jul", visits: 24 },
  { name: "Aug", visits: 9 },
  { name: "Sep", visits: 22 },
  { name: "Oct", visits: 8 },
  { name: "Nov", visits: 205 },
  { name: "Dec", visits: 29 },
];

const monthData = [
  { name: "W1", visits: 10 },
  { name: "W2", visits: 12 },
  { name: "W3", visits: 8 },
  { name: "W4", visits: 14 },
];

const weekData = [
  { name: "Mon", visits: 4 },
  { name: "Tue", visits: 6 },
  { name: "Wed", visits: 5 },
  { name: "Thu", visits: 7 },
  { name: "Fri", visits: 3 },
  { name: "Sat", visits: 2 },
  { name: "Sun", visits: 1 },
];

export function EncountersChart() {
  const [view, setView] = useState<"week" | "month" | "year">("year");

  const getData = () => {
    switch (view) {
      case "week":
        return weekData;
      case "month":
        return monthData;
      case "year":
        return yearData;
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow w-full h-[650px]">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-sm">All Encounters</h3>
        <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
          <Button
            variant={view === "week" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView("week")}
            className={view === "week" ? "bg-white" : ""}
          >
            Week
          </Button>
          <Button
            variant={view === "month" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView("month")}
            className={view === "month" ? "bg-white" : ""}
          >
            Month
          </Button>
          <Button
            variant={view === "year" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView("year")}
            className={view === "year" ? "bg-white" : ""}
          >
            Year
          </Button>
        </div>
      </div>

      <div className="h-[520px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getData()}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }} // Tailwind gray-500
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <Tooltip
              formatter={(value: number) => `${value} Visits`}
              contentStyle={{ borderRadius: 8, fontSize: 12 }}
            />
            <Bar dataKey="visits" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
