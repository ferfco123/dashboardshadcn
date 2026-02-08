import { AppTable } from "@/components/Table/AppTable";
import { columns, type Payment } from "@/components/Table/columns";
import React from "react";

const User = () => {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
  return (
    <div>
      <AppTable columns={columns} data={data} />
    </div>
  );
};

export default User;
