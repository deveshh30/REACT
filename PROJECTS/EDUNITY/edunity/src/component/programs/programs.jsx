import React from 'react'
import './program.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_1_icon from '../../assets/program-icon-1.png'
import program_2_icon from '../../assets/program-icon-2.png'
import program_3_icon from '../../assets/program-icon-3.png'
const Programs = () => {
  return (
    <div className='programs text-white text-lg md:text-2xl font-medium uppercase flex flex-col md:flex-row justify-center items-center gap-4 md:gap-14 mt-10 md:mt-20 px-4 md:px-0 pb-20 md:pb-40 pt-10 md:pt-20'>
      <div className="program relative w-full md:w-auto mb-6 md:mb-0">
        <img className='rounded-3xl block w-full md:w-auto' src={program_1} alt="" />
        <div className="caption cursor-pointer flex items-center justify-center flex-col absolute bg-[rgba(0,15,152,0.3)] rounded-3xl top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <img className='w-12 md:w-15 mb-2.5' src={program_1_icon} alt="" />
            <p className="text-sm md:text-base">Under Graduate</p>
        </div>
      </div>
      <div className="program relative w-full md:w-auto mb-6 md:mb-0">
        <img className='rounded-3xl block w-full md:w-auto' src={program_2} alt="" />
        <div className="caption cursor-pointer flex items-center justify-center flex-col absolute bg-[rgba(0,15,152,0.3)] rounded-3xl top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <img className='w-12 md:w-15 mb-2.5' src={program_2_icon} alt="" />
            <p className="text-sm md:text-base">Post Graduate</p>
        </div>
      </div>
      <div className="program relative w-full md:w-auto">
        <img className='rounded-3xl block w-full md:w-auto' src={program_3} alt="" />
        <div className="caption cursor-pointer flex items-center justify-center flex-col absolute bg-[rgba(0,15,152,0.3)] rounded-3xl top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <img className='w-12 md:w-15 mb-2.5' src={program_3_icon} alt="" />
            <p className="text-sm md:text-base">PHD</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
