import Notifications from '@/components/layout/Notifications';
import { Button } from '@/components/ui/button'
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex items-center z-10 justify-between">
        <div className="space-y-2 text-white">
          <h2 className="text-xl font-semibold">Notifications</h2>
        </div>
        <Button className="hover:bg-white/80 cursor-pointer bg-white text-primary-bg text-xs">
          Mark all as read
        </Button>
      </div>

      <Notifications />
    </div>
  );
}
