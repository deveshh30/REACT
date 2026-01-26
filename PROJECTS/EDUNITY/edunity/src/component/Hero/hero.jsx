import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div className="hero flex items-center justify-center min-h-screen">
      <div className="text-center px-4 sm:px-6 md:px-[7%] max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">We ensure better education for a better world</h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='bg-white font-light text-zinc-800 text-lg sm:text-xl md:text-2xl px-4 sm:px-6 py-2 rounded-full hover:underline transition-all duration-300'>Explore More</button>
      </div>
    </div>
  )
}

export default Hero
