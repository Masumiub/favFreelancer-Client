import React, { Component } from 'react';
import { NavLink } from 'react-router';
import Slider from "react-slick";
import banner1 from '../assets/banner1.svg';
import banner2 from '../assets/banner2.svg';
import banner3 from '../assets/Work chat-bro.svg';
import { Fade, Slide } from "react-awesome-reveal";

const Header = () => {


    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    return (
        <div className='overflow-x-hidden slider-container my-10'>

            <Slider {...settings}>

                <div>
                    <div className='text-center'>

                        <h1 className='text-3xl md:text-4xl lg:text-6xl mt-20'>A new way to source
                            <span className='text-green-500 font-bold'> <Fade cascade damping={1e-1}>freelancers & contractors</Fade></span> </h1>


                        <p className='text-gray-400 mt-8 text-md md:text-xl'>Our applicant tracking system is more than a tool. It's your end-to-end hiring partner. Make every hire count with favFreelancer.</p>
                        <NavLink to='/signin' className='btn btn-lg text-white bg-green-500 rounded-full border-0 mt-10'>Get Started</NavLink>
                    </div>
                    <div className='flex items-center justify-center'>

                        <img src={banner1} alt="img" className='rounded-2xl  mt-10 mb-10 h-[50vh]' />


                    </div>
                </div>

                <div>
                    <div className='text-center'>

                        <h1 className='text-3xl md:text-4xl lg:text-6xl mt-20'>Find global and remote
                            <span className='text-green-500 font-bold'> <Fade cascade damping={1e-1}>freelance jobs</Fade>
                            </span> </h1>


                        <p className='text-gray-400 mt-8 text-md md:text-xl'>Whatever your skillset, find freelance jobs for your next project on favFreelancer. Browse remote jobs from creative agencies to high growth tech companies.</p>
                        <NavLink to='/signin' className='btn btn-lg text-white bg-green-500 rounded-full border-0 mt-10'>Get Started</NavLink>
                    </div>
                    <div className='flex items-center justify-center'>

                        <img src={banner2} alt="img" className='rounded-2xl  mt-10 mb-10 h-[50vh]' />


                    </div>
                </div>


                <div>
                    <div className='text-center'>

                        <h1 className='text-3xl md:text-4xl lg:text-6xl mt-20'>Manage your team's
                            <span className='text-green-500 font-bold'> <Fade cascade damping={1e-1}>freelance & contract projects</Fade>
                            </span> </h1>


                        <p className='text-gray-400 mt-8 text-md md:text-xl'>Consolidate your workflow for managing freelance and contract projects with our company workspaces. Increase efficiency and gain visibility into every skills-based hire.</p>
                        <NavLink to='/signin' className='btn btn-lg text-white bg-green-500 rounded-full border-0 mt-10'>Get Started</NavLink>
                    </div>
                    <div className='flex items-center justify-center'>

                        <img src={banner3} alt="img" className='rounded-2xl mt-10 mb-10 h-[50vh]' />


                    </div>
                </div>


            </Slider>


        </div>
    );
};

export default Header;