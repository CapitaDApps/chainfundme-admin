import DropdownFilter from "@/components/layout/DropdownFilter";
import UserTable from "@/components/tables/UserTable";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { Suspense } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function page() {
  return (
    <div>
      <div className="flex items-center gap-2 justify-between">
        <div className="space-y-2 text-white">
          <h2 className="text-xl font-semibold">Users</h2>
          <p className="text-xs">Manage platform users and their permissions</p>
        </div>
        <Button className="hover:bg-white/80 cursor-pointer bg-white text-primary-bg text-xs">
          <AiOutlineUserAdd />
          <p>Add User</p>
        </Button>
      </div>

   <Suspense fallback={<p>Loading...</p>}>
       <div className="space-y-3.5 py-3.5">
        <div className="flex justify-end items-center gap-4">
          <div className="flex items-center  gap-1 ">
            <p className="text-primary-text text-xs">Sort by latest</p>
            <Switch />
          </div>
          <DropdownFilter />
        </div>
      </div>

   </Suspense>
      <UserTable />
    </div>
  );
}
