import React from 'react';
import { FaUsers, FaLaptopCode, FaHandshake, FaBolt, FaShieldAlt, FaHeart } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="bg-base-200 text-base-content px-4 py-20">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-5xl font-bold text-center mb-4">
                    About <span className="text-green-500">Us</span>
                </h2>
                <p className="text-center max-w-2xl mx-auto mb-16">
                    We’re on a mission to simplify how tasks are shared, managed, and completed — empowering freelancers and clients through trust, technology, and collaboration.
                </p>

                {/* Who We Are */}
                <section className="mb-16">
                    <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
                    <p className="">
                        We are a diverse group of developers, designers, and product thinkers with a shared goal: to build a task platform that truly serves its users. Whether you’re here to get work done or find help, we’re committed to making that experience smooth, secure, and enjoyable.
                    </p>
                </section>

                {/* What We Do */}
                <section className="mb-16">
                    <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
                    <p className="">
                        We connect clients with skilled freelancers and remote workers. Our platform allows users to post tasks, find talent, manage progress, and make secure payments — all in one place. From tech gigs to creative projects, we’re here to help you get things done.
                    </p>
                </section>

                {/* Core Values */}
                <section className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Our Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card bg-base-200 shadow-md p-6 rounded-xl text-center">
                            <FaBolt className="text-3xl text-green-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-lg mb-2">Speed & Simplicity</h4>
                            <p className="">We design tools that are easy to use and fast to act on, so users can focus on what matters.</p>
                        </div>
                        <div className="card bg-base-200 shadow-md p-6 rounded-xl text-center">
                            <FaShieldAlt className="text-3xl text-green-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-lg mb-2">Transparency & Trust</h4>
                            <p className="">We foster a reliable environment with fair rules, clear terms, and secure systems.</p>
                        </div>
                        <div className="card bg-base-200 shadow-md p-6 rounded-xl text-center">
                            <FaHeart className="text-3xl text-green-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-lg mb-2">Empathy & Support</h4>
                            <p className="">We care about our community and actively support users with real human help.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="mb-20">
                    <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
                    <ul className="list-disc list-inside  space-y-2">
                        <li>✅ Simple and intuitive task posting and browsing</li>
                        <li>✅ Verified freelancers and trusted clients</li>
                        <li>✅ Secure transactions and dispute handling</li>
                        <li>✅ Real-time notifications and communication tools</li>
                        <li>✅ Continuous improvements based on user feedback</li>
                    </ul>
                </section>

                {/* Optional: Meet the Team */}
                <section>
                    <h3 className="text-2xl font-semibold mb-8 text-center">Meet the Team</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        {[
                            { name: 'Masum Musfique', role: 'Frontend Developer', img: 'https://i.pravatar.cc/150?img=12' },
                            { name: 'Sarah Rahman', role: 'UI/UX Designer', img: 'https://i.pravatar.cc/150?img=47' },
                            { name: 'Amit Roy', role: 'Backend Engineer', img: 'https://i.pravatar.cc/150?img=20' },
                        ].map((member, i) => (
                            <div key={i} className="bg-base-200 p-6 rounded-xl shadow-md">
                                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                                <h4 className="font-bold">{member.name}</h4>
                                <p className="text-sm ">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
