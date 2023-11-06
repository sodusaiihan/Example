"use client";

import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllUserQuery } from "@/src/generated/graphql";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const TotalUser = () => {
  const { data, loading } = useGetAllUserQuery();

  const users = useMemo(() => {
    return data?.getAllUser || [];
  }, [data]);

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Хэрэглэгч</CardTitle>
        </CardHeader>
        <CardContent>
          {loading && <Skeleton className="w-full h-8 rounded-full" />}
          {users.length > 0 && !loading && (
            <div className="text-2xl font-bold">{users.length}</div>
          )}
          {users.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  src="/not-found/recycle-bin.png"
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

export default TotalUser;
