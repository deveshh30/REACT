import React from 'react'

const Navbar = () => {
  return (
    <nav className='container px-[7%] flex items-center justify-between top-0 left-0 fixed w-full mt-8'>
        <img src=' /src/assets/logo.png' alt = "" className='w-45'/>
        <ul className='flex gap-20 cursor-pointer leading-none decoration-0'>
            <li><button className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>Home</button></li>
            <li><button className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>About Us</button></li>
            <li><button className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>Program</button></li>
            <li><button className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>Campus</button></li>
            <li><button className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>Testimonals</button></li>
            <li><button className='contactbtn bg-white text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
