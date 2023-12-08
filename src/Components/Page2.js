import React from "react";
import shoes from "../assets/shoes.webp";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="grid grid-cols-2 p-10 m-10">
      <div className="cols-span-1 p-5 m-5">
        <h1 className="font-bold text-xl text-left p-2">
          When would you like to get your order?
        </h1>
        <span className="border-4 flex border-black justify-between p-7 rounded-lg">
          Arrives Thu, 14 Dec - Wed, 3 Jan <span>$1,250.00</span>
        </span>
        <div className="p-3 flex flex-col gap-5">
          <p className="font-semibold text-xl">
            Arrives Thu, 14 Dec - Wed, 3 Jan
          </p>
          <img src={shoes} alt="" className="w-1/3 p-2" />
          <span className="text-gray-500 text-xs">
            This is an international shipment requiring customs clearance
          </span>
            <Link to="/page3" >
          <button className="bg-black text-white p-2 rounded-full w-full">Continue</button>
            </Link>
          <hr />
          <div className="relative">
            <span className="flex justify-between p-3 items-center">
              <span className="text-gray-500">Delivery</span>
              <button className="border-2 border-gray-300 p-2 rounded-full w-20">
                Edit
              </button>
            </span>
            <div className="flex flex-col text-gray-500 text-xs px-3 ">
              <span>ANUK JAIN</span>
              <span>25 C ROYED STREET</span>
              <span>anukjain00786@gmail.com</span>
              <span>09836465034</span>
              <span>PAN</span>
            </div>
          </div>
          <hr />
          <span className="text-black px-3">Shipping</span>
          <hr />
          <span className="text-gray-500 px-3">Billing</span>
          <hr />
          <span className="text-gray-500 px-3">Payment</span>
          <hr />
        </div>
      </div>
      <div className="cols-span-1 p-5 m-5">
        <h1 className="font-bold text-xl text-left p-2">Order Summary</h1>
        <div className="flex p-2 justify-between">
          <span className="text-gray-500 text-md">SubTotal</span>
          <span className="text-gray-500 text-md">$9,195.00</span>
        </div>
        <div className="flex p-2 justify-between">
          <span className="text-gray-500 text-md">Delivery/Shipping</span>
          <span className="text-gray-500 text-md">$1,250.00</span>
        </div>
        <hr className="border-gray-300 my-2 " />
        <div className="flex p-2 justify-between">
          <span className="text-black text-md">Total</span>
          <span className="text-black text-md">$10,445.00</span>
        </div>
        <span className="text-gray-500 text-xs ">
          Total includes price of your order, including all duties and taxes
        </span>
        <div className="w-full p-3 flex flex-col">
          <span className="font-semibold text-left flex">
            Arrives Thu, 14 Dec-Wed, 3 Jan
          </span>
          <div className="flex items-center">
            <img src={shoes} alt="" className="w-1/2 p-2" />
            <div className="w-1/2 flex flex-col flex-wrap">
              <span className=" p-1 py-3 text-left">
                Jordan Nu Retro 1 Low Men's Shoes
              </span>
              <span className="text-gray-500 text-sm text-left px-1 ">
                Qty 1
              </span>
              <span className="text-gray-500 text-sm text-left px-1 ">
                size UK 7.5
              </span>
              <span className="text-gray-500 text-sm text-left px-1">
                $9,195.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
