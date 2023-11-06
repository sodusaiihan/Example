"use client";

import ExcelJS from "exceljs";
import { useGetAllUserAndAdminQuery } from "@/src/generated/graphql";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver"; // Import the saveAs function

const ExcelExport = () => {
  const { data, loading } = useGetAllUserAndAdminQuery();
  const users = useMemo(() => {
    return data?.users || [];
  }, [data]);

  const exportData = async () => {
    if (data) {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Хэрэглэгч");

      // Add headers
      worksheet.addRow([
        "Нэр",
        "Цахим шуудан",
        "Утасны дугаар",
        "Хаяг",
        "Төрсөн өдөр",
        "Хүйс",
        "Роль",
      ]);

      // Add data rows
      users.forEach((user) => {
        worksheet.addRow([
          user.name,
          user.email,
          user.phonenumber,
          user.address,
          user.birthday,
          user.gender,
          user.role,
        ]);
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, "users.xlsx");
    }
  };

  return (
    <div>
      <Button
        variant="outline"
        type="button"
        disabled={loading}
        onClick={exportData}
      >
        Татах
      </Button>
    </div>
  );
};

export default ExcelExport;
