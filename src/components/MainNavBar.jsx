import React from "react";
import logo from "../images/logo.png";

const MainNavBar = () => {
  return (
    <div className="  flex  justify-between bg-main_color font-semibold text-md text-white  px-6 ">
      <div className=" flex items-center gap-6  ">
        <div className=" "><img className=" bg-white py-2 px-6 size-24  " src={logo}></img></div>
        <div   >HOME</div>
        <div>ABOUT</div>
        <div>TREATMENT</div>
        <div>DOCTORS</div>
        <div>TESTIMONIAL</div>
        <div>CONTACT US</div>
      </div>

      <div className=" flex items-center gap-3">
        <div className=" flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-5 "
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          <p>LOGIN</p>
        </div>

        <div className=" flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          <p>SIGN UP</p>
        </div>
      </div>

    </div>
  );
};

export default MainNavBar;
