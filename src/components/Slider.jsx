import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Slide from "../images/slider-img.jpg";
import Test1 from "../images/post4.png";

import Lottie from "lottie-react";
import animationData from "./../images/animate.json";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Layout from "./Layout";
import About from "./About";

const Slider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <>
    
       <div className="  bg-dot-image bg-no-repeat  bg-right-top  bg-20 ">

      <Carousel
       opts={{
        align: "start",
        loop: true,
      }}
        className="max-w-full bg-transparent   border-b-2 shadow-lg      "
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
         
        <CarouselContent >

          <CarouselItem >
            
            <div className=" container mt-7 md:mt-16 bg-transparent grid md:grid-cols-2 py-2 md:py-5">

              <div className="  md:mt-5 lg:mt-20 md:p-10 pt-2   ">
                <Lottie
                  loop={true}
                  autoplay={true}
                  className="w-16 mt-5    md:w-24 ms-0  "
                  animationData={animationData}
                />

                <div className=" ">
                  <h4 className="  text-4xl sm:text-6xl mb-3 md:text-6xl lg:text-6xl font-bold">MICO</h4>
                  <h4 className=" text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-bold text-main_color">
                    HOSPITAL
                  </h4>

                  <p className=" text-justify text-gray-500 mt-3 sm:mt-3 md:mt-5 lg:mt-10 text-sm md:text-md lg:text-lg">
                  We are providing multidisciplinary medical care service with modern medical equipments.
                  We're here to help you lead an active, healthy life.
                  </p>

                  <Button
                    className=" bg-main_color px-2 md:px-10 mt-5 sm:mt-5  md:mt-5 text-white"
                    variant="outline"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>

              <div>
                <img className=" max-w-[500px] container md:pt-5 mx-auto items-center content-center   bg-cover m-0 md:m-5 " src={Slide} />
              </div>
            </div>
          </CarouselItem>



          <CarouselItem className=" "  >
             <About/>
          </CarouselItem>



        </CarouselContent>
        <div className=" me-5 lg:me-20 flex justify-end gap-4 -mb-7">
           <CarouselPrevious  />
        <CarouselNext />
        </div>
       
       
      </Carousel>
      </div>


      </>
    
  );
};

export default Slider;
