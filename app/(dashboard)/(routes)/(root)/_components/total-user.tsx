"use client";

import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllUserQuery } from "@/src/generated/graphql";
import Image from "next/image";

const TotalUser = () => {
  const { data } = useGetAllUserQuery();

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
          {users.length > 0 ? (
            <div className="text-2xl font-bold">{users.length || 0}</div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  src="/not-found/recycle-bin.png"
                  alt="no-data"
                  objectFit="contain"
                  width={32}
                  height={32}
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
