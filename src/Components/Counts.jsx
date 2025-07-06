import React from 'react';
import CountUp from 'react-countup';
import { SlBriefcase } from "react-icons/sl";
import { BiCategoryAlt } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { BiHappyHeartEyes } from "react-icons/bi";
const Counts = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-40'>
            <div className='bg-base-200 p-8 rounded-2xl shadow-xl'>
                <SlBriefcase size={45}/>
                <h1 className=' text-6xl text-green-500 mt-3'> <CountUp end={9932} />+ </h1>
                <p className='mt-2'>Freelance Tasks</p>
            </div>
            <div className='bg-base-200 p-8 rounded-2xl shadow-xl'>
                <BiCategoryAlt size={45}/>
                <h1 className=' text-6xl text-green-500'> <CountUp end={150} />+ </h1>
                <p className='mt-2'>Categories</p>
            </div>
            <div className='bg-base-200 p-8 rounded-2xl shadow-xl'>
                <GoPeople size={45}/>
                <h1 className=' text-6xl text-green-500'> <CountUp end={8854} />+ </h1>
                <p className='mt-2'>Freelancers</p>
            </div>

            <div className='bg-base-200 p-8 rounded-2xl shadow-xl'>
                <BiHappyHeartEyes size={45}/>
                <h1 className=' text-6xl text-green-500'> <CountUp end={5578} />+ </h1>
                <p className='mt-2'>Happy Clients</p>
            </div>
        </div>
    );
};

export default Counts;