import React from 'react'
import Layout from './Layout'
import t1 from "../images/t1.png"
import t2 from "../images/t2.png"
import t3 from "../images/t3.png"
import t4 from "../images/t4.png"
import tSlide from "../images/treatment-side-img.jpg"

const Treatment = () => {
  return (
    <div className=' mt-32 max-w-full container bg-16 bg-right bg-custom-image bg-no-repeat  '>
      <Layout>
        <div className=' py-10 space-y-20'>
         <h2 className='  flex justify-center gap-2 font-bold text-4xl '><p>Hospital</p> <p className=' text-main_color'>Treatment</p></h2>

         <div className='  grid grid-cols-4 gap-5'>
             <div className=" space-y-4 "> 
                <img src={t1}/>
                <p className=' font-bold text-2xl'>Nephrologist Care</p>

                <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>

                <p className=' text-main_color'>READ MORE</p>

             </div>

             <div className=" space-y-4 "> 
                <img src={t2}/>
                <p className=' font-bold text-2xl'>Eye Care</p>

                <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>

                <p className=' text-main_color'>READ MORE</p>

             </div>

             <div className=" space-y-4 "> 
                <img src={t3}/>
                <p className=' font-bold text-2xl'>Pediatrician Clinic</p>

                <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>

                <p className=' text-main_color'>READ MORE</p>

             </div>

             <div className=" space-y-4 "> 
                <img src={t4}/>
                <p className=' font-bold text-2xl'>Parental Care</p>

                <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>

                <p className=' text-main_color'>READ MORE</p>

             </div>

             


         </div>



         </div>


      </Layout>

      
      </div>
  )
}

export default Treatment