import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, Element, scroller, ScrollLink } from 'react-scroll';   

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(()=> {
    window.addEventListener('scroll', () => {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    })
  }
  ,[

  ])

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className={`px-4 md:px-6 flex items-center justify-between left-0 fixed w-full top-0 pr-4 md:pr-12 pt-3 pl-4 md:pl-13 pb-3 transition-all duration-300 ${sticky ? 'bg-blue-900' : 'bg-transparent'}`}>
        <img src=' /src/assets/logo.png' alt = "" className='w-32 md:w-45'/>
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 lg:gap-20 cursor-pointer leading-none decoration-0 items-baseline'>
            <li className='text-lg lg:text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li className='text-lg lg:text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'><Link to='about' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li className='text-lg lg:text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'><Link to='program' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li className='text-lg lg:text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li className='text-lg lg:text-2xl text-white cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out'><Link to='poits' smooth={true} offset={-260} duration={500}>Testimonals</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500} className={`rounded-full py-2 lg:py-4 px-4 lg:px-6 text-lg lg:text-2xl cursor-pointer hover:underline decoration-zinc-300 transition-all duration-300 ease-in-out ${sticky ? 'bg-zinc-600 text-white' : 'bg-white text-black'}`}>Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className='md:hidden text-white text-2xl focus:outline-none'>
          {mobileMenu ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        <ul className={`md:hidden absolute top-full left-0 w-full bg-blue-900 transition-all duration-300 ${mobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <li className='text-lg text-white cursor-pointer hover:bg-blue-800 p-4 border-b border-blue-700'><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
            <li className='text-lg text-white cursor-pointer hover:bg-blue-800 p-4 border-b border-blue-700'><Link to='about' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Program</Link></li>
            <li className='text-lg text-white cursor-pointer hover:bg-blue-800 p-4 border-b border-blue-700'><Link to='program' smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About Us</Link></li>
            <li className='text-lg text-white cursor-pointer hover:bg-blue-800 p-4 border-b border-blue-700'><Link to='campus' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
            <li className='text-lg text-white cursor-pointer hover:bg-blue-800 p-4 border-b border-blue-700'><Link to='poits' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonals</Link></li>
            <li className='p-4'><Link to='contact' smooth={true} offset={0} duration={500} onClick={toggleMenu} className='block text-center bg-white text-black rounded-full py-2 px-6 text-lg'>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
