import { span } from "motion/react-client";
import React from "react";

function Products() {
  return (
    <div className="w-full py-10 bg-zinc-700">
      <div className="w-full px-10 border-b-2 pb-10 border-zinc-900">
        <h1 className="w-full text-white text-7xl font-[Gilroy-Medium] uppercase tracking-tighter">
          Highest Bid $
        </h1>
      </div>

      <div className="px-10">
        <div className="cards w-full flex mt-10 gap-6">
          <div className="h-[70vh] relative flex-1">
            <h1 className="absolute text-[#CDEA68] z-[9]  -translate-x-1/2 top-1/2 -translate-y-1/2  text-8xl leading-none tracking-tighter left-full">
              {"LIMOSINE".split('').map((item,index)=> <span className="">{item}</span>)}
            </h1>
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                src="https://imgs.search.brave.com/Wd8UzL9CdCRPEuuyi10Iiklx1paavgKaqm3vjR9-GoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oeW1h/bmx0ZC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTQvMDQv/NTEwOS0xMDI0eDY4/NS5qcGc"
                alt="Car 1"
              />
            </div>
          </div>

          <div className="h-[70vh] flex-1">
            <div className="w-full h-full relative rounded-xl">
              <h1 className="absolute text-[#CDEA68] z-[9] translate-x-1/2 top-1/2 -translate-y-1/2  text-8xl leading-none tracking-tighter right-full">
                {"LIMOSINE".split('').map((item,index)=> <span className="">{item}</span>)}
              </h1>
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                src="https://imgs.search.brave.com/3GdYPI8Wym1ua03PIlL-FSrRoTIw7O8Qv4uQ7wxTdlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3Bpbm55LmNvbS9i/bG9nL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA5L0J1Z2F0/dGlEaXZvLWV6Z2lm/LmNvbS1vcHRpanBl/Zy0xMTYweDY1My53/ZWJw"
                alt="Car 2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
