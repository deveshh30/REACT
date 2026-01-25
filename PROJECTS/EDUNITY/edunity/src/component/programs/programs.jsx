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
    <div className='programs basis-[31%] text-white text-2xl font-medium uppercase flex justify-center items-center gap-14 mt-20 ml-30 mr-30 pb-40 pt-20 '>
      <div className="program relative ">
        <img className='rounded-3xl block ' src={program_1} alt="" />
        <div className="caption cursor-pointer  flex items-center justify-center flex-col absolute bg-[rgba(0,15,152,0.3)] rounded-3xl top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 ">
            <img className='w-15 mb-2.5' src={program_1_icon} alt="" />
            <p>Under Graduate</p>
        </div>
      </div>
      <div className="program relative">
        <img className='rounded-3xl block ' src={program_2} alt="" />
        <div className="caption  cursor-pointer  flex items-center justify-center flex-col absolute bg-[rgba(0,15,152,0.3)] rounded-3xl top-0 bottom-0 opacity-0 left-0 right-0 hover:opacity-100">
            <img className='w-15 mb-2.5' src={program_2_icon} alt="" />
            <p>Post Graduate</p>
        </div>
      </div>
      <div className="program relative">
        <img className='rounded-3xl block ' src={program_3} alt="" />
        <div className="caption cursor-pointer  flex items-center justify-center flex-col absolute bg-[rgba(0,15,152,0.3)] rounded-3xl top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 ">
            <img className='w-15 mb-2.5' src={program_3_icon} alt="" />
            <p>PHD</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
