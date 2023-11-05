"use client";

import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllAdminQuery } from "@/src/generated/graphql";
import Image from "next/image";

const TotalAdmin = () => {
  const { data } = useGetAllAdminQuery();
  const admins = useMemo(() => {
    return data?.getAllAdmin || [];
  }, [data]);

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Админ</CardTitle>
        </CardHeader>
        <CardContent>
          {admins.length > 0 ? (
            <div className="text-2xl font-bold">{admins.length || 0}</div>
          ) : (
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
