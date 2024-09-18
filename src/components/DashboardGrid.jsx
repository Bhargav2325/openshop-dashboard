import React from "react";
import { IoBagHandle, IoCartSharp, IoPieChart } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const DashboardGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className=" text-white text-2xl" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $54235
            </strong>
            <span className="text-sm text-green-500 pl-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
          <IoPieChart className=" text-white text-2xl" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Expenses</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3423
            </strong>
            <span className="text-sm text-green-500 pl-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
          <FaUserFriends className=" text-white text-2xl" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Customers</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              12313
            </strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
          <IoCartSharp className=" text-white text-2xl" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              16432
            </strong>
            <span className="text-sm text-red-500 pl-2">-43</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardGrid;

const BoxWrapper = ({ children }) => {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border  border-gray-200 flex items-center">
      {children}
    </div>
  );
};
