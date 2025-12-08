import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-black h-screen w-full">
      <form className='flex flex-col justify-between text-white p-10'>
        <div className="flex flex-col p-10 gap-4">
        <input type="text" placeholder='Enter the heading' className='p-5 border-2 border-amber-500 rounded-2xl' />
        <br></br>
        <textarea className='p-5 border-2 border-amber-300 rounded-2xl' name="" placeholder='Describe your heading' id=""></textarea>
        <button className='bg-white text-5xl text-black py-10 m-10 mt-20 border-6 border-gray-600 rounded-b-md'>Add Notes</button>

        </div>

        <img className='h-40 w-40' src="https://imgs.search.brave.com/xFNevK0Uk5HJWr11F7E_dn9Se85IIOSnrMxHua5ApKw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/MTAzLzU2NS9zbWFs/bC9zcXVhcmUtc3Rp/Y2t5LW5vdGUtcG5n/LnBuZw" alt="" />
              </form>
      </div>
    </>
  )
}

export default App
