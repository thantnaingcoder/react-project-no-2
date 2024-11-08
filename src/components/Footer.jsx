import React from "react";
import Layout from "./Layout";
import logo from "../images/logo.png";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { Input } from "@/components/ui/input"

import p1 from "../images/post1.jpg"
import p2 from "../images/post2.jpg"
import p3 from "../images/post3.jpg"
import p4 from "../images/post4.png"


import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-[#252525] z-50   ">
      
       


          <div className="   md:w-3/4 mx-auto   flex items-center gap-4 lg:gap-10">
            <img className=" size-14 md:size-20 p-2 lg:px-5 lg:py-3 bg-white" src={logo} />

            <div className="   flex w-full items-center content-center  ">
             <input className=" w-full   bg-[#252525] border-white border-b-2 focus:outline-none text-white "/>

              <button
                onClick={() => alert("hi")}
                className="-ms-20 text-main_color text-sm md:text-md   "
              >
                SUBSCRIBE
              </button>
            </div>
          </div>


         {/* -------------------------- footer session ---------------------                         */}


          <div className="  md:w-3/4 mx-auto  mt-5 lg:mt-20 grid grid-cols-2 lg:grid-cols-4  gap-3 lg:gap-3 ">

            <div className="  p-3 space-y-2 md:space-y-5 text-gray-400">
              <div className=" flex gap-2 md:gap-2 md:mb-5">
                <p className=" p-3 bg-main_color"></p> <p className=" text-md md:text-md lg:text-lg">ADDRESS</p>
              </div>

              <div className=" ms-1 space-y-3">
              <div className=" flex items-center gap-2 lg:gap-4">
              <FaLocationDot />
              <p className=" text-sm md:text-md">Location</p>
              </div>

              <div className=" flex items-center gap-2 lg:gap-4">
              <FaPhoneAlt />
              <p className=" text-sm md:text-md">Call +01 5012345</p>
              </div>
               
              <div className="  flex items-center gap-2 lg:gap-4">
              <MdEmail />
              <p className=" text-sm md:text-md"> Meco-d@gmail.com </p>
              </div>

              <div className=" text-main_color flex gap-2 md:gap-5">
              <FaFacebookF size={20} />
              <FaTwitter size={20}  />
              <FaLinkedinIn size={20}  />
              <SiInstagram size={20} />
              </div>
              </div>
              
            </div>


            <div className=" p-3 flex flex-col space-y-1 text-gray-400 ">
              <div className=" flex gap-2 lg:gap-2 lg:mb-5">
                <p className=" p-3 bg-main_color "></p> <p className=" text-md md:text-md lg:text-lg">Useful link</p>
              </div>

              
             <div className=" ms-8 space-y-1">
             <p className=" text-sm md:text-md">Home</p>
              <p className=" text-sm md:text-md">About</p>
              <p className=" text-sm md:text-md"> Treatment</p>
              <p className=" text-sm md:text-md"> Doctors</p>
              <p className=" text-sm md:text-md"> Testimonial</p>
              <p className=" text-sm md:text-md"> Contact Us</p>
             </div>
            
            </div>


            <div className=" p-3 flex flex-col space-y-1 text-gray-400">
              <div className=" flex gap-2 mb-5">
                <p className=" p-3 bg-main_color "></p> <p className="  text-md md:text-md lg:text-lg">LATEST POSTS</p>
              </div>

              <div className=" flex gap-3 items-center">
                <img className=" min-w-16 max-w-20" src={p1}/> <p className=" text-sm md:text-md">Normal distribution</p>
              </div>

              <div className=" flex gap-3 items-center">
                <img className="  min-w-16 max-w-20" src={p2}/> <p className=" text-sm md:text-md">Normal distribution</p>
              </div>
            </div>


            <div className=" p-3 flex flex-col space-y-1 text-gray-400">
              <div className=" flex gap-2 mb-5">
                <p className=" p-3 bg-main_color"></p> <p className=" text-sm md:text-md">LATEST POSTS</p>
              </div>

              <div className=" flex gap-3 items-center">
                <img className="  min-w-16 max-w-20  " src={p1}/> <p className=" text-sm md:text-md">Normal distribution</p>
              </div>

              <div className=" flex gap-3 items-center">
                <img className="  min-w-16 max-w-20" src={p2}/> <p className=" text-sm md:text-md">Normal distribution</p>
              </div>
            </div>





          </div>



          <p className="  text-center text-sm md:text-md lg:text-lg py-5 md:py-8 lg:py-20 text-gray-400">© 2024 All Rights Reserved By Free Html Templates</p>








       
      
    </div>
  );
};

export default Footer;
