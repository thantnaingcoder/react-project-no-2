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
       <div className=" bg-dot-image bg-no-repeat  bg-right-bottom bg-inherit bg-20 ">
      <Carousel
       opts={{
        align: "start",
        loop: true,
      }}
        className="max-w-full mx-auto  container border-b-2 shadow-lg     "
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
         <Layout>
        <CarouselContent className=" mt-5 ">

          <CarouselItem>
            
            <div className=" mt-16 bg-transparent grid grid-cols-2 py-5">
              <div className=" mt-24 ">
                <Lottie
                  loop={true}
                  autoplay={true}
                  className="w-24"
                  animationData={animationData}
                />

                <div className=" p-3">
                  <h4 className=" text-6xl font-bold">MICO</h4>
                  <h4 className=" text-6xl font-bold text-main_color">
                    HOSPITAL
                  </h4>

                  <p className=" text-gray-500 mt-10">
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of
                    letters, as opposed to
                  </p>

                  <Button
                    className=" bg-[#0C0C0C] px-10 mt-5 text-white"
                    variant="outline"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>

              <div>
                <img className="  " src={Slide} />
              </div>
            </div>
          </CarouselItem>



          <CarouselItem>
             <About/>
          </CarouselItem>



        </CarouselContent>
        <div className=" flex justify-end gap-5 -mb-6">
           <CarouselPrevious />
        <CarouselNext />
        </div>
       
        </Layout>
      </Carousel>
      </div>
    
  );
};

export default Slider;
