import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from 'react-toastify';
//import { Helmet } from 'react-helmet-async';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from '../Context/AuthProvider';
import LoginPic from '../assets/Login.svg'


const Signin = () => {

    const { signIn, googleSignIn } = use(AuthContext);
    const [error, setError] = useState('');
    //const emailRef = useRef();
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');

    const location = useLocation();
    const navigate = useNavigate();


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


    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                //console.log(user);
                navigate(`${location.state ? location.state : '/'}`);
                notifySuccess('Hello! Welcome to the favFreelancer!')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
                //alert(errorCode);
                notifyError("Password/Email is not correct!");
            })
    }

    const handleGoogleSignIn = () => {
        //console.log('clicked');
        googleSignIn()
            .then(result => {
                navigate(`${location.state ? location.state : '/'}`);
                notifySuccess('Hello! Welcome to the jobSeekers!')
            })
            .catch((error) => {
                //alert(error);
                notifyError(error);
            })
    }

    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-around py-15 mb-30 gap-5 bg-base-200 rounded-2xl mt-4'>
            {/* <Helmet>
                <title>Login | JobSeekers</title>
            </Helmet> */}

            <div className='w-full md:w-1/2 flex justify-center mx-auto p-10'>
                <img src={LoginPic} alt="LoginPic" className='w-full' />
            </div>

            <div className='w-full md:w-1/2'>
                <div className='my-5'>
                    <h1 className='font-bold text-5xl mb-5 text-center'>Signin</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <form onSubmit={handleLogin}>
                                <label className="label mt-2 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="input w-full"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <label className="label mt-2 mb-2">Password</label>
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'}
                                        className="input w-full " placeholder="Password" name='password' required />
                                    <button onClick={() => { setShowPassword(!showPassword) }}
                                        className='btn btn-xs absolute top-2 right-2 border-0' type="button"> {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />} </button>
                                </div>


                                <div className='mt-2'><Link to='/forgetPassword' state={{ email }} className="link link-hover">Forgot password?</Link></div>
                                {
                                    error && <p className='text-red-400'>{error}</p>
                                }
                                <button className="btn mt-4 w-full rounded-full bg-green-500 border-0 text-white" type='submit'>Login</button>
                                <p className='text-center mt-3'>- OR -</p>
                                <div className='text-center flex items-center justify-center gap-4 mt-2'>
                                    <button onClick={handleGoogleSignIn}> <FaGoogle size={20} /> </button>
                                    <FaGithub size={20} />
                                    <FaFacebook size={20} />
                                </div>
                                <button onClick={handleGoogleSignIn} className="btn mt-4 w-full rounded-full" type='submit'>Login with Google</button>
                            </form>
                        </fieldset>
                        <div className='text-center'>
                            <p>Don't have an account? <Link to='/signup' className='text-green-500'>Register</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signin;