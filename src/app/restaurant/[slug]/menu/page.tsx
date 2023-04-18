import Link from "next/link";
import React from "react";

const RestaurantMenuPage = () => {
  return (
    <div className="h-72 mt-5">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-6xl text-white capitalize text-shadow text-center">
          Miles Stones Grill (Toronto)
        </h1>
      </div>

      {/* menu */}
      <div className="flex m-auto w-5/6 flex-col justify-between items-start -mt-12">
        <div className="bg-white rounded w-full p-3 shadow">
          <nav className="flex border-b pb-2 mb-2">
            <Link className="mr-7" href="/restaurant/milestone-grill/">
              Overview
            </Link>
            <Link className="mr-7" href="/">
              Menu
            </Link>
          </nav>
          <h1 className="font-bold text-4xl text-gray-600">Menu</h1>

          {/* cards */}
          <div className="flex flex-wrap justify-between">
            <div className="border rounded p-3 w-[40%] mb-3">
              <h3 className="font-bold text-lg">Surf and Turf</h3>
              <p className="text-light mt-1 text-sm">
                A well done steak and lobster and rice
              </p>
              <p className="mt-7">$80.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
