import React, { use } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import { IoIosStats } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { MdAddTask } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { TbArrowBackUp } from "react-icons/tb";
import { AuthContext } from '../Context/AuthProvider';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { RiLogoutBoxLine } from "react-icons/ri";


const DashBoardLayout = () => {

    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate();

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
        <div className="drawer md:drawer-open">
            {/* Drawer toggle for small screen */}
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            {/* Page content */}
            <div className="drawer-content flex flex-col">
                {/* Navbar (visible only on small screens) */}
                <div className="navbar bg-base-300 md:hidden">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                     <NavLink to='/' className="text-3xl font-bold md:hidden"> <i><span className='text-green-500'>fav</span></i></NavLink>
                    <NavLink to='/' className="text-3xl font-bold hidden md:block"> <i><span className='text-green-500'>fav</span></i> freelancer</NavLink>
                </div>

                {/* Main content */}
                <div className="p-4">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar (drawer side) - always visible on md+ screens */}
            <div className="drawer-side">
                {/* Overlay only for small screens */}
                <label htmlFor="my-drawer-3" className="drawer-overlay md:hidden"></label>

                <ul className="menu bg-base-300 w-80 min-h-full p-4 text-base-content">
                    {/* Sidebar content */}
                    <li> <NavLink to='/' className="text-3xl font-bold md:hidden"> <i><span className='text-green-500'>fav</span></i></NavLink>
                    <NavLink to='/' className="text-3xl font-bold hidden md:block"> <i><span className='text-green-500'>fav</span></i> freelancer</NavLink></li>
                    <li><NavLink to='/dashboard' className='mt-10'><IoIosStats />Dashboard</NavLink></li>
                    <li><NavLink to='myTasks'><BiTask />My Tasks</NavLink></li>
                    <li><NavLink to='addTask'><MdAddTask />Add Task</NavLink></li>
                    <li><NavLink to='/browseTasks'><MdFormatListBulleted />All Tasks</NavLink></li>
                    <li><NavLink to='myProfile'><FaRegUser />My Profile</NavLink></li>
                    <li><NavLink to='/'><TbArrowBackUp />Back to Home</NavLink></li>
                    <li><button onClick={handleLogout}><RiLogoutBoxLine />Signout</button></li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoardLayout;
