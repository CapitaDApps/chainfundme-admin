import Dashboard from "@/components/layout/Dashboard";
import DropdownFilter from "@/components/layout/DropdownFilter";
import CampaignsTable from "@/components/tables/CampaignsTable";
import { Switch } from "@/components/ui/switch";
import React, { Suspense } from "react";

export default function page() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="space-y-2 text-white">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <p className="text-xs">
            Manage funding across personal, corporate, and premium categories
          </p>
        </div>
      </div>
      <Dashboard />
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
      <CampaignsTable />
    </div>
  );
}
