import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="bg-zinc-800 w-full h-screen border-2 text-red-100">
      <div className="textleft mt-52 px-10">
        {["We Deliver", "Luxurious and Rare", "Supercars."].map((item, index) => (
          <div
            key={index}
            className="masker uppercase font-[Founders_Grotesk] w-fit overflow-hidden flex items-center font-semibold"
          >
            {index === 1 && (<div className="w-[8vw] mr-[1vw] rounded-xl relative top-[0.5vw] bg-red-500 h-[5vw]"></div>

            )}
            <h1 className="text-[8vw] leading-[6vw] h-full text-black">
              {item}
            </h1>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-t-zinc-100 w-[90%] ml-21 mt-32 flex justify-between items-center">
        {["For personal uses" , "For commercial uses"].map((item,index) => {
            return <p className='text-xl text-pink-200  font-light tracking-tight leading-none uppercase font-["Gilroy-Medium"]'>{item}</p> //add font here later
})}



    <div className="start flex items-center gap-5">
         <div className="px-5 py-2 border-[1px] mt-2 border-white rounded-full text-lg uppercase flex">Choose your first car <span className='text-xl mt-1 rotate-[45deg] ml-2'><FaArrowUpLong/></span> </div>  
         
    </div>
      </div>
    </div>
  )
}

export default LandingPage



