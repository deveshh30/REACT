import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="h-screen w-full">
        <Navbar/>
        <LandingPage/>
    </div>
    </>
  )
}

export default App
