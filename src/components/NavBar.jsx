"use client";
import React from "react";

import { Navbar } from "flowbite-react";
import {  useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { RiUserAddFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const NavBar = () => {
  
  return (

    <Navbar className=" container p-0 m-0"  >
  
    <Navbar.Collapse className="  mx-auto  " >
    <div className=" container gap-5 flex    items-center      text-sm md:text-md  py-3">

      
      <div className=" flex items-center content-center gap-2">
      <IoCall size={21} className="  text-main_color" />
        <p>Call : +01 50101235</p>
      </div>

      <div className="  flex content-center items-center gap-2">
      <MdEmail size={21} className="  text-main_color" />
        <p>Email : Mico-Myanmar@gmail.com</p>
      </div>

      <div className="hidden lg:flex items-center content-center gap-2">
      <FaLocationDot size={21} className="  text-main_color" />
        <p>Location</p>
      </div>
   
     
        <Navbar.Link > <div className=" flex items-center gap-1 "><FaUserLarge className=" text-main_color"  size={19} /><p className=" ">LOGIN</p></div></Navbar.Link>
        <Navbar.Link ><div className=" flex items-center gap-1"> <RiUserAddFill className=" text-main_color" size={21}></RiUserAddFill><p>REGISTER</p></div></Navbar.Link>
   
    </div>

    </Navbar.Collapse>


</Navbar>
  );
};

export default NavBar;
