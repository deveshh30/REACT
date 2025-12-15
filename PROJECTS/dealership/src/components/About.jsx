import React from "react";

function About() {
  return (
    <div>
      <div  className="bg-[#CDEA68] text-black py-20 px-20 rounded-tl-3xl rounded-tr-3xl">
        <h1 className="font-[Neue_Montreal] text-[2.5vw] font-semibold leading-[2.85vw] tracking-tight" >
          BEEMERS is a premium strategic prime segment car provider which
          imports cars from other countries with best provided time and gives
          you a satisfying experience.
        </h1>
        {/* create one div here by your own */}
        <div className="w-full border-t-[3px] pt-10 mt-20 flex border-[#b8d35d]">
            <div className="w-1/2 ">
                <h1 className="text-6xl mt-6 ">OUR COLLABORATORS : </h1>
                <button className="bg-zinc-900 font-[Gilroy-Medium] flex items-center   rounded-full tracking-wider text-l font-semibold text-white pr-5 pl-5 pt-3 pb-3 mt-10 ">See More
                    <div className="w-2 h-2 bg-white rounded-full ml-3"></div>
                </button>
            </div>
            <div className="w-1/2 h-[65vh] text-center bg-[#6a7a33] rounded-2xl ">
                add image
            </div>
        </div> 
      </div>
    </div>
  );
}

export default About;
