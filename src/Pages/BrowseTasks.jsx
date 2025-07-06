import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import browseTask from '../assets/browseTask.svg'
import { FaTag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const BrowseTasks = () => {

    const tasks = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    useEffect(() => {
        const search = searchTerm.toLowerCase();

        const filtered = tasks.filter(task => {
            const titleMatch = task.title.toLowerCase().includes(search);
            const categoryMatch = task.category.toLowerCase().includes(search);

            const categoryFilter = selectedCategory
                ? task.category.toLowerCase() === selectedCategory.toLowerCase()
                : true;

            return (titleMatch || categoryMatch) && categoryFilter;
        });

        setFilteredTasks(filtered);
    }, [searchTerm, selectedCategory, tasks]);

    return (
        <div className='mt-25 mb-22 mx-auto w-full md:w-10/12'>

            <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                <div className='w-full  md:w-10/12'>
                    <h2 className='font-bold text-5xl'>Browse Tasks </h2>
                    <p className='text-sm mt-3 text-gray-500'>Browse jobs posted on favFreelancer, or jump right in and create a free profile to find the work that you love to do.</p>

                    <label className="input mt-5">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search by task name or category"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <kbd className="kbd kbd-sm">⌘</kbd>
                        <kbd className="kbd kbd-sm">K</kbd>
                    </label>

                    <div className='mt-8 flex items-center gap-5'>
                        <p>Sort by: </p>
                        <div>
                            <select name="category" className="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                <option disabled selected value="">Select a category</option>
                                <option value="programming & tech">Programming & Tech</option>
                                <option value="graphic design">Graphic Design</option>
                                <option value="digital marketing">Digital Marketing</option>
                                <option value="writing & translation">Writing & Translation</option>
                                <option value="video & animation">Video & Animation</option>
                                <option value="AI services">AI Services</option>
                                <option value="music & audio">Music & Audio</option>
                                <option value="business">Business</option>
                                <option value="consulting">Consulting</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className='w-full md:w-4/12'>
                    <img src={browseTask} alt="browseTask" className='w-full' />
                </div>
            </div>


            <div className='mt-10 mb-25'>

                {
                    filteredTasks.length > 0 ? (
                        filteredTasks.map((task) => (
                            <div key={task._id} className='bg-base-200 p-8 rounded-2xl shadow-md mb-10'>
                                <h1 className='text-2xl font-bold'>{task.title}</h1>
                                <div className='flex-col mt-4'>
                                    <div className='flex gap-2'>
                                        <p>Category:</p>
                                        <button className='btn btn-xs btn-primary rounded-full border-0'>
                                            <FaTag /> {task.category}
                                        </button>
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
                                            <p>Bids: {task.bidsCount}</p>
                                        </div>
                                        <NavLink to={`/tasks/${task._id}`} className='btn bg-green-500 text-white rounded-full border-0'>View Details</NavLink>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center text-gray-500 text-xl mt-10'>No task found!</p>
                    )
                }
                {/* {
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
                } */}

            </div>
        </div>
    );
};

export default BrowseTasks;