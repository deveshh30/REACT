import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, Element, scroller, ScrollLink } from 'react-scroll';   

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=> {
    window.addEventListener('scroll', () => {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    })
  }
  ,[

  ])

  return (
    <nav className={`px-6 flex items-center justify-between left-0 fixed w-full top-0 pr-12 pt-3 pl-13 pb-3 transition-all duration-300 ${sticky ? 'bg-blue-900' : 'bg-transparent'}`}>
        <img src=' /src/assets/logo.png' alt = "" className='w-45'/>
        <ul className='flex gap-20 cursor-pointer leading-none decoration-0 items-baseline'>
            <li className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'><Link to='about' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'><Link to='program' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li className='text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'><Link to='poits' smooth={true} offset={-260} duration={500}>Testimonals</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500} className={`rounded-full py-4 px-6 text-2xl cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out ${sticky ? 'bg-zinc-600 text-white' : 'bg-white text-black'}`}>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
