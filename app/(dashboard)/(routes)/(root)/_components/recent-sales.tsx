"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetAllUserAndAdminQuery } from "@/src/generated/graphql";
import { useMemo } from "react";

export function RecentSales() {
  const { data } = useGetAllUserAndAdminQuery();
  const users = useMemo(() => {
    return data?.users || [];
  }, [data]);
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-8">
        {users.map((user) => (
          <div key={user.id} className="flex">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/05.png" alt="Avatar" />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <div className="ml-auto font-medium">{user.gender}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
