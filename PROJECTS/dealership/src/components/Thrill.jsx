import React from "react";
import { motion } from "motion/react";


function Thrill() {
  return (
    <div data-scroll data-scroll-speed="0.1" data-scroll-section className="py-10 w-full rounded-3xl bg-red-900">
      <div className="uppercase flex border-t-2 border-b-2 border-white whitespace-nowrap overflow-hidden">
        
        <motion.h1
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      ease: "linear",
      duration: 24,
      repeat: Infinity,}}
        
          className="flex whitespace-nowrap text-[16vw] text-white font-[Founders_Grotesk] leading-none font-semibold "
        >
          Let the adrenaline unleash your inner self Visit us now .
        </motion.h1>

        {/* <motion.h1
          
          className="text-[16vw] text-zinc-200 font-[Founders_Grotesk] leading-none font-semibold"
        >
          Let the adrenaline unleash your inner self.
        </motion.h1> */}

      </div>
    </div>
  );
}

export default Thrill;


//whitespace no wrap to add full content inn one linne
