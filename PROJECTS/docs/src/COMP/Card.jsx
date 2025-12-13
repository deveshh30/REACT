import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

function Card({data} ) {
  return (
    <div className="relative flex shrink-0 w-60 h-80 rounded-[40px] bg-zinc-500 text-white py-10 px-5 overflow-hidden">
      
      <FaFileAlt size={25} />

     
      <p className="mt-5 font-semibold text-sm leading-tight">
        {data.description}
      </p>

      
      <div className="absolute bottom-0 left-0 w-full h-18">
        {/* File size & download icon */}
        <div className="flex items-center justify-between px-5 text-sm">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 flex items-center justify-center">
            {data.close ? <IoIosClose/> : <IoMdCloudDownload size={18} />}
              
          </span>
        </div>

        {data.tag.isOpen && (<div className={`w-full h-10  flex items-center justify-center mt-2`}>
          <h3 className="text-sm font-semibold text-white">{data.tag.tagTitle}</h3>
        </div>)}

      </div>
    </div>
  );
}

export default Card;
