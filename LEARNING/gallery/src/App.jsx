import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const arr = []

  const getData = () => {
    console.log("devesh");
    axios.get
    
  }

  return (
    <>
      <div className="bg-black h-screen text-white">
        <button 
        onClick={getData}
        className='bg-green-600 text-white text-3xl m-50 active:scale-95 px-5 py-5 rounded-xl'>lol</button>
      </div>
    </>
  )
}

export default App
