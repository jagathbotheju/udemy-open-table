"use client";
import Link from "next/link";
import { FC } from "react";

interface RestaurantPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    id: string;
  };
}

const RestaurantPage: FC<RestaurantPageProps> = ({ params }) => {
  return (
    <div className="h-72 mt-5">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-6xl text-white capitalize text-shadow text-center">
          Miles Stones Grill (Toronto)
        </h1>
      </div>

      <div className="flex m-auto w-5/6 justify-between items-start -mt-12">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <nav className="flex border-b pb-2 mb-2">
            <Link className="mr-7" href="/restaurant/milestone-grill/">
              Overview
            </Link>
            <Link className="mr-7" href="/restaurant/milestone-grill/menu">
              Menu
            </Link>
          </nav>

          {/* title */}
          <div className="mt-4 border-b pb-6">
            <h1 className="font-bold text-4xl text-gray-600">
              MileStore Grill
            </h1>
            <div className="flex flex-col ">
              <div className="mt-2 flex items-center">
                <p>*****</p>
                <p className="ml-3">4.8</p>
                <p className="ml-3">600</p>
                <p className="ml-3">Reviews</p>
              </div>

              {/* description */}
              <div className="mt-4">
                <p className="text-sm font-light">
                  Ullamco elit sint ullamco sit aliquip. Ut veniam irure mollit
                  occaecat commodo eu laboris minim excepteur laborum
                  consectetur proident. Id elit sint commodo magna proident do
                  velit est. Irure qui in est magna minim esse qui laboris ex
                  pariatur eu nostrud.
                </p>
              </div>

              {/* images */}
              <div>
                <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5 text-gray-600">
                  5 photos
                </h1>
                <div className="flex flex-wrap">
                  <img
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/50659802.jpg"
                    alt=""
                  />
                  <img
                    className="w-56 h-44 mr-1 mb-1"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/50796445.jpg"
                    alt=""
                  />
                  <img
                    className="w-56 h-44 mr-1 mb-1"
                    alt=""
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/50937394.jpg"
                  />
                  <img
                    className="w-56 h-44 mr-1 mb-1"
                    alt=""
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/51480690.jpg"
                  />
                  <img
                    className="w-56 h-44 mr-1 mb-1"
                    alt=""
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/27210499.jpg"
                  />
                  <img
                    className="w-56 h-44 mr-1 mb-1"
                    alt=""
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/27088797.jpg"
                  />
                </div>
              </div>

              {/* reviews */}
              <div>
                <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5 text-gray-600">
                  What 100 people are saying...
                </h1>

                {/* review card */}
                <div>
                  <div className="border-b pb-7 mb-7">
                    <div className="flex">
                      <div className="w-4/6 flex flex-col items-center gap-2">
                        <div className="rounded-full bg-blue-400 w-12 h-12 flex items-center justify-center">
                          <h2 className="text-white text-2xl">JN</h2>
                        </div>
                        <p>*******</p>
                        <p>Jagath Nalaka</p>
                      </div>

                      <div className="mx-5">
                        <p className="text-sm font-light">
                          Quis Lorem ullamco in cupidatat culpa nostrud
                          cupidatat laboris adipisicing. Ullamco labore esse
                          cupidatat ad incididunt voluptate Lorem deserunt enim
                          duis exercitation consectetur consectetur cupidatat.
                          Ullamco sint officia veniam nostrud tempor in
                          adipisicing sunt sint officia cupidatat anim eu.
                          Excepteur consectetur eiusmod culpa sunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* reservation */}
        <div className="w-[27%]">
          <div className="fixed w-[15%] bg-white rounded p-3 shadow">
            <div className="text-center border-b pb-2 font-bold">
              <h4 className="mr-7 text-lg">Make a Reservation</h4>
            </div>

            <div className="my-3 flex flex-col">
              <label htmlFor="">Party Size</label>
              <select className="py-1 border-b font-light" name="" id="">
                <option value="">1 person</option>
                <option value="">2 people</option>
              </select>
            </div>

            <div className="justify-between flex">
              <div className="flex flex-col">
                <label htmlFor="">Date</label>
                <input type="text" className="border-b font-light w-28" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Time</label>
                <select name="py-1 border-b font-light" id="">
                  <option value="">07:30 AM</option>
                  <option value="">09:30 AM</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <button className="bg-red-600 w-full px-4 text-white font-bold h-14 rounded">
                Find a Time
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
