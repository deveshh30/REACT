import React from 'react'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'


import './contact.css'
const Contact = () => {



    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "224f91c4-0b2a-4e58-92dd-c96ab66b68ed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div>
      <div className="contact mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-between mb-10 md:mb-20 px-4 md:px-0">
        <div className="contact-col w-full md:basis-[48%] text-[#676767] mb-8 md:mb-0">
          <h3 className='text-[#000F38] font-extrabold text-2xl md:text-[35px]'>Message Us <img className='w-6 md:w-8.7 ml-2.5 inline' src={msg} alt="" /> </h3>
          <p className="text-sm md:text-base mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis at soluta esse natus id voluptas, reprehenderit recusandae porro, iure fugiat delectus dicta exercitationem. Consectetur modi sapiente cupiditate ad non autem earum officiis doloremque cum explicabo a maxime doloribus, consequuntur quod?</p>
          <ul className="mt-6">
            <li className='flex items-center mt-4 mb-4 text-sm md:text-base' ><img className='w-5 md:w-6.5 mr-2.5' src={mail} alt="" /> user@gmail.com</li>
            <li className='flex items-center mt-4 mb-4 text-sm md:text-base' ><img className='w-5 md:w-6.5 mr-2.5' src={phone} alt="" />49209348</li>
            <li className='flex items-center mt-4 mb-4 text-sm md:text-base' ><img className='w-5 md:w-6.5 mr-2.5' src={location} alt="" />address of user</li>
          </ul>
        </div>
        <div className="contact-col w-full md:basis-[48%] md:mr-12">
          <form onSubmit={onSubmit} className='' action="">
            <label className="block text-sm md:text-base font-medium mb-2">Your Name</label>
            <input className='block w-full bg-[#EBECFE] p-3 md:p-4 mb-4 mt-2 border-0 outline-0 rounded text-sm md:text-base' type="text" name='name' placeholder='Enter your name' required />
            <label className="block text-sm md:text-base font-medium mb-2">Phone Number</label>
            <input className='block w-full bg-[#EBECFE] p-3 md:p-4 mb-4 mt-2 border-0 outline-0 rounded text-sm md:text-base' type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label className="block text-sm md:text-base font-medium mb-2">Your Email</label>
            <input className='block w-full bg-[#EBECFE] p-3 md:p-4 mb-4 mt-2 border-0 outline-0 rounded text-sm md:text-base' type="email" name='email' placeholder='Enter your email' required />
            <label className="block text-sm md:text-base font-medium mb-2">Write your message here</label>
            <textarea className='block w-full bg-[#EBECFE] p-3 md:p-4 mb-4 mt-2 border-0 outline-0 resize-none rounded text-sm md:text-base' name="message" rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='bg-blue-900 rounded-3xl text-white text-sm md:text-base py-2 px-5 hover:bg-blue-800 transition-colors'>Submit Now</button>
          </form>
          <span className="block mt-4 text-sm text-center">{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
 