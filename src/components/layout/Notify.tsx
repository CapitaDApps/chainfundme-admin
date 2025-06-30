import Image from "next/image";
import React from "react";

export default function Notify({
  children,
  title,
  message,
  duration,
  img,
}: {
  title: string;
  img: string;
  message: string;
  children?: React.ReactNode;
  duration: string;
}) {
  return (
    <div className="flex last:border-none items-start gap-5 p-6 border-b border-contrast-border">
      <Image src={img} width={25} height={25} alt="img" />
      <div className="space-y-3">
        <div className="space-y-1.5">
          <h3 className="text-sm text-primary-text">{title}</h3>
          <p className="text-secondary-text text-[11px]">{duration}</p>
          <p className="text-primary-text md:text-sm text-[11px]">{message}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
