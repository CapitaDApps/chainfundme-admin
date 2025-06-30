"use client";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import DeactivateModal from "../layout/DeactivateModal";
import DeleteModal from "../layout/DeleteModal";
const users = [
  {
    id: "U001",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U002",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U003",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U004",
    name: "Josiah Dennis",
    email: "cryptalksfinancial@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "Admin",
  },
  {
    id: "U001",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U002",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U003",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U004",
    name: "Josiah Dennis",
    email: "cryptalksfinancial@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "Admin",
  },
  {
    id: "U001",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U002",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U003",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U004",
    name: "Josiah Dennis",
    email: "cryptalksfinancial@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "Admin",
  },
  {
    id: "U001",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U002",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U003",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "User",
  },
  {
    id: "U004",
    name: "Josiah Dennis",
    email: "cryptalksfinancial@gmail.com",
    wallet: "0x3...37",
    campaigns: 3,
    role: "Admin",
  },
];

export default function UserTable() {
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
              <th className="p-3 font-normal">Email</th>
              <th className="p-3 font-normal">Wallet</th>
              <th className="p-3 font-normal">Campaigns</th>
              <th className="p-3 font-normal">Roles</th>
              <th className="p-3 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody className="border  border-contrast-border ">
            {filteredUsers.map((user, idx) => (
              <tr
                key={idx}
                className="border-t border-contrast-border hover:bg-gray-800"
              >
                <td className="p-3 text-xs text-primary-text">{user.id}</td>
                <td className="p-3 text-xs text-primary-text">{user.name}</td>
                <td className="p-3 text-xs text-primary-text">{user.email}</td>
                <td className="p-3 text-xs text-primary-text">{user.wallet}</td>
                <td className="p-3 text-xs text-primary-text">
                  {user.campaigns}
                </td>
                <td className="p-3 text-xs text-primary-text">{user.role}</td>
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
                              View profile
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
                              Edit profile
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
                              View campaigns
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <DeactivateModal
                              styles={`${
                                active
                                  ? "bg-blue-700  text-yellow-400"
                                  : "text-yellow-500"
                              } group flex w-full cursor-pointer text-xs items-center px-2 py-2`}
                            >
                              Deactivate user
                            </DeactivateModal>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <DeleteModal
                              styles={`${
                                active
                                  ? "bg-blue-700  text-red-400"
                                  : "text-red-500"
                              } group flex w-full cursor-pointer text-xs items-center px-2 py-2`}
                            >
                              Delete user
                            </DeleteModal>
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
