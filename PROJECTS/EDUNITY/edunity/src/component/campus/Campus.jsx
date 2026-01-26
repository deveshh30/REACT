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
      <div className="campus mt-10 md:mt-20 mb-10 md:mb-20 w-full px-4 md:px-0 text-center">
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:mb-10">
            <img className='w-full rounded-3xl' src={gallery_1} alt="" />
            <img className='w-full rounded-3xl' src={gallery_2} alt="" />
            <img className='w-full rounded-3xl' src={gallery_3} alt="" />
            <img className='w-full rounded-3xl' src={gallery_4} alt="" />
        </div>
        <button className='bg-zinc-700 px-6 md:px-10 py-3 text-white inline-flex items-center justify-center rounded-4xl hover:bg-zinc-600 transition-colors'>
            See More <img className='w-4 md:w-5 ml-2.5' src={arrow} />
        </button>
      </div>
    </div>
  )
}

export default Campus
