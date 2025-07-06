import React, { use, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import './Navbar.css'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import { CgDarkMode } from "react-icons/cg";

const Navbar = () => {

    const [theme, setTheme] = useState('light');

    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };


    const notifyError = (message) => toast.error(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });



    const notifySuccess = (message) => toast.success(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });


    const handleLogout = () => {
        logOut()
            .then(() => {
                //alert('You logged out successfully');
                notifySuccess('Bye, Have a nice day!');
                setTimeout(() => {
                    navigate('/signin');
                }, 1000);
            })
            .catch((error) => {
                //alert(error);
                notifyError(error);
            })
    }


    return (
        <div className="navbar bg-base-100 mt-3 mx-auto w-full md:w-10/12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li> <NavLink to='/'>Home</NavLink> </li>
                        <li> <NavLink to='/browseTasks'>Browse Tasks</NavLink> </li>
                        <li><NavLink to='/aboutUs'>About us</NavLink></li>
                        <li><NavLink to='/contactUs'>Contact us</NavLink></li>
                    </ul>
                </div>
                <NavLink to='/' className="text-3xl font-bold ml-2 md:hidden"> <i><span className='text-green-500'>fav</span></i></NavLink>
                <NavLink to='/' className="text-3xl font-bold ml-2 hidden md:block"> <i><span className='text-green-500'>fav</span></i> freelancer</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <NavLink to='/'>Home</NavLink> </li>
                    <li> <NavLink to='/browseTasks'>Browse Tasks</NavLink> </li>
                    <li><NavLink to='/aboutUs'>About us</NavLink></li>
                    <li><NavLink to='/contactUs'>Contact us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">

                <div className="form-control mt-1">
                    <label className="label cursor-pointer">
                        <CgDarkMode size={25} />
                        <input type="checkbox" className="toggle theme-controller" onChange={toggleTheme} checked={theme === 'dark'} />
                    </label>
                </div>

                {
                    user ?  <Link to='/dashboard' className="btn rounded-full bg-green-500 text-white border-0 btn-sm">Dashboard</Link> : ""
                }
                {
                    user ? <div className="dropdown dropdown-end dropdown-hover"> <div className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User"
                                src={user.photoURL} title={user ? user.displayName : 'Anonymous'} />
                        </div>
                    </div>
                        <ul
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 p-2 shadow-lg">
                            <li className='py-2'>
                                <p className='text-xl font-semibold'>{user.displayName}</p>
                                <p>{user.email}</p>
                            </li>
                            
                            <li className='py-2'><button onClick={handleLogout} className="btn rounded-full bg-green-500 text-white border-0 btn-sm">Signout</button></li>
                        </ul> </div> : <div className='flex gap-2'>
                        <NavLink to='/signin' className="btn rounded-full  bg-green-500 text-white border-0">Signin</NavLink>
                        <NavLink to='/signup' className="btn rounded-full">Register</NavLink>
                    </div>
                }



            </div>
        </div>
    );
};

export default Navbar;