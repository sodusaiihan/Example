"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetRecentUsersQuery } from "@/src/generated/graphql";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

export function RecentUsers() {
  const { data, loading } = useGetRecentUsersQuery();
  const users = data?.getRecentUsers || [];
  const [_, copy] = useCopyToClipboard()

  if (loading) {
    return <Skeleton className="w-full h-12 rounded-full" />;
  }

  if (users.length > 0) {
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
              <Button size={"sm"} variant={"ghost"} onClick={() => copy(user.email)}>
                <CopyIcon />
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center">
        <Image
          src="/not-found/corrupted-file.png"
          alt="no-data"
          objectFit="contain"
          width={150}
          height={200}
        />
      </div>
    );
  }
}
