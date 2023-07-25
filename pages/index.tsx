import axios from "axios"
import {useState,useEffect} from 'react'
import Image from "next/image"

export default function Home(){
        
        return(
           <div className="w-full relative flex justify-center items-center h-screen bg-[#2B2D42]">
               <img className="fixed top-0 left-0" src={'/Group658.png'}></img>
               <img className="fixed bottom-0 right-0" src={'/Group659.png'}></img>
               <div className=" flex justify-center items-center z-10 w-full h-[80%] mb-10">
                     <div className="h-[90%] relative flex max-w-[70%]">
                        <div className="absolute h-[100%] aspect-bannerImage">
                                     <img className='w-full h-full' alt='bannerImg' src={'/Rectangle584.png'}></img>
                        </div>
                        <div className="z-20 flex flex-col justify-center">
                        <div className="text-[68px] ml-[150px] left-0 leading-[76px] font-bold text-white">Turn Your Website Into Your Best Sales Person</div>
                        <div className="w-full flex flex-col items-end">
                           <div className="max-w-[65%] text-white mt-[20px] text-[22px]">Triple your sales with a pixel-perfect website.
                           At SmartSite Studio, we don’t just design and write code, we build a revenue-driving machine for your business.
                           <div className="flex mt-[20px]">
                              <div className="w-[200px] h-[60px]  rounded-[30px] mx-[10px] flex justify-center items-center size-[16px] font-bold bg-[#FF632C] text-white">Talk to us</div>
                              <div className="w-[200px] h-[60px]  rounded-[30px] mx-[10px] border-[1px] border-[#0083FE] flex size-[16px] font-bold justify-center items-center text-white">See Porfolio</div>
                           </div>
                           </div>
                           
                        </div>
                        </div>
                     </div>
               </div>
           </div>
        )
}