import React from "react";
import Logo from "../assets/Logo.jpeg";
import { TiMessage } from "react-icons/ti";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex flex-row justify-between m-10">
      <div className="w-1/6">
        <img src={Logo} alt="" className="w-1/3"/>
      </div>
      <span className="flex gap-4 items-center">
        <span >000  800  100  9538</span>
        <TiMessage className="text-3xl"/>
        <CiShoppingCart className="text-3xl"/>
        <CiUser className="text-3xl"/>
      </span>
    </div>
  );
};

export default Header;
