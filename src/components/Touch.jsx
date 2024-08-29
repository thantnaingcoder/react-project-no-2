import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Textarea } from "@/components/ui/textarea";
import contactImg from "../images/contact-img.jpg"
import { Input } from "@/components/ui/input"

import MenuItem from "@mui/material/MenuItem";
import { Button } from "@/components/ui/button";
import Layout from "./Layout";

const Touch = () => {
  return (
    
      <div className= { ` lg:w-3/4 mx-auto    ${location.pathname=="/contact"&& "mt-5 lg:mt-36"} px-3  py-10`}>
        <h2 className=" ms-10 mb-5 font-bold text-2xl md:text-4xl">Get In Touch</h2>

        <div className=" container max-w-full content-center mx-auto  grid md:grid-cols-2 lg:gap-10">
          <form className=" sm:px-10 lg:px-20 flex flex-col lg:p-3 gap-3 lg:gap-6">
            
          <div>
       {/* <Label htmlFor="name">Name</Label> */}
       <Input type="text" id="text" placeholder="Name" />
       </div>
 
       <div>
       {/* <Label htmlFor="email">Email</Label> */}
       <Input type="email" id="email" placeholder="Email" />
       </div>

       <div>
       {/* <Label htmlFor="email">Phone</Label> */}
       <Input type="number" id="phone" placeholder="Phone" />
       </div>
            <Textarea  placeholder="Type your message here." />

            <Button type="button"
                    className=" bg-main_color lg:w-1/2 px-10 mt-5 text-white"
                    variant="outline"
                  >
                    SUBMIT NOW
                  </Button>
          </form>

          <img className=" mx-auto" src={contactImg}/>


        </div>
      </div>
    
  );
};

export default Touch;
