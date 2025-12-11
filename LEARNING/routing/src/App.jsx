import { useState } from 'react'
import Navbar from './componennts/Navbar'
import Footer from './componennts/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './page/About'
import Product from './page/Product'
import Contact from './page/Contact'
import Men from './page/Men'
import Women from './page/Women'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
