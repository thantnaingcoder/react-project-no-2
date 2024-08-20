import React from 'react'
import Layout from './Layout'
import abt from "../images/about-img.jpg"
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>

          <div className='  mt-20 grid grid-cols-2'>
             <div>  <img src={abt}/></div>
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
  
  )
}

export default About