import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Layout from "./Layout";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@/components/ui/button";

const BookingForm = () => {
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
    <Layout>
      <div className=" p-10 shadow-2xl mt-24">
        <div className=" flex gap-4 font-semibold py-5">
          <p className=" border-b-main_color border-b-2">BOOK</p>{" "}
          <p className=" text-main_color">APPOINTMENT</p>{" "}
        </div>

        <form className=" grid grid-cols-3 gap-5">
          <TextField
            id="outlined-basic"
            className=" "
            label="Name"
            placeholder="enter your name"
            variant="outlined"
          />

<TextField  type="email"
            id="outlined-basic"
            className=" "
            label="Email"
            placeholder="enter your Email"
            variant="outlined"
          />

<TextField  type="password"
            id="outlined-basic"
            className=" "
            label="Phone Number"
            placeholder="enter your password"
            variant="outlined"
          />

          <TextField
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
          </TextField>

          <TextField
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
          </TextField>

         

<TextField
            id="outlined-basic"
            className=" "
            label="Symptoms"
            placeholder=""
            variant="outlined"
          />

<Button
                    className=" bg-[#0C0C0C] w-1/2 px-10 mt-5 text-white"
                    variant="outline"
                  >
                    SUBMIT NOW
                  </Button>
        </form>
      </div>
    </Layout>
  );
};

export default BookingForm;
