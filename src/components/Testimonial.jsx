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
      name: "Medical Check-up လုပ်မည်ဆိုလျှင် ဘယ်ကိုဆက်သွယ်ရပါမလဲ ?",
      type: "Default modek text",
      body: "Medical Check-up လုပ်မည်ဆိုလျှင် အသက်အရွယ်အလိုက် Program များရှိပါသည်။ ရာသီအလိုက် Package Promotion တွေလဲရှိလို့ အသေးစိတ်စုံစမ်းမေးမြန်းလိုပါက 09 သို့ဆက်သွယ်၍ရပါသည် ",
    },
    {
      name: "Patient အရေးကြီး၊ အရေးပေါ်ဖြစ်နေပါက ဘယ်ဆရာဝန်နှင့် ပြလို့ရပါသလဲ ?",
      type: "Default modek text",
      body: "Patient ရောဂါအခြေအနေမေးပြီး EMO နှင့်ပြသရန် EMERGENCY သို့ လာရောက်ဆွေးနွေးသင့်ပါသည် ဆေးရုံတက်မည်ဆိုလျှင် အခန်း Booking ယူရန်မလိုပါ။ဆရာဝန်ကြီးများ၏စမ်းသပ်ခသည် တစ်ဦးနှင့်တစ်ဦးယူသည့်နှုန်းတူညီမှုမရှိပါ။ ",
    },
    {
      name: "ဆေးခန်းပြလျှင်ဖြစ်စေ၊ ဆေးရုံတက်လျှင်ဖြစ်စေ Insurance သုံးလို့ရပါသလား ?",
      type: "Default modek text",
      body: "အာရှတော်ဝင်ဆေးရုံနှင့် ချိတ်ဆက်ထားသော Company များ၏လူနာများအားသက်ဆိုင်ရာ Insurance Company မှ ချမှတ်ပြဌာန်းထားသောအချက်အလက်များနှင့်အညီ ဝန်ဆောင်မှုပေးလျက်ရှိပါ သည်။",
    },
  ];

  return (
    
    <div className={`  lg:w-3/4 mx-auto  ${location.pathname=="/testimonial" ? " !mt-16 lg:!mt-36 my-28" :  " mt-10" } lg:p-5 lg:space-y-10`}>

    
        <h2 className=" ms-10 lg:ms-20 text-main_color font-bold flex text-2xl ">FAQ</h2>
    <Carousel
      opts={{
        align: "start",
        loop: true,
        
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      className=" p-1 "
    >
      <div className=" flex items-center content-center gap-3">
        <CarouselPrevious className=" lg:w-96 " />
        <CarouselContent className="-ml-1">


          {text.map((t,index) =>
            
            <CarouselItem key={index} className="pl-1 select-none   ">
            <Card className=" lg:p-20 ">
              <CardContent className=" flex flex-col pt-5 space-y-5 ">
                <p className=" text-main_color font-bold text-md lg:text-lg"> {t.name} </p>
                {/* <p className=" mb-5 text-md text-gray-300 font-semibold ">{t.type}</p> */}
                <p className=" text-gray-600 text-sm font-sans text-justify">{t.body}</p>
              </CardContent>
            </Card>
          </CarouselItem> )}

      


        </CarouselContent>
        <CarouselNext className=" lg:w-96 " />
      </div>
    </Carousel>
    </div>
  
  );
}
