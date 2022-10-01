import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import { Link, useNavigate } from 'react-router-dom'
import TimePicker from 'react-time-picker';
import { useStateValue } from '../stateProvider';

function Create() {
const [hostName, setHostName] = useState("");
    const [startDateValue, setStartDateValue] = useState(new Date());
    const [endDateValue, setEndDateValue] = useState(new Date());
    const [startTimeValue, setStartTimeValue] = useState('00:00');
    const [endTimeValue, setEndTimeValue] = useState('00:00');
    const [{}, dispatch] = useStateValue();
const navigate = useNavigate()
    function submitForm(e){
        e.preventDefault();
        dispatch({
            type: 'SET_HOST',
            host: hostName,
        });
        dispatch({
            type: 'SET_START_TIME',
            startTime: startTimeValue,
        });
        dispatch({
            type: 'SET_END_TIME',
            endTime: endTimeValue,
        });
        dispatch({
            type: 'SET_START_DATE',
            startDate: startDateValue,
        });
        dispatch({
            type: 'SET_END_DATE',
            endDate: endDateValue
        });
        setTimeout(() => {
            navigate("/event")
        }, 200);
    }
  return (
    <div className='min-h-screen bg-[#DDDDDD] '>
         <h1 className='snapchat-h1 mx-auto md:text-[64px] text-[36px] font-[700] lg:leading-[74px] md:leading-[64px] leading-[36px] text-center'>Create Event</h1>
        <div className="flex items-center justify-center h-screen  mx-auto">
           
            <div className='flex items-center flex-col gap-10 justify-between h-[1/4] my-auto bg-[#FBFAFF] border-[#501FC1] border-[1px] px-10 py-7 rounded-lg shadow-lg'>
                <label className='text-[#501FC1] font-[500] text-lg'>Host Name</label>
                <input type="text" placeholder={`Host's name`} className='bg-[#F6F2FF] h-[60px] rounded-lg outline-[#E87BF8] md:w-[340px] p-2' value={hostName} onChange={(e)=>setHostName(e.target.value)}/>
                <br/>
                <label className='text-[#501FC1] font-[500] text-lg'>Start Date</label>
                <DatePicker className='bg-[#F6F2FF] h-[60px] rounded-lg outline-[#E87BF8] md:w-[340px] p-2' onChange={setStartDateValue} value={startDateValue} />
                <br/>
                <label className='text-[#501FC1] font-[500] text-lg'>End Date</label>
                <DatePicker className='bg-[#F6F2FF] h-[60px] rounded-lg outline-[#E87BF8] md:w-[340px] p-2' onChange={setEndDateValue} value={endDateValue} />
                <br/>
                <label className='text-[#501FC1] font-[500] text-lg'>Start Time</label>
                <TimePicker className='bg-[#F6F2FF] h-[60px] rounded-lg outline-[#E87BF8] md:w-[340px] p-2' onChange={setStartTimeValue} value={startTimeValue} />
               
                <br/>
                <label className='text-[#501FC1] font-[500] text-lg'>End Time</label>
                <TimePicker className='bg-[#F6F2FF] h-[60px] rounded-lg outline-[#E87BF8] md:w-[340px] p-2' onChange={setEndTimeValue} value={endTimeValue} />
                <span onClick={(e)=>submitForm(e)} className='mx-auto flex grad-button mt-10 text-white text-[20px] font-[700] gap-10'>Submit🚀🚀</span>
            </div>
        </div>
    </div>
  )
}

export default Create