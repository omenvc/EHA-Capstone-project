import { Users, Users2 } from "lucide-react";
import { Cell, Pie, PieChart } from "recharts";

export function GenderPieChart() {
  const data = [
    { name: "Male", value: 70 },
    { name: "Female", value: 30 },
  ];

  const COLORS = ["#3B82F6", "#EC4899"];

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-1/2">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-sm">Patients by Gender</h3>
        <p className="text-xs text-muted-foreground">Total Patients</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-1/2 h-28">
          <PieChart width={120} height={120}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={50}
              paddingAngle={3}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex flex-col gap-3 text-sm w-1/2">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
              70%
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3 text-muted-foreground" />
              Male
            </span>
            <span className="ml-auto text-muted-foreground text-sm flex items-center gap-1">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span>29</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center text-xs font-medium bg-pink-100 text-pink-700 px-2 py-0.5 rounded">
              30%
            </span>
            <span className="flex items-center gap-1">
              <Users2 className="w-3 h-3 text-muted-foreground" />
              Female
            </span>
            <span className="ml-auto text-muted-foreground text-sm flex items-center gap-1">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span>13</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
