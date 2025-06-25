import React from 'react';
import Slider from "react-slick";


const Reviews = () => {


    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024, 
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 1
              }
            }
          ]
    }

    return (
        <div className='mt-20'>
            <div className='text-center py-5'>
                <h1 className='text-5xl'>Our <span className='text-green-500 font-bold'>Happy</span> Clients</h1>
                <p className='mt-3 text-gray-400'>favFreelancer offers serious value for employers and candidates alike.</p>
            </div>


            <div className="overflow-x-hidden mt-15 bg-base-200 py-8">
            <Slider {...settings}>

            <div className="slide-item px-2">
                <div className='rounded-2xl bg-base-100 px-8 py-12 border-1 border-gray-200'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src="https://www.vhv.rs/dpng/d/191-1918102_circle-profile-chengsu-chen-hd-png-download.png" alt="user" className='w-12 h-12 rounded-full' />
                        </div>
                        <div>
                            <h2 className='font-semibold text-xl'>Emma Rodriguez</h2>
                            <p className='text=gray-500 text-sm'>Talent Acquisition Specialist, NexaTech</p>
                        </div>
                    </div>
                    <div>
                        <p className='mt-4 text-gray-400 text-sm'>This platform connected us with exceptional candidates faster than any other portals</p>
                    </div>
                </div>
            </div>


            <div className="slide-item px-2">
                <div className='rounded-2xl bg-base-100 px-8 py-12 border-1 border-gray-200'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png" alt="user" className='w-12 h-12 rounded-full' />
                        </div>
                        <div>
                            <h2 className='font-semibold text-xl'>Arjun Mehta</h2>
                            <p className='text=gray-500 text-sm'>Software Engineer, CodeBlaze</p>
                        </div>
                    </div>
                    <div>
                        <p className='mt-4 text-gray-400 text-sm'>I found a great remote job here. The interface was intuitive and saved me a lot of time.</p>
                    </div>
                </div>
            </div>

            <div className="slide-item px-2">
                <div className='rounded-2xl bg-base-100 px-8 py-12 border-1 border-gray-200'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src="https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png" alt="user" className='w-12 h-12 rounded-full' />
                        </div>
                        <div>
                            <h2 className='font-semibold text-xl'>Sarah O'Connor</h2>
                            <p className='text=gray-500 text-sm'>HR Manager, BrightCore</p>
                        </div>
                    </div>
                    <div>
                        <p className='mt-4 text-gray-400 text-sm'>The filtering and posting options are easy to use. We've filled several key roles successfully.</p>
                    </div>
                </div>
                </div>

                <div className="slide-item px-2">
                <div className='rounded-2xl bg-base-100 px-8 py-12 border-1 border-gray-200'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src="https://www.pngfind.com/pngs/m/317-3177131_636682202684372240-user-profile-photo-round-hd-png-download.png" alt="user" className='w-12 h-12 rounded-full' />
                        </div>
                        <div>
                            <h2 className='font-semibold text-xl'>Daniel Kim</h2>
                            <p className='text=gray-500 text-sm'>Product Manager, LoopWorks</p>
                        </div>
                    </div>
                    <div>
                        <p className='mt-4 text-gray-400 text-sm'>Slick, fast, and effective. We received quality applications within hours of posting.</p>
                    </div>
                </div>
                </div>

                <div className="slide-item px-2">
                <div className='rounded-2xl bg-base-100 px-8 py-12 border-1 border-gray-200'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src="https://www.kindpng.com/picc/m/404-4042717_face-profile-png-circle-profile-picture-hd-png.png" alt="user" className='w-12 h-12 rounded-full' />
                        </div>
                        <div>
                            <h2 className='font-semibold text-xl'>Laila Ahmed</h2>
                            <p className='text=gray-500 text-sm'>UI/UX Designer, Creativo</p>
                        </div>
                    </div>
                    <div>
                        <p className='mt-4 text-gray-400 text-sm'>The portal helped me land a dream design role within a week. Highly recommended!</p>
                    </div>
                </div>
                </div>

            </Slider>
            </div>

        </div>
    );
};

export default Reviews;