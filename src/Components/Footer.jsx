import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer lg:footer-horizontal text-base-content pr-10 pl-10 pt-40 pb-40 md:w-10/12 mx-auto">

                <nav>
                    
                    <NavLink to='/' className="text-3xl font-bold"> <i><span className='text-green-500'>fav</span></i> freelancer</NavLink>
                    <p className='my-3'>We’re on a mission to simplify how tasks are shared, managed, and completed — <br />
                        empowering freelancers and clients through trust, technology, and collaboration.</p>
                    <div className='flex items-center gap-2'>
                    <IoIosCall /> <p>+88 000 1111 2233 </p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <MdEmail /><p>fav.freelancer@contact.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <FaLocationDot /><p>1216/1/A, Street No - 98, Gulshan <br />
                    Dhaka, Bangladesh</p>
                    </div>

                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/dashboard/addTask'>Add Task</NavLink> 
                        <NavLink to='/browseTasks'>Browse Tasks</NavLink> 
                        <NavLink to='/dashboard/myTasks'>My Tasks</NavLink>
                </nav>
                <nav>
                    <h6 className="footer-title">General</h6>
                    <NavLink to='/aboutUs'>About Us</NavLink> 
                    <a className="link link-hover">Terms & conditions</a>
                    <NavLink to='/contactUs'>Contact Us</NavLink> 
                    
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join mt-2">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Join</button>
                        </div>
                    </fieldset>

                    <h6 className="footer-title">Follow us: </h6>
                    <div className='flex gap-3'>
                        <a href="https://www.google.com/" target='_blank'><FaGoogle size={20} /></a>
                        <a href="https://www.facebook.com/" target='_blank'><FaFacebook size={20}/></a>
                        <a href="https://www.linkedin.com/" target='_blank'><FaLinkedinIn size={20}/></a>
                        <a href="https://www.x.com/" target='_blank'><FaTwitter size={20}/></a>
                    </div>
                </form>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by FavFreelancer Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;