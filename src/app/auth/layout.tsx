import Image from "next/image";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative w-full max-w-[144rem] mx-auto my-0 flex flex-col py-16 lg:justify-center  items-center bg-[#000101]">
      <div className="absolute hidden lg:block w-[50%] lg:w-[25%] bottom-[75%] z-[1]  lg:bottom-[25%] lg:left-[5%]  aspect-square ">
        <Image className="" fill alt="logo" src='/auth.png' />
      </div>
      <main className="max-w-[18rem] md:max-w-[20rem] w-full z-[2] relative  mx-auto flex flex-col items-center justify-center">
        <div className="relative lg:hidden z-[1] w-[65%] aspect-square ">
          <Image className="w-full" fill alt="logo" src="/auth.png" />
        </div>
        {children}
      </main>
    </div>
  );
}
