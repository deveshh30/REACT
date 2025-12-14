import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full text-gray-50 px-20 py-8 flex items-center justify-between font-["Neue Montreal"]'>
        <div className="logo text-3xl uppercase font-extrabold text-zinc-300">BEEMERS</div>
        <div className="links flex gap-10">{["Showrooms ", " Services " , " Contact-Us " , "Insights", " Pre-Booking"].map((item, index)=> {
            return(
            <a key={index} className={`font-semibold text-lg font-['Neue Montreal'] ${index === 4 && 'ml-32'}`}>{item}</a>
            )
        })}</div>
    </div>
  )
}

export default Navbar
