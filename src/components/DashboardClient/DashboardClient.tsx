import React from "react";
import {
  progrssDemo,
  figma,
  profile1,
  profile2,
  sp,
} from "@/assets/Images/index";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const data = [
  {
    name: "Spotify",
    amount: -15.0,
    status: "Processing",
    date: "Wed 1:00pm",
    category: "Subscriptions",
    img: sp,
  },
  {
    name: "Alexa Doe",
    amount: +88.0,
    status: "Success",
    date: "Wed 2:45am",
    category: "Deposit",
    img: profile1,
  },
  {
    name: "Figma",
    amount: -18.99,
    status: "Processing",
    date: "Wed 2:45am",
    category: "Income",
    img: figma,
  },
  {
    name: "Fresh F&V",
    amount: 98.99,
    status: "Success",
    date: "Wed 2:45am",
    category: "Groceries",
    img: sp,
  },
  {
    name: "Sam Sulek",
    amount: -30.99,
    status: "Declined",
    date: "Tue 5:40am",
    category: "Food",
    img: profile2,
  },
];
const DashboardClient = () => {
  return (
    <div className="grid mt-5lg:grid-cols-3">
      <div className="md:col-span-2">
        <p className="text-3xl font-semibold">
          Welcome, <span className="text-[#0179FE]">Adrian</span>
        </p>
        <p className="mt-3 text-base text-customCream">
          Access & manage your account and transactions efficiently.
        </p>

        <div className="flex gap-6 p-5 mt-5 bg-white border-2 rounded-xl">
          <Image className="size-32" src={progrssDemo} alt="Progress" />
          <div className="w-full">
            <div className="flex justify-between text-base ">
              <p className="font-semibold">2 Bank Accounts</p>
              <p className="text-[#0179FE] cursor-pointer">
                <span className="text-xl">+</span> Add bank
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-customCream">Total Current Balance</p>
              <p className="mt-2 text-3xl font-semibold text-customCream">
                $2,698.12
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between my-5">
          <p className="text-2xl font-semibold">Recent transactions</p>
          <button className="p-3 text-sm bg-white border rounded-lg">
            View all
          </button>
        </div>

        <div className="flex gap-3">
          <p className="text-base font-semibold border-b-2 border-[#0179FE] text-[#0179FE] cursor-pointer">
            Chase Bank
          </p>
          <p className="text-base font-semibold hover:border-b-2 hover:border-[#0179FE] hover:text-[#0179FE] cursor-pointer">
            Bank of America
          </p>
          <p className="text-base font-semibold hover:border-b-2 hover:border-[#0179FE] hover:text-[#0179FE] cursor-pointer">
            First Platypus Bank
          </p>
        </div>
        <hr />

        <div className="flex justify-between gap-4 p-4 mt-6 bg-[#F5FAFF] rounded-lg">
          <div className="flex gap-4">
            <div>
              <p className="px-4 py-3 text-base text-white bg-blue-500 rounded-full">
                CB
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold">Chase Bank</p>
              <p className="text-lg text-blue-600">$2,588.12</p>
            </div>
          </div>
          <div>
            <p className="px-2 text-sm font-semibold text-green-600 bg-green-200 rounded-full">
              savings
            </p>
          </div>
        </div>

        <div className="my-5">
          <div className="overflow-x-auto rounded-t-xl">
            <table className="table">
              {/* head */}
              <thead className="">
                <tr className="bg-gray-100">
                  <th>Transaction</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data?.map((info, i) => (
                  <tr
                    key={i}
                    className={`${info.status === "Declined" && "bg-red-50"} ${
                      info.status === "Success" && "bg-green-50"
                    }`}
                  >
                    <th className="flex gap-2">
                      <Image
                        className="my-auto rounded-full size-10"
                        src={info.img}
                        alt="Profile"
                      />
                      <p className="my-auto text-sm font-medium">{info.name}</p>
                    </th>
                    <td
                      className={`text-sm font-semibold ${
                        info.amount > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      $ {info.amount}
                    </td>
                    <td>
                      <button
                        className={`flex gap-1 px-2 rounded-full ${
                          info.status === "Processing" &&
                          "bg-gray-100 text-customCream"
                        } 
                      ${
                        info.status === "Success" &&
                        "bg-green-100 text-green-600"
                      }
                      ${info.status === "Declined" && "bg-red-100 text-red-600"}
                      `}
                      >
                        <GoDotFill className={`my-auto`} />
                        <p className="my-auto">{info.status}</p>
                      </button>
                    </td>
                    <td>{info.date}</td>
                    <td>
                      <button
                        className={`flex gap-1 px-2 rounded-full ${
                          (info.category === "Subscriptions" ||
                            info.category === "Groceries") &&
                          "border-2 border-[#175CD3] text-[#175CD3]"
                        } 
                      ${
                        (info.category === "Deposit" ||
                          info.category === "Income") &&
                        "border-2 border-green-600 text-green-600"
                      }
                      ${
                        info.status === "Declined" &&
                        "border-2 border-red-600 text-red-600"
                      }
                      `}
                      >
                        <GoDotFill className={`my-auto`} />
                        <p className="my-auto">{info.category}</p>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="md:col-span-1"></div>
    </div>
  );
};

export default DashboardClient;
