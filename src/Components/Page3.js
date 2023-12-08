import React from 'react'
import shoes from '../assets/shoes.webp'
import { MdCreditCard } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa";

const Page3 = () => {
  return (
    <div className="grid grid-cols-2 p-10 m-10">
      <div className="cols-span-1 p-5 m-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl text-left p-2">
            Have a promo code?
          </h1>
          <input
            type="text"
            placeholder="Promo"
            className="border-2 border-gray-300 p-3 rounded-lg m-2"
          />
        </div>
        <div className="py-3">
          <h1 className="font-bold text-xl text-left p-2">
            How would you like to pay?
          </h1>
          <span className="flex gap-4 border-2 border-black p-3 rounded-lg m-2 hover:border-black">
            <MdCreditCard className="text-2xl" />
            <span>Credit or Debit Card</span>
          </span>
          <span className="flex gap-4 border-2 border-gray-300 p-3 rounded-lg m-2 hover:border-black">
            <FaGooglePay className="text-2xl" />
            <span>Google Pay</span>
          </span>
        </div>
        <div className="py-3">
          <h1 className="font-bold text-xl text-left p-2">
            Enter your Payment Details :
          </h1>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name on card"
              required
              className="border-2 border-gray-300 p-3 rounded-lg"
            />
            <input
              type="number"
              placeholder="Card Number"
              required
              className="border-2 border-gray-300 p-3 rounded-lg"
            />
            <div className="flex justify-between">
              <input
                type="text"
                required
                placeholder="MMYY"
                className="border-2 border-gray-300 p-3 rounded-lg w-56"
              />
              <input
                type="text"
                required
                placeholder="CVV"
                className="border-2 border-gray-300 p-3 rounded-lg w-56"
              />
            </div>
            <span className="text-xs text-gray-500 ">
              By clicking Place Order; you agree to our Terms and Conditions
            </span>
            <button className="bg-black text-white p-2 rounded-full ">
              Place Order
            </button>
          </form>
        </div>
        <hr />
        <div className="">
          <div className="relative py-2">
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
          <div className="relative py-2">
            <span className="flex justify-between p-3 items-center">
              <span className="text-gray-500">Shipping</span>
              <button className="border-2 border-gray-300 p-2 rounded-full w-20">
                Edit
              </button>
            </span>
            <div className="flex flex-col text-gray-500 text-xs px-3 ">
              <span>$1,250.00 Shipping</span>
              <span>Shipment one</span>
              <span>Arrives Thu, 14 Dec - Wed, 3 Jan</span>
            </div>
          </div>
          <hr />
          <div className="relative py-2">
            <span className="flex justify-between p-3 items-center">
              <span className="text-gray-500">Billing</span>
              <button className="border-2 border-gray-300 p-2 rounded-full w-20">
                Edit
              </button>
            </span>
            <div className="flex flex-col text-gray-500 text-xs px-3 ">
              <span>ANUK JAIN</span>
              <span>25 C ROYED STREET</span>
              <span>09836465034</span>
            </div>
          </div>
          <hr />
          <span className="text-black px-2">Payment</span>
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
}

export default Page3