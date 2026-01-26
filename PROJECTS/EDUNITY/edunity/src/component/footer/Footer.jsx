import React from 'react'

const Footer = () => {
  return (
    <div className='footer mt-2.5 mb-2.5 flex flex-col md:flex-row items-center justify-between border-t-[1px] px-4 md:px-20 pt-5 pb-5 border-zinc-400 text-center md:text-left'>
      <p className='mb-4 md:mb-0'> © Edunity, Since 2000. ALL RIGHT RESERVED. </p>
      <ul className='flex flex-col md:flex-row'>
        <li className='mb-2 md:mb-0 md:ml-5'>Terms Of Service</li>
        <li className='md:ml-5'>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer
