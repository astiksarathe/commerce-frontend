import React from "react";
import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <div>
      <div className="text-sm space-y-3 mb-4">
        <div>
          Hello <span className="font-medium">astiksarathe820</span> (not{" "}
          <span className="font-medium">astiksarathe820</span>?{" "}
          <Link className="underline hover:text-gray-700">Log out</Link>)
        </div>
        <div>
          From your account dashboard you can view your{" "}
          <Link className="underline hover:text-gray-700" to="orders">
            recent orders
          </Link>
          , manage your{" "}
          <Link className="underline hover:text-gray-700" to={"addresses"}>
            shipping and billing addresses
          </Link>
          , and &nbsp;
          <Link className="underline hover:text-gray-700" to={"account-details"}>
            edit your password and account details.
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="space-y-3 border py-4 hover:bg-gray-50 cursor-pointer">
          <div className="">
            <img className="size-11 m-auto" src="/assets/icons/orders.svg" alt="Orders" />
          </div>
          <div className="text-base font-medium uppercase tracking-wider text-gray-700 text-center">
            Orders
          </div>
        </div>
        <div className="space-y-3 border py-4 hover:bg-gray-50 cursor-pointer">
          <div className="">
            <img className="size-11 m-auto" src="/assets/icons/location.svg" alt="Addresses" />
          </div>
          <div className="text-base font-medium uppercase tracking-wider text-gray-700 text-center">
            Addresses
          </div>
        </div>
        <div className="space-y-3 border py-4 hover:bg-gray-50 cursor-pointer">
          <div className="">
            <img className="size-11 m-auto" src="/assets/icons/account.svg" alt="Account Details" />
          </div>
          <div className="text-base font-medium uppercase tracking-wider text-gray-700 text-center">
            Account Details
          </div>
        </div>
        <div className="space-y-3 border py-4 hover:bg-gray-50 cursor-pointer">
          <div className="">
            <img className="size-11 m-auto" src="/assets/icons/logout.svg" alt="Log out" />
          </div>
          <div className="text-base font-medium uppercase tracking-wider text-gray-700 text-center">
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
