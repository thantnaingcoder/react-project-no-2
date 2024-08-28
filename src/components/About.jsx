import React, { useEffect, useRef } from 'react'
import Layout from './Layout'
import abt from "../images/about-img.jpg"
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
 
  gsap.registerPlugin(ScrollTrigger);

 

  const fadeInRef = useRef(null);

  useEffect(() => {
    // Create a fade-in animation triggered by scrolling
    gsap.fromTo(
      fadeInRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: fadeInRef.current,
          start: "top 80%", // Trigger when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
        duration: 2, // Duration of the fade-in effect
      }
    );
  }, []);
  return (
   <>
      
      
          <div ref={fadeInRef} className=' px-5 lg:px-20 lg:ms-60   md:mx-10  box from mt-16 md:mt-28 bg-transparent lg:mt-36 grid md:grid-cols-2'>
              

             <div className=' items-center  content-center  pr-5'>
                  <div className=' mb-5 font-bold flex text-2xl'> <p>About</p>  <p className=' text-main_color ms-5'>Hospital</p></div>

                  <p className='mb-3 text-gray-500 text-justify mt-3 sm:mt-3 md:mt-5 lg:mt-10 text-sm md:text-md lg:text-lg line-clamp-6'>  ဆေးရုံတည်ထောင်ခဲ့သည့် ၂၀၀၀ ခုနှစ်မှစ၍ “ နိုင်ငံတကာအဆင့်မှီ ကျန်းမာရေး စောင့်ရှောက်မှုဖြင့် လူနာများ၏ ယုံကြည်အားကိုးမှု ရရှိပြီး မြန်မာနိုင်ငံတွင် ရှေ့ ဆောင်နိုင်သော ပုဂ္ဂလိကဆေးရုံဖြစ်ရန်” ဟူသော ရည်မှန်းချက်ပန်းတိုင်ကို လျှောက်လှမ်းရင်း တဖက်တလမ်းမှနေ၍ မြန်မာနိုင်ငံပြည်သူလူထု၏ သာသနာရေး၊ ကျန်းမာရေး၊ ပညာရေး၊ လူမှုစားဝတ်နေရေးကဏ္ဍများ တွင် လူမှုအကျိုးပြုလုပ်ငန်းများ (CSR Activities) ဆောင်ရွက်ခဲ့ပါသည်။
               အာရှတော်ဝင်ဆေးရုံသည် လူမှုအကျိုးပြုလုပ်ငန်းများအား စဉ်ဆက်မပြတ် ဆောင်ရွက်လျှက်ရှိရာ ၂၀၁၃ ခုနှစ်တွင် United Nations Global Compact (UNGC) ၏ အဖွဲ့ဝင်အဖြစ် အသိအမှတ်ပြု လက်မှတ် ရရှိခဲ့ပါသည်။ .ယခုအခါတွင် အာရှတော်ဝင်ဆေးရုံ၏ လူမှုအကျိုးပြုလုပ်ငန်းများနှင့် ပတ်သက်သည့် ဆောင်ရွက်ချက်များအား (UNGC) သို့ နှစ်စဉ် စာတမ်းရေးသားပြုစုပေးပို့လျှက်ရှိပြီး CSR Activities များ ဆောင်ရွက်ရာတွင်
             လည်း (UNGC) ၏ Criteria များဖြစ်သည့် Human Rights Principle, Labor Principle, Environmental Principle, Anti-corruption Principle များအတိုင်း လေးစားလိုက်နာ ဆောင်ရွက်လျှက်ရှိပါသည်။</p>

                  <Button
                    className=" bg-[#0C0C0C] px-3 md:px-10 mt-2 lg:mt-5 text-white"
                    variant="outline"
                  >
                    Read More
                  </Button>
             </div>

             <img className=' max-w-[400px] container md:pt-5 mx-auto items-center content-center  mt-10    ' src={abt}/>


             



          </div>

     
    
   </>
  
  )
}

export default About