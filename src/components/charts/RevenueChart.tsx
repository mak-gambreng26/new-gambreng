"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { WorkingCapitalPoint } from "@/types";
import { formatCompactRupiah } from "@/utils/format";

export function RevenueChart({ data }: { data: WorkingCapitalPoint[] }) {
  return (
    <div className="h-[180px] w-full -ml-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#008438" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#008438" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="tanggal"
            tick={{ fontSize: 11, fill: "#999999" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide domain={["dataMin - 500000", "dataMax + 500000"]} />
          <Tooltip
            formatter={(value: number) => formatCompactRupiah(value)}
            contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", fontSize: 12 }}
          />
          <Area
            type="monotone"
            dataKey="saldo"
            stroke="#008438"
            strokeWidth={2.5}
            fill="url(#revenueFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
