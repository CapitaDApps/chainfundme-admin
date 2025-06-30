import Image from "next/image";
import React from "react";
import MobileSidebar from "@/components/layout/MobileSidebar";

export default function MobileHeader() {
  return (
    <div className="bg-[#121212] flex items-center justify-between py-2 w-full z-30 fixed">
      
      <div className="flex items-center gap-1  px-2">
        <Image width={30} height={30} alt="theme" src={`/chain-light.png`} />
        <div className="flex  items-end flex-col leading-[16px]">
          <h4 className={`font-bold font-sono text-sm text-white`}>
            ChainFundMe
          </h4>
          <p className={`text-[10px] font-normal text-white`}>by Capita</p>
        </div>
      </div>
      <div className="lg:hidden lg:invisible lg:opacity-0 block">
        <MobileSidebar />
      </div>
    </div>
  );
}
