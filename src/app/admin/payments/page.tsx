import { Button } from "@/components/ui/button";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import PaymentsTable from "@/components/tables/PaymentsTable";

export default function page() {
  return (
    <div>
      <div className="flex items-center gap-2 justify-between">
        <div className="space-y-2 text-white">
          <h2 className="text-xl font-semibold">Payments</h2>
          <p className="text-xs">
            Track platform revenue and transaction history
          </p>
        </div>
        <Button className="hover:bg-white/80 cursor-pointer bg-white text-primary-bg text-xs">
          <MdOutlineFileDownload />
          <p>Export Report</p>
        </Button>
      </div>

      <div className="space-y-3.5 py-3.5">
        <PaymentsTable />
      </div>
    </div>
  );
}
