import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", subscribers: 20 },
  { name: "Feb", subscribers: 35 },
  { name: "Mar", subscribers: 30 },
  { name: "Apr", subscribers: 50 },
  { name: "May", subscribers: 28 },
  { name: "Jun", subscribers: 34 },
];

export default function SubscriptionChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-[500px]">
      <h3 className="font-semibold text-sm mb-1">Subscriptions Over Time</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Showing total subscribers over the last 6 months
      </p>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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
              cursor={{ stroke: "#e5e7eb", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="subscribers"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm mt-4 text-muted-foreground">
        Subscribers dropping this month
      </p>
      <p className="text-xs text-muted-foreground">January - June 2025</p>
    </div>
  );
}
