import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="bg-zinc-800 w-full h-screen border-2 text-red-100">
      <div className="textleft mt-52 px-10">
        {["We Deliver,", "Luxurious and Rare", "Supercars."].map((item, index) => (
          <div
            key={index}
            className="masker uppercase font-[Founders_Grotesk] font-semibold"
          >
            <h1 className="text-[8vw] leading-[6.5vw] text-black">
              {item}
            </h1>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-t-zinc-100 w-[90%] ml-21 mt-32 flex justify-between items-center">
        {["For personal uses" , "For commercial uses"].map((item,index) => {
            return <p className='text-xl text-pink-200  font-light tracking-tight leading-none uppercase'>{item}</p> //add font here later
})}



    <div className="start flex items-center gap-5">
         <div className="px-5 py-2 border-[1.5px] mt-2 border-white rounded-full text-lg uppercase flex">Choose your first car <span className='text-xl mt-1 rotate-[45deg] ml-2'><FaArrowUpLong/></span> </div>  
         {/* <div className=" border-white border-[1.5px] rounded-full w-10 h-10 flex items-center justify-between mr-5"> */}
           {/* ÷<span className='rotate-[45deg] ml-1 text-2xl '><FaArrowUpLong /></span>  */}
            {/* </div>  */}
    </div>
      </div>
    </div>
  )
}

export default LandingPage



