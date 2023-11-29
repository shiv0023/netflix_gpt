import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useSelector } from 'react-redux';
const Header = () => {
  const user=useSelector((store)=>store.user)
  const navigate=useNavigate()
  function HandlerChange(){
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className='absolute border w-screen  h-[100px] bg-gradient-to-b from-black z-10 justify-between flex '>
      <img className='w-[200px] h-[100px] pt-5  ' alt='logo' src='https://t3.ftcdn.net/jpg/04/81/76/22/360_F_481762281_Xcvl3QsGh1pBMvQuyKIoIqq8aYksXEwX.jpg' />
      {/* <ul className='flex text-white pr-50'> */}
        {/* <li className='p-10 font-bold pl-30 text-xl text-violet-500'> <NavLink to="/">home </NavLink></li> */}
        {/* <li className='p-10 font-bold pl-30 text-xl text-green-400'> <NavLink to="/Browse">About </NavLink></li> */}
       
      {/* </ul> */}
       
      <div className='flex'>
      <img alt='User-icon' src={user?.photoURL} className='w-12 h-12 mt-10'/>
<button  onClick={HandlerChange} className='bg-red-200 p-3 rounded-md w-[100px] ml-20 h-10 mt-10'>Sign Out </button>
      </div>

    </div>
  )
}

export default Header