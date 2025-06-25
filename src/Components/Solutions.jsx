import React from 'react';
import { Slide } from "react-awesome-reveal";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import banner from '../assets/Working remotely-bro.svg'
import { NavLink } from 'react-router';

const Solutions = () => {
    return (
        <div className='mx-auto w-full md:w-10/12'>
            <Slide direction="right">
                <div className='px-8 py-15 rounded-2xl flex flex-col md:flex-row gap-10 items-center'>
                    
                    <div className='w-full md:w-7/12'>
                        <h2 className='text-5xl'>The <span className='text-green-500 font-bold'>Premium</span>  freelance solution for businesses</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                            <div>
                                <RiVerifiedBadgeFill />
                                <p className='font-semibold'>Dedicated hiring experts</p>
                                <p className='text-sm text-gray-500'>Count on an account manager to find you the right talent and see to your project’s every need.</p>
                            </div>

                            <div>
                                <RiVerifiedBadgeFill />
                                <p className='font-semibold'>Satisfaction guarantee</p>
                                <p className='text-sm text-gray-500'>Order confidently, with guaranteed refunds for less-than-satisfactory deliveries.</p>
                            </div>

                            <div>
                                <RiVerifiedBadgeFill />
                                <p className='font-semibold'>Advanced management tools</p>
                                <p className='text-sm text-gray-500'>Seamlessly integrate freelancers into your team and projects.</p>
                            </div>

                            <div>
                                <RiVerifiedBadgeFill />
                                <p className='font-semibold'>Flexible payment models</p>
                                <p className='text-sm text-gray-500'>Pay per project or opt for hourly rates to facilitate longer-term collaboration.</p>
                            </div>
                        </div>
                        <NavLink to='/signin' className='btn btn-lg text-white bg-green-500 rounded-full border-0 mt-5'>Get Started</NavLink>
                    </div>
                    
                    <div className='w-full md:w-5/12'>
                        <img src={banner} alt="goBeyond" className='w-full' />
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Solutions;