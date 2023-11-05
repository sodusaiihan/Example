"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useGetRecentUsersQuery } from "@/src/generated/graphql";
import { useMemo } from "react";

export function RecentUsers() {
  const { data } = useGetRecentUsersQuery();
  const users = useMemo(() => {
    return data?.getRecentUsers || [];
  }, [data]);
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-8">
        {users.map((user) => (
          <div key={user.id} className="flex">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatar/avatar1.svg" alt="Avatar" />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <Badge className={cn("ml-auto font-medium")}>
              {user.role === "user" ? "Хэрэглэгч" : "Админ"}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
