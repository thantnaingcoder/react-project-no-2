import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Layout from "./Layout";
import { useLocation } from "react-router-dom";

export function Testimonial() {

    const Location=useLocation()
   
    
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
      );
  const text = [
    {
      name: "David",
      type: "Default modek text",
      body: "Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
      name: "Leo",
      type: "Default modek text",
      body: "editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
    },
    {
      name: "Morijorch",
      type: "Default modek text",
      body: "editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
    },
  ];

  return (
    <Layout>
    <div className={` ${location.pathname=="/testimonial" ? "!mt-36 my-28" :  " mt-10" } p-5 space-y-10`}>

    
        <h2 className=" ms-10 text-main_color text-4xl font-bold">Testimonial</h2>
    <Carousel
      opts={{
        align: "start",
        loop: true,
        
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      className=" container max-w-full "
    >
      <div className=" flex items-center content-center gap-3">
        <CarouselPrevious className=" w-96 " />
        <CarouselContent className="-ml-1">


          {text.map((t,index) =>
            
            <CarouselItem key={index} className="pl-1 select-none  ">
            <Card className=" ">
              <CardContent className=" flex flex-col pt-5 ">
                <p className=" text-main_color font-bold text-lg"> {t.name} </p>
                <p className=" mb-5 text-gray-300 font-semibold ">{t.type}</p>
                <p className=" text-gray-700 font-sans text-justify">{t.body}</p>
              </CardContent>
            </Card>
          </CarouselItem> )}

      


        </CarouselContent>
        <CarouselNext className=" w-96 " />
      </div>
    </Carousel>
    </div>
    </Layout>
  );
}
