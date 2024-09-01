import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Layout from "./Layout";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import Appointment from "./Appointment";

const BookingForm = () => {

  const [show,setShow] = useState(false);
  const doctor = [
    {
      value: "USD",
      label: "",
    },
    {
      value: "EUR",
      label: "Jenni",
    },
    {
      value: "BTC",
      label: "Morco",
    },
    {
      value: "JPY",
      label: "Hla Moe",
    },
  ];

  const  department = [
    {
      value: "USD",
      label: "အသည်းအထူးကု",
    },
    {
      value: "EUR",
      label: "နှလုံးအထူးကု",
    },
    {
      value: "BTC",
      label: "မျက်စိအထူးကု",
    },
    {
      value: "JPY",
      label: "အာရုံကြောအထူးကု",
    },
  ];
  return (
    
      <div className=" lg:container  py-5  lg:p-10 shadow-2xl md:mt-24">
        <div className=" ms-5 flex gap-4 font-semibold py-5">
          <button onClick={() => setShow(false) } className={` ${show ? " text-main_color " : "border-b-main_color border-b-2"} `}>BOOK</button>
          <button onClick={() => setShow(true) } className={` ${show ? "border-b-main_color border-b-2 " : " text-main_color"} `}>APPOINTMENT</button>
        </div>

        <form className={` ${ show && "hidden"} p-5  grid  md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5`}>

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

       <Textarea label="Date/Time" placeholder="insert date and time (eg. 20.11.24/11pm)" />



            <Button type="submit"
                    className=" bg-main_color md:w-1/2 px-10 mt-5 text-white"
                    variant="outline"
                  >
                    BOOK NOW
                  </Button>
        </form>

       { show && <Appointment/> }

       
      </div>
    
  );
};

export default BookingForm;
