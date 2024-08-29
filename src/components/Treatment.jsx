import React, { useEffect, useRef } from 'react'
import Layout from './Layout'
import t1 from "../images/t1.png"
import t2 from "../images/t2.png"
import t3 from "../images/t3.png"
import t4 from "../images/t4.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tSlide from "../images/treatment-side-img.jpg"
import Footer from './Footer'

const Treatment = () => {

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
          toggleActions: "play none none none", // Play on enter, reverse on leave
        },
        duration: 2, // Duration of the fade-in effect
      }
    );
  }, []);
  return (
    <div ref={fadeInRef} className=' lg:w-3/4 mx-auto mb-10 mt-10 lg:mt-32  container bg-16 bg-right-bottom md:bg-custom-image bg-no-repeat  '>
      
        <div className='  py-5 md:py-10 md:space-y-10 lg:space-y-20'>
         <h2 className='  flex justify-center gap-2 mb-5 font-bold text-2xl lg:text-4xl '><p>Hospital</p> <p className=' text-main_color'>SERVICE</p></h2>

         <div className='  grid grid-cols-2 lg:grid-cols-4 gap-5'>
             <div className=" space-y-4 "> 
                <img src={t1}/>
                <p className=' font-bold text-lg  md:text-xl'>Dental Clinic </p>

                <p className=' text-sm md:text-md lg:text-lg line-clamp-6 text-justify'>သွားနှင့် ခံတွင်းစစ်ဆေးစမ်းသပ်မှုများအတွက် Dental Imaging service ကိုနံနက်(၉)နာရီမှည(၈)နာရီအထိ(နေ့စဉ်ပိတ်ရက်မရှိ)ကျွမ်းကျင်သောပညာရှင်များစမ်းသပ်ရိုက်ကူးပေးလျက်ရှိပါသည်။ထို့အပြင်သွားနှင့်ခံတွင်းအထူးကုဆရာဝန်ကြီးများမှSpecialist directoryပါအချိန်များအတိုင်းနေ့စဉ် ကုသမှုပေးလျက်ရှိပါသည်။</p>

                <p className=' text-main_color'>READ MORE</p>

             </div>

             <div className=" space-y-4 "> 
                <img src={t2}/>
                <p className=' font-bold text-lg  md:text-xl'>Inpatient Care</p>

                <p className=' text-sm md:text-md line-clamp-6 lg:text-lg'>အဆင့်မြင့်အတွင်းလူနာခန်းများတွင်စောင့်ကြပ်ကြည့်ရှုမှု (Inpatient Care)

                သက်ဆိုင်ရာ Ward များတွင် ကျန်းမာရေးစောင့်ရှောက်မှုအား Medical Officer ဦးဆောင်သော Team မှ
                (24)hrs ကျန်းမာရေးဝန်ဆောင်မှုပေးလျက်ရှိပါသည်။။</p>

                <p className=' text-main_color'>READ MORE</p>

             </div>

             <div className=" space-y-4 "> 
                <img src={t3}/>
                <p className=' font-bold text-lg  md:text-xl'>4D Ultrasound </p>

                <p className=' text-sm md:text-md lg:text-lg line-clamp-6 text-justify'>လှုပ်ရှားနေသောရင်သွေးငယ်၏ပုံရိပ်ကိုရုပ်ရှင်ကြည့်သကဲ့သို့ မြင်တွေ့ခံစားနိုင်ရန်၊ အလုံးအကျိတ်၊ အရည် အိတ်တည်ခြင်းများတိကျစွာရှာဖွေတိုင်းတာနိုင်ရန်နှင့် တိုက်ရိုက်ကြည့်ရှု၍ အသားစ (biopsy) ယူခြင်းများကိုတိကျသေချာစွာလုပ်ဆောင်နိုင်ရန် ကြိုတင်ရက်ချိန်းရယူကာ ဝန်ဆောင်မှုပေးလျက်ရှိပါသည်။</p>

                <p className=' text-main_color'>READ MORE</p>

             </div>

             <div className=" space-y-4 "> 
                <img src={t4}/>
                <p className=' font-bold text-lg  md:text-xl'>Medical Check </p>

                <p className=' text-sm md:text-md lg:text-lg line-clamp-6 text-justify  '>မိမိကိုယ်တိုင်နှင့် မိသားစုဝင် ဆွေမျိုးများ၏ ကျန်းမာရေးနှင့် ပတ်သက်သောအခြေအနေတစ်ရပ်ရပ်ကိုသိရှိလိုလျှင်လည်းကောင်း၊ ကူးစက်ရောဂါများနှင့်ပတ်သက်၍ကျန်းမာရေးအခြေအနေကို သိရှိလိုလျှင်လည်းကောင်း၊ပုံမှန်အားဖြင့် အနည်းဆုံးတစ်နှစ်တစ်ကြိမ် ကျန်းမာရေးစစ်ဆေးမှုများ ပြုလုပ်သင့်ပါသည်။ </p>

                <p className=' text-main_color'>READ MORE</p>

             </div>

             


         </div>



         </div>


      

      </div>
      
  )
}

export default Treatment