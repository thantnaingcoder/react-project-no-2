import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dr1 from "../images/team1.jpg";
import dr2 from "../images/team2.jpg";
import dr3 from "../images/team3.jpg";
import DoctorsCard from "./DoctorsCard";

export function CarouselSpacing() {
  const doctors = [
    {
      name: "Hennry",
      photo: dr1,
    },
    {
      name: "Jenni",
      photo: dr2,
    },
    {
      name: "Morco",
      photo: dr3,
    },
    {
      name: "David",
      photo:
        "https://img.freepik.com/premium-photo/portrait-male-medical-doctor-around-40-years-old_1000823-15799.jpg",
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className=" container max-w-full bg-main_color p-20 ">
      <h2 className=" mb-5 font-bold text-4xl flex justify-center gap-3">
        <p>OUR</p> <p className=" text-white">DOCTORS</p>
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
        className=" p-5 "
      >
        <div className=" flex gap-4 justify-center items-center container max-w-full">
          <CarouselPrevious className=" w-28 bg-white text-black" />
          <CarouselContent className="-ml-1">
            {doctors.map((dr, index) => (
              <DoctorsCard name={dr.name} photo={dr.photo} key={index} />
            ))}
          </CarouselContent>
          <CarouselNext className=" w-28 bg-white text-black" />
        </div>
      </Carousel>
    </div>
  );
}
