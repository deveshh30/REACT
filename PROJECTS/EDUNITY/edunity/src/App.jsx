import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from "./component/Hero/hero.jsx"
import Programs from './component/programs/programs.jsx'
import About from './component/about/about.jsx'

function App() {

  return (
    <div className="no-scrollbar">
    <Navbar/>
    <Hero/>
    <Programs/>
    <About/> 
    </div>
  )
}

export default App
