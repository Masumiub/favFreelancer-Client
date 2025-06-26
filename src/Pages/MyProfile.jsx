import React, { use, useEffect } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { NavLink, useNavigate } from 'react-router';
import { MdOutlineEmail } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
    const { user, loading } = use(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate('signin');
        }
    }, [user, navigate, loading]);

    if (loading) {
        return <div className="text-center mt-20"><p className="text-center my-20"><span className="loading loading-spinner text-primary loading-xl"></span></p></div>;
    }
    if (!user) {
        return null;
    }


    return (
        <div>


            <div className='flex flex-col text-center md:text-left items-center gap-3 rounded-2xl bg-white shadow-2xl w-full mx-auto mt-10'>
                <div className="w-full">
                    <figure className="w-full">
                        <img
                            src="https://images.unsplash.com/photo-1462331321792-cc44368b8894?q=80&w=3953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="bg"
                            className="w-full h-[180px] object-cover rounded-2xl"
                        />
                    </figure>
                </div>
                <div>
                    <img src={user?.photoURL} alt="profilepic" className='w-20 rounded-full border-2 border-green-500' />
                </div>

                <div className='text-center'>
                    <h1 className='font-bold'>User Info</h1>
                    <h1 className='font-bold text-4xl'>{user?.displayName}</h1>
                    <div className='flex gap-2 items-center justify-center mt-3'>
                        <MdOutlineEmail />
                        <p> {user?.email}</p>
                    </div>
                    <NavLink to='/updateProfile' className='btn bg-green-500 text-white border-0 rounded-full btn-sm mt-5 mb-10'> <FaEdit />Update Profile</NavLink>
                </div>
            </div>

            <div className='mt-10 flex gap-2 flex-wrap md:flex-row md:gap-2 justify-center'>
                {
                    user.emailVerified ? <button className='btn btn-xs btn-primary'>Email Verfified</button> : <button className='btn btn-xs bg-red-100 text-red-500 border-1 border-red-500'>Email Not Verfified</button>
                }
                {
                    user.isAnonymous ? <button className='btn btn-xs bg-red-100 text-red-500 border-1 border-red-500'>User Anonymous</button> : <button className='btn btn-xs text-green-600 border-1 border-green-500 bg-green-100'>User Not Anonymous</button>
                }
                {
                    user.phoneNumber ? <button className='btn btn-xs btn-primary'>Phone : {user.phoneNumber} </button> : <button className='btn btn-xs bg-red-100 text-red-500 border-1 border-red-500'>Phone number not Added</button>
                }
            </div>
        </div>
    );
};

export default MyProfile;