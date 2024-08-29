
"use client";
import React from "react";

import { Navbar } from "flowbite-react";
import logo from "../images/logo.png";
import {  useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { RiUserAddFill } from "react-icons/ri";


const MainNavBar = () => {
  const nav= useNavigate();
  
  return (<>


<Navbar className=" bg-main_color p-0 m-0  "  >
      <Navbar.Brand className=" m-0 p-0" >
      <img className="  bg-white py-1 md:py-2 md:px-6 p-2 size-14 md:size-24  " src={logo}></img>
      
      </Navbar.Brand>
      <Navbar.Toggle className="" />


      <Navbar.Collapse >

        <Navbar.Link onClick={() => nav("/")}  >
        HOME
        </Navbar.Link>
        <Navbar.Link onClick={() => nav("/about")}  >
          ABOUT
        </Navbar.Link>
        <Navbar.Link onClick={() => nav("/treatment")} >SERVICE</Navbar.Link>
        <Navbar.Link onClick={() => nav("/doctor")} >DOCTORS</Navbar.Link>
        <Navbar.Link onClick={() => nav("/testimonial")} >FAQ</Navbar.Link>
        <Navbar.Link onClick={() => nav("/contact")}>CONTACT US</Navbar.Link>
        {/* <Navbar.Link > <div className=" flex gap-2"><FaUserLarge color="white" size={19} /><p>LOGIN</p></div></Navbar.Link>
        <Navbar.Link ><div className=" flex gap-2"> <RiUserAddFill color="white" size={21}></RiUserAddFill><p>REGISTER</p></div></Navbar.Link> */}
      </Navbar.Collapse>


    </Navbar>

    </>
  );
};

export default MainNavBar;
