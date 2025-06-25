import React from 'react';
import Slider from "react-slick";
import { FaGoogle } from "react-icons/fa";
import { GrGoogleWallet } from "react-icons/gr";
import { PiGooglePhotosLogoFill } from "react-icons/pi";
import { PiGoogleCardboardLogoFill } from "react-icons/pi";
import { FaApple } from "react-icons/fa";
import { PiSnapchatLogoFill } from "react-icons/pi";
import { IoRocketSharp } from "react-icons/io5";

const TopCompanies = () => {


    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    }

    return (
        <div className='mb-10'>

            <div className="overflow-x-hidden mt-15 bg-green-500 py-4">
                <Slider {...settings}>

                    <div className="slide-item px-2">
                        <div className='rounded-2xl bg-base-100 px-8 py-4 '>
                            <div className='flex justify-center'>
                                <FaGoogle size={40} />
                            </div>
                        </div>
                    </div>


                    <div className="slide-item px-2">
                        <div className='rounded-2xl bg-base-100 px-8 py-4 '>
                            <div className='flex justify-center'>
                                <GrGoogleWallet size={40} />
                            </div>
                        </div>
                    </div>

                    <div className="slide-item px-2">
                        <div className='rounded-2xl bg-base-100 px-8 py-4 '>
                            <div className='flex justify-center'>
                                <PiGooglePhotosLogoFill size={40} />
                            </div>
                        </div>
                    </div>

                    <div className="slide-item px-2">
                        <div className='rounded-2xl bg-base-100 px-8 py-4 '>
                            <div className='flex justify-center'>
                                <PiGoogleCardboardLogoFill size={40} />
                            </div>
                        </div>
                    </div>

                    <div className="slide-item px-2">
                        <div className='rounded-2xl bg-base-100 px-8 py-4 '>
                            <div className='flex justify-center'>
                                <FaApple size={40} />
                            </div>
                        </div>
                    </div>

                    <div className="slide-item px-2">
                        <div className='rounded-2xl bg-base-100 px-8 py-4 '>
                            <div className='flex justify-center'>
                                <PiSnapchatLogoFill size={40} />
                            </div>
                        </div>
                    </div>

                    <div className="slide-item px-2">
                        <div className='rounded-2xl bg-base-100 px-8 py-4 '>
                            <div className='flex justify-center'>
                                <IoRocketSharp size={40} />
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>

        </div>
    );
};

export default TopCompanies;