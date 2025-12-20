import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Thrill from './components/thrill'
import About from './components/About'
import Eyes from './components/Eyes'
import Products from './components/Products'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const [count, setCount] = useState(0)

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className="
     w-full min-h-screen bg-zinc-800">
        <Navbar/>
        <LandingPage/>
        <Thrill/>
        <About/>
        <Eyes/>
        <Products/>
        <Cards/>
        <Footer/>
    </div>
    </>
  )
}

export default App
