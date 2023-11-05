"use client";

import React, { useMemo } from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns";
import { useGetAllUserAndAdminQuery } from "@/src/generated/graphql";

const UserTable = () => {
  const { data } = useGetAllUserAndAdminQuery();
  const users = useMemo(() => {
    return data?.users || [];
  }, [data]);

  return (
    <div>
      <DataTable data={users} columns={columns} />
    </div>
  );
};

export default UserTable;
