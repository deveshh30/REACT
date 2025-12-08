import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [val, setVal] = useState(0)
   function increaseVal() {
    setVal(val+1)
   }

   function decreaseVal(){
    setVal(val-1)
   }



  return (
    <>
    <div class="container">
      <h1 class="val">{val}</h1>
      <button class="add" onClick={increaseVal}>ADD</button>
      <button class="remove" onClick={decreaseVal}>REMOVE</button>
    </div>
    </>
  )
}

export default App
