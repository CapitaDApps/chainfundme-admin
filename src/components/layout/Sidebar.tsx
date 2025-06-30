"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
import { FaChartLine, FaTelegramPlane } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { TfiWallet } from "react-icons/tfi";
import { IoNotifications } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import LogoutModal from "./LogoutModal";

export default function Sidebar() {
  const pathname = usePathname();
  const slug = pathname.split("/").at(pathname.split("/").length > 2 ? 2 : 1);
  const links = [
    {
      svg: <RxDashboard />,
      title: "Dashboard",
      route: "/admin",
      slug: "admin",
    },
    {
      svg: <FaChartLine />,
      title: "Campaigns",
      route: "/admin/campaigns",
      slug: "campaigns",
    },
    {
      svg: <LuUsersRound />,
      title: "Users",
      route: "/admin/users",
      slug: "users",
    },
    {
      svg: <TfiWallet />,
      title: "Payments",
      route: "/admin/payments",
      slug: "payments",
    },
    {
      svg: <IoNotifications />,
      title: "Notifications",
      route: "/admin/notifications",
      slug: "notifications",
    },
  ];

  return (
    <div className="h-screen bg-primary-bg w-full flex flex-col justify-between ">
      <div>
        <div className="flex items-center relative pt-6 pl-2">
          <Link href={"/"}>
            <Image
              width={35}
              height={35}
              alt="capita_logo"
              src="/chain.png"
              className="pr-1"
            />
          </Link>
          <div className="absolut left-[32%] ">
            <h2 className="font-bold font-sono text-sm text-primary-text">
              ChainFundMe
            </h2>
            <div className="text-secondary-text text-xs flex items-center gap-1">
              <FaTelegramPlane />
              <FaXTwitter />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-8 space-y-2">
          <div className="space-y-0.5">
            {links.map((li) => (
              <Link
                href={li.route}
                key={li.title}
                className={`${
                  slug === li.slug
                    ? "bg-[#000033] text-[#0056CC] border-r-4 border-[#0056CC]"
                    : "bg-transparent text-primary-text hover:bg-[#0056CC]"
                } flex items-center py-2  px-3 gap-2 cursor-pointer duration-500 transition-all`}
              >
                <div>{li.svg}</div>
                <h2 className=" text-[11px] font-normal">{li.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center py-8 gap-2 border-b w-full border-zinc-700">
          <p className="text-primary-text text-xs">John Doe</p>
          <div className="relative text-white cursor-pointer">
            <IoNotifications />
            <div className="absolute bottom-[55%] left-[35%]   bg-[#F4B400] flex items-center justify-center text-[10px] text-primary-text rounded-full size-3.5">
              2
            </div>
          </div>
        </div>

        <LogoutModal
          styles={
            "hover:text-blue-600 text-primary-text flex items-center gap-2 py-8 cursor-pointer"
          }
        >
          <MdLogout className="" />
          <p className=" text-xs">Log out</p>
        </LogoutModal>
      </div>
    </div>
  );
}
