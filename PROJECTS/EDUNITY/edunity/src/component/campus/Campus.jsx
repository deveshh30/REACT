import React from 'react'
import './campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div>
      <div className="campus mt-20 mb-20 w-[90%] ml-18 text-center ">
        <div className="gallery flex items-center justify-between mb-10 ">
            <img className='w-[23%] rounded-3xl' src={gallery_1} alt="" />
            <img className='w-[23%] rounded-3xl' src={gallery_2} alt="" />
            <img className='w-[23%] rounded-3xl' src={gallery_3} alt="" />
            <img className='w-[23%] rounded-3xl' src={gallery_4} alt="" />
        </div>
        <button className='bg-zinc-700 px-10 py-3 text-white inline-flex items-center justify-center rounded-4xl'>
            See More <img className='w-5 ml-2.5' src={arrow} /> 
        </button>
      </div>
    </div>
  )
}

export default Campus
