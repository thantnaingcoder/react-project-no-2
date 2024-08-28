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
    
      <div className=" container   p-10 shadow-2xl md:mt-24">
        <div className=" flex gap-4 font-semibold py-5">
          <button onClick={() => setShow(false) } className={` ${show ? " text-main_color " : "border-b-main_color border-b-2"} `}>BOOK</button>
          <button onClick={() => setShow(true) } className={` ${show ? "border-b-main_color border-b-2 " : " text-main_color"} `}>APPOINTMENT</button>
        </div>

        <form className={` ${ show && "hidden"}  grid  md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5`}>

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

          {/* <TextField
            id="outlined-select-currency"
            select
            label="Doctor's Name"
            defaultValue="EUR"
            // helperText="Please select your currency"
          >
            {doctor.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> */}

          {/* <Select>
  <SelectTrigger className="">
    <SelectValue placeholder="Doctor's Name" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem select value="Jennie">Jennie</SelectItem>
    <SelectItem value="Marco">Marco</SelectItem>
    <SelectItem value="Dave">Dave</SelectItem>
    <SelectItem value="Hla Moe">Hla Moe</SelectItem>
    
  </SelectContent>
</Select> */}


          {/* <TextField
            id="outlined-select-currency"
            select
            label="Department's Name"
            defaultValue="EUR"
            // helperText="Please select your currency"
          >

            {department.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> */}

         

        

       <Textarea label="Symptoms" placeholder="Symptoms" />



            <Button type="submit"
                    className=" bg-[#0C0C0C] md:w-1/2 px-10 mt-5 text-white"
                    variant="outline"
                  >
                    SUBMIT NOW
                  </Button>
        </form>

       { show && <Appointment/> }

       
      </div>
    
  );
};

export default BookingForm;
