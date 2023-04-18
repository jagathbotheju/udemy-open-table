import React from "react";
import SearchBox from "../components/SearchBox";
import Link from "next/link";

const SearchPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBox />
      </div>
      <div className="flex py-4 m-auto w-2/3 items-start">
        <div className="w-1/5">
          {/* REGION */}
          <div className="border-b pb-4">
            <h1 className="mb-2">Region</h1>
            <p className="font-light">Toronto</p>
            <p className="font-light">Ottawa</p>
            <p className="font-light">Montreal</p>
            <p className="font-light">Hamilton</p>
            <p className="font-light">Kingston</p>
            <p className="font-light">Niagara</p>
          </div>

          {/* CUISINE */}
          <div className="border-b pb-4 mt-3">
            <h1 className="mb-2">Cuisine</h1>
            <p className="font-light">Mexican</p>
            <p className="font-light">Italian</p>
            <p className="font-light">Chinese</p>
          </div>

          {/* PRICE */}
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
              <button className="border w-full font-light p-2 rounded-l">
                $
              </button>
              <button className="border-r border-t border-b w-full font-light p-2">
                $$
              </button>
              <button className="border-r border-t border-b w-full font-light p-2 rounded-r">
                $$$
              </button>
            </div>
          </div>
        </div>

        <div className="5/6">
          <div className="border-b flex pb-5">
            <img
              src="https://resizer.otstatic.com/v2/photos/xlarge/1/27210499.jpg"
              alt=""
              className="w-44 rounded"
            />
            <div className="pl-5">
              <h2 className="text-3xl">Novikov Doha</h2>
              <div className="flex">
                <div className="flex mb-2">*****</div>
                <p className="ml-2 text-sm">Awesome</p>
              </div>

              <div className="mb-9">
                <div className="font-light flex">
                  <p className="mr-4">$$$</p>
                  <p className="mr-4">Mexican</p>
                  <p className="mr-4">Ottawa</p>
                </div>
              </div>

              <div className="text-red-600">
                <Link href="">View more info</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
