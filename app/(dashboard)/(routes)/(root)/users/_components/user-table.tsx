"use client";

import React, { useMemo } from "react";
import { DataTable } from "@/components/data-table";
import { useGetAllUserAndAdminQuery } from "@/src/generated/graphql";
import { columns } from "@/components/columns";

const UserTable = () => {
  const { data } = useGetAllUserAndAdminQuery();
  const users = useMemo(() => {
    return data?.users || [];
  }, [data]);

  console.log(users)

  return (
    <div>
      <DataTable data={users} columns={columns} />
    </div>
  );
};

export default UserTable;
