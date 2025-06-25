import React, { use } from 'react';
//import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import addTaskPic from '../assets/addTaskPic.svg';
import { Bounce, toast } from 'react-toastify';

const AddTask = () => {

    //const navigate = useNavigate();

    const { user } = use(AuthContext);

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

    const handleAddTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const Task = Object.fromEntries(formData.entries());

        const newTask = {
            ...Task,
            userName: user?.displayName,
            userEmail: user?.email,
            bidsCount: 0,
            postedAt: new Date(),
        }
        console.log(newTask);

        fetch('https://fav-freelancer-server.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    notifySuccess('Your New Task was created successfully!')
                    //console.log('Task added to DB');
                    //alert('Data added to DB');
                }
            })
            .catch(error => {
                notifyError(`Oops! Task was not created, ${error}`)
                //console.log('Error in fetch', error);
            })
    }

    return (
        <div className='mx-auto w-full md:w-6/12'>

            <div className='flex flex-col md:flex-row items-center justify-between gap-10 mt-10'>
                <div className='w-full  md:w-8/12'>
                    <h2 className='font-bold text-5xl'>Add New Task </h2>
                    {/* <p className='text-xs mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem facere pariatur, blanditiis quidem fugit natus quia possimus illum deleniti adipisci voluptate dicta vel recusandae?</p> */}
                </div>

                <div className='w-full md:w-4/12'>
                    <img src={addTaskPic} alt="browseTask" className='w-full' />
                </div>
            </div>


            <div className='mt-10 mb-25'>
                <form onSubmit={handleAddTask}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Title</label>
                        <input type="text" className="input w-full" name="title" placeholder="Enter task title" required />

                        {/* <label className="label">Category</label>
                        <input type="text" className="input w-full" name='category' placeholder="Enter Category name" /> */}

                        <label className="label">Category</label>
                        <select name="category" className="select w-full" required>
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
                        <textarea className="textarea w-full" placeholder="Description" name='description' required></textarea>

                        <label className="label">Deadline</label>
                        <input type="date" className="input w-full" name='deadline' placeholder="Deadline" required />

                        <label className="label">Budget</label>
                        <input type="text" className="input w-full" name='budget' placeholder="Budget" required />


                        <label className="label">User Name</label>
                        <input type="text" className="input w-full" name='userName' placeholder="userName" defaultValue={user?.displayName} disabled={true} />

                        <label className="label">User Email</label>
                        <input type="text" className="input w-full" name='userEmail' placeholder="userEmail" defaultValue={user?.email} disabled={true} />

                    </fieldset>
                    <button type='submit' className='btn w-full mt-4'>Add Task</button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;