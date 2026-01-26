import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from "./component/Hero/hero.jsx"
import Programs from './component/programs/programs.jsx'
import About from './component/about/about.jsx'
import Title from './component/title/Title.jsx'
import Campus from './component/campus/Campus.jsx'
import Testimonial from './component/Testimonials/Testimonial.jsx'

function App() {

  return (
    <div className="no-scrollbar">
    <Navbar/>
    <Hero/>
    <div className="text-black text-2xl">
    <Title subTitle='Our Program' title= 'What we OFFER' />
    <Programs/>
    <About/> 
    <Title subTitle='Gallery' title= 'campus photo' />
    <Campus/>
    <Title subTitle='TESTIMONIALS' title= 'What student says?' />
    <Testimonial/>
    </div>
    
    </div>
  )
}

export default App
