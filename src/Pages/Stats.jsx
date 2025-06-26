import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';


const Stats = () => {

    const tasks = useLoaderData();
    const { user } = useContext(AuthContext);

    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        if (tasks && user?.email) {
            const filteredTask = tasks.filter(task => task.userEmail === user.email);
            setAllTasks(filteredTask);
        }
    }, [tasks, user]);

    return (
        <div>
            <div className="w-full p-6">
                <h1 className="text-3xl font-bold mb-6">Dashboard Stats</h1>

                <div className="flex flex-col md:flex-row gap-6 ">
                   
                    <div className="bg-base-200 shadow-md p-6 rounded-xl w-full md:w-1/2">
                        <div className='flex items-center justify-between'>
                        <h2 className="text-xl font-semibold text-gray-700">Total Tasks</h2>
                        <p className="text-5xl font-bold text-green-500 ">{tasks?.length}</p>
                        </div>
                    </div>

                   
                    <div className="bg-base-200 shadow-md p-6 rounded-xl w-full md:w-1/2">
                     <div className='flex items-center justify-between'>
                        <h2 className="text-xl font-semibold text-gray-700">My Created Tasks</h2>
                        <p className="text-5xl font-bold text-blue-500">{allTasks?.length}</p>
                     </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;