import React from "react";
import { motion } from "motion/react";

function Thrill() {
  return (
    <div className="py-10 w-full rounded-3xl bg-red-900">
      <div className="uppercase flex border-t-2 border-b-2 border-white whitespace-nowrap overflow-hidden">
        
        <motion.h1
         // initial={{ x: 0 }}
          //animate={{ x: "-100%" }}
          //transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[16vw] text-white font-[Founders_Grotesk] leading-none font-semibold mr-10"
        >
          Visit us now
        </motion.h1>

        <motion.h1
          //initial={{ x: 0 }}
          //animate={{ x: "-100%" }}
          //r
          // transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[16vw] text-zinc-200 font-[Founders_Grotesk] leading-none font-semibold"
        >
          Let the adrenaline unleash your inner self.
        </motion.h1>

      </div>
    </div>
  );
}

export default Thrill;


//whitespace no wrap to add full content inn one linne
