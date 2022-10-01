import React from 'react'
import { Link } from 'react-router-dom'
import LandPic from "../images/landingPic.png"
function Home() {
  return (
    <div className='min-h-screen bg-[#DDDDDD] lg:p-0 pb-10'> 
    <div className='flex items-center lg:flex-row flex-col-reverse w-full justify-around py-10'>
        <div className='landing-image'></div>
        <div>
        <h1 className='md:text-[64px] text-[36px] font-[700] lg:leading-[74px] md:leading-[64px] leading-[36px] text-center lg:text-right text-[#240D57]'>Imagine if <br/><span className='snapchat-h1'>Snapchat</span><br/>
had events.</h1>
<p className='md:text-[24px] text-[16px] font-[300] leading-[24px] text-center  text-[#4F4F4F] max-w-md lg:text-right'>Easily host and share events with your friends across any social media.</p>
<Link to="/create"><span className='hidden lg:flex grad-button mt-10 text-white text-[20px] font-[700] gap-10'>🎉 Create my event</span></Link>
        </div>
      
    </div>
    <Link to="/create"><span className='lg:hidden mx-auto flex grad-button mt-10 text-white md:text-[20px] text-[16px] font-[700] gap-10'>🎉 Create my event</span></Link>
    </div>
  )
}

export default Home