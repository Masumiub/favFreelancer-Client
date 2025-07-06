import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import AddTask from './Pages/AddTask';
import UpdateTask from './Pages/UpdateTask';
import TaskDetails from './Pages/TaskDetails';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Context/PrivateRoute';
import BrowseTasks from './Pages/BrowseTasks';
import MyTasks from './Pages/MyTasks';
import ErrorPage from './Pages/ErrorPage';
import ForgetPassword from './Pages/ForgetPassword';
import DashBoardLayout from './Layouts/DashBoardLayout';
import MyProfile from './Pages/MyProfile';
import Stats from './Pages/Stats';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <p className="text-center my-20"><span className="loading loading-spinner text-primary loading-xl"></span></p>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('https://fav-freelancer-server.vercel.app/tasks?limit=8&sort=deadline'),
        Component: Home,
      },
      {
        path: 'tasks/:id',
        loader: () => fetch('https://fav-freelancer-server.vercel.app/tasks'),
        element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
      },
      {
        path: 'updateTask/:id',
        loader: ({ params }) => fetch(`https://fav-freelancer-server.vercel.app/tasks/${params.id}`),
        element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
      },
      {
        path: '/browseTasks',
        loader: () => fetch('https://fav-freelancer-server.vercel.app/tasks'),
        Component: BrowseTasks,
      },
      {
        path: 'signin',
        element: <Signin></Signin>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: 'forgetPassword',
        element: <ForgetPassword></ForgetPassword>
      },
      {
        path: '/aboutUs',
        Component: AboutUs,
      },
      {
        path: '/contactUs',
        Component: ContactUs
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute> <DashBoardLayout></DashBoardLayout></PrivateRoute>,
    hydrateFallbackElement: <p className="text-center my-20"><span className="loading loading-spinner text-primary loading-xl"></span></p>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true, 
        loader: () => fetch('https://fav-freelancer-server.vercel.app/tasks'),
        element: <PrivateRoute><Stats /></PrivateRoute>,
      },
      {
        path: 'addTask',
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
      },
      {
        path: 'myTasks',
        loader: () => fetch('https://fav-freelancer-server.vercel.app/tasks'),
        element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>,
      },
      {
        path: 'myProfile',
        element: <PrivateRoute><MyProfile></MyProfile> </PrivateRoute>,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
