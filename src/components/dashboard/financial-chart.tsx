import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", male: 3000, female: 2400 },
  { name: "Feb", male: 5000, female: 4000 },
  { name: "Mar", male: 3000, female: 1800 },
  { name: "Apr", male: 4000, female: 2000 },
  { name: "May", male: 3500, female: 3000 },
  { name: "Jun", male: 4200, female: 3400 },
];

export default function FinancialChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-[500px]">
      <h3 className="font-semibold text-sm mb-1">Financial Performance Q1 to Q2</h3>
      <p className="text-sm text-muted-foreground mb-4">January - June 2025</p>

      <div className="h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              width={30}
            />
            <Tooltip
              contentStyle={{ fontSize: "12px", borderRadius: "6px" }}
              cursor={{ fill: "#e5e7eb", opacity: 0.5 }}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              iconSize={10}
              height={40}
              wrapperStyle={{ fontSize: "12px" }}
            />
            <Bar dataKey="male" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="female" stackId="a" fill="#a5b4fc" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm mt-4 text-muted-foreground">
        Subscribers trending up this month
      </p>
      <p className="text-xs text-muted-foreground">
        Showing total earnings for the last 6 months
      </p>
    </div>
  );
}
