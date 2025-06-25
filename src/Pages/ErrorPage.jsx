import React from 'react';
import ErrorImg from '../assets/404 error lost in space-bro.svg'
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto'>

            <div className='text-center py-20'>

                <div className='flex items-center justify-center'>
                    <img src={ErrorImg} alt="pic" className='max-w-md' />
                </div>

                <p className='my-5 text-gray-400'>Oops! The page you're looking for doesn't exist. <br />
                    It might have been moved, deleted, or you might have typed the wrong URL.</p>
                <NavLink to='/'><button className='btn btn-primary rounded-full'>Go Back to Home Page</button></NavLink>
            </div>

        </div>
    );
};

export default ErrorPage;