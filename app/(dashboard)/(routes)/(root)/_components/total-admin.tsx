"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllAdminQuery } from "@/src/generated/graphql";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const TotalAdmin = () => {
  const { data, loading } = useGetAllAdminQuery();
  const admins = data?.getAllAdmin || [];

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Админ</CardTitle>
        </CardHeader>
        <CardContent>
          {loading && <Skeleton className="w-full h-8 rounded-full" />}
          {admins.length > 0 && !loading && (
            <div className="text-2xl font-bold">{admins.length}</div>
          )}
          {admins.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  src="/not-found/empty.png"
                  alt="no-data"
                  objectFit="contain"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TotalAdmin;
