import React from 'react'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'

import './contact.css'
const Contact = () => {
  return (
    <div>
      <div className="contact mt-20 flex items-center justify-between mb-20 ml-30">
        <div className="contact-col basis-[48%] text-[#676767]">
          <h3 className='text-[#000F38] font-extrabold text-[35px]'>Message Us <img className='w-8.7 ml-2.5 flex items-center ' src={msg} alt="" /> </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis at soluta esse natus id voluptas, reprehenderit recusandae porro, iure fugiat delectus dicta exercitationem. Consectetur modi sapiente cupiditate ad non autem earum officiis doloremque cum explicabo a maxime doloribus, consequuntur quod?</p>
          <ul>
            <li className='flex items-center mt-6 mb-6' ><img className='w-6.5 mr-2.5' src={mail} alt="" /> user@gmail.component</li>
            <li className='flex items-center mt-6 mb-6' ><img className='w-6.5 mr-2.5' src={phone} alt="" />49209348</li>
            <li className='flex items-center mt-6 mb-6' ><img className='w-6.5 mr-2.5' src={location} alt="" />address of user</li>
          </ul>
        </div>
        <div className="contact-col"></div>
      </div>
    </div>
  )
}

export default Contact
