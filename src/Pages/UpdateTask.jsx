import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import updateTaskPic from '../assets/updateTask.svg';
import { Bounce, toast } from 'react-toastify';

const UpdateTask = () => {

    const { _id, title, category, description, deadline, budget, userName, userEmail, } = useLoaderData();

    //console.log(_id, title);

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

    const { user } = use(AuthContext);

    const handleUpdateTask = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const Task = Object.fromEntries(formData.entries());

        const updatedTask = {
            ...Task,
            userName: user?.displayName,
            userEmail: user?.email,
            postedAt: new Date(),
        }

        //console.log(updatedTask);

        fetch(`https://fav-freelancer-server.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount) {
                    //alert('Data Updated Successfully')
                    notifySuccess('Task was updated successfully!')
                }
                else{
                    notifyError('Oops! Update could not process.')
                }
            })

    }

    return (
        <div>
            <div className='w-full'>

                <div className='flex flex-col md:flex-row items-center justify-between gap-10 mt-10'>
                    <div className='w-full  md:w-8/12'>
                        <h2 className='font-bold text-5xl'>Update Task </h2>
                        {/* <p className='text-xs mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem facere pariatur, blanditiis quidem fugit natus quia possimus illum deleniti adipisci voluptate dicta vel recusandae?</p> */}
                    </div>

                    <div className='w-full md:w-4/12'>
                        <img src={updateTaskPic} alt="browseTask" className='w-full h-45' />
                    </div>
                </div>

                <div className='mt-10 mb-20'>
                    <form onSubmit={handleUpdateTask}>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                            <label className="label">Title</label>
                            <input type="text" className="input w-full" name="title" placeholder="Enter task title" defaultValue={title} required />
                            {/* 
                            <label className="label">Category</label>
                            <input type="text" className="input w-full" name='category' placeholder="Enter Category name" defaultValue={category} /> */}

                            <label className="label">Category</label>
                            <select name="category" className="select w-full" defaultValue={category} required>
                                <option disabled selected value="">Select a category</option>
                                <option value="programming & tech">Programming & Tech</option>
                                <option value="graphic design">Graphic Design</option>
                                <option value="digital marketing">Digital Marketing</option>
                                <option value="writing & translation">Writing & Translation</option>
                                <option value="video & animation">Video & Animation</option>
                                <option value="AI services">AI Services</option>
                                <option value="music & audio">Music & Audio</option>
                                <option value="business">Business</option>
                                <option value="consulting">Consulting</option>
                            </select>

                            <label className="label">Description</label>
                            <textarea className="textarea w-full" placeholder="Description" name='description' defaultValue={description} required></textarea>

                            <label className="label">Deadline</label>
                            <input type="date" className="input w-full" name='deadline' placeholder="Deadline" defaultValue={deadline} required />

                            <label className="label">Budget</label>
                            <input type="text" className="input w-full" name='budget' placeholder="Budget" defaultValue={budget} required />

                            <label className="label">User Name</label>
                            <input type="text" className="input w-full" name='userName' placeholder="userName" defaultValue={userName} disabled={true} />

                            <label className="label">User Email</label>
                            <input type="text" className="input w-full" name='userEmail' placeholder="userEmail" defaultValue={userEmail} disabled={true} />
                        </fieldset>
                        <button type='submit' className='btn w-full mt-4'>Update Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;