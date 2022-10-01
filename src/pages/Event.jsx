import React from 'react'
import { useStateValue } from '../stateProvider';
import Calender from "../images/calnderIcon.png";
import Location from "../images/locationIcon.png"

function Event() {
    const [{ host, startDate,endDate,startTime,endTime }, dispatch] = useStateValue();
  
  return (
    <div className='min-h-screen overflow-x-hidden bg-[#DDDDDD] flex justify-center w-full'>
        <div className="flex flex-col-reverse lg:flex-row items-center mx-10 justify-between w-[70%] h-3/4 pb-[100px] md:py-[140px] ">
            <div className='flex flex-col justify-start mb-auto'>
                <h2 className='text-[#240D57] font-[700] lg:leading-[55px] md:text-[48px] text-[28px]'>Birthday Bash</h2>
                <p className='font-[400] text-[18px] text-[#828282]'>Hosted by {host}</p>
                <br/>
                <div className='flex items-center gap-14'>
<img src={Calender} alt="calender" />
<div><p className='text-[#240D57] font-[700] md:text-[18px] text-[16px]'>{startDate?.toDateString()} {startTime}</p>
<p className='text-[#4F4F4F] font-[400] md:text-[16px] text-[14px]'>to {endDate?.toDateString()} {endTime}</p></div>
                </div>
                <div className='flex items-center gap-14 mb-auto'>
<img src={Location} alt="location" />
<div><p className='text-[#240D57] font-[700] md:text-[18px] text-[16px]'>Street name</p>
<p className='text-[#4F4F4F] font-[400] md:text-[16px] text-[14px]'>Suburb, State, Postcode</p></div>
                </div>
            </div>
            <div className='eventImage-lg'></div>
        </div>
    </div>
  )
}

export default Event