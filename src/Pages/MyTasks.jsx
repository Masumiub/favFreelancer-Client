import React, { use, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import myTask from '../assets/myTask.svg'
import { useRef } from 'react';

const MyTasks = () => {

    const tasks = useLoaderData();
    const { user } = use(AuthContext);

    const filteredTask = tasks.filter((task) => task.userEmail === user.email);

    const [allTasks, setAllTasks] = useState(filteredTask);

    const handleDeleteTask = (_id) => {
        if (!user) {
            return null;
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://fav-freelancer-server.vercel.app/tasks/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            //console.log('After Delete', data);
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Task has been deleted.",
                                    icon: "success"
                                });

                                const remainingTasks = allTasks.filter(task => task._id !== _id);
                                setAllTasks(remainingTasks);
                            }
                        })
                }
            })

    }

    const [selectedTask, setSelectedTask] = useState(null);
    const modalRef = useRef();

    const openModal = (task) => {
        setSelectedTask(task);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };


    return (
        <div className='w-full'>

            <div className='flex flex-col md:flex-row items-center justify-between my-10 gap-10'>
                <div className='w-full  md:w-8/12'>
                    <h2 className='font-bold text-5xl'>My Tasks </h2>
                    {/* <p className='text-xs mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem facere pariatur, blanditiis quidem fugit natus quia possimus illum deleniti adipisci voluptate dicta vel recusandae?</p> */}
                </div>

                <div className='w-full md:w-4/12'>
                    <img src={myTask} alt="browseTask" className='w-full h-45' />
                </div>
            </div>

            <div className='my-20'>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Title</th>
                                <th>Category</th>
                                <th>Deadline</th>
                                <th>Budget</th>
                                <th>Bids</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTasks.length == 0 ? <tr><td colSpan={6} className='text-center text-2xl'>Sorry! You don't have any task now!</td></tr> :
                                    allTasks.map((task, index) => <tr key={task._id}>
                                        <td>{index + 1}</td>
                                        <td><h1 className='font-bold'>{task.title}</h1></td>
                                        <td><p>{task.category}</p></td>
                                        <td><p>{task.deadline}</p></td>
                                        <td><p>${task.budget}</p></td>
                                        {/* <td><p>{task.bidsCount}</p></td> */}
                                        <td><button className='btn btn-xs rounded-full' onClick={() => openModal(task) }>Show</button></td>

                                        <dialog ref={modalRef} id="my_modal_1" className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Bids for your task:</h3>
                                                <p className='text-2xl mt-3'>{selectedTask?.title}</p>
                                                <p className="font-bold text-xl mt-3">Count: {selectedTask?.bidsCount}</p>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>

                                        <td className='flex flex-col md:flex-row gap-2'>
                                            <Link className='btn btn-xs rounded-full' to={`/updateTask/${task._id}`}> <FaEdit /> Edit</Link>
                                            <Link className='btn btn-xs rounded-full' onClick={() => handleDeleteTask(task._id)}><MdDelete /> Delete</Link>
                                            <NavLink to={`/tasks/${task._id}`} className='btn btn-xs bg-green-500 text-white rounded-full border-0'>View</NavLink>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default MyTasks;