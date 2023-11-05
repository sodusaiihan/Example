import React from "react";
import { UserEditPage } from "./_components/user-edit";

const UserIdPage = ({ params }: { params: { userId: string } }) => {
  const { userId } = params;
  return (
    <div>
      <UserEditPage userId={userId} />
    </div>
  );
};

export default UserIdPage;
