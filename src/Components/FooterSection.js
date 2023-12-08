import React from 'react'
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { LiaCcDinersClub } from "react-icons/lia";
import { CiBank } from "react-icons/ci";
import { SiPaytm } from "react-icons/si";
import { CgPaypal } from "react-icons/cg";
import { FaCcJcb } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <div className='flex bg-black text-white justify-between items-center'>
      <ul className='flex gap-4 text-xs items-center mx-4'>
        <li>India</li>
        <li>@ 2023 NIKE. Inc</li>
        <li>All Rights reserved</li>
        <li>Terms of Use</li>
        <li>Terms of Sale</li>
        <li>Privacy Policy</li>
      </ul>

      <div className='flex gap-4 justify-evenly mx-4'>
        <FaCcVisa className='text-3xl'/>
        <LiaCcDinersClub className='text-3xl'/>
        <FaCcMastercard className='text-3xl'/>
        <SiAmericanexpress className='text-3xl'/>
        <CiBank className='text-3xl'/>
        <SiPaytm className='text-3xl'/>
        <CgPaypal className='text-3xl'/>
        <FaCcJcb className='text-3xl'/>

      </div>
    </div>
  )
}

export default FooterSection