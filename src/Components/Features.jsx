import React from 'react';
import { LuBrain } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { Slide } from "react-awesome-reveal";


const Features = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 mb-30'>

            <Slide direction="up" cascade triggerOnce>
            <div className='text-center p-4'>
                <div className='flex justify-center my-5'>
                    <LuBrain size={40} />
                </div>

                <h3 className='text-2xl'>Source <span className='text-green-500'> Top Talent</span></h3>
                <p className='text-gray-500 mt-2'>Use our exclusive matching, invite from your network, or share anywhere</p>
            </div>

            <div className='text-center p-4'>
                <div className='flex justify-center my-5'>
                    <FaEye size={40} />
                </div>

                <h3 className='text-2xl'>Easily <span className='text-green-500'>review</span> Candidates</h3>
                <p className='text-gray-500 mt-2'>Improve decision-making with better assessment tools and communication.</p>
            </div>

            <div className='text-center p-4'>
                <div className='flex justify-center my-5'>
                    <ImPower size={40} />
                </div>
                
                <h3 className='text-2xl'>Scale <span className='text-green-500'>Faster</span></h3>
                <p className='text-gray-500 mt-2'>Enhance your team's productivity by streamlining project kickoff.</p>
            </div>

            </Slide>
        </div>
    );
};

export default Features;