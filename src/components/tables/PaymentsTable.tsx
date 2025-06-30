"use client";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const users = [
  {
    id: "P001",
    email: "janedoe@gmail.com",
    amt: "$3.60",
    name: "Jane Doe",
    date: "May 19,17:39",
    status: "Completed",
  },
  {
    id: "P001",
    email: "janedoe@gmail.com",
    amt: "$3.60",
    name: "Jane Doe",
    date: "May 19,17:39",
    status: "Completed",
  },
  {
    id: "P001",
    email: "janedoe@gmail.com",
    amt: "$3.60",
    name: "Jane Doe",
    date: "May 19,17:39",
    status: "Completed",
  },
  {
    id: "P001",
    email: "janedoe@gmail.com",
    amt: "$3.60",
    name: "Jane Doe",
    date: "May 19,17:39",
    status: "Completed",
  },
  {
    id: "P001",
    email: "janedoe@gmail.com",
    amt: "$3.60",
    name: "Jane Doe",
    date: "May 19,17:39",
    status: "Failed",
  },
  {
    id: "P001",
    email: "janedoe@gmail.com",
    amt: "$3.60",
    name: "Jane Doe",
    date: "May 19,17:39",
    status: "Completed",
  },
  {
    id: "P001",
    email: "janedoe@gmail.com",
    amt: "$3.60",
    name: "Jane Doe",
    date: "May 19,17:39",
    status: "Completed",
  },
  {
    id: "P001",
    email: "janedoe@gmail.com",
    amt: "$3.60",
    name: "Jane Doe",
    date: "May 19,17:39",
    status: "Failed",
  },
  {
    id: "P001",
    email: "janedoe@gmail.com",
    amt: "$3.60",
    name: "Jane Doe",
    date: "May 19,17:39",
    status: "Completed",
  },
];

export default function PaymentsTable() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );
  const types = [
    {
      value: "all",
      opt: "All Types",
    },
    {
      value: "campaign",
      opt: "Campaign Fees",
    },
    {
      value: "platform",
      opt: "Platform Fees",
    },

  ];
  const may = [
    {
      value: "3 months",
      opt: "Last 3 months",
    },
    {
      value: "6 months",
      opt: "Last 6 months",
    },
    {
      value: "last year",
      opt: "Last year",
    },
    {
      value: "last 3 years",
      opt: "Last 3 years",
    },
    {
      value: "all",
      opt: "All time",
    },
  ];

  return (
    <div className="p-4 space-y-3.5">
      <div className="flex w-full gap-3">
        <div className="flex items-center w-[50%] md:w-[80%] px-2 gap-2  border border-contrast-border rounded-sm text-text-gray">
          <IoSearchOutline />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-none p-0 text-text-gray text-xs"
            placeholder="Search payments..."
          />
        </div>

        <div className="flex items-center w-[50%] gap-2">
          <Select>
            <SelectTrigger className="text-primary-text w-[50%] md:w-[150px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent className="bg-primary-bg text-primary-text border-contrast-border">
              {types.map((sel) => (
                <SelectItem className="cursor-pointer" value={sel.value} key={sel.value}>
                  {sel.opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="text-primary-text w-[50%] md:w-[80px]">
              <SelectValue placeholder="May" />
            </SelectTrigger>
            <SelectContent className="bg-primary-bg text-primary-text border-contrast-border">
              {may.map((sel) => (
                <SelectItem className="cursor-pointer" value={sel.value} key={sel.value}>
                  {sel.opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="overflow-x-auto h-[450px scrollbar-thin  scrollbar-thumb-blue-500 scrollbar-track-gray-800  overflow-y-scroll">
        <table className="min-w-full border-collapse  text-sm text-left text-white">
          <thead className="text-white  text-xs">
            <tr className="border border-contrast-border ">
              <th className="p-3 font-normal">ID</th>
              <th className="p-3 font-normal">Email</th>
              <th className="p-3 font-normal">Amt</th>
              <th className="p-3 font-normal">Name</th>
              <th className="p-3 font-normal">Date</th>
              <th className="p-3 font-normal">Status</th>
              <th className="p-3 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody className="border  border-contrast-border ">
            {filteredUsers.map((payment, idx) => (
              <tr
                key={idx}
                className="border-t border-contrast-border hover:bg-gray-800"
              >
                <td className="p-3 text-xs text-primary-text">{payment.id}</td>
                <td className="p-3 text-xs text-primary-text">
                  {payment.email}
                </td>
                <td className="p-3 text-xs text-primary-text">{payment.amt}</td>
                <td className="p-3 text-xs text-primary-text">
                  {payment.name}
                </td>
                <td className="p-3 text-xs text-primary-text">
                  {payment.date}
                </td>
                <td
                  className={`p-3 text-xs ${
                    payment.status === "Completed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {payment.status}
                </td>
                <td className="p-3 text-xs text-primary-text">
                  <Menu as="div" className="relative inline-block  text-left">
                    <Menu.Button className="text-gray-400 cursor-pointer hover:text-white">
                      ⋯
                    </Menu.Button>
                    <Menu.Items className="absolute bg-primary-bg right-0 z-10 mt-2 w-32 origin-top-right  divide-gray-600 rounded-md border-[#666666] border shadow-lg">
                      <div className="px- py-1 text-sm">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-blue-700  text-white"
                                  : "text-gray-300"
                              } group flex w-full cursor-pointer text-xs items-center px-2 py-2`}
                            >
                              View details
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-blue-700  text-white"
                                  : "text-gray-300"
                              } group flex w-full cursor-pointer text-xs items-center px-2 py-2`}
                            >
                              View transaction
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-blue-700  text-white"
                                  : "text-gray-300"
                              } group flex w-full cursor-pointer text-xs items-center px-2 py-2`}
                            >
                              Download receipt
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
