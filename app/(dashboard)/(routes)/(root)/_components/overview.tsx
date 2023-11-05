"use client";

import { useGetOverViewQuery } from "@/src/generated/graphql";
import { useMemo } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Overview() {
  const { data } = useGetOverViewQuery();
  const result = useMemo(() => {
    return data?.getOverView || [];
  }, [data]);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={result}>
        <XAxis
          dataKey="role"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#000000" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
