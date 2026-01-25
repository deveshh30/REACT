import React from 'react'
import './about.css'
import about_icon from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about mt35 gap-5 mb-25 flex items-center content-between '>
      <div className="left basis-[40%]">
        <img src={about_icon} alt="" className='rounded-2xl w-full' />
      </div>

      <div className="right basis-[50%]">
        <h2 className="text-3xl text-blue-400 font-bold mb-4">About University</h2>
        <h2 className="text-2xl font-semibold mb-4">Nurturing tomorrow's leaders today</h2>
        <p className="text-base  mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur tempora quam, fugiat recusandae quasi quas est quos odit maxime exercitationem rem nobis commodi natus quisquam, optio fuga dolorum? Sint veritatis fuga unde quidem ex magnam quam! Ex nisi repellendus asperiores totam iste sunt architecto quibusdam natus cupiditate, minus impedit?</p>
        <p className="text-base  mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque quis corporis reprehenderit sed ex est consectetur, similique quam porro odit commodi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, in. tempora laboriosam et illum sit itaque vero eius natus fuga neque adipisci. Nemo, reiciendis itaque alias aspernatur consectetur exercitationem praesentium? Consectetur placeat accusamus illo non corrupti explicabo debitis.</p>
        <p className="text-base  mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum facere nesciunt, dolore alias architecto odit repellat quaerat quas, maiores autem? Odio, repudiandae sequi! Accusantium voluptatem distinctio nesciunt? Rerum consectetur, voluptatem minus ratione assumenda ab cupiditate cumque voluptatum nostrum deleniti, omnis consequuntur perspiciatis excepturi quis eum a. Voluptas numquam, harum, nam repudiandae officia labore sint aspernatur ea ullam reprehenderit nobis modi quod totam, asperiores sequi perferendis. Ab quo sint aperiam.</p>
      </div>
    </div>
  )
}

export default About
