import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container  m-auto my-4 grid grid-cols-12">
      <div className="col-span-3 hidden sm:block">
        <div className="w-full py-4 pl-3 border-4  mb-5 flex items-center gap-3">
          <div className="size-11">
            <img src="/assets/icons/account.svg" className="size-11" alt="Profile avatar" />
          </div>
          <div className="text-gray-500">
            <div className="text-sm tracking-wide">Welcome</div>
            <div className="text-sm tracking-wide text-gray-700">astiksarathe</div>
          </div>
        </div>
        <ul>
          <li className="w-full py-4 pl-3 border border-b-0  text-gray-500 uppercase font-medium text-sm tracking-wider">
            <Link className="flex gap-2 items-center hover:text-gray-700" to="">
              <img className="size-5" src="/assets/icons/dashboard.svg" alt="" />
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="w-full py-4 pl-3 border border-b-0  text-gray-500 uppercase font-medium text-sm tracking-wider">
            <Link className="flex gap-2 items-center hover:text-gray-700" to="orders">
              <img className="size-5" src="/assets/icons/orders.svg" alt="" />
              <span>orders</span>
            </Link>
          </li>

          <li className="w-full py-4 pl-3 border border-b-0  text-gray-500 uppercase font-medium text-sm tracking-wider">
            <Link className="flex gap-2 items-center hover:text-gray-700" to="addresses">
              <img className="size-5" src="/assets/icons/location.svg" alt="" />
              <span>addresses</span>
            </Link>
          </li>

          <li className="w-full py-4 pl-3 border border-b-0  text-gray-500 uppercase font-medium text-sm tracking-wider">
            <Link className="flex gap-2 items-center hover:text-gray-700" to="account-details">
              <img className="size-5" src="/assets/icons/account.svg" alt="" />
              <span>Account Details</span>
            </Link>
          </li>

          <li className="w-full py-4 pl-3 border text-gray-500 uppercase font-medium text-sm tracking-wider">
            <Link className="flex gap-2 items-center hover:text-gray-700" to="">
              <img className="size-5" src="/assets/icons/logout.svg" alt="" />
              <span>log out</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-12 sm:col-span-9 px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
