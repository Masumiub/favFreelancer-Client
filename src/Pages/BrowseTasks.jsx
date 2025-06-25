import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import browseTask from '../assets/browseTask.svg'
import { FaTag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const BrowseTasks = () => {

    const tasks = useLoaderData();

    return (
        <div className='my-10 mx-auto w-full md:w-8/12'>

            <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                <div className='w-full  md:w-8/12'>
                    <h2 className='font-bold text-5xl'>Browse Tasks </h2>
                    {/* <p className='text-xs mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem facere pariatur, blanditiis quidem fugit natus quia possimus illum deleniti adipisci voluptate dicta vel recusandae?</p> */}
                </div>

                <div className='w-full md:w-4/12'>
                    <img src={browseTask} alt="browseTask" className='w-full' />
                </div>
            </div>


            <div className='mt-10 mb-25'>
                {
                    tasks.map((task) => <div key={task._id} className='bg-base-200 p-8 rounded-2xl shadow-md mb-10'>

                        <h1 className='text-2xl font-bold'>{task.title}</h1>
                        <div className='flex-col mt-4'>
                            <div className='flex gap-2'>
                                <p>Category:</p>
                                <button className='btn btn-xs btn-primary rounded-full border-0'><FaTag /> {task.category}</button>
                            </div>
                            <button className='btn btn-sm rounded-full mt-3'>Deadline: {task.deadline}</button>
                        </div>

                        <p className='text-gray-500 mt-6'>{task.description}</p>


                        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>

                            <div>
                                <p className='mt-4 font-semibold'>Posted By: {task.userName}</p>
                                <p className='text-xl mt-4 font-semibold'>Budget: ${task.budget}</p>
                            </div>

                            <div className='flex items-center gap-4 justify-end'>
                                <div className='flex gap-2 items-center'>
                                    <FaHeart />
                                    <p> Bids: {task.bidsCount}</p>
                                </div>
                                <NavLink to={`/tasks/${task._id}`} className='btn bg-green-500 text-white rounded-full border-0'>View Details</NavLink>
                            </div>
                        </div>

                    </div>)
                }

            </div>
        </div>
    );
};

export default BrowseTasks;