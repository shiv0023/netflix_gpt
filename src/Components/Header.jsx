import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='absolute flex border  w-[100%] h-[100px] bg-gradient-to-b from-black z-10 '>
      <img className='w-[200px] h-[100px] pt-5  ' alt='logo' src='https://t3.ftcdn.net/jpg/04/81/76/22/360_F_481762281_Xcvl3QsGh1pBMvQuyKIoIqq8aYksXEwX.jpg' />
      <ul className='flex text-white pr-50'>
        {/* <li className='p-10 font-bold pl-30 text-xl text-violet-500'> <NavLink to="/">home </NavLink></li> */}
        {/* <li className='p-10 font-bold pl-30 text-xl text-green-400'> <NavLink to="/Browse">About </NavLink></li> */}
       
      </ul>
    </div>
  )
}

export default Header