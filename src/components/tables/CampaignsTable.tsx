"use client";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import DeleteCampaignModal from "../layout/DeleteCampaignModal";
const users = [
  {
    id: "C001",
    name: "Medical Expenses Support",
    creator: "Jane Doe",
    goal: "$999k",
    progress: 44,
    status: "Pending",
  },
  {
    id: "C002",
    name: "Fund My Education",
    creator: "Jane Doe",
    goal: "$999k",
    progress: 10,
    status: "Pending",
  },
  {
    id: "C003",
    name: "Crises Relief in Scandinavia",
    creator: "Jane Doe",
    goal: "$999k",
    progress: 50,
    status: "Pending",
  },
  {
    id: "C004",
    name: "Pls Help Palestinian Children...",
    creator: "Jane Doe",
    goal: "$999k",
    progress: 80,
    status: "Active",
  },
  {
    id: "C005",
    name: "Creators Fund",
    creator: "Jane Doe",
    goal: "$999k",
    progress: 100,
    status: "Ended",
  },
  {
    id: "C006",
    name: "Medical Expenses Support",
    creator: "Jane Doe",
    goal: "$999k",
    progress: 100,
    status: "Paused",
  },
  {
    id: "C007",
    name: "Medical Expenses Support",
    creator: "Jane Doe",
    goal: "$999k",
    progress: 100,
    status: "Paused",
  },
];

export default function CampaignsTable() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-3.5">
      <div className="flex items-center px-2 gap-2  border border-contrast-border rounded-sm text-text-gray">
        <IoSearchOutline />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-none p-0 text-text-gray text-xs"
          placeholder="Search users..."
        />
      </div>
      <div className="overflow-x-auto h-[450px scrollbar-thin  scrollbar-thumb-blue-500 scrollbar-track-gray-800  overflow-y-scroll">
        <table className="min-w-full border-collapse  text-sm text-left text-white">
          <thead className="text-white  text-xs">
            <tr className="border border-contrast-border ">
              <th className="p-3 font-normal">ID</th>
              <th className="p-3 font-normal">Name</th>
              <th className="p-3 font-normal">Creator</th>
              <th className="p-3 font-normal">Goal</th>
              <th className="p-3 font-normal">Progress</th>
              <th className="p-3 font-normal">Status</th>
              <th className="p-3 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody className="border  border-contrast-border ">
            {filteredUsers.map((user, idx) => (
              <tr
                key={idx}
                className="border-t border-[#2A2A2A] hover:bg-gray-800"
              >
                <td className="p-3 text-xs text-primary-text">{user.id}</td>
                <td className="p-3 text-xs text-primary-text">{user.name}</td>
                <td className="p-3 text-xs text-primary-text">
                  {user.creator}
                </td>
                <td className="p-3 text-xs text-primary-text">{user.goal}</td>
                <td className="p-3 text-xs text-primary-text">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary-text"
                        style={{ width: `${user.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-300">{user.progress}%</span>
                  </div>
                </td>
              
                <td className={`p-3 text-xs   `}>
                  <p
                    className={`p-1.5 text-xs w-fit ${
                      user.status === "Active"
                        ? "text-green-500"
                        : user.status === "Paused"
                        ? "text-yellow-500"
                        : user.status === "Ended"
                        ? "text-red-500"
                        : "rounded-full bg-primary-text text-primary-bg"
                    } `}
                  >
                    {user.status}
                  </p>
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
                              Approve
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
                              Edit campaign
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
                              Pause campaign
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <DeleteCampaignModal
                              styles={`${
                                active
                                  ? "bg-blue-700  text-red-400"
                                  : "text-red-500"
                              } group flex w-full cursor-pointer text-xs items-center px-2 py-2`}
                            >
                            Delete campaign
                            </DeleteCampaignModal>
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
