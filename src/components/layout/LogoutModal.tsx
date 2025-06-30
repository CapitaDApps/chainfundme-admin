"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import Link from "next/link";

export default function LogoutModal({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={styles}>{children}</AlertDialogTrigger>
      <AlertDialogContent className="border-contrast-border bg-primary-bg md:max-w-[350px] max-w-[250px] w-full">
        <AlertDialogHeader>
          <AlertDialogDescription className="flex items-center justify-center gap-2 ext-xs text-primary-text flex-col">
            <Image src="/error.png" width={50} height={50} alt="error" />
            <p>Are you sure you want to logout?</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="cursor-pointer text-xs hover:bg-transparent hover:text-primary-text border border-primary-text text-primary-text bg-transparent">
            <Link href="/auth/login" className="w-full">
              {" "}
              Yes, Logout
            </Link>
          </AlertDialogAction>
          <AlertDialogCancel className="cursor-pointer text-xs hover:bg-primary-text bg-primary-text text-primary-bg">
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
