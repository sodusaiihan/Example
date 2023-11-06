"use client";

import React from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetOverViewQuery } from "@/src/generated/graphql";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Overview() {
  const { data, loading } = useGetOverViewQuery();
  const result = data?.getOverView || [];

  if (loading) {
    return <Skeleton className="w-full h-12 rounded-full" />;
  }

  if (result.length > 0) {
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
            tickFormatter={(value) => `${value}`}
          />
          <Bar dataKey="total" fill="#000000" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            src="/not-found/empty-box.png"
            alt="no-data"
            objectFit="contain"
            width={150}
            height={200}
          />
        </div>
      </div>
    );
  }
}
