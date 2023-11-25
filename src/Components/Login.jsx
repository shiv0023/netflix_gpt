import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignin, SetSigIn] = useState(true)
    const ToogleSigupForm = () => {
        SetSigIn(!isSignin)

    }
    return (
        <div className=' font-bold text-3xl   '>
            <div className='absolute'>
                <img className='' alt='login' src='https://wallpapercave.com/wp/wp1917119.jpg' />
            </div>
            <form className='  p-20  w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 rounded-md text-white bg-opacity-80 '>
                <h1 className='text-white mb-3 font-bold text-3xl'>{isSignin ? "Sign In" : "Sign Up"}</h1>
                <input type='text' name='Email Address' placeholder='Email Address' className=' pt-3 rounded-lg w-full bg-gray-700 p-4' />
                {!isSignin && <input type='text' name='Full Name' placeholder='Full Name' className=' pt-5 rounded-lg w-full bg-gray-700 p-4 mt-6' />}

                <input type='password' name='password' placeholder='Password' className='mt-6 bg-gray pt-4 rounded-lg w-full  p-4  bg-gray-700' />
                <button className='bg-red-500 rounded-xl text-white w-full h-[60px] mx-auto  text-center mt-5'>{isSignin ? "Sign In" : "Sign Up"}</button>
                <p className='font-normal cursor-pointer' onClick={ToogleSigupForm}>{isSignin ? "New to Netflix ? Sign Up Now" : "Already Registered Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login