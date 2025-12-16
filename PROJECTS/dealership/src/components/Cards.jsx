import React from 'react'

function Cards() {
  return (
   <div className=" w-full h-screen bg-zinc-100 flex items-center px-25 gap-15">
    <div className="h-[45vh] w-1/2">
        <div className="w-full relative rounded-xl h-full bg-[url('src/img/Haldi.png')] bg-no-repeat bg-cover">
            <button className='absolute left-10 bottom-10  px-5 py-1 rounded-full border-2' >See more</button>
        </div>
    </div>
    <div className="relative rounded-2xl w-1/2 h-[45vh] flex items-center gap-5">
        <div className="w-1/2 relative rounded-2xl h-full bg-[url('src/img/Haldi-2.png')] bg-no-repeat bg-cover">
            <button className='absolute left-10 bottom-10  px-5 py-1 rounded-full border-2'>See more</button>
        </div>
        <div className="w-1/2 relative rounded-2xl h-full bg-[url('src/img/Haldi-3.png')] bg-no-repeat bg-cover">
        <button className='absolute left-10 bottom-10  px-5 py-1 rounded-full border-2'>See more</button>
        </div>
    </div>
   </div>
    
  )
}

export default Cards
