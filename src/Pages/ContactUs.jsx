import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

const ContactUs = () => {

    const notifySuccess = (message) => {
        toast.success(`${message}`, {
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
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        form.reset();
        notifySuccess('Message sent!')
    };

    return (
        <div className='bg-base-200 text-base-content py-20 px-6 md:px-20 min-h-screen'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/* Contact Info */}
                <div>
                    <h2 className='text-5xl font-bold mb-4 text-green-500'>Contact Us</h2>
                    <p className='mb-6 text-lg'>
                        We’re on a mission to simplify how tasks are shared, managed, and completed —
                        empowering freelancers and clients through trust, technology, and collaboration.
                    </p>

                    <div className='space-y-4'>
                        <div className='flex items-start gap-3'>
                            <FaPhone className='mt-1 text-green-500' />
                            <span>+88 000 1111 2233</span>
                        </div>
                        <div className='flex items-start gap-3'>
                            <FaEnvelope className='mt-1 text-green-500' />
                            <span>fav.freelancer@contact.com</span>
                        </div>
                        <div className='flex items-start gap-3'>
                            <FaMapMarkerAlt className='mt-1 text-green-500' />
                            <span>
                                1216/1/A, Street No - 98, Gulshan<br />
                                Dhaka, Bangladesh
                            </span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h2 className='text-2xl font-semibold mb-4'>Send a Message</h2>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <input
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            className='input input-bordered w-full'
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            className='input input-bordered w-full'
                            required
                        />
                        <textarea
                            name='message'
                            rows='5'
                            placeholder='Your Message'
                            className='textarea textarea-bordered w-full'
                            required
                        ></textarea>
                        <button
                            type='submit'
                            className='btn bg-green-500 text-white border-0 rounded-full px-6'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
