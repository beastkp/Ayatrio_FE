import React from "react";
import { GiConfirmed } from "react-icons/gi";
import shoes from "../assets/shoes.webp";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="grid grid-cols-2 p-10 m-10">
      <div className="cols-span-1 p-5 m-5">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-left p-2">
            How would you like to get your order?
          </h1>
          <p className="text-left text-gray-500 p-2">
            Customer Regulations in India require a copy of the recipients KYC.
            The address in the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email to obtain a copy of your KYC.
            The KYC will be stored and will be used soley for the purpose of
            clearing customs (including sharing it with customs officials) for
            all orders and returns. If your KYC does not match your shipping
            address. Please slick the link for more information.
            <span className="text-blue-500 underline cursor-pointer">
              {" "}
              Learn More
            </span>
            <div className="pt-5">
              <div className="p-7 border-4 border-black rounded-lg ">
                <span className="font-semibold flex gap-4 items-center text-black">
                  <GiConfirmed className="text-2xl" />
                  <span className="text-lg">Deliver it</span>
                </span>
              </div>
            </div>
          </p>
          <div className="p-4 flex flex-col gap-2 w-3/4">
            <span className="border-2 border-gray-300 rounded-full w-1/2 p-2  text-center">
              Become a member
            </span>
            <span className="border-2 border-gray-300 rounded-full w-1/2 p-2 text-center">
              Login
            </span>
          </div>
          <p className=" text-xl text-left p-2">Enter Your Name and address:</p>
          <form action="" className="flex flex-col gap-4 p-2">
            <div className="relative w-full">
              <input
                type="text"
                required
                className="w-full p-2 border-2 border-gray-300 bg-white text-black"
              />
              <span className="absolute left-4 text-xs px-3 -top-2 bg-white">
                First Name
              </span>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                required
                className="w-full p-2 border-2 border-gray-300 bg-white text-black"
              />
              <span className="absolute left-4 text-xs px-3 -top-2 bg-white">
                Last Name
              </span>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                required
                className="w-full p-2 border-2 border-gray-300 bg-white text-black"
              />
              <span className="absolute left-3 text-xs px-3 -top-2 bg-white">
                Address Line 1
              </span>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                required
                className="w-full p-2 border-2 border-gray-300 bg-white text-black"
              />
              <span className="absolute left-3  text-xs px-3 -top-2 bg-white">
                Address Line 2
              </span>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                required
                className="w-full p-2 border-2 border-gray-300 bg-white text-black"
              />
              <span className="absolute left-3  text-xs px-3 -top-2 bg-white">
                Address Line 3
              </span>
            </div>
            <div className="w-full grid grid-cols-2">
              <div className="cols-span-1">
                <div className="relative w-3/4 py-3 ">
                  <input
                    type="number"
                    required
                    className="w-full p-2 border-2 border-gray-300 bg-white text-black"
                  />
                  <span className="absolute left-3  text-xs px-3 -top-0 bg-white">
                    Postal Code
                  </span>
                </div>
                <div className="relative w-3/4 py-3 ">
                  <input
                    type="text"
                    required
                    className="w-full p-2 border-2 border-gray-300 bg-white text-black"
                  />
                  <span className="absolute left-3 text-xs px-3 -top-0 bg-white">
                    Locality
                  </span>
                </div>
              </div>
              <div className="cols-span-1 ">
                <div className="relative w-3/4 py-3">
                  <input
                    type="text"
                    required
                    className="w-full p-2 border-2 border-gray-300 bg-white text-black"
                  />
                  <span className="absolute left-3 text-xs px-3 -top-0 bg-white">
                    State/Territory
                  </span>
                </div>
                <div className="relative w-3/4 py-3">
                  <input
                    type="text"
                    defaultValue="India"
                    className="w-full p-2 border-2 border-gray-300 bg-white text-black"
                  />
                </div>
              </div>
            </div>

            <p className=" text-xl text-left p-2">
              What is your Contact Information?
            </p>
            <div className="relative w-full">
              <input
                type="email"
                required
                className="w-full p-2 border-2 border-gray-300 bg-white text-black"
              />
              <span className="absolute left-4 text-xs px-3 -top-2 bg-white">
                Email
              </span>
            </div>
            <span className="text-xs text-gray-500 text-left ">
              A confirmation mail will be sent after checkout
            </span>
            <div className="relative w-full">
              <input
                type="number"
                required
                className="w-full p-2 border-2 border-gray-300 bg-white text-black"
              />
              <span className="absolute left-4 text-xs px-3 -top-2 bg-white">
                Phone number
              </span>
            </div>
            <span className="text-xs text-gray-500 text-left ">
              A Carrier might contact you to confirm delivery
            </span>

            <p className=" text-xl text-left p-2">What is your PAN?</p>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full p-2 border-2 border-gray-300 bg-white text-black"
              />
              <span className="absolute left-4 text-xs px-3 -top-2 bg-white">
                PAN
              </span>
            </div>
            <span className="text-xs text-gray-500 text-left ">
              Enter your PAN to enable payment with UPI, Net Banking or Credit
              Card
            </span>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="ml-2 text-justify">
                I have read and consent to eShopWorld processing any information
                in accordance with the{" "}
                <span className="underline">Privacy Policy</span> and{" "}
                <span className="underline">Cookie Policy</span>. eShopWorld is
                a trusted Nike partner.
              </span>
            </div>
            <button className="bg-black text-white p-2 rounded-full ">
              <Link to="/page2">Continue</Link>
            </button>
          </form>
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

export default Page1;
