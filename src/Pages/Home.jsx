import React from 'react';
import Header from '../Components/Header';
import { NavLink, useLoaderData } from 'react-router';
import Features from '../Components/Features';
import goBeyond from '../assets/goBeyond.svg';
import working from '../assets/working.svg';
import Reviews from '../Components/Reviews';
import TopCompanies from '../Components/TopCompanies';
import './Home.css';
import { Slide, Zoom} from "react-awesome-reveal";
import Solutions from '../Components/Solutions';
import { FaTag } from "react-icons/fa";

const Home = () => {

    const tasks = useLoaderData();

    return (
        <div>
            <div className='headerSection'>
            <div className='mx-auto w-full md:w-8/12'>
                <Header></Header>
            </div>
            </div>


            <TopCompanies></TopCompanies>

            <div className='mx-auto w-full md:w-10/12'>
                <Features></Features>
            </div>

            <div className='mx-auto w-full md:w-10/12'>
                <div className='mt-20'>
                    <h2 className='font-bold text-5xl text-center'> <span className='text-green-500'>Featured</span> Tasks</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20'>
                        {
                            tasks.map((task) => <Zoom cascade triggerOnce><div key={task._id} className='bg-base-200 p-8 rounded-2xl shadow-md'>

                                <div className='flex justify-center my-5'>
                                    <img src={working} alt="job" className='w-30' />
                                </div>

                                <h1 className='text-lg font-semibold'>{task.title}</h1>
                                <div className='flex flex-col lg:flex-row gap-2 mt-4'>
                                    <button className='btn btn-xs btn-primary rounded-full border-0'><FaTag /> {task.category}</button>
                                    <button className='btn btn-xs btn-outline rounded-full'>{task.deadline}</button>
                                </div>

                                <p className='mt-4'>Posted By: {task.userName}</p>

                                <hr className='border-gray-300 mt-3' />

                                <div className='flex items-center justify-between'>
                                    <p className='text-lg mt-4'>Budget: ${task.budget}</p>
                                    <NavLink to={`/tasks/${task._id}`} className='mt-4 btn bg-green-200 text-green-800 border-1 border-green-500  btn-sm rounded-full'>View Details</NavLink>
                                </div>

                            </div> </Zoom> )
                        }
                    </div>
                    <div className='text-center mt-10 mb-30'>
                        <NavLink to='/browseTasks' className='btn bg-green-500 text-white border-0 rounded-full'>Show All Tasks</NavLink>
                    </div>
                </div>
            </div>

            <div className='mx-auto w-full md:w-10/12'>
                <Slide direction="up" cascade triggerOnce>
                <div className='bg-base-200 p-8 rounded-2xl flex flex-col md:flex-row gap-10 items-center'>
                    <div className='w-full md:w-7/12'>
                        <h2 className='text-5xl'> <span className='text-green-500 font-bold'>Go beyond</span>  <br />
                            your network</h2>
                            <p className='text-gray-500 mt-3'>Lean into our network of top contractors. Source freelancers with our exclusive matching, directly invite from your network, or share your job for anyone to apply from around the web.</p>
                             <NavLink to='/signin' className='btn btn-lg text-white bg-green-500 rounded-full border-0 mt-5'>Get Started</NavLink>
                    </div>
                    <div className='w-full md:w-5/12'>
                        <img src={goBeyond} alt="goBeyond" className='w-full' />
                    </div>
                </div>
                </Slide>
            </div>

            <Reviews></Reviews>

            <div className='solutionSection py-20'>
                <Solutions></Solutions>
            </div>

        </div>
    );
};

export default Home;