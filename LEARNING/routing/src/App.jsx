import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componennts/Navbar'
import Footer from './componennts/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './page/About'
import Product from './page/Product'
import Contact from './page/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/contact' element={<Contact />} /> 
        {/* path is non-case-senstive */}
      </Routes>


      <Footer/>
    </>
  )
}

export default App
