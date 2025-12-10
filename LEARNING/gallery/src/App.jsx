import { useActionState, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [userData , setUserData] = useState([])
  const arr = []
  useEffect(function(){
    getData()
  },[])

  const getData = async  () => {
    
    const Response = await axios.get('https://picsum.photos/v2/list')
    
    setUserData(Response.data)
    
  }

  let printuserData = 'user data not available'
  if(userData.length > 0) {
    printuserData = userData.map(function (elem,idx){
      return <div key={idx}>
        <a href={elem.url}>
        <div className='h-40 w-44'>
        <img className='h-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2>{elem.author}</h2>
      </a>
      </div>
    })
  }
  return (
    <>
      <div className= " overflow-auto p-4 bg-black h-screen text-white">
        <div className="flex  flex-wrap gap-2">
          {printuserData }
        </div>
      </div>
    </>
  )
}

export default App
