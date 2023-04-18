import React from "react";

const ReservePage = () => {
  return (
    <div className="border-t h-screen mt-5">
      <div className="py-9 w-3/5 m-auto">
        <div>
          <h1 className="font-bold">You're almost done</h1>
          <div className="mt-5 flex">
            <img
              src="https://resizer.otstatic.com/v2/photos/xlarge/1/27210499.jpg"
              alt=""
              className="w-32 h-18 rounded"
            />
            <div className="ml-4">
              <h1 className="text-3xl font-bold">The Crown - Burchetts</h1>
              <div className="flex mt-3">
                <p className="mr-6">Tue, 22 2023</p>
                <p className="mr-6">07:30PM</p>
                <p className="mr-6">3 people</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between w-[660px]">
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="First Name"
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Phone number"
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Email"
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Occasion"
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Request"
          />
          <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
            Complete Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservePage;
