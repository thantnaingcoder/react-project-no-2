import React from "react";
import Layout from "./Layout";
import logo from "../images/logo.png";
import { Input } from "@/components/ui/input";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

import p1 from "../images/post1.jpg"
import p2 from "../images/post2.jpg"
import p3 from "../images/post3.jpg"
import p4 from "../images/post4.png"


import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-[#252525]">
      <Layout>
        <div className=" container ">
          <div className="  container flex items-center gap-10">
            <img className=" px-5 py-3 bg-white" src={logo} />

            <div className=" container  flex max-w-full ">
              <Input
                className=" bg-[#252525] placeholder:gray-500 border-white w-full mb-3"
                placeholder="Your email"
              />

              <button
                onClick={() => alert("hi")}
                className="-ms-20 text-main_color"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>


         {/* -------------------------- footer session ---------------------                         */}


          <div className=" container max-w-full mt-20 grid grid-cols-4 gap-3 text-white">

            <div className=" space-y-5">
              <div className=" flex gap-2 mb-5">
                <p className=" p-3 bg-main_color"></p> <p>ADDRESS</p>
              </div>

              <div className=" flex items-center gap-4">
              <FaLocationDot />
              <p>Location</p>
              </div>

              <div className=" flex items-center gap-4">
              <FaPhoneAlt />
              <p>Call +01 5012345</p>
              </div>
               
              <div className=" flex items-center gap-4">
              <MdEmail />
              <p> Meco-myanmar@gmail.com </p>
              </div>

              <div className=" text-main_color flex gap-5">
              <FaFacebookF size={20} />
              <FaTwitter size={20}  />
              <FaLinkedinIn size={20}  />
              <SiInstagram size={20} />
              </div>
              
            </div>


            <div className=" flex flex-col space-y-1">
              <div className=" flex gap-2 mb-5">
                <p className=" p-3 bg-main_color"></p> <p>Useful link</p>
              </div>

              
              <p>Home</p>
              <p>About</p>
              <p> Treatment</p>
              <p> Doctors</p>
              <p> Testimonial</p>
              <p> Contact Us</p>
            
            </div>


            <div className=" flex flex-col space-y-1">
              <div className=" flex gap-2 mb-5">
                <p className=" p-3 bg-main_color"></p> <p>LATEST POSTS</p>
              </div>

              <div className=" flex gap-3 items-center">
                <img className=" w-24" src={p1}/> <p>Normal distribution</p>
              </div>

              <div className=" flex gap-3 items-center">
                <img className=" w-24" src={p2}/> <p>Normal distribution</p>
              </div>
            </div>


            <div className=" flex flex-col space-y-1">
              <div className=" flex gap-2 mb-5">
                <p className=" p-3 bg-main_color"></p> <p>LATEST POSTS</p>
              </div>

              <div className=" flex gap-3 items-center">
                <img className=" w-24 max-h-20 " src={p3}/> <p>Normal distribution</p>
              </div>

              <div className=" flex gap-3 items-center">
                <img className=" w-24" src={p4}/> <p>Normal distribution</p>
              </div>
            </div>





          </div>



          <p className=" text-white text-center py-20">© 2024 All Rights Reserved By Free Html Templates</p>








        </div>
      </Layout>
    </div>
  );
};

export default Footer;
