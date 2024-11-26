"use client";
import { logoIcon, profiledemo } from "@/assets/Images/index";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GoSignOut } from "react-icons/go";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { RiHome5Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import { VscVmConnect } from "react-icons/vsc";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="relative p-5 border-r md:w-1/2 lg:w-1/5">
        <div className="flex gap-2 my-auto">
          <Image src={logoIcon} className="size-10" alt="Logo" />
          <p className="my-auto text-3xl font-bold">Horizon</p>
        </div>

        <div>
          <div className="flex w-full my-5 border rounded-none md:gap-1">
            <IoSearch className="my-auto ml-3 text-3xl text-customRed" />

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search"
              className="w-full px-4 py-3 text-gray-700 rounded-full placeholder:font-normal focus:outline-none"
            />
          </div>
        </div>
        <nav className="flex flex-col gap-4">
          <Link
            className="flex gap-2 px-2 py-3 font-bold border rounded-md hover:bg-blue-500 hover:text-white"
            href="/dashboard"
          >
            <RiHome5Line className="my-auto text-xl" />
            <p className="my-auto text-base">Home</p>
          </Link>

          <Link
            className="flex gap-2 px-2 py-3 font-bold border rounded-md hover:bg-blue-500 hover:text-white"
            href="/dashboard"
          >
            <RiMoneyDollarCircleLine className="my-auto text-xl" />
            <p className="my-auto text-base">My Banks</p>
          </Link>

          <Link
            className="flex gap-2 px-2 py-3 font-bold border rounded-md hover:bg-blue-500 hover:text-white"
            href="/dashboard"
          >
            <HiOutlineClipboardDocumentList className="my-auto text-xl" />
            <p className="my-auto text-base">Transaction History</p>
          </Link>

          <Link
            className="flex gap-2 px-2 py-3 font-bold border rounded-md hover:bg-blue-500 hover:text-white"
            href="/dashboard"
          >
            <FaMoneyBillTrendUp className="my-auto text-xl" />
            <p className="my-auto text-base">Payment Transfer</p>
          </Link>

          <Link
            className="flex gap-2 px-2 py-3 font-bold border rounded-md hover:bg-blue-500 hover:text-white"
            href="/dashboard"
          >
            <VscVmConnect className="my-auto text-xl" />
            <p className="my-auto text-base">Connect Bank</p>
          </Link>

          <div className="absolute left-0 w-full px-5 bottom-5">
            <hr className="my-4" />
            <div className="flex justify-between">
              <Image
                className="my-auto rounded-full size-10"
                src={profiledemo}
                alt="Profile"
              />
              <div className="my-auto">
                <p className="text-sm font-bold">Adrian Hajdin</p>
                <p className="text-sm">adrian@jsmastery.pro</p>
              </div>
              <GoSignOut className="my-auto text-xl cursor-pointer" />
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 ">{children}</main>
    </div>
  );
}
