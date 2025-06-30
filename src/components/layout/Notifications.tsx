import React from "react";
import Notify from "./Notify";
import { Button } from "../ui/button";
import { TiTick } from "react-icons/ti";
export default function Notifications() {
  return (
    <div className="border border-contrast-border rounded-3xl mt-12 ">
      <Notify
        img="/im_6.png"
        duration="1 day ago"
        title="New Contribution Received"
        message="“Medical Expenses Support campaign” received a 0.5 ETH contribution"
      >
        <div className="flex items-center gap-3 ">
          <button className="rounded-full text-xs md:text-sm p-1.5 px-3.5 border-white border bg-transparent hover:bg-transparent text-white font-[500] ">
            0.5ETH
          </button>
          <p className="text-white text-xs font-normal">from anonymous</p>
        </div>
      </Notify>
      <Notify
        img="/im_1.png"
        duration="1 day ago"
        title="Campaign Milestone Reached"
        message="“Medical Expenses Support campaign” has reached 100% of its funding goal"
      />

      <Notify
        img="/im_2.png"
        duration="1 day ago"
        title="Awaiting approval"
        message="“Medical Expenses Support campaign” has been created and is awaiting approval"
      >
        <div className="flex items-center gap-3 ">
          <Button className="text-[#C06100] hover:bg-[#FFE1C2] bg-[#FFE1C2] flex items-center gap-2 text-xs">
            Accept <TiTick />
          </Button>
          <Button className="bg-transparent text-primary-text border border-primary-text hover:bg-transparent">
            Reject
          </Button>
        </div>
      </Notify>

      <Notify
        img="/im_3.png"
        duration="1 day ago"
        title="Campaign Cancellation"
        message="A contribution of 100 USDT was refunded due to campaign cancellation"
      />

      <Notify
        img="/im_5.png"
        duration="1 day ago"
        title="Contribution Refunded"
        message="A contribution of 100 USDT was refunded due to campaign cancellation"
      >
        <div className="flex items-center gap-3 ">
          <button className="rounded-full text-xs md:text-sm p-1.5 px-3.5 border-white border bg-transparent hover:bg-transparent text-white font-[500]">
            100 USDT
          </button>
        </div>
      </Notify>

      <Notify
        img="/im_4.png"
        duration="1 day ago"
        title="Campaign Ended"
        message="“Medical Expenses Support campaign” has reached its completion"
      />

      <Notify
        img="/im_1.png"
        duration="1 day ago"
        title="Weekly Summary"
        message="You received 15 contributions totaling $1,000 this week"
      >
        <div className="flex items-center gap-3 ">
          <button className="rounded-full text-xs md:text-sm p-1.5 px-3.5 border-white border bg-transparent hover:bg-transparent text-white font-[500] ">
            1,000 USDT
          </button>
        </div>
      </Notify>
    </div>
  );
}
