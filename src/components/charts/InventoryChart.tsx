"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import type { LogistikItem } from "@/types";

const toneColor: Record<LogistikItem["status"], string> = {
  aman: "#16A34A",
  menipis: "#F59E0B",
  kritis: "#EF4444",
};

export function InventoryChart({ data }: { data: LogistikItem[] }) {
  const chartData = data.map((d) => ({ nama: d.nama, stok: d.stokPusat, status: d.status }));
  return (
    <div className="h-[220px] w-full -ml-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="nama"
            tick={{ fontSize: 10, fill: "#999999" }}
            axisLine={false}
            tickLine={false}
            interval={0}
            angle={-35}
            textAnchor="end"
            height={50}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", fontSize: 12 }}
          />
          <Bar dataKey="stok" radius={[6, 6, 0, 0]}>
            {chartData.map((entry, i) => (
              <Cell key={i} fill={toneColor[entry.status as LogistikItem["status"]]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
