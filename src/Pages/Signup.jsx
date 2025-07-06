import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from '../Context/AuthProvider';
import signupPic from '../assets/signup.svg';

const Signup = () => {
    const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const navigate = useNavigate();
    const notifyNameError = () => toast.error('Name should 3 characters long!', {
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

    const notifyPassError = (message) => toast.error(`${message}`, {
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


    const notifySuccess = (message) => toast.success(`${message}`, {
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


    const handleGoogleSignIn = () => {
        //console.log('clicked');
        googleSignIn()
            .then(result => {
                navigate(`${location.state ? location.state : '/'}`);
                notifySuccess('Hello! Welcome to favFreelancer!')
            })
            .catch((error) => {
                //alert(error);
                notifyPassError(error);
            })
    }


    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        if (name.length < 3) {
            setNameError('Name should 3 characters long!');
            notifyNameError();
            return;
        }
        if (password.length < 6) {
            setPasswordError('Password should 6 characters long!');
            notifyPassError("Password should 6 characters long!");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter.');
            notifyPassError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError('Password must contain at least one lowercase letter.');
            notifyPassError("Password must contain at least one lowercase letter.");
            return;
        }
        if (!terms) {
            notifyPassError('Accept the terms and conditions first!');
            return;
        }

        else {
            setNameError('');
            setPasswordError('');
            const photoURL = e.target.photoURL.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    notifySuccess('User registration was successful!');
                    updateUser({ displayName: name, photoURL: photoURL })
                        .then(() => {
                            setUser({ ...user, displayName: name, photoURL: photoURL });
                            navigate('/');
                        })
                        .catch((error) => {
                            //alert(error);
                            notifyPassError(error);
                            setUser(user);
                        })
                }

                )
                .catch((error) => {
                    const errorMessage = error.message;
                    //alert(errorMessage)
                    notifyPassError(errorMessage);
                })

        }
    }

    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-around py-15 mb-30 gap-5 bg-base-200 rounded-2xl mt-25'>

            <div className='w-full md:w-1/2 flex justify-center mx-auto p-10'>
                <img src={signupPic} alt="RegisterPic" className='w-full' />
            </div>

            <div className='w-full md:w-1/2'>

                <div className='my-5'>
                    <h1 className='font-bold text-5xl text-center'>Signup</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <form onSubmit={handleRegister}>
                                <label className="label mt-2 mb-2">Name</label>
                                <input type="text" className="input w-full " placeholder="Name" name='name' required />
                                {nameError && <p className='text-red-500'>{nameError}</p>}

                                <label className="label mt-2 mb-2">Photo URL</label>
                                <input type="text" className="input w-full " placeholder="Photo URL" name='photoURL' required />

                                <label className="label mt-2 mb-2">Email</label>
                                <input type="email" className="input w-full " placeholder="Email" name='email' required />


                                <label className="label mt-2 mb-2">Password</label>
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'}
                                        className="input w-full " placeholder="Password" name='password' required />
                                    <button onClick={() => { setShowPassword(!showPassword) }}
                                        className='btn btn-xs absolute top-2 right-2 border-0' type="button"> {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />} </button>
                                </div>
                                {passwordError && <p className='text-red-500'>{passwordError}</p>}


                                <label className="label mt-2 mb-2">
                                    <input type="checkbox" name='terms' className="checkbox" />
                                    Accept the Terms and conditions.
                                </label>

                                <button className="btn bg-green-500 text-white border-0 mt-6 w-full rounded-full " type='submit'>Register</button>
                            </form>
                        </fieldset>
                        <div className='text-center'>
                            <p>Already have an account? <Link to='/signin' className='text-green-500'>SignIn</Link> </p>
                            <button onClick={handleGoogleSignIn} className="btn mt-4 w-full rounded-full" type='submit'>Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;