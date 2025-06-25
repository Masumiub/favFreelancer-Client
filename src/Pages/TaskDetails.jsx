import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import taskpic from '../assets/task.svg';
import { Bounce, toast } from 'react-toastify';

const TaskDetails = () => {

    const tasks = useLoaderData();
    const { id } = useParams();
    const singleTask = tasks.find(task => task._id === (id));
    //console.log(singleTask)

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

    const [bid, setBid] = useState(singleTask.bidsCount);

    const handleBid = () => {
        const newBidCount = bid + 1;
        setBid(newBidCount);

        const id = singleTask._id;

        fetch(`https://fav-freelancer-server.vercel.app/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ bidsCount: newBidCount })
        })
            .then(res => res.json())
            .then(data => {
                //console.log('After update patch', data);
                notifySuccess('Your Bid was added!')
            })
    }

    return (
        <div className='w-full md:w-8/12 mx-auto'>
            <div className='text-center bg-base-200 my-10 p-10 rounded-2xl'>
                <h2 className='text-4xl font-bold'>Task Details</h2>
            </div>
            <div className='mt-10 mb-25'>

                <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                    <div className='w-full md:w-8/12'>

                        <h2 className='text-2xl'>{singleTask.title}</h2>
                        <button className='btn btn-primary btn-sm rounded-full mt-5'>{singleTask.category}</button>

                        <p className='mt-4 '>You bid for <span className='font-bold text-green-500'>{bid}</span> opportunities *</p>

                        <p className='mt-8 font-semibold'>Task Details:</p>
                        <p className='mt-2 text-gray-500'>{singleTask.description}
                        </p>
                    </div>

                    <div className='w-full md:w-4/12'>
                        <img src={taskpic} alt="taskpic" />
                    </div>
                </div>



                <div className='flex flex-col md:flex-row items-center justify-between mt-8 gap-4'>

                    <div className='w-full md:w-1/2 bg-base-200 p-3 rounded-xl'>
                        <p className='font-semibold'>Application Deadline:</p>
                        <p className='mt-2'>{singleTask.deadline}</p>
                    </div>

                    <div className='w-full md:w-1/2 bg-base-200 p-3 rounded-xl'>
                        <p className='font-semibold'>Budget:</p>
                        <p className='mt-2 font-bold text-xl'>${singleTask.budget}</p>
                    </div>
                </div>

                <div className='w-full bg-base-200 p-3 rounded-xl mt-8'>
                    <p className=' font-semibold'>Posted at:</p>
                    <p className='mt-2 text-gray-500'>{singleTask.postedAt}</p>
                </div>


                <div className='flex flex-col md:flex-row items-center justify-between mt-8 gap-4'>

                    <div className='w-full md:w-1/2 bg-base-200 p-3 rounded-xl'>
                        <p className='font-semibold'>Posted By:</p>
                        <p className='mt-2'>{singleTask.userName}</p>
                    </div>

                    <div className='w-full md:w-1/2 bg-base-200 p-3 rounded-xl'>
                        <p className='font-semibold'>Owner Email:</p>
                        <p className='mt-2'>{singleTask.userEmail}</p>
                    </div>
                </div>

                <div className='mt-7'>
                    <button onClick={() => handleBid()} className='btn text-white bg-green-500 rounded-full btn-lg'>Bid Now!</button>
                </div>

            </div>
        </div>
    );
};

export default TaskDetails;