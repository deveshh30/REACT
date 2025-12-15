import React from 'react'

function Eyes() {
  return (
    <div className='w-full h-screen eyes'>
      <div className="bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover relative h-full w-full bg-center ">
      <div className="absolute flex gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] ">
      <div className="h-[15vw] w-[15vw] rounded-full flex items-center justify-center bg-white" >
        <div className="bg-black h-2/3 rounded-full  w-2/3 flex items-center justify-center">
            <div className="line w-full h-10">
                <div className="bg-white h-10 rounded-full  w-10 "></div>
            </div>
            
        </div>
      </div>
      <div className="h-[15vw] w-[15vw] rounded-full flex items-center justify-center bg-white" >
        <div className="bg-black h-2/3 rounded-full  w-2/3 flex items-center justify-center">
            <div className="line w-full h-10 ">
                <div className="bg-white h-10 rounded-full  w-10 "></div>
            </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Eyes
