import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Textarea } from "@/components/ui/textarea";
import contactImg from "../images/contact-img.jpg"

import MenuItem from "@mui/material/MenuItem";
import { Button } from "@/components/ui/button";
import Layout from "./Layout";

const Touch = () => {
  return (
    
      <div className= { ` lg:w-3/4 mx-auto    ${location.pathname=="/contact"&& "mt-5 lg:mt-36"} px-3  py-10`}>
        <h2 className=" ms-10 mb-5 font-bold text-2xl md:text-4xl">Get In Touch</h2>

        <div className=" container max-w-full content-center mx-auto  grid md:grid-cols-2 lg:gap-10">
          <form className=" sm:px-10 lg:px-20 flex flex-col lg:p-3 gap-3 lg:gap-6">
            <TextField 
              id="outlined-basic"
              className="  "
              label="Name"
              placeholder="enter your name"
              variant="outlined"
            />

            <TextField
              type="email"
              id="outlined-basic"
              className=" "
              label="Email"
              placeholder="enter your Email"
              variant="outlined"
            />

            <TextField
              type="password"
              id="outlined-basic"
              className=" "
              label="Phone Number"
              placeholder="enter your password"
              variant="outlined"
            />

            <Textarea  placeholder="Type your message here." />

            <Button
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
