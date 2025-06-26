import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';

const DashBoardLayout = () => {
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
                     <NavLink to='/' className="text-3xl font-bold ml-2 md:hidden"> <i><span className='text-green-500'>fav</span></i></NavLink>
                    <NavLink to='/' className="text-3xl font-bold ml-2 hidden md:block"> <i><span className='text-green-500'>fav</span></i> freelancer</NavLink>
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

                <ul className="menu bg-base-200 w-80 min-h-full p-4 text-base-content">
                    {/* Sidebar content */}
                    <li> <NavLink to='/' className="text-3xl font-bold md:hidden"> <i><span className='text-green-500'>fav</span></i></NavLink>
                    <NavLink to='/' className="text-3xl font-bold ml-2 hidden md:block"> <i><span className='text-green-500'>fav</span></i> freelancer</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink to='myTasks'>My Tasks</NavLink></li>
                    <li><NavLink to='myProfile'>My Profile</NavLink></li>
                    <li><NavLink to='/'>Back to Home</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoardLayout;
