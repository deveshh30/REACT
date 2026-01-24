import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div className="hero flex items-center justify-center">
      <div className="text-center px-[7%]">
        <h1 className="text-6xl font-bold mb-4">We ensure better education for a better world</h1>
        <p className="text-xl mb-8">Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='bg-white font-light text-zinc-800 text-2xl px-6 py-2 rounded-full hover:underline'>Explore More</button>
      </div>
    </div>
  )
}

export default Hero
