import React from "react";
import { MainNavigation } from "@/components/main-navigation";
import UserForm from "./(root)/users/_components/user-form";
import { UserNavigation } from "@/components/user-navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNavigation className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserForm />
            <UserNavigation />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
