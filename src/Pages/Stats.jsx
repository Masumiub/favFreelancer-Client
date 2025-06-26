import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import MyTasks from './MyTasks';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

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

    const chartData = allTasks.map(task => ({
        name: task.title.length > 20 ? task.title.slice(0, 20) + '...' : task.title,
        bids: task.bidsCount || 0
    }));

    return (
        <div>
            <div className="w-full">
                <h1 className="text-5xl font-bold mb-6 mt-10">Dashboard Stats</h1>

                <div className="flex flex-col md:flex-row gap-6 ">

                    <div className="bg-gradient-to-bl from-slate-50 to-emerald-100 shadow-md p-6 rounded-xl w-full md:w-1/2">
                        <div className='flex items-center justify-between'>
                            <h2 className="text-xl font-semibold text-gray-700">Total Tasks</h2>
                            <p className="text-5xl font-bold text-green-500 ">{tasks?.length}</p>
                        </div>
                    </div>


                    <div className="bg-gradient-to-bl from-slate-50 to-sky-200 shadow-md p-6 rounded-xl w-full md:w-1/2">
                        <div className='flex items-center justify-between'>
                            <h2 className="text-xl font-semibold text-gray-700">My Created Tasks</h2>
                            <p className="text-5xl font-bold text-blue-500">{allTasks?.length}</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-bl from-white to-base-200 shadow-md p-6 rounded-xl mt-10">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Bids per Task (My Tasks)</h2>
                {chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="bids" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <p className="text-center text-gray-500">No data available for chart.</p>
                )}
            </div>

            <div className='mt-10'>
                <MyTasks></MyTasks>
            </div>
        </div>
    );
};

export default Stats;