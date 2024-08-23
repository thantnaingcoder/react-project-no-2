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
    <Layout>

          <div ref={fadeInRef} className=' box from  mt-36 grid grid-cols-2'>
             <div className=' from '>  <img src={abt}/></div>
             <div className=' items-center content-center space-y-10 pr-5'>
                  <div className=' font-bold flex text-2xl'> <p>About</p>  <p className=' text-main_color ms-5'>Hospital</p></div>

                  <p className=' text-lg text-justify text-gray-500'> has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</p>

                  <Button
                    className=" bg-[#0C0C0C] px-10 mt-5 text-white"
                    variant="outline"
                  >
                    Read More
                  </Button>
             </div>


             



          </div>
    </Layout>
   </>
  
  )
}

export default About