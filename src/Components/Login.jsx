import React, { useRef, useState } from 'react'
import Header from './Header'
import Validation from '../Utils/Validate'
import { auth } from "../Utils/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { Loginimg } from '../Utils/Constant';

const Login = () => {
    const [isSignin, SetSigIn] = useState()
    const [errorMessage, SetErrorMessage] = useState()
    const name = useRef(null)
    const Email = useRef(null)
    const Password = useRef(null)

    const handleSubmit = () => {
        const message = Validation(Email.current.value, Password.current.value)
        SetErrorMessage(message)
        if (message) return;
        if (!isSignin) {
            createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {

                        displayName: name.current.value,
                        photoURL: "https://tse1.mm.bing.net/th?id=OIP.uuLTfEMXFApAiu9mcTRhhgHaHa&pid=Api&P=0&h=180"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;

                        console.log(user, ",hj")


                    }).catch((error) => {
                        SetErrorMessage(error.message)

                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SetErrorMessage(errorCode, "-" + errorMessage)
                    // ..
                });

        } else {
            signInWithEmailAndPassword(auth, Email, Password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    console.log(user, "kn")


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SetErrorMessage(`${errorCode} - ${errorMessage}`)
                });
        }
    }

    const ToogleSigupForm = () => {
        SetSigIn(!isSignin)
    }
    return (
        <div className=' font-bold text-3xl   '>
            <div className='absolute'>
                <img className='' alt='login' src={Loginimg} />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='  p-20  w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 rounded-md text-white bg-opacity-80 '>
                <h1 className='text-white mb-3 font-bold text-3xl'>{isSignin ? "Sign In" : "Sign Up"}</h1>
                <input type='text' ref={Email} name='Email Address' placeholder='Email Address' className=' pt-3 rounded-lg w-full bg-gray-700 p-4' />

                {!isSignin && (<input type='text' ref={name} name='Full Name' placeholder='Full Name' className=' pt-5 rounded-lg w-full bg-gray-700 p-4 mt-6' />)}

                <input type='password' ref={Password} name='password' placeholder='Password' className='mt-6 bg-gray pt-4 rounded-lg w-full  p-4  bg-gray-700' />
                <p className='text-red-600'>{errorMessage}</p>
                <button onClick={handleSubmit} className='bg-red-500 rounded-xl text-white w-full h-[60px] mx-auto  text-center mt-5'>{isSignin ? "Sign In" : "Sign Up"}</button>
                <p className='font-normal cursor-pointer' onClick={ToogleSigupForm}>{isSignin ? "New to Netflix ? Sign Up Now" : "Already Registered Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;