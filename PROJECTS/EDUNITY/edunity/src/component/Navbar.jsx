import React from 'react'

const Navbar = () => {
  return (
    <nav className='container px-[7%] flex items-center justify-between left-0 fixed w-full top-8'>
        <img src=' /src/assets/logo.png' alt = "" className='w-45'/>
        <ul className='flex gap-20 cursor-pointer leading-none decoration-0 items-baseline'>
            <li><button className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>Home</button></li>
            <li><button className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>About Us</button></li>
            <li><button className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>Program</button></li>
            <li><button className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>Campus</button></li>
            <li><button className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>Testimonals</button></li>
            <li><button className='rounded-full bg-zinc-600 py-4 px-6 text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
