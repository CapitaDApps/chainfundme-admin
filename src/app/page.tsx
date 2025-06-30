import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen relative w-full max-w-[144rem] mx-auto my-0 flex flex-col  justify-cente lg:justify-center py-24 items-center bg-[#000101]">
      <div className="absolute hidden lg:block w-[50%] lg:w-[25%] bottom-[75%] z-[1]  lg:bottom-[25%] lg:left-[5%]  aspect-square ">
        <Image className="" fill alt="logo" src="/auth.png" />
      </div>
      <main className="max-w-[20rem] px-6 md:max-w-[30rem] w-full z-[2] relative  mx-auto flex flex-col items-center justify-center">
        <div className="relative lg:hidden z-[1] w-[65%] aspect-square ">
          <Image className="w-full" fill alt="logo" src="/auth.png" />
        </div>
        <div className="flex gap-4 items-center flex-col justify-center">
          <h3 className="text-white text-xl lg:text-2xl text-center">
            Welcome to ChainFundMe Admin page
          </h3>
          <p className="text-primary-text lg:text-sm text-xs text-center">Manage campaigns, verify users, and oversee platform activity.
Please log in to continue or sign up to create an admin account.</p>
          <div className="flex text-sm  items-center justify-center gap-2 w-full">
            <Button
              className="bg-transparent border border-primary-text text-primary-text cursor-pointer w-[40%]"
              type="reset"
            >
              <Link className="w-full" href="/auth/sign-up">
                Sign Up
              </Link>
            </Button>
            <Button
              className="bg-primary-text hover:bg-primary-text cursor-pointer w-[40%] text-primary-bg "
              type="submit"
            >
              <Link className="w-full" href="/auth/login">
                Login
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
