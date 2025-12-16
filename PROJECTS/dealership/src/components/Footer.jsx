import React from 'react'

function Footer() {
  return (
    <div className='bg-zinc-900 h-screen p-20 w-full'>


      <div className="flex w-full h-full text-zinc-100">


        <div className="w-1/2 font-[Founders_Grotesk] uppercase border-r-1  border-zinc-600 font-thin text-[9vw] leading-[7vw]">
          <h1>Thrill</h1>
          <h1>Action</h1>
          <h1>Adrenaline !</h1>

          <div>
            {/* <img src="" alt="" /> add the beeemer logo after creatinng */}
          </div>
          
         

        </div>


        <div className="w-1/2 h-full ">
          <h1 className="text-[5vw] pl-5 font-semibold uppercase leading-none mb-10">
            Categories :
          </h1>

          <a className='block text-xl text-zinc-200  font-thin font-["Montreal"] ml-5 ' href="#">Hatchdesk</a>
          <a className='block text-xl text-zinc-200  font-thin font-["Montreal"] ml-5 ' href="#">Suv</a>
          <a className='block text-xl text-zinc-200  font-thin font-["Montreal"] ml-5 ' href="#">Sedan</a>
          <a className='block text-xl text-zinc-200  font-thin font-["Montreal"] ml-5 ' href="#">Semi-Suv</a>
          <a className='block text-xl text-zinc-200  font-thin font-["Montreal"] ml-5 ' href="#">Coupe</a>
          <a className='block text-xl text-zinc-200  font-thin font-["Montreal"] ml-5 ' href="#">Convertible</a>
        </div>

      </div>

    </div>
  )
}

export default Footer
